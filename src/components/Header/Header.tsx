import React from 'react';
import logo from '../../assets/teddy.svg';
import iconMenu from '../../assets/menu-svgrepo-com 1.svg';
import { useLocation, Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="w-full bg-white shadow-sm py-5 relative font-inter z-40">
      <div className="max-w-screen-xl flex items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="bg-transparent p-2"
            aria-label="Menu"
          >
            <img src={iconMenu} alt="Menu" className="h-5 cursor-pointer" />
          </button>
          <img src={logo} alt="Teddy Logo" className="h-12" />
        </div>

    
        <nav className="hidden md:flex text-[16px] gap-6">
          <Link
            to="/clientes"
            className={`font-medium ${
              isActive('/clientes') ? 'text-orange-600 underline' : 'text-gray-600 hover:underline'
            }`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes-selecionados"
            className={`font-medium ${
              isActive('/clientes-selecionados') ? 'text-orange-600 underline' : 'text-gray-600 hover:underline'
            }`}
          >
            Clientes selecionados
          </Link>
          <button
            onClick={handleLogout}
            className="font-medium text-gray-600 hover:underline"
          >
            Sair
          </button>
        </nav>

        <div className="hidden md:block text-black text-[16px]">
          Olá, <strong>Usuário!</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
