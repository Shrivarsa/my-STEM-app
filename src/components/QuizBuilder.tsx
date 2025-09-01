import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Save, Eye } from 'lucide-react';

// Define the Question type
interface Question {
  id: number;
  question: string;
  type: string;
  options?: string[];
  answer?: string;
}

export const QuizBuilder: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: 'What is the derivative of x²?',
      type: 'multiple-choice',
      options: ['x', '2x', 'x²', '2'],
      answer: '2x',
    },
  ]);

  const [showAnswers, setShowAnswers] = useState<{ [key: number]: boolean }>({});

  const toggleAnswer = (id: number) => {
    setShowAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addQuestion = () => {
    const newQuestion: Question = {
      id: questions.length + 1,
      question: 'New Question?',
      type: 'multiple-choice',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 'Option 1',
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-charcoal">Quiz Builder</h3>
        <button
          className="inline-flex items-center space-x-2 px-3 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors"
          onClick={addQuestion}
        >
          <Plus className="w-4 h-4" />
          <span>Add Question</span>
        </button>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={question.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Question {index + 1}</span>
              <div className="flex space-x-2">
                <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                  <Edit3 className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  className="p-1 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => deleteQuestion(question.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
                <button
                  className="p-1 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => toggleAnswer(question.id)}
                >
                  <Eye className="w-4 h-4 text-green-500" />
                </button>
              </div>
            </div>

            <p className="text-charcoal mb-3">{question.question}</p>
            <div className="grid grid-cols-2 gap-2">
              {question.options?.map((option, optionIndex) => (
                <div key={optionIndex} className="p-2 bg-gray-50 rounded text-sm">
                  {option}
                </div>
              ))}
            </div>

            {showAnswers[question.id] && (
              <p className="mt-2 text-sm text-green-600 font-semibold">
                Answer: {question.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-6 space-x-3">
        <button className="px-4 py-2 border border-gray-300 text-charcoal rounded-lg hover:bg-gray-50 transition-colors">
          Preview
        </button>
        <button className="inline-flex items-center space-x-2 px-4 py-2 bg-mint text-white rounded-lg hover:bg-mint/90 transition-colors">
          <Save className="w-4 h-4" />
          <span>Save Quiz</span>
        </button>
      </div>
    </div>
  );
};
