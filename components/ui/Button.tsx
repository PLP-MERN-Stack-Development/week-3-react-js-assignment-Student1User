"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"

    const variants = {
      primary:
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
      secondary:
        "bg-white/80 hover:bg-white text-gray-700 border border-gray-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 dark:text-gray-200 dark:border-slate-700 focus:ring-gray-500 shadow-md hover:shadow-lg backdrop-blur-sm",
      danger:
        "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white focus:ring-red-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
      success:
        "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white focus:ring-emerald-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return <button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props} />
  },
)

Button.displayName = "Button"

export default Button
