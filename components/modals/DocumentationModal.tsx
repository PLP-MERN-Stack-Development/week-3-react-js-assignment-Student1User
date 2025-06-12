"use client"

import Modal from "./Modal"
import { Book, Zap, Code, Palette, Database, Smartphone, Settings } from "lucide-react"

interface DocumentationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DocumentationModal({ isOpen, onClose }: DocumentationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Documentation">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 mb-8 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                TaskSphere Professional Documentation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Version 1.0 - December 12, 2024</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Complete guide to using TaskSphere Professional - your advanced task management solution.
          </p>
        </div>

        {/* Getting Started */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Getting Started</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            TaskSphere Professional is designed to help you organize your work and increase productivity. Here's how to
            get started:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Quick Setup</h5>
              <ol className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                <li>1. Open the application</li>
                <li>2. Start adding your first task</li>
                <li>3. Explore the features</li>
                <li>4. Customize your theme</li>
              </ol>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Benefits</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• Intuitive task management</li>
                <li>• Real-time data persistence</li>
                <li>• Professional interface</li>
                <li>• Cross-device compatibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Task Management */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Task Management Features</h4>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Create Tasks</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Add new tasks by typing in the input field and pressing Enter or clicking the "Add Task" button.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Complete Tasks</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Mark tasks as completed by clicking the circle button next to each task.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Delete Tasks</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Remove tasks by clicking the trash icon that appears when hovering over a task.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Filter Tasks</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Use the filter buttons to view All, Active, or Completed tasks.
              </p>
            </div>
          </div>
        </div>

        {/* API Integration */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">API Integration</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The API Integration module demonstrates advanced data handling capabilities:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Data Features</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• External API data fetching</li>
                <li>• Real-time search functionality</li>
                <li>• Advanced pagination controls</li>
                <li>• Error handling with retry</li>
              </ul>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Display Options</h5>
              <ul className="text-sm text-emerald-700 dark:text-emerald-400 space-y-1">
                <li>• Responsive grid layout</li>
                <li>• Professional card design</li>
                <li>• Loading state animations</li>
                <li>• English sample data toggle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theme Management */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Theme Management</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            TaskSphere Professional supports both light and dark themes with advanced customization:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div>
                <h5 className="font-semibold text-purple-800 dark:text-purple-300">Toggle Theme</h5>
                <p className="text-purple-700 dark:text-purple-400 text-sm">
                  Click the sun/moon icon in the navigation bar to switch themes
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <h5 className="font-semibold text-blue-800 dark:text-blue-300">System Preference</h5>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  Automatically respects your system's color scheme preference
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <h5 className="font-semibold text-green-800 dark:text-green-300">Persistence</h5>
                <p className="text-green-700 dark:text-green-400 text-sm">
                  Your theme preference is saved and remembered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Design */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Smartphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Responsive Design</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The application automatically adapts to your screen size for optimal viewing:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 text-center">
              <Smartphone className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
              <h5 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Mobile</h5>
              <p className="text-emerald-700 dark:text-emerald-400 text-sm">
                Single column layout with collapsible navigation
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded mx-auto mb-2"></div>
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Tablet</h5>
              <p className="text-blue-700 dark:text-blue-400 text-sm">Two-column grid for optimal content display</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-purple-600 dark:bg-purple-400 rounded mx-auto mb-2"></div>
              <h5 className="font-semibold text-purple-800 dark:text-purple-300 mb-1">Desktop</h5>
              <p className="text-purple-700 dark:text-purple-400 text-sm">Three-column grid with expanded navigation</p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Technical Stack</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Frontend Technologies</h5>
              <div className="space-y-2">
                {[
                  { name: "React 18", desc: "Component-based UI development" },
                  { name: "Next.js 14", desc: "Full-stack React framework" },
                  { name: "TypeScript", desc: "Type safety and better DX" },
                  { name: "Tailwind CSS", desc: "Utility-first styling" },
                ].map((tech, index) => (
                  <div key={index} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3">
                    <div className="font-medium text-indigo-800 dark:text-indigo-300">{tech.name}</div>
                    <div className="text-sm text-indigo-600 dark:text-indigo-400">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features</h5>
              <div className="space-y-2">
                {[
                  { name: "Context API", desc: "Global state management" },
                  { name: "Custom Hooks", desc: "Reusable logic patterns" },
                  { name: "Local Storage", desc: "Data persistence" },
                  { name: "API Integration", desc: "External data fetching" },
                ].map((feature, index) => (
                  <div key={index} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <div className="font-medium text-green-800 dark:text-green-300">{feature.name}</div>
                    <div className="text-sm text-green-600 dark:text-green-400">{feature.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Support & Contact</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For additional support, questions, or feedback, please reach out:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm">
                <strong className="text-gray-800 dark:text-gray-200">Developer:</strong> Emmanuel Magachi Jesse
              </p>
              <p className="text-sm">
                <strong className="text-gray-800 dark:text-gray-200">Email:</strong>{" "}
                <a
                  href="mailto:emmanueljesseofficial1@gmail.com"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  emmanueljesseofficial1@gmail.com
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <strong className="text-gray-800 dark:text-gray-200">GitHub:</strong>{" "}
                <a
                  href="https://github.com/Student1User"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Student1User
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-gray-800 dark:text-gray-200">LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/emmanuel-magachi-jesse-385011298/"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Emmanuel Magachi Jesse
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
