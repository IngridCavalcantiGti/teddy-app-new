import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClientStore } from '@/stores';

export const LoginPage = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const { setUsername } = useClientStore();

    const handleLogin = () => {
        if (!name.trim()) return
        navigate('/clients')
        setUsername(name);

    }

    return (
        <div className="h-screen flex mb-6 justify-center items-center bg-gray-50 px-4 sm:px-0">
            <div className="flex flex-col items-center gap-4 w-full max-w-[521px]">
                <h1 className="text-[24px] font-inter text-center md:text-4xl">
                    Olá, seja bem-vindo!
                </h1>

                <input
                    type="text"
                    placeholder="Digite o seu nome:"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-[60px] px-4 text-[16px] border-[2px] border-[#D9D9D9] rounded-md font-inter placeholder:text-[#AAAAAA] placeholder:text-[24px] placeholder:font-normal outline-none mb-"
                />

                <button
                    onClick={handleLogin}
                    className="w-full cursor-pointer max-w-[521px] h-[60px] bg-[#EC6724] text-white text-[24px] font-bold  rounded-md border-none"
                >
                    Entrar
                </button>

            </div>
        </div>
    )
}
