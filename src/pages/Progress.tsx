import React from 'react';
import { TrendingUp, Award, Target, Calendar } from 'lucide-react';
import { SkillProgress } from '../components/SkillProgress';
import { LearningStreak } from '../components/LearningStreak';
import { WeeklyGoals } from '../components/WeeklyGoals';
import { PerformanceChart } from '../components/PerformanceChart';

export const Progress: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-charcoal mb-2">Your Progress</h1>
        <p className="text-gray-600">Track your learning journey and achievements</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-mint/10 rounded-lg">
              <TrendingUp className="w-6 h-6 text-mint" />
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">85%</p>
              <p className="text-sm text-gray-600">Overall Progress</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gold/10 rounded-lg">
              <Award className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">12</p>
              <p className="text-sm text-gray-600">Badges Earned</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-coral/10 rounded-lg">
              <Target className="w-6 h-6 text-coral" />
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">7</p>
              <p className="text-sm text-gray-600">Day Streak</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-charcoal/10 rounded-lg">
              <Calendar className="w-6 h-6 text-charcoal" />
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">24h</p>
              <p className="text-sm text-gray-600">This Week</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkillProgress />
        <LearningStreak />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <WeeklyGoals />
      </div>
    </div>
  );
};