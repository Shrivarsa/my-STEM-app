import React from 'react';
import { TrendingUp, Book, Clock } from 'lucide-react';

export const ProgressCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-charcoal">This Week's Progress</h3>
        <TrendingUp className="w-5 h-5 text-mint" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Book className="w-4 h-4 text-coral" />
            <span className="text-sm text-gray-600">Lessons Completed</span>
          </div>
          <span className="font-semibold text-charcoal">8/10</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-mint h-2 rounded-full w-4/5"></div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-sm text-gray-600">Study Time</span>
          </div>
          <span className="font-semibold text-charcoal">12.5 hrs</span>
        </div>
      </div>
    </div>
  );
};