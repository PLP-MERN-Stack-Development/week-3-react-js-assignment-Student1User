import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 transition-all duration-300",
        hover && "hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("p-8 pb-4", className)}>{children}</div>
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("p-8 pt-0", className)}>{children}</div>
}
