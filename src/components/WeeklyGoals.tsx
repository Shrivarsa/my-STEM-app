import React from 'react';
import { Target, CheckCircle, Circle } from 'lucide-react';

const goals = [
  { id: 1, title: 'Complete 5 math lessons', completed: true, progress: 100 },
  { id: 2, title: 'Participate in 2 study groups', completed: true, progress: 100 },
  { id: 3, title: 'Finish chemistry lab simulation', completed: false, progress: 75 },
  { id: 4, title: 'Submit physics homework', completed: false, progress: 30 }
];

export const WeeklyGoals: React.FC = () => {
  const completedGoals = goals.filter(goal => goal.completed).length;
  const totalGoals = goals.length;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-charcoal">Weekly Goals</h3>
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-coral" />
          <span className="text-sm font-medium text-charcoal">{completedGoals}/{totalGoals}</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {goals.map(goal => (
          <div key={goal.id} className="flex items-center space-x-3">
            {goal.completed ? (
              <CheckCircle className="w-5 h-5 text-mint" />
            ) : (
              <Circle className="w-5 h-5 text-gray-400" />
            )}
            <div className="flex-1">
              <p className={`text-sm font-medium ${goal.completed ? 'text-charcoal line-through' : 'text-charcoal'}`}>
                {goal.title}
              </p>
              {!goal.completed && (
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div 
                    className="bg-coral h-1 rounded-full transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};