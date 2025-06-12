"use client"

import { useTheme } from "@/contexts/ThemeContext"
import Button from "./ui/Button"
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-2.5 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-poppins">
                TaskSphere
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Professional</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#tasks"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group"
            >
              Task Management
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#api-data"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group"
            >
              API Integration
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <div className="flex items-center space-x-3">
              <Button variant="secondary" size="sm" onClick={toggleTheme} className="p-3 rounded-xl">
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">by Emmanuel Magachi Jesse</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="secondary" size="sm" onClick={toggleTheme} className="p-3 rounded-xl">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 rounded-xl">
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <a
                href="#tasks"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Task Management
              </a>
              <a
                href="#api-data"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                API Integration
              </a>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium pt-2 border-t border-gray-200 dark:border-gray-700">
                Developed by Emmanuel Magachi Jesse
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
