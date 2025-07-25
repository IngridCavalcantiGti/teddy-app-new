import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <div className="my-6 font-bold">
      <button
        className="w-full border-[2px] border-orange-500 text-orange-500 py-2 rounded"
        {...props}
      >
        {label}
      </button>
    </div>
  )
}

export { Button }
