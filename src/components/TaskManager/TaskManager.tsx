import React from 'react';
import { Trash2, CheckCircle, Sparkles, Trophy, Target } from 'lucide-react';
import { useTasks } from '../../hooks/useTasks';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import Button from '../ui/Button';
import Card from '../ui/Card';

const TaskManager: React.FC = () => {
  const {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    clearCompleted,
  } = useTasks();

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length,
  };

  const completionPercentage = tasks.length > 0 ? Math.round((taskCounts.completed / tasks.length) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with animated title */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
            Task Manager
          </h1>
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
          <Target className="absolute -bottom-1 -left-1 w-6 h-6 text-pink-400 animate-bounce-gentle" />
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Stay organized and productive with your personal task management system
        </p>
        
        {/* Progress indicator */}
        {tasks.length > 0 && (
          <div className="max-w-md mx-auto mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Progress</span>
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out animate-gradient-x"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            {completionPercentage === 100 && tasks.length > 0 && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-emerald-600 dark:text-emerald-400 animate-bounce-gentle">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">All tasks completed! 🎉</span>
              </div>
            )}
          </div>
        )}
      </div>

      <TaskForm onAddTask={addTask} />

      {tasks.length > 0 && (
        <>
          <TaskFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            taskCounts={taskCounts}
          />

          {taskCounts.completed > 0 && (
            <div className="flex justify-end mb-8 animate-fade-in">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCompleted}
                className="group hover:bg-red-100 dark:hover:bg-red-900/20"
              >
                <Trash2 className="w-4 h-4 mr-2 group-hover:text-red-500 group-hover:animate-wiggle" />
                <span className="group-hover:text-red-500">Clear Completed</span>
                <Sparkles className="w-3 h-3 ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          )}
        </>
      )}

      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <Card className="text-center py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 animate-fade-in">
            <div className="text-gray-400 dark:text-gray-600 mb-6">
              <div className="relative inline-block">
                <CheckCircle className="w-20 h-20 mx-auto mb-6 text-purple-300 dark:text-purple-600 animate-float" />
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {tasks.length === 0 
                  ? '🌟 Ready to Start?' 
                  : filter === 'active' 
                    ? '🎉 All Done!' 
                    : '📝 No Completed Tasks'
                }
              </h3>
              <p className="text-lg">
                {tasks.length === 0 
                  ? 'Create your first magical task to get started!' 
                  : filter === 'active' 
                    ? 'All tasks are completed. You\'re amazing!' 
                    : 'Complete some tasks to see them here.'
                }
              </p>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredTasks.map((task, index) => (
              <div
                key={task.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TaskItem
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                  onUpdate={updateTask}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {tasks.length > 0 && (
        <div className="mt-12 text-center animate-fade-in">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-orange-600 dark:text-orange-400">{taskCounts.active}</span> active
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{taskCounts.completed}</span> completed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                <span className="text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-purple-600 dark:text-purple-400">{tasks.length}</span> total
                </span>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TaskManager;