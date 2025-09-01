import React, { useState } from 'react';
import { Search, Clock, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const lessonsData = [
  {
    id: 1,
    title: 'Introduction to Calculus',
    subject: 'Mathematics',
    difficulty: 'Intermediate',
    duration: '45 min',
    rating: 4.8,
    progress: 75,
    thumbnail: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    description: 'Master the fundamentals of differential and integral calculus'
  },
  {
    id: 2,
    title: 'Chemical Reactions Lab',
    subject: 'Chemistry',
    difficulty: 'Advanced',
    duration: '60 min',
    rating: 4.9,
    progress: 30,
    thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    description: 'Virtual laboratory experiments with real-time simulations'
  },
  {
    id: 3,
    title: 'Python Programming Basics',
    subject: 'Computer Science',
    difficulty: 'Beginner',
    duration: '90 min',
    rating: 4.7,
    progress: 90,
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    description: 'Learn programming fundamentals with hands-on coding exercises'
  },
  {
    id: 4,
    title: 'Physics: Motion and Forces',
    subject: 'Physics',
    difficulty: 'Intermediate',
    duration: '55 min',
    rating: 4.6,
    progress: 10,
    thumbnail: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    description: "Understand Newton's laws through interactive simulations"
  }
];

export const Lessons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const subjects = ['All', 'Mathematics', 'Chemistry', 'Physics', 'Computer Science'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredLessons = lessonsData.filter(lesson => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'All' || lesson.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === 'All' || lesson.difficulty === selectedDifficulty;
    return matchesSearch && matchesSubject && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-mint bg-mint/10';
      case 'Intermediate': return 'text-gold bg-gold/10';
      case 'Advanced': return 'text-coral bg-coral/10';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 0) return 'bg-gray-200';
    if (progress < 50) return 'bg-coral';
    if (progress < 100) return 'bg-gold';
    return 'bg-mint';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-charcoal mb-2">Learning Modules</h1>
        <p className="text-gray-600">Explore our comprehensive STEM curriculum</p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
            />
          </div>

          <div className="flex space-x-3">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map(lesson => (
          <div key={lesson.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={lesson.thumbnail}
                alt={lesson.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
                  {lesson.difficulty}
                </span>
              </div>
              {lesson.progress > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div
                    className={`h-full ${getProgressColor(lesson.progress)}`}
                    style={{ width: `${lesson.progress}%` }}
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-coral">{lesson.subject}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-gold fill-current" />
                  <span className="text-sm text-gray-600">{lesson.rating}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-charcoal mb-2">{lesson.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{lesson.duration}</span>
                </div>

                <Link
                  to={`/lessons/${lesson.id}`}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>{lesson.progress > 0 ? 'Continue' : 'Start'}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
