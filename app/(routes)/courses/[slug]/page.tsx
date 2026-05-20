import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiCalendar,
  FiUser,
  FiBookOpen,
  FiChevronRight,
  FiMessageCircle,
  FiShare2,
  FiBookmark,
} from "react-icons/fi";
import connectDB from "@/app/lib/mongodb";
import Course from "@/app/models/Course";
// Web Development Components
import { HTMLContent } from "./components/web/HTMLContent";
import { CSSContent } from "./components/web/CSSContent";
import { JavaScriptContent } from "./components/web/JavaScriptContent";
// Programming Languages Components
import { CContent } from "./components/programming/CContent";
import { CPPContent } from "./components/programming/CPPContent";
import { JavaContent } from "./components/programming/JavaContent";
import { PythonContent } from "./components/programming/PythonContent";
import { ProgrammingJSContent } from "./components/programming/JavaScriptContent";

async function getCourse(slug: string) {
  await connectDB();
  const course = await Course.findOne({ slug: slug } as any).lean();
  if (!course) return null;
  return {
    ...course,
    _id: course._id.toString(),
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  const author = {
    name: "Sameer",
    bio: "Hey, what’s up? I am Sameer, I love to help others understand programming.",
    image: "/images/author.jpg",
    expertise: ["Web Development", "Frontend Development", "HTML Tutorial"],
  };

  // Web Development
  const isHTMLCourse =
    course.slug?.includes("html5") ||
    course.slug?.includes("html") ||
    course.title?.toLowerCase().includes("html");
  const isCSSCourse =
    course.slug?.includes("css") || course.title?.toLowerCase().includes("css");
  const isJSCourse =
    course.slug?.includes("javascript") ||
    course.slug?.includes("js") ||
    course.title?.toLowerCase().includes("javascript");

  // Programming Languages - Exact slug match with database
  const isCCourse =
    course.slug === "c-programming-beginners" ||
    course.slug === "c-programming";
  const isCPPCourse = course.slug === "cpp-programming";
  const isJavaCourse = course.slug === "java-masterclass";
  const isPythonCourse = course.slug === "python-mastery";
  const isProgrammingJSCourse = course.slug === "javascript-programming";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm pt-24">
            <div className="flex items-center gap-2 text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <FiChevronRight className="text-gray-400" />
              <Link href="/courses" className="hover:text-blue-600">
                Courses
              </Link>
              <FiChevronRight className="text-gray-400" />
              <Link
                href={`/courses?category=${course.category}`}
                className="hover:text-blue-600"
              >
                {course.category}
              </Link>
              <FiChevronRight className="text-gray-400" />
              <span className="text-gray-900 font-medium">{course.title}</span>
            </div>
          </div>

          {/* Course Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 flex-wrap">
              <div className="flex items-center gap-2">
                <FiUser className="text-blue-600" />
                <span>{author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="text-blue-600" />
                <span>Mar 15, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FiBookOpen className="text-blue-600" />
                <span>{course.lessons?.length || 0} lessons</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {course.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <FiBookmark /> Save for Later
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                <FiShare2 /> Share
              </button>
            </div>
          </div>

          {/* Web Development Content */}
          {isHTMLCourse && <HTMLContent course={course} author={author} />}
          {isCSSCourse && <CSSContent course={course} author={author} />}
          {isJSCourse && <JavaScriptContent course={course} author={author} />}

          {/* Programming Languages Content */}
          {isCCourse && <CContent course={course} author={author} />}
          {isCPPCourse && <CPPContent course={course} author={author} />}
          {isJavaCourse && <JavaContent course={course} author={author} />}
          {isPythonCourse && <PythonContent course={course} author={author} />}
          {isProgrammingJSCourse && (
            <ProgrammingJSContent course={course} author={author} />
          )}

          {!isHTMLCourse &&
            !isCSSCourse &&
            !isJSCourse &&
            !isCCourse &&
            !isCPPCourse &&
            !isJavaCourse &&
            !isPythonCourse &&
            !isProgrammingJSCourse && (
              <div className="bg-white rounded-lg shadow-lg p-16 mb-8 text-center">
                <div className="text-8xl mb-6">📚</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Course Content Coming Soon!
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  We're working hard to bring you amazing content for this
                  course.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="/courses"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Browse All Courses
                  </Link>
                  <Link
                    href="/"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
            )}

          {/* About the Author */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About the Author
            </h2>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {author.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {author.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {author.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comments (0)
            </h2>
            <div className="text-center py-8">
              <FiMessageCircle className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">
                Please login to leave a comment.
              </p>
              <Link
                href="/auth/login"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Login to Comment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
