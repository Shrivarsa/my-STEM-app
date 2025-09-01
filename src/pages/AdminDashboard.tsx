import React from 'react';
import { BarChart3, Users, BookOpen, AlertTriangle } from 'lucide-react';
import { StudentAnalytics } from '../components/StudentAnalytics';
import { EngagementMetrics } from '../components/EngagementMetrics';
import { QuizBuilder } from '../components/QuizBuilder';
import { AlertsPanel } from '../components/AlertsPanel';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-charcoal mb-2">Educator Dashboard</h1>
        <p className="text-gray-600">Monitor student progress and manage your curriculum</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-mint/10 rounded-lg">
              <Users className="w-6 h-6 text-mint" />
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">156</p>
              <p className="text-sm text-gray-600">Active Students</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gold/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">24</p>
              <p className="text-sm text-gray-600">Active Lessons</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-coral/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-coral" />
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">89%</p>
              <p className="text-sm text-gray-600">Avg. Completion</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-charcoal">3</p>
              <p className="text-sm text-gray-600">Need Attention</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StudentAnalytics />
        <EngagementMetrics />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuizBuilder />
        <AlertsPanel />
      </div>
    </div>
  );
};