import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Course from '@/app/models/Course';

export async function GET(request: Request) {
  try {
    await connectDB();
    
    // ✅ Get query parameters from URL
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const topic = searchParams.get('topic');
    
    let query: any = {};
    
    // ✅ Filter by category if provided
    if (category && category !== 'All') {
      query.category = category;
    }
    
    // ✅ Filter by topic (search in subcategory or title)
    if (topic) {
      query.$or = [
        { subcategory: { $regex: topic, $options: 'i' } },
        { title: { $regex: topic, $options: 'i' } }
      ];
    }
    
    const courses = await Course.find(query).sort({ createdAt: -1 }).lean();
    
    // Convert _id to string
    const formattedCourses = courses.map(course => ({
      ...course,
      _id: course._id.toString(),
    }));
    
    return NextResponse.json({ success: true, courses: formattedCourses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();
    
    const course = await Course.create(body);
    
    return NextResponse.json(
      { success: true, course: { ...course.toObject(), _id: course._id.toString() } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create course' },
      { status: 500 }
    );
  }
}

// Web Development courses add karo
const webDevCourses = [
    {
      title: 'HTML5 Complete Guide',
      slug: 'html5-complete-guide',
      description: 'Master HTML5 from basics to advanced. Learn all tags, forms, semantic HTML, and best practices.',
      category: 'Web Development',
      subcategory: 'HTML5',
      difficulty: 'Beginner',
      language: 'English',
      enrolled: 28450,
      rating: 4.8,
      tags: ['html5', 'web', 'frontend'],
      lessons: [
        { title: 'Introduction to HTML', slug: 'html-intro', content: '', duration: '5 min', order: 1 },
        { title: 'HTML Document Structure', slug: 'html-structure', content: '', duration: '8 min', order: 2 },
        { title: 'Text Formatting', slug: 'text-formatting', content: '', duration: '10 min', order: 3 },
        { title: 'Links and Navigation', slug: 'links', content: '', duration: '8 min', order: 4 },
        { title: 'Images and Media', slug: 'images', content: '', duration: '10 min', order: 5 },
        { title: 'Lists and Tables', slug: 'lists-tables', content: '', duration: '12 min', order: 6 },
        { title: 'Forms and Input', slug: 'forms', content: '', duration: '15 min', order: 7 },
        { title: 'Semantic HTML', slug: 'semantic', content: '', duration: '10 min', order: 8 },
      ]
    },
    {
      title: 'CSS3 Mastery',
      slug: 'css3-mastery',
      description: 'Complete CSS3 course from basics to advanced. Learn Flexbox, Grid, Animations, and Responsive Design.',
      category: 'Web Development',
      subcategory: 'CSS3',
      difficulty: 'Beginner',
      language: 'English',
      enrolled: 25680,
      rating: 4.7,
      tags: ['css3', 'web', 'frontend'],
      lessons: [
        { title: 'CSS Introduction', slug: 'css-intro', content: '', duration: '5 min', order: 1 },
        { title: 'Selectors and Properties', slug: 'selectors', content: '', duration: '12 min', order: 2 },
        { title: 'Box Model', slug: 'box-model', content: '', duration: '10 min', order: 3 },
        { title: 'Colors and Backgrounds', slug: 'colors', content: '', duration: '8 min', order: 4 },
        { title: 'Typography', slug: 'typography', content: '', duration: '10 min', order: 5 },
        { title: 'Flexbox', slug: 'flexbox', content: '', duration: '15 min', order: 6 },
        { title: 'CSS Grid', slug: 'grid', content: '', duration: '15 min', order: 7 },
        { title: 'Animations', slug: 'animations', content: '', duration: '12 min', order: 8 },
        { title: 'Responsive Design', slug: 'responsive', content: '', duration: '10 min', order: 9 },
      ]
    },
    {
      title: 'TypeScript for Beginners',
      slug: 'typescript-beginners',
      description: 'Learn TypeScript from scratch. Master types, interfaces, generics, and advanced features.',
      category: 'Web Development',
      subcategory: 'TypeScript',
      difficulty: 'Intermediate',
      language: 'English',
      enrolled: 18760,
      rating: 4.8,
      tags: ['typescript', 'web', 'frontend'],
      lessons: [
        { title: 'TypeScript Introduction', slug: 'ts-intro', content: '', duration: '6 min', order: 1 },
        { title: 'Basic Types', slug: 'ts-basic-types', content: '', duration: '12 min', order: 2 },
        { title: 'Interfaces', slug: 'ts-interfaces', content: '', duration: '10 min', order: 3 },
        { title: 'Classes', slug: 'ts-classes', content: '', duration: '12 min', order: 4 },
        { title: 'Functions', slug: 'ts-functions', content: '', duration: '10 min', order: 5 },
        { title: 'Generics', slug: 'ts-generics', content: '', duration: '14 min', order: 6 },
        { title: 'Modules', slug: 'ts-modules', content: '', duration: '8 min', order: 7 },
        { title: 'Advanced Types', slug: 'ts-advanced', content: '', duration: '15 min', order: 8 },
      ]
    },
    {
      title: 'Node.js Complete Course',
      slug: 'nodejs-complete',
      description: 'Master Node.js from basics to advanced. Build REST APIs, real-time apps, and microservices.',
      category: 'Web Development',
      subcategory: 'Node.js',
      difficulty: 'Intermediate',
      language: 'English',
      enrolled: 22450,
      rating: 4.9,
      tags: ['nodejs', 'backend', 'javascript'],
      lessons: [
        { title: 'Node.js Introduction', slug: 'node-intro', content: '', duration: '6 min', order: 1 },
        { title: 'Modules and NPM', slug: 'node-modules', content: '', duration: '12 min', order: 2 },
        { title: 'File System', slug: 'node-fs', content: '', duration: '14 min', order: 3 },
        { title: 'HTTP Module', slug: 'node-http', content: '', duration: '10 min', order: 4 },
        { title: 'Express.js Basics', slug: 'node-express', content: '', duration: '15 min', order: 5 },
        { title: 'REST APIs', slug: 'node-rest', content: '', duration: '18 min', order: 6 },
        { title: 'Database Integration', slug: 'node-db', content: '', duration: '16 min', order: 7 },
        { title: 'Authentication', slug: 'node-auth', content: '', duration: '14 min', order: 8 },
        { title: 'Error Handling', slug: 'node-errors', content: '', duration: '10 min', order: 9 },
      ]
    },
    {
      title: 'Express.js API Development',
      slug: 'expressjs-api',
      description: 'Build powerful REST APIs with Express.js. Learn middleware, routing, and best practices.',
      category: 'Web Development',
      subcategory: 'Express.js',
      difficulty: 'Intermediate',
      language: 'English',
      enrolled: 16540,
      rating: 4.7,
      tags: ['express', 'nodejs', 'backend'],
      lessons: [
        { title: 'Express Introduction', slug: 'express-intro', content: '', duration: '5 min', order: 1 },
        { title: 'Routing', slug: 'express-routing', content: '', duration: '12 min', order: 2 },
        { title: 'Middleware', slug: 'express-middleware', content: '', duration: '14 min', order: 3 },
        { title: 'Request and Response', slug: 'express-req-res', content: '', duration: '10 min', order: 4 },
        { title: 'Templates', slug: 'express-templates', content: '', duration: '8 min', order: 5 },
        { title: 'Database with MongoDB', slug: 'express-mongodb', content: '', duration: '16 min', order: 6 },
        { title: 'Authentication', slug: 'express-auth', content: '', duration: '14 min', order: 7 },
        { title: 'Error Handling', slug: 'express-errors', content: '', duration: '8 min', order: 8 },
        { title: 'Deployment', slug: 'express-deploy', content: '', duration: '10 min', order: 9 },
      ]
    }
  ];
  
  // In seedCourses() function mein ye add karo:
  // await mongoose.connection.collection('courses').insertMany(webDevCourses);
  // console.log(`✅ Added ${webDevCourses.length} web development courses`);