import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle } from 'lucide-react';

export const CodeEditor: React.FC = () => {
  const [code, setCode] = useState(`# Python Basics - Functions
def calculate_derivative(x):
    """Calculate the derivative of x^2"""
    return 2 * x

# Test your function
x_value = 5
result = calculate_derivative(x_value)
print(f"The derivative of {x_value}^2 is {result}")
`);

  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setOutput('The derivative of 5^2 is 10\n✅ All tests passed!');
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-charcoal">Interactive Code Lab</h3>
        <div className="flex space-x-2">
          <button
            onClick={runCode}
            disabled={isRunning}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-mint text-white rounded-lg hover:bg-mint/90 transition-colors disabled:opacity-50"
          >
            <Play className="w-4 h-4" />
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RotateCcw className="w-4 h-4 text-charcoal" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium text-charcoal mb-2">Code Editor</h4>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
            style={{ fontFamily: 'Menlo, Monaco, "Courier New", monospace' }}
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-charcoal mb-2">Output</h4>
          <div className="w-full h-64 p-4 bg-charcoal text-white rounded-lg font-mono text-sm overflow-auto">
            {output || 'Run your code to see the output...'}
          </div>
        </div>
      </div>

      <div className="bg-mint/10 border border-mint/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-mint mt-0.5" />
          <div>
            <p className="font-medium text-charcoal">Real-time Guidance</p>
            <p className="text-sm text-gray-600">Your function correctly implements the derivative formula! Try modifying the equation to x³ and update the derivative calculation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};