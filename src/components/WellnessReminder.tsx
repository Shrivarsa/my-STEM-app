import React, { useState } from 'react';
import { Heart, X, Coffee } from 'lucide-react';

export const WellnessReminder: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg p-4 border border-green-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Heart className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm font-medium text-gray-800">Time for a break!</p>
            <p className="text-xs text-gray-600">You've been studying for 2 hours</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-1 rounded hover:bg-green-200 transition-colors">
            <Coffee className="w-4 h-4 text-green-500" />
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 rounded hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
