"use client"

import Modal from "./Modal"
import { Shield, Eye, Lock, Database, Users, Globe } from "lucide-react"

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Privacy Policy for TaskSphere Professional
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated: December 12, 2024</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Your privacy is important to us. This policy explains how TaskSphere Professional collects, uses, and
            protects your information.
          </p>
        </div>

        {/* Information Collection */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Information We Collect</h4>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Personal Information</h5>
              <p className="text-gray-600 dark:text-gray-400">
                Name, email address, and profile information you provide when creating an account.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Task Data</h5>
              <p className="text-gray-600 dark:text-gray-400">
                Information about tasks you create, modify, or complete within the application.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Usage Data</h5>
              <p className="text-gray-600 dark:text-gray-400">
                Information about how you interact with our application, including access times and features used.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">Device Information</h5>
              <p className="text-gray-600 dark:text-gray-400">
                Information about your device, operating system, browser type, and IP address.
              </p>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">How We Use Your Information</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Service Provision</h5>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                To provide and maintain our task management service
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2">Communication</h5>
              <p className="text-sm text-green-700 dark:text-green-400">
                To notify you about changes and updates to our service
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Support</h5>
              <p className="text-sm text-purple-700 dark:text-purple-400">To provide customer support and assistance</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
              <h5 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Improvement</h5>
              <p className="text-sm text-orange-700 dark:text-orange-400">To analyze usage and improve our service</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="w-6 h-6 text-red-600 dark:text-red-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Data Security</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <p className="text-red-800 dark:text-red-300 text-sm">
              <strong>Important:</strong> No method of transmission over the Internet or electronic storage is 100%
              secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Your Rights</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Access your personal information",
              "Request correction of inaccurate data",
              "Request deletion of your information",
              "Object to processing of your data",
              "Request restriction of processing",
              "Request transfer of your information",
            ].map((right, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{right}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <div className="flex items-center space-x-3 mb-4">
            <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Contact Us</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              <strong className="text-gray-800 dark:text-gray-200">Email:</strong>{" "}
              <a
                href="mailto:emmanueljesseofficial1@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                emmanueljesseofficial1@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <strong className="text-gray-800 dark:text-gray-200">Developer:</strong> Emmanuel Magachi Jesse
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}
