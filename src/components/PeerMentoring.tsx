import React from 'react';
import { UserCheck, Star, MessageCircle, Video } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: 'Sarah Chen',
    subject: 'Advanced Mathematics',
    rating: 4.9,
    sessions: 45,
    available: true,
    bio: 'PhD candidate specializing in differential equations and linear algebra'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    subject: 'Computer Science',
    rating: 4.8,
    sessions: 32,
    available: false,
    bio: 'Software engineer with expertise in Python, algorithms, and data structures'
  },
  {
    id: 3,
    name: 'Emily Watson',
    subject: 'Chemistry',
    rating: 4.7,
    sessions: 28,
    available: true,
    bio: 'Graduate student in organic chemistry with lab experience'
  }
];

export const PeerMentoring: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-charcoal mb-2">Connect with Peer Mentors</h3>
        <p className="text-gray-600">Get personalized help from experienced students</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map(mentor => (
          <div key={mentor.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{mentor.name}</h4>
                  <p className="text-sm text-coral">{mentor.subject}</p>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${mentor.available ? 'bg-mint' : 'bg-gray-400'}`} />
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{mentor.bio}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-gold fill-current" />
                <span className="text-sm font-medium text-charcoal">{mentor.rating}</span>
                <span className="text-sm text-gray-500">({mentor.sessions} sessions)</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                mentor.available ? 'bg-mint/10 text-mint' : 'bg-gray-200 text-gray-600'
              }`}>
                {mentor.available ? 'Available' : 'Busy'}
              </span>
            </div>
            
            <div className="flex space-x-2">
              <button 
                className={`flex-1 inline-flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  mentor.available 
                    ? 'bg-coral text-white hover:bg-coral/90' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!mentor.available}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message</span>
              </button>
              <button 
                className={`px-3 py-2 rounded-lg transition-colors ${
                  mentor.available 
                    ? 'bg-mint text-white hover:bg-mint/90' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!mentor.available}
              >
                <Video className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};