import React from 'react';
import { Users, Video, MessageSquare, Plus, Clock } from 'lucide-react';

const studyGroups = [
  {
    id: 1,
    name: 'Calculus Study Circle',
    subject: 'Mathematics',
    members: 8,
    nextSession: 'Today 3:00 PM',
    isLive: true,
    description: 'Weekly problem-solving sessions for calculus students'
  },
  {
    id: 2,
    name: 'Chemistry Lab Partners',
    subject: 'Chemistry',
    members: 6,
    nextSession: 'Tomorrow 2:00 PM',
    isLive: false,
    description: 'Collaborative virtual experiments and lab reports'
  },
  {
    id: 3,
    name: 'Python Programming Club',
    subject: 'Computer Science',
    members: 12,
    nextSession: 'Mar 25 4:00 PM',
    isLive: false,
    description: 'Code together and share programming challenges'
  }
];

export const StudyGroups: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-charcoal">Your Study Groups</h3>
        <button className="inline-flex items-center space-x-2 px-4 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Group</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studyGroups.map(group => (
          <div key={group.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-charcoal">{group.name}</h4>
                <p className="text-sm text-coral">{group.subject}</p>
              </div>
              {group.isLive && (
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full animate-pulse">
                  LIVE
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{group.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{group.members} members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{group.nextSession}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 inline-flex items-center justify-center space-x-2 px-3 py-2 bg-mint text-white rounded-lg hover:bg-mint/90 transition-colors">
                <Video className="w-4 h-4" />
                <span>Join Session</span>
              </button>
              <button className="px-3 py-2 bg-gray-200 text-charcoal rounded-lg hover:bg-gray-300 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};