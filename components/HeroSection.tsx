"use client"

import { useTheme } from "@/contexts/ThemeContext"
import { Sparkles, Zap, Shield, Globe } from "lucide-react"

export default function HeroSection() {
  const { theme } = useTheme()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-poppins">
            TaskSphere
            <span className="block text-4xl md:text-5xl bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent font-light">
              Professional
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced Task Management Suite with Enterprise-Grade Features
          </p>

          {/* Developer Credit */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center border border-white/20 mb-12">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">EM</span>
            </div>
            <span className="text-white font-medium">Developed by Emmanuel Magachi Jesse</span>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 flex items-center">
              <Zap className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Lightning Fast</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 flex items-center">
              <Shield className="w-5 h-5 text-green-300 mr-2" />
              <span className="text-white font-medium">Enterprise Security</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 flex items-center">
              <Globe className="w-5 h-5 text-blue-300 mr-2" />
              <span className="text-white font-medium">Global Sync</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-slate-50 dark:text-slate-900"
          />
        </svg>
      </div>
    </section>
  )
}
