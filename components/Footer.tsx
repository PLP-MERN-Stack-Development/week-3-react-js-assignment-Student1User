"use client"

import { useState } from "react"
import { Heart, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import PrivacyPolicyModal from "./modals/PrivacyPolicyModal"
import TermsOfServiceModal from "./modals/TermsOfServiceModal"
import DocumentationModal from "./modals/DocumentationModal"

export default function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false)
  const [isDocumentationOpen, setIsDocumentationOpen] = useState(false)

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl p-2.5">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">TaskSphere Professional</h3>
                <p className="text-blue-200 text-sm">Advanced Task Management Suite</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Experience next-generation productivity with our enterprise-grade task management solution. Built with
              modern technologies and designed for professionals.
            </p>
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>by</span>
              <span className="font-semibold text-white">Emmanuel Magachi Jesse</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Features</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#tasks" className="hover:text-white transition-colors">
                  Task Management
                </a>
              </li>
              <li>
                <a href="#api-data" className="hover:text-white transition-colors">
                  API Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dark Mode
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Responsive Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="space-y-3">
              <a href="https://github.com/Student1User" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-magachi-jesse-385011298/" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:emmanueljesseofficial1@gmail.com" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 text-sm mb-4 md:mb-0">© 2024 TaskSphere Professional. All rights reserved.</div>
          <div className="flex space-x-6 text-sm text-blue-200">
            <button onClick={() => setIsPrivacyPolicyOpen(true)} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setIsTermsOfServiceOpen(true)} className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <button onClick={() => setIsDocumentationOpen(true)} className="hover:text-white transition-colors">
              Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} />
      <TermsOfServiceModal isOpen={isTermsOfServiceOpen} onClose={() => setIsTermsOfServiceOpen(false)} />
      <DocumentationModal isOpen={isDocumentationOpen} onClose={() => setIsDocumentationOpen(false)} />
    </footer>
  )
}
