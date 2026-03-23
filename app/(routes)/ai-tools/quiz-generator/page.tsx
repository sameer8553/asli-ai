'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FiHelpCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function QuizGeneratorPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [topic, setTopic] = useState('');
  const [count, setCount] = useState('1');
  const [quiz, setQuiz] = useState('');
  const [loading, setLoading] = useState(false);
  const [countError, setCountError] = useState('');

  if (status === 'unauthenticated') {
    router.push('/auth/login');
    return null;
  }

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty or numbers only
    if (value === '' || /^\d+$/.test(value)) {
      setCount(value);
      
      // Validate count (1-100)
      const numValue = parseInt(value);
      if (value !== '' && (numValue < 1 || numValue > 100)) {
        setCountError('Please enter a number between 1 and 100');
      } else {
        setCountError('');
      }
    }
  };

  const validateCount = (): boolean => {
    if (!count) {
      setCountError('Please enter a number');
      return false;
    }
    
    const numCount = parseInt(count);
    if (isNaN(numCount) || numCount < 1) {
      setCountError('Count must be at least 1');
      return false;
    }
    
    if (numCount > 100) {
      setCountError('Maximum 100 questions allowed');
      return false;
    }
    
    setCountError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      toast.error('Please enter a topic');
      return;
    }

    if (!validateCount()) {
      toast.error(countError || 'Invalid count');
      return;
    }

    const questionCount = parseInt(count);

    setLoading(true);
    setQuiz('');

    try {
      const response = await fetch('/api/ai/quiz-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          topic, 
          count: questionCount
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setQuiz(data.quiz);
        toast.success(`${questionCount} questions generated for "${topic}"!`);
        setTopic('');
        setCount('10');
      } else {
        toast.error(data.error || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to generate quiz');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Quiz Generator</h1>
          <p className="text-gray-600">
            Generate practice questions on any programming topic (1-100 questions)
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="md:col-span-2">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter topic"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  inputMode="numeric"
                  value={count}
                  onChange={handleCountChange}
                  placeholder="Questions (1-100)"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    countError ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {countError && (
                  <p className="text-red-500 text-sm mt-1">{countError}</p>
                )}
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={loading || !!countError}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating  questions...</span>
                  </>
                ) : (
                  <>
                    <FiHelpCircle />
                    <span>Generate Questions</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {quiz && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Quiz Questions ({count})
            </h2>
            <div className="prose max-w-none bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 whitespace-pre-line">{quiz}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}