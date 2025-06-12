"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CheckCircle, Clock, Target, TrendingUp } from "lucide-react"

interface Task {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

export default function StatsOverview() {
  const [tasks] = useLocalStorage<Task[]>("tasks", [])

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const activeTasks = totalTasks - completedTasks
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  const stats = [
    {
      label: "Total Tasks",
      value: totalTasks,
      icon: Target,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Completed",
      value: completedTasks,
      icon: CheckCircle,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "Active Tasks",
      value: activeTasks,
      icon: Clock,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      label: "Success Rate",
      value: `${completionRate}%`,
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`${stat.bgColor} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stat.value}</div>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
