import Link from "next/link";
import {
  FiMessageSquare,
  FiCode,
  FiHelpCircle,
  FiBriefcase,
} from "react-icons/fi";

export default function AIToolsPage() {
  const tools = [
    {
      title: "AI Doubt Solver",
      description:
        "Ask any programming doubt and get instant solution in Hinglish",
      icon: FiMessageSquare,
      color: "bg-purple-500",
      href: "/ai-tools/doubt-solver",
      features: ["24/7 available", "Instant answers", "Hinglish support"],
    },
    {
      title: "AI Code Explainer",
      description:
        "Paste any code and get step-by-step explanation in simple language",
      icon: FiCode,
      color: "bg-blue-500",
      href: "/ai-tools/code-explainer",
      features: ["Any language", "Line by line", "Beginner friendly"],
    },
    {
      title: "AI Quiz Generator",
      description: "Generate practice quizzes on any programming topic",
      icon: FiHelpCircle,
      color: "bg-green-500",
      href: "/ai-tools/quiz-generator",
      features: ["Multiple choice", "Instant results", "Topic based"],
    },
    {
      title: "AI Interview Practice",
      description: "Practice with AI-powered interview questions and answers",
      icon: FiBriefcase,
      color: "bg-orange-500",
      href: "/ai-tools/interview-practice",
      features: ["Real questions", "Feedback", "Mock interviews"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Learning Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Asli AI — Learn faster with AI tools. Get instant help, explanations,
            and practice.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`${tool.color} h-2`} />
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`${tool.color} p-4 rounded-xl text-white group-hover:scale-110 transition-transform`}
                  >
                    <tool.icon size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {tool.title}
                    </h2>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {tool.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Try Now
                  <span className="text-xl ml-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">Instant</div>
            <div className="text-sm text-gray-600">Responses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-600">Free</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">Hinglish</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
