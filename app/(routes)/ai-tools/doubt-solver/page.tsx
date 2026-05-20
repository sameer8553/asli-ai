'use client';

import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function DoubtSolverPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast.error('Please enter your doubt');
      return;
    }

    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch('/api/ai/doubt-solver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setAnswer(data.answer);
        setQuestion('');
      } else {
        toast.error(data.error || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to get answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Doubt Solver</h1>
          <p className="text-gray-600">
            Ask any programming question and get instant solution in Hinglish
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your programming doubt here..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>AI is thinking...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Get Solution</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {answer && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Solution</h2>
            <div className="prose max-w-none bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 whitespace-pre-line">{answer}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}