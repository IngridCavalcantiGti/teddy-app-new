import { useClientStore, useAlertStore, useClientModalStore } from "@/stores"
import { X } from "lucide-react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { clientSchema } from "@/schemas"
import { useEffect } from "react"
import { Button } from "../Button"

type ClientFormData = {
  name: string
  salary: string
  companyValuation: string
}

const formatCurrency = (value: string): string => {
  const numeric = value.replace(/[^\d]/g, "")
  const number = (parseInt(numeric || "0", 10) / 100).toFixed(2)
  return `R$ ${Number(number).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

const ClientModal = () => {
  const { isOpen, mode, client, closeModal } = useClientModalStore()
  const { showAlert } = useAlertStore()
  const { addClient, updateClient, setCurrentPage } = useClientStore()

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: yupResolver(clientSchema),
  })

  const watchedSalary = watch("salary")
  const watchedCompanyValuation = watch("companyValuation")

  useEffect(() => {
    const formatted = formatCurrency(watchedSalary || "")
    if (watchedSalary && formatted !== watchedSalary) {
      setValue("salary", formatted)
    }
  }, [watchedSalary, setValue])

  useEffect(() => {
    const formatted = formatCurrency(watchedCompanyValuation || "")
    if (watchedCompanyValuation && formatted !== watchedCompanyValuation) {
      setValue("companyValuation", formatted)
    }
  }, [watchedCompanyValuation, setValue])

  useEffect(() => {
    if (!isOpen) return

    if (mode === "edit" && client) {
      reset({
        name: client.name,
        salary: formatCurrency((client.salary * 100).toString()),
        companyValuation: formatCurrency((client.companyValuation * 100).toString()),
      })
    }

    if (mode === "create") {
      reset({
        name: "",
        salary: "",
        companyValuation: "",
      })
    }
  }, [isOpen, mode, client, reset])

  const onSubmit = (data: ClientFormData) => {
    const parsedClient = {
      name: data.name,
      salary: parseFloat(data.salary.replace(/\D/g, "")) / 100,
      companyValuation: parseFloat(data.companyValuation.replace(/\D/g, "")) / 100,
    }

    if (mode === "create") {
      addClient(parsedClient)
      setTimeout(() => {
        const totalAfterAdd = document.querySelectorAll("[data-client-card]").length + 1
        const itemsPerPage = 8
        const lastPage = Math.ceil(totalAfterAdd / itemsPerPage)
        setCurrentPage(lastPage)
      }, 0)
      showAlert("Cliente criado com sucesso!", "success")
    } else if (client?.id !== undefined) {
      updateClient({
        id: client.id as number,
        ...parsedClient,
      })
      showAlert("Cliente atualizado com sucesso!", "success")
    }

    closeModal()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div className="bg-white w-[400px] p-6 rounded shadow" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {mode === "create" ? "Criar cliente" : "Editar cliente"}
          </h2>
          <button onClick={closeModal} className="hover:text-orange-600 cursor-pointer">
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name")}
            placeholder="Digite o nome:"
            className={` mb-2 w-full border-2 p-2 rounded-sm ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:border-orange-300 focus:outline-none`}
          />
          {errors.name && <p className="text-red-500 text-sm mb-4">{errors.name.message}</p>}

          <input
            type="text"
            {...register("salary")}
            placeholder="Digite o salário:"
            className={` mb-2 w-full border-2 p-2 rounded-sm ${
              errors.salary ? "border-red-500" : "border-gray-300"
            } focus:border-orange-300 focus:outline-none`}
          />
          {errors.salary && <p className="text-red-500 text-sm mb-4">{errors.salary.message}</p>}

          <input
            type="text"
            {...register("companyValuation")}
            placeholder="Digite o valor da empresa:"
            className={` mb-2 w-full border-2 p-2 rounded-sm ${
              errors.companyValuation ? "border-red-500" : "border-gray-300"
            } focus:border-orange-300 focus:outline-none`}
          />
          {errors.companyValuation && (
            <p className="text-red-500 text-sm mb-4">{errors.companyValuation.message}</p>
          )}

          <Button
            type="submit"
            variant="filled"
            label={mode === "create" ? "Criar cliente" : "Editar cliente"}
          />
        </form>
      </div>
    </div>
  )
}

export { ClientModal }
