"use client"

import type React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="min-h-[calc(100vh-140px)]">{children}</main>
      <Footer />
    </div>
  )
}
