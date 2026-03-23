import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  FiCalendar, 
  FiUser, 
  FiBookOpen,
  FiChevronRight,
  FiMessageCircle,
  FiShare2,
  FiBookmark
} from 'react-icons/fi';
import connectDB from '@/app/lib/mongodb';
import Course from '@/app/models/Course';

async function getCourse(slug: string) {
  await connectDB();
  const course = await Course.findOne({ slug }).lean();
  if (!course) return null;
  return {
    ...course,
    _id: course._id.toString(),
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }
  
  const author = {
    name: 'Sameer',
    bio: 'Hey, what’s up? I am Sameer, I love to help others understand programming.',
    image: '/images/author.jpg',
    expertise: ['Web Development', 'Frontend Development', 'HTML Tutorial']
  };

  // ✅ Sirf HTML5 course ke liye lessons dikhao
  const isHTMLCourse = course.slug === 'html5-complete-guide' || 
                      course.slug === 'html5-complete-guide-html' || 
                      course.slug?.includes('html5');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm pt-24">
            <div className="flex items-center gap-2 text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <FiChevronRight className="text-gray-400" />
              <Link href="/courses" className="hover:text-blue-600">Courses</Link>
              <FiChevronRight className="text-gray-400" />
              <Link href={`/courses?category=${course.category}`} className="hover:text-blue-600">
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

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {course.tags?.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <FiBookmark />
                Save for Later
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                <FiShare2 />
                Share
              </button>
            </div>
          </div>

          {/* ✅ HTML5 Course Lessons - Sirf HTML course ke liye dikhenge */}
          {isHTMLCourse ? (
            <div>
              {/* Introduction to HTML Lesson */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction to HTML</h2>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {author.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{author.name}</h3>
                    <p className="text-sm text-gray-500">Date: Tue, Aug 5, 2025</p>
                  </div>
                </div>

                {/* Lesson Content */}
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">1. What is HTML</h3>
                    <p className="text-gray-700 leading-relaxed">
                      HTML ki full form hai <strong>Hyper Text Markup Language</strong>. Ye web pages banane ke liye use hoti hai.
                    </p>
                  </div>
                </div>
              </div>

              {/* HTML Fundamentals Lesson */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">HTML Fundamentals</h2>
                
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">HTML Element Kya Hota Hai?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      HTML element ek building block hota hai kisi bhi web page ko banane ke liye.
                    </p>
                    
                    <h4 className="font-semibold text-gray-900 mt-4">Basic Syntax:</h4>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<tagname>Content</tagname>`}</code>
                    </pre>

                    <h4 className="font-semibold text-gray-900 mt-4">Example:</h4>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<p>Hello World!</p>`}</code>
                    </pre>

                    <h4 className="font-semibold text-gray-900 mt-4">HTML Tag vs HTML Element:</h4>
                    <ul className="list-disc pl-6 mt-2">
                      <li><strong>Tag:</strong> &lt;p&gt;&lt;/p&gt; {'—>'} Sirf ek tag without content or closed</li>
                      <li><strong>Element:</strong> &lt;p&gt;Hello&lt;/p&gt; {'—>'} Full structure</li>
                    </ul>

                    <h4 className="font-semibold text-gray-900 mt-6">Types of HTML Elements</h4>
                    
                    <h5 className="font-semibold text-gray-900 mt-4">1. Block Level Element:</h5>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<h1>Main Heading</h1>
<p>This is a paragraph.</p>`}</code>
                    </pre>

                    <h5 className="font-semibold text-gray-900 mt-4">2. Inline Elements:</h5>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<a href="#">Click Here</a>`}</code>
                    </pre>

                    <h5 className="font-semibold text-gray-900 mt-4">3. Empty Elements:</h5>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<img src="image.jpg" alt="photo" />
<br />`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* HTML Attributes Lesson */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">HTML Attributes</h2>
                
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">HTML Attributes Kya Hote Hain?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Jab bhi hum HTML elements likhte hain, toh unhe customize karne ke liye attributes ka use karte hain.
                    </p>

                    <h4 className="font-semibold text-gray-900 mt-4">Basic Format:</h4>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<tagname attribute="value">Content</tagname>`}</code>
                    </pre>

                    <h4 className="font-semibold text-gray-900 mt-4">Example:</h4>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<a href="https://google.com">Google</a>`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* HTML Comments Lesson */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">HTML Comments</h2>
                
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">HTML Comment Kya Hota Hai?</h3>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<!-- This is a comment -->`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* HTML Headings Lesson */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">HTML Headings</h2>
                
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Heading</h3>`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* HTML Paragraphs Lesson */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">HTML Paragraphs</h2>
                
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<p>This is a paragraph.</p>`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* HTML Lists Lesson */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">HTML Lists</h2>
                
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* HTML Forms Lesson */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">HTML Forms</h2>
                
                <div className="prose max-w-none">
                  <div className="mb-8">
                    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                      <code>{`<form>
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <button>Submit</button>
</form>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ✅ Other courses ke liye Coming Soon message */
            <div className="bg-white rounded-lg shadow-lg p-16 mb-8 text-center">
              <div className="text-8xl mb-6">📚</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Content Coming Soon!</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                We're working hard to bring you amazing content for this course. 
                Please check back later or explore our other available courses.
              </p>
              <div className="flex gap-4 justify-center">
                <Link 
                  href="/courses" 
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Browse All Courses
                </Link>
                <Link 
                  href="/" 
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Go Home
                </Link>
              </div>
            </div>
          )}

          {/* About the Author - Always show */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Author</h2>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {author.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{author.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {author.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((item) => (
                    <span key={item} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section - Always show */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments (0)</h2>
            <div className="text-center py-8">
              <FiMessageCircle className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">Please login to leave a comment.</p>
              <Link 
                href="/auth/login" 
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Login to Comment
              </Link>
              <p className="text-sm text-gray-400 mt-4">No comments yet. Be the first to comment!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}