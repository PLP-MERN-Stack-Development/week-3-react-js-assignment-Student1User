"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import Button from "../ui/Button"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto" // Re-enable scrolling when modal is closed
    }
  }, [isOpen, onClose])

  // Close when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-fade-in-up border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">TS</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{title}</h2>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] bg-gradient-to-b from-gray-50/50 to-white dark:from-slate-800/50 dark:to-slate-800">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-700">
          <Button onClick={onClose} variant="primary">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
