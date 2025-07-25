import React from "react"
import logo from "@/assets/teddy.svg"
import iconMenu from "@/assets/menu.svg"
import { useLocation, Link, useNavigate } from "react-router-dom"
import { useClientStore } from "@/stores"

interface HeaderProps {
  onToggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const username = useClientStore((state) => state.username)
  const isActive = (path: string) => location.pathname === path

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <header className="w-full bg-white shadow-sm py-5 font-inter z-40">
      <div className="w-full px-4 sm:px-8 lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onToggleSidebar} className="p-2" aria-label="Menu">
            <img src={iconMenu} alt="Menu" className="h-5" />
          </button>
          <img src={logo} alt="Teddy Logo" className="h-10" />
        </div>

        <nav className="hidden sm:flex gap-10 text-[16px]">
          <Link
            to="/clients"
            className={`font-medium ${
              isActive("/clients") ? "text-orange-600 underline" : "text-gray-600 hover:underline"
            }`}
          >
            Clientes
          </Link>
          <Link
            to="/selected-clients"
            className={`font-medium ${
              isActive("/selected-clients")
                ? "text-orange-600 underline"
                : "text-gray-600 hover:underline"
            }`}
          >
            Clientes selecionados
          </Link>
          <button onClick={handleLogout} className="font-medium text-gray-600 hover:underline">
            Sair
          </button>
        </nav>

        <div className="text-black text-[16px] whitespace-nowrap ml-4">
          Olá, <strong>{username || "usuário"}</strong>
        </div>
      </div>
    </header>
  )
}

export { Header }
