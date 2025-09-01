import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BookOpen,
  Code,
  FlaskConical,
  MessageCircle,
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle
} from 'lucide-react';
import { FormulaRenderer } from '../components/FormulaRenderer';
import { CodeEditor } from '../components/CodeEditor';
import { VirtualLab } from '../components/VirtualLab';

export const LessonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('content');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Dummy lesson data
  const lesson = {
    id: id || '1',
    title: 'Introduction to Calculus',
    subject: 'Mathematics',
    difficulty: 'Intermediate',
    duration: '45 min',
    progress: 75,
    content: {
      sections: [
        {
          title: 'What is Calculus?',
          type: 'text',
          content:
            'Calculus is a branch of mathematics that studies continuous change. It has two main branches: differential calculus and integral calculus.'
        },
        {
          title: 'The Derivative',
          type: 'formula',
          content: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}"
        },
        {
          title: 'Practice Problem',
          type: 'interactive',
          content: 'Find the derivative of f(x) = x² + 3x + 2'
        }
      ]
    }
  };

  const tabs = [
    { id: 'content', label: 'Lesson', icon: BookOpen },
    { id: 'code', label: 'Code Lab', icon: Code },
    { id: 'simulation', label: 'Virtual Lab', icon: FlaskConical },
    { id: 'discussion', label: 'Discussion', icon: MessageCircle }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/lessons" className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-charcoal" />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-charcoal">{lesson.title}</h1>
          <p className="text-gray-600">
            {lesson.subject} • {lesson.difficulty} • {lesson.duration}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-coral text-white hover:bg-coral/90 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-charcoal" /> : <Volume2 className="w-4 h-4 text-charcoal" />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-charcoal">Lesson Progress</span>
          <span className="text-sm text-gray-600">{lesson.progress}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-mint h-2 rounded-full transition-all duration-500"
            style={{ width: `${lesson.progress}%` }}
          />
        </div>
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
          {activeTab === 'content' && (
            <div className="space-y-8">
              {lesson.content.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-bold text-charcoal">{section.title}</h3>

                  {section.type === 'text' && (
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  )}

                  {section.type === 'formula' && <FormulaRenderer formula={section.content} />}

                  {section.type === 'interactive' && (
                    <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-coral">
                      <p className="font-medium text-charcoal mb-4">{section.content}</p>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors">
                          Show Solution
                        </button>
                        <button className="px-4 py-2 bg-mint text-white rounded-lg hover:bg-mint/90 transition-colors">
                          <CheckCircle className="w-4 h-4 inline mr-2" />
                          Mark Complete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'code' && <CodeEditor />}
          {activeTab === 'simulation' && <VirtualLab />}
          {activeTab === 'discussion' && (
            <div className="text-center py-12">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-charcoal mb-2">Discussion Forum</h3>
              <p className="text-gray-600">Connect with peers and instructors to discuss this lesson</p>
              <button className="mt-4 px-6 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors">
                Join Discussion
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
