import React, { useState } from 'react';
import { Users, MessageSquare, Share2, Plus } from 'lucide-react';
import { StudyGroups } from '../components/StudyGroups';
import { PeerMentoring } from '../components/PeerMentoring';
import { ProjectCollaboration } from '../components/ProjectCollaboration';

export const Collaboration: React.FC = () => {
  const [activeTab, setActiveTab] = useState('groups');

  const tabs = [
    { id: 'groups', label: 'Study Groups', icon: Users },
    { id: 'mentoring', label: 'Peer Mentoring', icon: MessageSquare },
    { id: 'projects', label: 'Group Projects', icon: Share2 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-charcoal mb-2">Collaboration Hub</h1>
          <p className="text-gray-600">Connect, learn, and grow together</p>
        </div>
        <button className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-4 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create New</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-coral text-coral'
                    : 'border-transparent text-gray-500 hover:text-charcoal'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'groups' && <StudyGroups />}
          {activeTab === 'mentoring' && <PeerMentoring />}
          {activeTab === 'projects' && <ProjectCollaboration />}
        </div>
      </div>
    </div>
  );
};