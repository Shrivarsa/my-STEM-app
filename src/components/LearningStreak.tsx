import React from 'react';
import { Flame } from 'lucide-react';

export const LearningStreak: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const streakData = [true, true, true, true, true, false, true];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-charcoal">Learning Streak</h3>
        <div className="flex items-center space-x-2">
          <Flame className="w-5 h-5 text-coral" />
          <span className="font-bold text-coral">7 days</span>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((day, index) => (
          <div key={day} className="text-center">
            <p className="text-xs text-gray-600 mb-2">{day}</p>
            <div 
              className={`w-8 h-8 rounded-lg mx-auto transition-all duration-200 ${
                streakData[index] 
                  ? 'bg-coral shadow-md' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            />
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Keep it up! 3 more days for your next milestone</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-coral h-2 rounded-full w-4/5"></div>
        </div>
      </div>
    </div>
  );
};