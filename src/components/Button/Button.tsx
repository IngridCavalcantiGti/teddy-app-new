import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: "filled" | "outlined"
}

const Button = ({ label, className = "", variant = "outlined", ...props }: ButtonProps) => {
  const classes =
    variant === "outlined"
      ? "border-orange-500 text-orange-500"
      : "border-transparent text-white bg-orange-500"

  return (
    <button
      className={`w-full px-4 border-[2px] cursor-pointer ${classes} py-2 rounded-lg font-bold ${className}`}
      {...props}
    >
      {label}
    </button>
  )
}

export { Button }
