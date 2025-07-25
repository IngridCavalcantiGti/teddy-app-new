import { useAlertStore } from "@/stores"

const Alert = () => {
  const { message, type, isVisible } = useAlertStore()

  if (!isVisible) return null

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"

  return (
    <div className={`fixed top-4 right-4 px-4 py-2 text-white rounded shadow-lg z-50 ${bgColor}`}>
      {message}
    </div>
  )
}

export { Alert }
