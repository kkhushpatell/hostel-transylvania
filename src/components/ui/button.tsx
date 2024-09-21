import * as React from "react"
import { cn } from "@/utils/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "primary"; // Define the allowed variants
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseClasses = "px-4 py-2 font-medium rounded-md focus:outline-none"
    const variantClasses = {
      default: "bg-black text-white py-2 px-4 rounded transition-transform transform hover:scale-105 hover:shadow-lg active:scale-95",
      outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
      primary: "bg-green-500 text-white hover:bg-green-600",
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
