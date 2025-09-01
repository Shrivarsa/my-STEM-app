import React from 'react';
import { Brain, Code, Calculator, FlaskConical } from 'lucide-react';

const skills = [
  { name: 'Mathematics', level: 85, icon: Calculator, color: 'mint' },
  { name: 'Programming', level: 70, icon: Code, color: 'coral' },
  { name: 'Chemistry', level: 60, icon: FlaskConical, color: 'gold' },
  { name: 'Critical Thinking', level: 90, icon: Brain, color: 'charcoal' }
];

export const SkillProgress: React.FC = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'mint': return 'bg-mint';
      case 'coral': return 'bg-coral';
      case 'gold': return 'bg-gold';
      case 'charcoal': return 'bg-charcoal';
      default: return 'bg-gray-500';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'mint': return 'text-mint';
      case 'coral': return 'text-coral';
      case 'gold': return 'text-gold';
      case 'charcoal': return 'text-charcoal';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-charcoal mb-6">Skill Progression</h3>
      
      <div className="space-y-6">
        {skills.map(skill => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <skill.icon className={`w-5 h-5 ${getIconColor(skill.color)}`} />
                <span className="font-medium text-charcoal">{skill.name}</span>
              </div>
              <span className="text-sm text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-1000 ${getColorClasses(skill.color)}`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};