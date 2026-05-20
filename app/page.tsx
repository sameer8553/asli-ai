import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Asli AI <span className="text-blue-600">Simple Language</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Asli AI helps you learn programming with easy-to-understand
                courses, tutorials, and AI-powered tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                  Start Learning
                  <FiArrowRight />
                </Link>
                <Link
                  href="/ai-tools"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                >
                  Try AI Tools
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg overflow-hidden">
              <img
                src="/images/hero section image.webp"
                alt="Hero Section"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - WORKING */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Learn Coding?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 📖 Easy to Understand - Articles Page */}
            <Link
              href="/articles"
              className="group text-center p-6 hover:shadow-xl transition-all duration-300 rounded-lg cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                📖
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                Easy to Understand
              </h3>
              <p className="text-gray-600">
                Complex concepts explained in simple words
              </p>
              <span className="inline-block mt-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Read Tutorials →
              </span>
            </Link>

            {/* 🤖 AI-Powered Tools - AI Tools Page */}
            <Link
              href="/ai-tools"
              className="group text-center p-6 hover:shadow-xl transition-all duration-300 rounded-lg cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                AI-Powered Tools
              </h3>
              <p className="text-gray-600">
                Doubt solver, code explainer and much more
              </p>
              <span className="inline-block mt-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Try AI Tools →
              </span>
            </Link>

            {/* 📚 Structured Courses - Courses Page */}
            <Link
              href="/courses"
              className="group text-center p-6 hover:shadow-xl transition-all duration-300 rounded-lg cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                📚
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                Structured Courses
              </h3>
              <p className="text-gray-600">
                Step by step learning from beginner to advanced
              </p>
              <span className="inline-block mt-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Browse Courses →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students learning programming
          </p>
          <Link
            href="/auth/register"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            Create Free Account
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
