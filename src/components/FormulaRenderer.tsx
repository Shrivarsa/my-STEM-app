import React from 'react';
import { BookOpen } from 'lucide-react';

interface FormulaRendererProps {
  formula: string;
}

export const FormulaRenderer: React.FC<FormulaRendererProps> = ({ formula }) => {
  return (
    <div className="bg-gradient-to-r from-charcoal/5 to-mint/5 rounded-lg p-6 border border-gray-200">
      <div className="flex items-center space-x-3 mb-4">
        <BookOpen className="w-5 h-5 text-coral" />
        <span className="font-medium text-charcoal">Mathematical Formula</span>
      </div>
      
      <div className="bg-white rounded-lg p-4 text-center">
        <div className="text-2xl font-serif text-charcoal" style={{ fontFamily: 'Georgia, Times, serif' }}>
          {formula}
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-mint/10 rounded-lg">
        <p className="text-sm text-charcoal">
          <strong>Explanation:</strong> This formula represents the limit definition of a derivative, 
          showing how the instantaneous rate of change is calculated as the limit of average rates of change.
        </p>
      </div>
    </div>
  );
};