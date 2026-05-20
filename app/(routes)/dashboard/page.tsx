'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userCourses, setUserCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    } else if (status === 'authenticated') {
      fetchUserCourses();
    }
  }, [status, router]);

  // ✅ API से user courses fetch करो
  const fetchUserCourses = async () => {
    try {
      const res = await fetch('/api/user/courses');
      const data = await res.json();
      if (data.success) {
        setUserCourses(data.courses);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {session?.user?.name}!
        </h1>
        <p className="text-gray-600 mb-8">Your learning dashboard</p>

        {userCourses.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No courses yet!</h2>
            <p className="text-gray-600 mb-6">Start your learning journey today.</p>
            <Link 
              href="/courses"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Progress Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h2>
              <div className="space-y-3">
                {userCourses.map((course: any) => (
                  <div key={course.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{course.title}</span>
                      <span className="text-blue-600">{course.completed}/{course.total}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(course.completed / course.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended for You</h2>
              <ul className="space-y-3">
                <li className="text-sm text-gray-600">• Complete your first course</li>
                <li className="text-sm text-gray-600">• Try AI Doubt Solver</li>
                <li className="text-sm text-gray-600">• Explore new tutorials</li>
              </ul>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h2>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Courses enrolled: {userCourses.length}</p>
                <p className="text-sm text-gray-600">Days streak: 0</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}