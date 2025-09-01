import React from 'react';
import { TrendingUp } from 'lucide-react';

export const PerformanceChart: React.FC = () => {
  const data = [65, 72, 68, 75, 82, 79, 85];
  const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
  const maxValue = Math.max(...data);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-charcoal">Performance Trend</h3>
        <TrendingUp className="w-5 h-5 text-mint" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-end justify-between h-40 space-x-2">
          {data.map((value, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-gradient-to-t from-mint to-mint/60 rounded-t transition-all duration-1000 hover:from-coral hover:to-coral/60"
                style={{ height: `${(value / maxValue) * 100}%` }}
              />
              <span className="text-xs text-gray-600 mt-2">{labels[index].split(' ')[1]}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Average Score</span>
          <span className="font-semibold text-charcoal">75.4%</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Improvement</span>
          <span className="font-semibold text-mint">+12.3%</span>
        </div>
      </div>
    </div>
  );
};