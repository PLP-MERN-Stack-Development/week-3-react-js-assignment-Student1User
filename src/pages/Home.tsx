import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Zap, Shield, Smartphone, ArrowRight, Sparkles, Heart, Star, Rocket } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home: React.FC = () => {
  const features = [
    {
      icon: CheckSquare,
      title: 'Smart Task Management',
      description: 'Organize your tasks with priorities, categories, and due dates. Never miss a deadline again.',
      color: 'from-pink-500 to-rose-500',
      iconColor: 'text-pink-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern React and optimized for performance. Experience smooth, responsive interactions.',
      color: 'from-yellow-500 to-orange-500',
      iconColor: 'text-yellow-500',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data stays with you. All tasks are stored locally with no external dependencies.',
      color: 'from-emerald-500 to-teal-500',
      iconColor: 'text-emerald-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Access your tasks anywhere, anytime. Fully responsive design that works on all devices.',
      color: 'from-blue-500 to-purple-500',
      iconColor: 'text-blue-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <CheckSquare className="w-24 h-24 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text mx-auto mb-6 animate-bounce-gentle" />
              <Sparkles className="w-8 h-8 absolute -top-2 -right-2 text-yellow-400 animate-pulse" />
              <Heart className="w-6 h-6 absolute -bottom-1 -left-1 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
              <Star className="w-5 h-5 absolute top-2 left-2 text-blue-400 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                Task
              </span>
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '1s' }}>
                Flow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              The ultimate task management solution built with modern React, TypeScript, and Tailwind CSS. 
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold"> Boost your productivity</span> with beautiful, intuitive design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/tasks">
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/api-data">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto group">
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-wiggle" />
                Explore API Data
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <Card hover className="text-center h-full group">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-8 h-8 text-white animate-float" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 via-purple-200/20 to-blue-200/20 animate-gradient-x"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Built with Modern Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leveraging the latest tools and best practices for optimal performance and developer experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'React 18', value: 'Latest', color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
              { label: 'TypeScript', value: '100%', color: 'from-blue-600 to-purple-600', icon: '📘' },
              { label: 'Performance', value: 'A+', color: 'from-emerald-500 to-teal-500', icon: '⚡' },
              { label: 'Mobile Ready', value: '✓', color: 'from-pink-500 to-rose-500', icon: '📱' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card hover className="group">
                  <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-pulse`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 via-blue-600 to-cyan-600 animate-gradient-xy"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 text-white animate-fade-in-up" padding="lg">
            <div className="relative">
              <Sparkles className="w-12 h-12 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Ready to Get Organized?
              </h2>
              <p className="text-xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Start managing your tasks more efficiently today. No signup required!
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link to="/tasks">
                  <Button variant="ghost" size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm group">
                    <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                    Start Using TaskFlow
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;