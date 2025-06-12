"use client"

import type React from "react"

import { useState } from "react"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import Button from "./ui/Button"
import Card, { CardHeader, CardContent } from "./ui/Card"
import { Plus, Trash2, Check, Filter, Calendar, Clock } from "lucide-react"

interface Task {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

type FilterType = "all" | "active" | "completed"

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState<FilterType>("all")

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date(),
      }
      setTasks([...tasks, task])
      setNewTask("")
    }
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "active":
        return !task.completed
      case "completed":
        return task.completed
      default:
        return true
    }
  })

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 font-poppins">Task Manager</h2>
            <p className="text-gray-600 dark:text-gray-400">Organize your work with intelligent task management</p>
          </div>
        </div>

        {/* Add Task Input */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done today?"
                className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-lg placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>
            <Button onClick={addTask} className="px-8 py-4 text-lg" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Add Task
            </Button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Button
            variant={filter === "all" ? "primary" : "secondary"}
            size="md"
            onClick={() => setFilter("all")}
            className="flex items-center space-x-2"
          >
            <span>All Tasks</span>
            <span className="bg-white/20 rounded-full px-2 py-1 text-xs font-bold">{tasks.length}</span>
          </Button>
          <Button
            variant={filter === "active" ? "primary" : "secondary"}
            size="md"
            onClick={() => setFilter("active")}
            className="flex items-center space-x-2"
          >
            <Clock className="w-4 h-4" />
            <span>Active</span>
            <span className="bg-white/20 rounded-full px-2 py-1 text-xs font-bold">
              {tasks.filter((t) => !t.completed).length}
            </span>
          </Button>
          <Button
            variant={filter === "completed" ? "primary" : "secondary"}
            size="md"
            onClick={() => setFilter("completed")}
            className="flex items-center space-x-2"
          >
            <Check className="w-4 h-4" />
            <span>Completed</span>
            <span className="bg-white/20 rounded-full px-2 py-1 text-xs font-bold">
              {tasks.filter((t) => t.completed).length}
            </span>
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {/* Task List */}
        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-12 h-12 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                {filter === "all" ? "No tasks yet" : `No ${filter} tasks`}
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                {filter === "all"
                  ? "Add your first task above to get started!"
                  : `You have no ${filter} tasks at the moment.`}
              </p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`group flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                  task.completed
                    ? "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800"
                    : "bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 border-gray-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500"
                }`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-3 flex items-center justify-center transition-all duration-300 ${
                    task.completed
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500 text-white shadow-lg"
                      : "border-gray-300 dark:border-gray-500 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                  }`}
                >
                  {task.completed && <Check className="w-5 h-5" />}
                </button>

                <div className="flex-1 min-w-0">
                  <div
                    className={`text-lg font-medium transition-all duration-300 ${
                      task.completed
                        ? "line-through text-gray-500 dark:text-gray-400"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {task.text}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(task.createdAt)}</span>
                  </div>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition-all duration-200 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
