const mongoose = require('mongoose');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

console.log('MONGODB_URI:', MONGODB_URI ? 'Found ✓' : 'Not Found ✗');

// ============================================
// PROGRAMMING LANGUAGES COURSES
// ============================================
const programmingCourses = [
  {
    title: 'C Programming for Beginners',
    slug: 'c-programming-beginners',
    description: 'C programming language ko aasani se seekhein. Basics se advanced tak.',
    category: 'Programming Languages',
    subcategory: 'C',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 15420,
    rating: 4.8,
    tags: ['c', 'programming', 'beginners'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'C++ Programming Mastery',
    slug: 'cpp-programming',
    description: 'Master C++ with object-oriented programming, STL, and advanced concepts.',
    category: 'Programming Languages',
    subcategory: 'C++',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 12450,
    rating: 4.7,
    tags: ['cpp', 'programming', 'oop'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Java Programming Masterclass',
    slug: 'java-masterclass',
    description: 'Complete Java course for beginners to advanced. Includes OOP, Collections, Multithreading.',
    category: 'Programming Languages',
    subcategory: 'Java',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 18760,
    rating: 4.6,
    tags: ['java', 'programming', 'backend'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'Python Mastery Course',
    slug: 'python-mastery',
    description: 'Complete Python course for beginners to pro. Data science aur web development ke liye.',
    category: 'Programming Languages',
    subcategory: 'Python',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 25340,
    rating: 4.9,
    tags: ['python', 'programming', 'data-science'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'JavaScript Complete Guide',
    slug: 'javascript-programming', 
    description: 'Modern JavaScript from basics to advanced. Web development ke liye must-have skills.',
    category: 'Programming Languages',
    subcategory: 'JavaScript',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 32450,
    rating: 4.7,
    tags: ['javascript', 'web', 'frontend'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  }
];

// ============================================
// WEB DEVELOPMENT COURSES
// ============================================
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
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'CSS3 Mastery',
    slug: 'css3-mastery',
    description: 'Complete CSS3 course from basics to advanced. Learn Flexbox, Grid, Animations.',
    category: 'Web Development',
    subcategory: 'CSS3',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 25680,
    rating: 4.7,
    tags: ['css3', 'web', 'frontend'],
    lessons: Array.from({ length: 9 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'JavaScript Complete Guide',
    slug: 'javascript-web-dev', 
    description: 'Modern JavaScript from basics to advanced. Web development ke liye must-have skills.',
    category: 'Web Development',
    subcategory: 'JavaScript',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 32450,
    rating: 4.7,
    tags: ['javascript', 'web', 'frontend'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
];

// ============================================
// DATA STRUCTURES & ALGORITHMS COURSES
// ============================================
const dsaCourses = [
  {
    title: 'DSA in C',
    slug: 'dsa-c',
    description: 'Learn Data Structures and Algorithms using C programming language.',
    category: 'Data Structures & Algorithms',
    subcategory: 'DSA in C',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 8450,
    rating: 4.6,
    tags: ['dsa', 'c', 'algorithms'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'Data Structures in C++',
    slug: 'dsa-cpp',
    description: 'Master Data Structures and Algorithms with C++. Interview preparation ke liye best.',
    category: 'Data Structures & Algorithms',
    subcategory: 'DSA in C++',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 12450,
    rating: 4.9,
    tags: ['dsa', 'cpp', 'algorithms'],
    lessons: Array.from({ length: 11 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '18 min', 
      order: i+1 
    }))
  },
  {
    title: 'DSA in Java',
    slug: 'dsa-java',
    description: 'Complete DSA course using Java. Perfect for interview preparation.',
    category: 'Data Structures & Algorithms',
    subcategory: 'DSA in Java',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 9870,
    rating: 4.7,
    tags: ['dsa', 'java', 'algorithms'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '16 min', 
      order: i+1 
    }))
  },
  {
    title: 'DSA in Python',
    slug: 'dsa-python',
    description: 'Learn Data Structures and Algorithms with Python. Simple and intuitive.',
    category: 'Data Structures & Algorithms',
    subcategory: 'DSA in Python',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 11230,
    rating: 4.8,
    tags: ['dsa', 'python', 'algorithms'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },

];
// ============================================
// FRONTEND FRAMEWORKS COURSES
// ============================================
const frontendCourses = [
  {
    title: 'React.js Complete Guide',
    slug: 'react-complete',
    description: 'Master React.js with hooks, context, and Redux. Build real-world applications.',
    category: 'Frontend Frameworks',
    subcategory: 'React.js',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 32450,
    rating: 4.9,
    tags: ['react', 'javascript', 'frontend'],
    lessons: Array.from({ length: 14 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'Angular.js Crash Course',
    slug: 'angular-crash',
    description: 'Learn Angular framework for building dynamic web applications.',
    category: 'Frontend Frameworks',
    subcategory: 'Angular.js',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 18760,
    rating: 4.6,
    tags: ['angular', 'typescript', 'frontend'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Vue.js Mastery',
    slug: 'vue-mastery',
    description: 'Learn Vue.js from basics to advanced. Build reactive web interfaces.',
    category: 'Frontend Frameworks',
    subcategory: 'Vue.js',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 21560,
    rating: 4.8,
    tags: ['vue', 'javascript', 'frontend'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Bootstrap 5',
    slug: 'bootstrap-5',
    description: 'Master Bootstrap 5 for responsive web design. Build mobile-first websites.',
    category: 'Frontend Frameworks',
    subcategory: 'Bootstrap',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 25670,
    rating: 4.6,
    tags: ['bootstrap', 'css', 'frontend'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'Tailwind CSS',
    slug: 'tailwind-css',
    description: 'Learn Tailwind CSS utility-first framework for rapid UI development.',
    category: 'Frontend Frameworks',
    subcategory: 'Tailwind CSS',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 22340,
    rating: 4.9,
    tags: ['tailwind', 'css', 'frontend'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
];

// ============================================
// BACKEND LANGUAGES COURSES
// ============================================
const backendLangCourses = [
  {
    title: 'Node.js Backend Development',
    slug: 'nodejs-backend',
    description: 'Build scalable backend applications with Node.js.',
    category: 'Backend Languages',
    subcategory: 'JavaScript',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 22450,
    rating: 4.8,
    tags: ['nodejs', 'backend', 'javascript'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Python Backend Development',
    slug: 'python-backend',
    description: 'Build backend applications with Python using Flask and Django.',
    category: 'Backend Languages',
    subcategory: 'Python',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 19870,
    rating: 4.7,
    tags: ['python', 'backend', 'flask'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Java Backend Development',
    slug: 'java-backend',
    description: 'Build enterprise backend applications with Java and Spring Boot.',
    category: 'Backend Languages',
    subcategory: 'Java',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 16540,
    rating: 4.7,
    tags: ['java', 'backend', 'spring'],
    lessons: Array.from({ length: 14 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '16 min', 
      order: i+1 
    }))
  }
];

// ============================================
// DATABASES COURSES
// ============================================
const databaseCourses = [
  {
    title: 'MySQL Complete Guide',
    slug: 'mysql',
    description: 'Master MySQL database management and SQL queries.',
    category: 'Databases',
    subcategory: 'MySQL',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 25670,
    rating: 4.7,
    tags: ['mysql', 'sql', 'database'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'MongoDB Mastery',
    slug: 'mongodb',
    description: 'Learn MongoDB - the NoSQL database for modern applications.',
    category: 'Databases',
    subcategory: 'MongoDB',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 23450,
    rating: 4.8,
    tags: ['mongodb', 'nosql', 'database'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'SQLite',
    slug: 'sqlite',
    description: 'Learn SQLite - the embedded database for mobile and desktop apps.',
    category: 'Databases',
    subcategory: 'SQLite',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 14320,
    rating: 4.5,
    tags: ['sqlite', 'sql', 'database'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
];

// Combine all courses
const allCourses = [
  ...programmingCourses,
  ...webDevCourses,
  ...dsaCourses,
  ...frontendCourses,
  ...backendLangCourses,
  ...databaseCourses,
];

async function seedCourses() {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env.local file');
    }

    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing courses
    await mongoose.connection.collection('courses').deleteMany({});
    console.log('✅ Cleared existing courses');

    // Insert all courses
    await mongoose.connection.collection('courses').insertMany(allCourses);
    console.log(`✅ Added ${allCourses.length} courses total`);
    console.log(`   - Programming Languages: ${programmingCourses.length}`);
    console.log(`   - Web Development: ${webDevCourses.length}`);
    console.log(`   - DSA: ${dsaCourses.length}`);
    console.log(`   - Frontend Frameworks: ${frontendCourses.length}`);
    console.log(`   - Backend Languages: ${backendLangCourses.length}`);
    console.log(`   - Databases: ${databaseCourses.length}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}


seedCourses();