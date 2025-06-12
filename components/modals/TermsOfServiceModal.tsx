"use client"

import Modal from "./Modal"
import { FileText, AlertTriangle, Scale, Shield, Users, Gavel } from "lucide-react"

interface TermsOfServiceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 mb-8 border border-emerald-200 dark:border-emerald-800">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Terms of Service for TaskSphere Professional
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated: December 12, 2024</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By using TaskSphere Professional, you agree to these terms. Please read them carefully before using our
            service.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Acceptance of Terms</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            By accessing or using TaskSphere Professional, you agree to be bound by these Terms of Service. If you
            disagree with any part of these terms, you may not access the service.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              <strong>Note:</strong> These terms constitute a legally binding agreement between you and TaskSphere
              Professional.
            </p>
          </div>
        </div>

        {/* Service Description */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Description of Service</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            TaskSphere Professional is a task management application designed to help users organize, track, and
            complete tasks efficiently.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2">Core Features</h5>
              <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                <li>• Task creation and management</li>
                <li>• Progress tracking</li>
                <li>• Data filtering and search</li>
                <li>• API integration capabilities</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Additional Benefits</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• Responsive design</li>
                <li>• Dark/Light theme support</li>
                <li>• Local data persistence</li>
                <li>• Professional interface</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">User Responsibilities</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            When you create an account with us, you must provide accurate, complete, and current information. You are
            responsible for:
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-purple-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Account Security</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Safeguarding your password and all activities under your account
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Content Accuracy</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ensuring all information you provide is accurate and up-to-date
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Lawful Use</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Using the service in compliance with applicable laws and regulations
              </p>
            </div>
          </div>
        </div>

        {/* Prohibited Uses */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Prohibited Uses</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You agree not to use the service for any of the following:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Violating any applicable law or regulation",
              "Transmitting harmful or offensive material",
              "Impersonating another person or entity",
              "Interfering with or disrupting the service",
              "Attempting unauthorized access",
              "Distributing malware or viruses",
            ].map((prohibition, index) => (
              <div key={index} className="flex items-center space-x-2 bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-red-700 dark:text-red-400 text-sm">{prohibition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Gavel className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Intellectual Property</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The service and its original content, features, and functionality are and will remain the exclusive property
            of TaskSphere Professional and its licensors.
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <p className="text-indigo-800 dark:text-indigo-300 text-sm">
              The service is protected by copyright, trademark, and other intellectual property laws. Unauthorized use
              is strictly prohibited.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Limitation of Liability</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            In no event shall TaskSphere Professional, nor its directors, employees, partners, agents, suppliers, or
            affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <p className="text-orange-800 dark:text-orange-300 text-sm">
              <strong>Disclaimer:</strong> This includes, without limitation, loss of profits, data, use, goodwill, or
              other intangible losses resulting from your use of the service.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-gray-50 to-emerald-50 dark:from-gray-700 dark:to-emerald-900/20 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Information</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              <strong className="text-gray-800 dark:text-gray-200">Email:</strong>{" "}
              <a
                href="mailto:emmanueljesseofficial1@gmail.com"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                emmanueljesseofficial1@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <strong className="text-gray-800 dark:text-gray-200">Developer:</strong> Emmanuel Magachi Jesse
            </p>
            <p className="text-sm">
              <strong className="text-gray-800 dark:text-gray-200">GitHub:</strong>{" "}
              <a
                href="https://github.com/Student1User"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Student1User
              </a>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}
