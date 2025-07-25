import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Button } from "./Button"

const openModal = jest.fn()

jest.mock("@/stores", () => ({
  useClientModalStore: {
    getState: () => ({
      openModal,
    }),
  },
  useClientStore: () => ({
    clearSelected: jest.fn(),
  }),
}))

it('should call openModal with "create" when clicking the button', () => {
  render(
    <MemoryRouter initialEntries={["/clients"]}>
      <Button label="Criar cliente" onClick={() => openModal("create")} />
    </MemoryRouter>
  )

  fireEvent.click(screen.getByText("Criar cliente"))
  expect(openModal).toHaveBeenCalledWith("create")
})
