import { render, screen } from "@testing-library/react"
import { Alert } from "./Alert"
import { useAlertStore } from "@/stores"

jest.mock("@/stores", () => ({
  useAlertStore: jest.fn(),
}))

describe("Alert component", () => {
  it("should not render anything when alert is not visible", () => {
    ;(useAlertStore as unknown as jest.Mock).mockReturnValue({
      isVisible: false,
      message: "",
      type: "success",
    })

    const { container } = render(<Alert />)
    expect(container.firstChild).toBeNull()
  })

  it("should render success alert with 'Cliente criado com sucesso!'", () => {
    ;(useAlertStore as unknown as jest.Mock).mockReturnValue({
      isVisible: true,
      message: "Cliente criado com sucesso!",
      type: "success",
    })

    render(<Alert />)
    expect(screen.getByText("Cliente criado com sucesso!")).toBeInTheDocument()
    expect(screen.getByText("Cliente criado com sucesso!").closest("div")).toHaveClass(
      "bg-green-500"
    )
  })

  it("should render success alert with 'Cliente atualizado com sucesso!'", () => {
    ;(useAlertStore as unknown as jest.Mock).mockReturnValue({
      isVisible: true,
      message: "Cliente atualizado com sucesso!",
      type: "success",
    })

    render(<Alert />)
    expect(screen.getByText("Cliente atualizado com sucesso!")).toBeInTheDocument()
  })

  it("should render success alert with 'Cliente excluído com sucesso!'", () => {
    ;(useAlertStore as unknown as jest.Mock).mockReturnValue({
      isVisible: true,
      message: "Cliente excluído com sucesso!",
      type: "success",
    })

    render(<Alert />)
    expect(screen.getByText("Cliente excluído com sucesso!")).toBeInTheDocument()
  })
})
