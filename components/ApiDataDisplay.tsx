"use client"

import { useState, useEffect } from "react"
import Card, { CardHeader, CardContent } from "./ui/Card"
import Button from "./ui/Button"
import { Search, ChevronLeft, ChevronRight, Loader2, AlertCircle, Users, FileText, Globe } from "lucide-react"

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface User {
  id: number
  name: string
  email: string
  website: string
}

// English sample data in case API returns non-English content
const englishSamplePosts = [
  {
    id: 1,
    title: "Getting Started with TaskSphere",
    body: "Learn how to maximize your productivity with our advanced task management features and intuitive interface.",
    userId: 1,
  },
  {
    id: 2,
    title: "Task Organization Best Practices",
    body: "Discover the most effective ways to organize your tasks, set priorities, and meet deadlines consistently.",
    userId: 2,
  },
  {
    id: 3,
    title: "Team Collaboration Features",
    body: "Explore how TaskSphere enables seamless team collaboration with shared tasks, comments, and progress tracking.",
    userId: 3,
  },
  {
    id: 4,
    title: "Advanced Filtering Techniques",
    body: "Master the art of filtering and sorting your tasks to focus on what matters most at any given moment.",
    userId: 4,
  },
  {
    id: 5,
    title: "Mobile Productivity on the Go",
    body: "Stay productive wherever you are with our responsive design and mobile-optimized interface.",
    userId: 5,
  },
]

const englishSampleUsers = [
  { id: 1, name: "Emma Johnson", email: "emma@example.com", website: "emmajohnson.com" },
  { id: 2, name: "Michael Smith", email: "michael@example.com", website: "michaelsmith.com" },
  { id: 3, name: "Sophia Williams", email: "sophia@example.com", website: "sophiawilliams.com" },
  { id: 4, name: "James Brown", email: "james@example.com", website: "jamesbrown.com" },
  { id: 5, name: "Olivia Davis", email: "olivia@example.com", website: "oliviadavis.com" },
]

export default function ApiDataDisplay() {
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const [useEnglishSample, setUseEnglishSample] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const [postsResponse, usersResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users"),
      ])

      if (!postsResponse.ok || !usersResponse.ok) {
        throw new Error("Failed to fetch data")
      }

      const postsData = await postsResponse.json()
      const usersData = await usersResponse.json()

      // Check if we should use English sample data instead
      if (useEnglishSample) {
        setPosts(englishSamplePosts)
        setUsers(englishSampleUsers)
      } else {
        setPosts(postsData)
        setUsers(usersData)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      // Use English sample data as fallback
      setPosts(englishSamplePosts)
      setUsers(englishSampleUsers)
    } finally {
      setLoading(false)
    }
  }

  const toggleDataSource = () => {
    setUseEnglishSample(!useEnglishSample)
    setLoading(true)

    setTimeout(() => {
      if (!useEnglishSample) {
        setPosts(englishSamplePosts)
        setUsers(englishSampleUsers)
      } else {
        fetchData()
      }
      setLoading(false)
    }, 500)
  }

  const getUserName = (userId: number) => {
    const user = users.find((u) => u.id === userId)
    return user ? user.name : "Unknown User"
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  if (loading) {
    return (
      <Card className="max-w-6xl mx-auto">
        <CardContent className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Loader2 className="w-8 h-8 animate-spin text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Loading Content</h3>
            <p className="text-gray-600 dark:text-gray-400">Fetching data from JSONPlaceholder API...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error && !posts.length) {
    return (
      <Card className="max-w-6xl mx-auto">
        <CardContent className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">Connection Error</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Error: {error}</p>
            <Button onClick={fetchData} variant="danger">
              Retry Connection
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-3">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 font-poppins">API Data Integration</h2>
              <p className="text-gray-600 dark:text-gray-400">Real-time content from JSONPlaceholder API</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">{posts.length}</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">Total Posts</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">{users.length}</div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400">Authors</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center space-x-3">
                <Search className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <div>
                  <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">{filteredPosts.length}</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">Filtered Results</div>
                </div>
              </div>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="mb-6">
            <Button variant="secondary" onClick={toggleDataSource} className="mb-4">
              {useEnglishSample ? "Use API Data" : "Use English Sample Data"}
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {useEnglishSample
                ? "Currently showing English sample data"
                : "Currently showing data from JSONPlaceholder API (may contain Lorem Ipsum text)"}
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts by title or content..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-lg placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
            />
          </div>
        </CardHeader>
      </Card>

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <Card key={post.id} hover className="h-full">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  #{post.id}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 line-clamp-2 leading-tight">
                {post.title}
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{getUserName(post.userId).charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {getUserName(post.userId)}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed">{post.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing <span className="font-semibold">{indexOfFirstPost + 1}</span> to{" "}
                <span className="font-semibold">{Math.min(indexOfLastPost, filteredPosts.length)}</span> of{" "}
                <span className="font-semibold">{filteredPosts.length}</span> posts
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNumber = i + 1
                    return (
                      <Button
                        key={pageNumber}
                        variant={currentPage === pageNumber ? "primary" : "secondary"}
                        size="sm"
                        onClick={() => paginate(pageNumber)}
                        className="w-10 h-10 p-0"
                      >
                        {pageNumber}
                      </Button>
                    )
                  })}
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
