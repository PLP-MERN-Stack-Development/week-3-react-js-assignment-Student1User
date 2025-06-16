import React, { useState, useEffect } from 'react';
import { Search, User, MessageCircle, ExternalLink, AlertCircle, Globe, Sparkles, Star, RefreshCw } from 'lucide-react';
import { api } from '../utils/api';
import { Post, User as UserType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const ApiData: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'posts' | 'users'>('posts');
  
  const { language, setLanguage, t } = useLanguage();
  const postsPerPage = 6;

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [postsData, usersData] = await Promise.all([
        api.getPosts(),
        api.getUsers(),
      ]);
      
      setPosts(postsData);
      setUsers(usersData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
      setError(errorMessage);
      console.error('API fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleRetry = () => {
    fetchData();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="relative mb-8">
            <LoadingSpinner size="lg" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
            {t('api.loading')}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="text-center max-w-md animate-fade-in">
          <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('api.error.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {error}
          </p>
          <Button onClick={handleRetry} className="group">
            <RefreshCw className="w-4 h-4 mr-2 group-hover:animate-spin" />
            {t('api.error.button')}
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              {t('api.title')}
            </h1>
            <Globe className="absolute -top-2 -right-2 w-8 h-8 text-cyan-400 animate-float" />
            <Sparkles className="absolute -bottom-1 -left-1 w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('api.subtitle')}
          </p>
        </div>

        {/* Language Switcher */}
        <div className="flex justify-end mb-8 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="group bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-800/50 dark:hover:to-blue-800/50"
          >
            <Globe className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
            {t('api.language.switch')}
          </Button>
        </div>

        {/* Search */}
        <Card className="mb-8 bg-gradient-to-r from-white via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20 animate-fade-in">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400 animate-pulse" />
              <input
                type="text"
                placeholder={t('api.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-white to-purple-50 dark:from-gray-700 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-400 transition-all duration-300 text-lg"
              />
              <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
            <Button type="submit" className="group">
              <Search className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
              {t('api.search.button')}
            </Button>
          </form>
        </Card>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
          <Button
            variant={activeTab === 'posts' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('posts')}
            className="group"
          >
            <MessageCircle className={`w-5 h-5 mr-2 ${activeTab === 'posts' ? 'animate-bounce-gentle' : 'group-hover:animate-wiggle'}`} />
            <span>{t('api.posts')} ({filteredPosts.length})</span>
            {activeTab === 'posts' && <Sparkles className="w-4 h-4 ml-2 animate-pulse" />}
          </Button>
          <Button
            variant={activeTab === 'users' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('users')}
            className="group"
          >
            <User className={`w-5 h-5 mr-2 ${activeTab === 'users' ? 'animate-bounce-gentle' : 'group-hover:animate-wiggle'}`} />
            <span>{t('api.users')} ({filteredUsers.length})</span>
            {activeTab === 'users' && <Sparkles className="w-4 h-4 ml-2 animate-pulse" />}
          </Button>
        </div>

        {/* Content */}
        {activeTab === 'posts' ? (
          <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card hover className="h-full bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 dark:from-gray-800 dark:via-pink-900/10 dark:to-purple-900/10">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg animate-glow">
                        {t('api.post.prefix')}{post.id}
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {t('api.user.prefix')} {post.userId}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 text-lg group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-4 mb-6 leading-relaxed">
                      {post.body}
                    </p>
                    <Button variant="ghost" size="sm" className="w-full group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
                      {t('api.viewDetails')}
                    </Button>
                  </Card>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 animate-fade-in">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="group"
                >
                  {t('api.pagination.previous')}
                </Button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let page;
                    if (totalPages <= 5) {
                      page = i + 1;
                    } else if (currentPage <= 3) {
                      page = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      page = totalPages - 4 + i;
                    } else {
                      page = currentPage - 2 + i;
                    }
                    
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'primary' : 'ghost'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-12 h-12 group relative"
                      >
                        {page}
                        {currentPage === page && <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />}
                      </Button>
                    );
                  })}
                </div>

                <Button
                  variant="ghost"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="group"
                >
                  {t('api.pagination.next')}
                </Button>
              </div>
            )}
          </>
        ) : (
          /* Users Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUsers.map((user, index) => (
              <div
                key={user.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card hover className="text-center h-full bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-cyan-900/10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <User className="w-10 h-10 text-white animate-float" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {user.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-3 font-semibold">@{user.username}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {user.email}
                  </p>
                  {user.company && (
                    <p className="text-xs text-gray-500 mb-6 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full inline-block">
                      {t('api.user.worksAt')} {user.company.name}
                    </p>
                  )}
                  {user.website && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group"
                      onClick={() => window.open(`https://${user.website}`, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
                      {t('api.visitWebsite')}
                    </Button>
                  )}
                </Card>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {((activeTab === 'posts' && filteredPosts.length === 0) || 
          (activeTab === 'users' && filteredUsers.length === 0)) && (
          <Card className="text-center py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 animate-fade-in">
            <div className="relative inline-block mb-6">
              <Search className="w-20 h-20 text-gray-400 mx-auto animate-float" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {t('api.noResults.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t('api.noResults.subtitle')}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ApiData;