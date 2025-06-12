import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Layout from "@/components/Layout"
import { ThemeProvider } from "@/contexts/ThemeContext"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
})

// Remove the Poppins import for now to avoid loading issues
// const poppins = Poppins({...})

export const metadata: Metadata = {
  title: "TaskSphere Professional - Advanced Task Management Suite",
  description:
    "Professional-grade task management application with advanced features, API integration, and modern design. Built by Emmanuel Magachi Jesse.",
  keywords: "task management, productivity, React, Next.js, professional, Emmanuel Magachi Jesse",
  authors: [{ name: "Emmanuel Magachi Jesse" }],
  creator: "Emmanuel Magachi Jesse",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
