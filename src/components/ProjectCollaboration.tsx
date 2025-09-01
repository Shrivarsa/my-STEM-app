import React from 'react';
import { FolderOpen, Users, Calendar, GitBranch } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Climate Data Analysis',
    subject: 'Environmental Science',
    members: 4,
    deadline: 'Mar 30',
    progress: 65,
    status: 'active'
  },
  {
    id: 2,
    name: 'Web Application Development',
    subject: 'Computer Science',
    members: 3,
    deadline: 'Apr 15',
    progress: 40,
    status: 'active'
  },
  {
    id: 3,
    name: 'Molecular Structure Research',
    subject: 'Chemistry',
    members: 5,
    deadline: 'Apr 5',
    progress: 90,
    status: 'review'
  }
];

export const ProjectCollaboration: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-mint/10 text-mint';
      case 'review': return 'bg-gold/10 text-gold';
      case 'completed': return 'bg-gray-100 text-gray-600';
      default: return 'bg-coral/10 text-coral';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-charcoal mb-2">Group Projects</h3>
        <p className="text-gray-600">Collaborate on real-world STEM challenges</p>
      </div>

      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-coral/10 rounded-lg">
                  <FolderOpen className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{project.name}</h4>
                  <p className="text-sm text-gray-600">{project.subject}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-charcoal">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-mint h-2 rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{project.members} members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Due {project.deadline}</span>
                  </div>
                </div>
                
                <button className="inline-flex items-center space-x-2 px-3 py-1 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors">
                  <GitBranch className="w-4 h-4" />
                  <span>View Project</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};