"use client";

import { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import toast from "react-hot-toast";

export default function QuizGeneratorPage() {
  const [input, setInput] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const extractTopicAndCount = (input: string) => {
    let topic = input.trim();
    let count = 10;
    const match = input.match(/(.+?)\s+(\d+)$/);
    if (match) {
      topic = match[1].trim();
      count = parseInt(match[2]);
      if (count < 1) count = 1;
      if (count > 100) count = 100;
    }
    return { topic, count };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("Please enter a topic");
      return;
    }

    const { topic, count } = extractTopicAndCount(input);

    setLoading(true);
    setQuiz("");

    try {
      const response = await fetch("/api/ai/quiz-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, count }),
      });

      const data = await response.json();

      if (response.ok) {
        setQuiz(data.quiz);
        setInput("");
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to generate quiz");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Quiz Generator
          </h1>
          <p className="text-gray-600"></p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <span>Generating...</span>
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
              Quiz Questions
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
