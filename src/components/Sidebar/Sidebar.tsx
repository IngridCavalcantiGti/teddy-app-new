import React from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "@/assets/teddy.svg"
import { Home, Users, User, CircleArrowLeft, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path
  const navigate = useNavigate()

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40  bg-black bg-opacity-50 opacity-50" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50
        transition-transform duration-300 ease-in-out
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        rounded-tr-2xl rounded-br-2xl`}
      >
        <div className="flex items-center justify-center h-24 bg-[#3f3c3c] rounded-tr-2xl">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-20 right-0 w-11 h-11 bg-[#1c1c1c] text-white rounded-full flex items-center justify-center shadow-md"
        >
          <CircleArrowLeft size={18} />
        </button>

        <nav className="flex flex-col gap-6 px-6 py-10 text-[15px] font-medium">
          <Link
            to="/"
            className={`flex items-center gap-3 ${
              isActive("/") ? "text-orange-600" : "text-black hover:text-orange-500"
            }`}
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            to="/clients"
            className={`flex items-center gap-3 ${
              isActive("/clients") ? "text-orange-600" : "text-black hover:text-orange-500"
            }`}
          >
            <Users size={18} />
            Clientes
          </Link>

          <Link
            to="/selected-clients"
            className={`flex items-center gap-3 ${
              isActive("/selected-clients") ? "text-orange-600" : "text-black hover:text-orange-500"
            }`}
          >
            <User size={18} />
            Clientes selecionados
          </Link>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-black hover:text-orange-500"
          >
            <LogOut size={18} />
            Sair
          </button>
        </nav>
      </div>
    </>
  )
}

export { Sidebar }
