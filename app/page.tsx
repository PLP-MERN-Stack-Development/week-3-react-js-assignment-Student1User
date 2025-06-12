import TaskManager from "@/components/TaskManager"
import ApiDataDisplay from "@/components/ApiDataDisplay"
import HeroSection from "@/components/HeroSection"
import StatsOverview from "@/components/StatsOverview"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <StatsOverview />

        <div className="grid gap-16 mt-16">
          <section id="tasks" className="scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Advanced Task Management
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experience next-generation task management with intelligent filtering, real-time updates, and seamless
                persistence.
              </p>
            </div>
            <TaskManager />
          </section>

          <section id="api-data" className="scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Dynamic Content Integration
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Seamlessly integrate with external APIs, featuring advanced search, pagination, and real-time data
                synchronization.
              </p>
            </div>
            <ApiDataDisplay />
          </section>
        </div>
      </div>
    </div>
  )
}
