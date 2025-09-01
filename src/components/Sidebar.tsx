import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Settings, 
  Award,
  BarChart3,
  X
} from 'lucide-react';
import { useUser } from '../context/UserContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user } = useUser();

  const studentLinks = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/lessons', icon: BookOpen, label: 'Lessons' },
    { to: '/progress', icon: TrendingUp, label: 'Progress' },
    { to: '/collaboration', icon: Users, label: 'Collaboration' },
    { to: '/profile', icon: Settings, label: 'Profile' },
  ];

  const adminLinks = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/admin', icon: BarChart3, label: 'Analytics' },
    { to: '/lessons', icon: BookOpen, label: 'Lessons' },
    { to: '/collaboration', icon: Users, label: 'Collaboration' },
    { to: '/profile', icon: Settings, label: 'Profile' },
  ];

  const links = user.role === 'educator' ? adminLinks : studentLinks;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-16 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:top-0 md:h-screen
      `}>
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 md:hidden"
          >
            <X className="w-4 h-4 text-charcoal" />
          </button>
          
          <nav className="space-y-2">
            {links.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-coral text-white shadow-md'
                      : 'text-charcoal hover:bg-gray-100'
                  }`
                }
                onClick={() => onClose()}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-r from-gold/10 to-mint/10 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-charcoal">This Week</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Complete 5 more lessons to earn your next badge!</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-mint h-2 rounded-full w-3/5"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">3 of 5 completed</p>
          </div>
        </div>
      </aside>
    </>
  );
};