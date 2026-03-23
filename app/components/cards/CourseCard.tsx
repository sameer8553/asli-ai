import Link from 'next/link';
import { FiBookOpen, FiStar, FiUsers } from 'react-icons/fi';

interface CourseCardProps {
  course: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    difficulty: string;
    totalLessons: number;
    language: string;
    enrolled: number;
    rating: number;
    thumbnail?: string;
  };
}

const difficultyColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full">
        <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-4xl text-white font-bold">
            {course.title.charAt(0)}
          </span>
        </div>
        
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[course.difficulty as keyof typeof difficultyColors]}`}>
              {course.difficulty}
            </span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {course.language}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <FiBookOpen className="text-blue-600" />
              <span>{course.totalLessons} Lessons</span>
            </div>
            
            <div className="flex items-center gap-1">
              <FiStar className="text-yellow-500" />
              <span>{course.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-gray-500">
              <FiUsers />
              <span>{course.enrolled.toLocaleString()} students</span>
            </div>
            
            <span className="text-green-600 font-medium">Free</span>
          </div>
        </div>
      </div>
    </Link>
  );
}