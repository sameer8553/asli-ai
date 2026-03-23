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
  },
  


  {
    title: 'TypeScript for Professionals',
    slug: 'typescript-pro',
    description: 'Master TypeScript with advanced types, generics, and real-world projects.',
    category: 'Programming Languages',
    subcategory: 'TypeScript',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 14560,
    rating: 4.8,
    tags: ['typescript', 'javascript', 'frontend'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Go Programming Language',
    slug: 'go-programming',
    description: 'Learn Go programming from scratch. Build efficient and scalable applications.',
    category: 'Programming Languages',
    subcategory: 'Go',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 8760,
    rating: 4.6,
    tags: ['go', 'golang', 'backend'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Ruby Programming',
    slug: 'ruby-programming',
    description: 'Learn Ruby programming language. Perfect for web development with Rails.',
    category: 'Programming Languages',
    subcategory: 'Ruby',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 6540,
    rating: 4.5,
    tags: ['ruby', 'programming', 'backend'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'Swift iOS Development',
    slug: 'swift-ios',
    description: 'Build iOS apps with Swift programming language. From basics to App Store.',
    category: 'Programming Languages',
    subcategory: 'Swift',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 9840,
    rating: 4.7,
    tags: ['swift', 'ios', 'mobile'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'Kotlin for Android',
    slug: 'kotlin-android',
    description: 'Learn Kotlin programming for Android development. Modern and concise.',
    category: 'Programming Languages',
    subcategory: 'Kotlin',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 12340,
    rating: 4.8,
    tags: ['kotlin', 'android', 'mobile'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Rust Programming',
    slug: 'rust-programming',
    description: 'Learn Rust - a systems programming language focused on safety and performance.',
    category: 'Programming Languages',
    subcategory: 'Rust',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 5430,
    rating: 4.9,
    tags: ['rust', 'systems', 'performance'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'PHP for Web Development',
    slug: 'php-web',
    description: 'Learn PHP programming for dynamic websites and web applications.',
    category: 'Programming Languages',
    subcategory: 'PHP',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 15670,
    rating: 4.5,
    tags: ['php', 'web', 'backend'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
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
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Node.js Complete Course',
    slug: 'nodejs-complete',
    description: 'Master Node.js from basics to advanced. Build REST APIs and microservices.',
    category: 'Web Development',
    subcategory: 'Node.js',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 22450,
    rating: 4.9,
    tags: ['nodejs', 'backend', 'javascript'],
    lessons: Array.from({ length: 9 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Express.js API Development',
    slug: 'expressjs-api',
    description: 'Build powerful REST APIs with Express.js. Learn middleware and routing.',
    category: 'Web Development',
    subcategory: 'Express.js',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 16540,
    rating: 4.7,
    tags: ['express', 'nodejs', 'backend'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'React.js for Beginners',
    slug: 'react-beginners',
    description: 'Modern web development with React.js. Hooks, components, aur real-world projects.',
    category: 'Web Development',
    subcategory: 'React',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 21560,
    rating: 4.8,
    tags: ['react', 'javascript', 'frontend'],
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
  {
    title: 'DSA in JavaScript',
    slug: 'dsa-javascript',
    description: 'Master DSA concepts using JavaScript. Perfect for web developers.',
    category: 'Data Structures & Algorithms',
    subcategory: 'DSA in JavaScript',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 8760,
    rating: 4.6,
    tags: ['dsa', 'javascript', 'algorithms'],
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
// MOBILE DEVELOPMENT COURSES
// ============================================
const mobileDevCourses = [
  {
    title: 'Android Development for Beginners',
    slug: 'android-beginners-mobile',
    description: 'Learn Android development from scratch. Build real Android apps.',
    category: 'Mobile Development',
    subcategory: 'Android',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 15670,
    rating: 4.7,
    tags: ['android', 'mobile', 'java'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'Android Studio Mastery',
    slug: 'android-studio',
    description: 'Master Android Studio IDE for professional Android development.',
    category: 'Mobile Development',
    subcategory: 'Android Studio',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 8760,
    rating: 4.5,
    tags: ['android', 'android-studio', 'tools'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Jetpack Compose',
    slug: 'jetpack-compose',
    description: 'Build modern Android UIs with Jetpack Compose. The future of Android development.',
    category: 'Mobile Development',
    subcategory: 'Jetpack Compose',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 6540,
    rating: 4.8,
    tags: ['android', 'jetpack-compose', 'ui'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Flutter Complete Course',
    slug: 'flutter-complete',
    description: 'Build cross-platform apps with Flutter. One codebase for iOS and Android.',
    category: 'Mobile Development',
    subcategory: 'Flutter',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 18760,
    rating: 4.8,
    tags: ['flutter', 'dart', 'cross-platform'],
    lessons: Array.from({ length: 14 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'React Native Masterclass',
    slug: 'react-native',
    description: 'Build native mobile apps with React Native. Use your JavaScript skills.',
    category: 'Mobile Development',
    subcategory: 'React Native',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 16540,
    rating: 4.7,
    tags: ['react-native', 'javascript', 'mobile'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Swift iOS Development',
    slug: 'swift-ios-dev',
    description: 'Build iOS apps with Swift. From basics to App Store deployment.',
    category: 'Mobile Development',
    subcategory: 'Swift',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 9840,
    rating: 4.7,
    tags: ['swift', 'ios', 'apple'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '16 min', 
      order: i+1 
    }))
  },
  {
    title: 'Xamarin Forms',
    slug: 'xamarin-forms',
    description: 'Build cross-platform apps with Xamarin using C# and .NET.',
    category: 'Mobile Development',
    subcategory: 'Xamarin',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 5430,
    rating: 4.4,
    tags: ['xamarin', 'csharp', 'dotnet'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  }
];

// ============================================
// ANDROID DEVELOPMENT COURSES
// ============================================
const androidDevCourses = [
  {
    title: 'Android Development for Beginners',
    slug: 'android-beginners-android',
    description: 'Learn Android development from scratch. Build real Android apps.',
    category: 'Android Development',
    subcategory: 'Android',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 15670,
    rating: 4.7,
    tags: ['android', 'mobile', 'java'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'Kotlin for Android',
    slug: 'kotlin-android-dev',
    description: 'Learn Kotlin programming for Android development. Modern and concise.',
    category: 'Android Development',
    subcategory: 'Kotlin',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 12340,
    rating: 4.8,
    tags: ['kotlin', 'android', 'mobile'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Java for Android',
    slug: 'java-android',
    description: 'Master Java programming for Android app development.',
    category: 'Android Development',
    subcategory: 'Java',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 9870,
    rating: 4.6,
    tags: ['java', 'android', 'programming'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Android Studio Mastery',
    slug: 'android-studio-pro',
    description: 'Master Android Studio IDE for professional Android development.',
    category: 'Android Development',
    subcategory: 'Android Studio',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 8760,
    rating: 4.5,
    tags: ['android', 'android-studio', 'tools'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Jetpack Compose',
    slug: 'jetpack-compose-android',
    description: 'Build modern Android UIs with Jetpack Compose. The future of Android development.',
    category: 'Android Development',
    subcategory: 'Jetpack Compose',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 6540,
    rating: 4.8,
    tags: ['android', 'jetpack-compose', 'ui'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Firebase for Android',
    slug: 'firebase-android',
    description: 'Integrate Firebase services in your Android apps. Authentication, database, and more.',
    category: 'Android Development',
    subcategory: 'Firebase',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 7650,
    rating: 4.7,
    tags: ['firebase', 'android', 'backend'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Gradle for Android',
    slug: 'gradle-android',
    description: 'Master Gradle build system for Android projects.',
    category: 'Android Development',
    subcategory: 'Gradle',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 4320,
    rating: 4.4,
    tags: ['gradle', 'android', 'build'],
    lessons: Array.from({ length: 6 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'XML for Android',
    slug: 'xml-android',
    description: 'Learn XML layout design for Android applications.',
    category: 'Android Development',
    subcategory: 'XML',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 6540,
    rating: 4.5,
    tags: ['xml', 'android', 'ui'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'Material Design for Android',
    slug: 'material-design-android',
    description: 'Implement Material Design guidelines in your Android apps.',
    category: 'Android Development',
    subcategory: 'Material Design',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 5430,
    rating: 4.6,
    tags: ['material-design', 'android', 'ui'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Flutter for Android',
    slug: 'flutter-android',
    description: 'Build Android apps with Flutter. Fast development with beautiful UIs.',
    category: 'Android Development',
    subcategory: 'Flutter',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 9870,
    rating: 4.7,
    tags: ['flutter', 'android', 'dart'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'React Native for Android',
    slug: 'react-native-android',
    description: 'Build Android apps with React Native using JavaScript.',
    category: 'Android Development',
    subcategory: 'React Native',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 8760,
    rating: 4.6,
    tags: ['react-native', 'android', 'javascript'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  }
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
    title: 'Svelte.js',
    slug: 'svelte',
    description: 'Learn Svelte - the new way to build web applications with less code.',
    category: 'Frontend Frameworks',
    subcategory: 'Svelte',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 9870,
    rating: 4.7,
    tags: ['svelte', 'javascript', 'frontend'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
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
  {
    title: 'Material UI',
    slug: 'material-ui',
    description: 'Implement Material Design with Material-UI in React applications.',
    category: 'Frontend Frameworks',
    subcategory: 'Material UI',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 15430,
    rating: 4.7,
    tags: ['material-ui', 'react', 'ui'],
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
// BACKEND FRAMEWORKS COURSES
// ============================================
const backendFrameworkCourses = [
  {
    title: 'Django Mastery',
    slug: 'django-mastery',
    description: 'Build web applications with Django - the Python web framework.',
    category: 'Backend Frameworks',
    subcategory: 'Django',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 18760,
    rating: 4.8,
    tags: ['django', 'python', 'backend'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Flask Web Development',
    slug: 'flask-web',
    description: 'Build lightweight web applications with Flask microframework.',
    category: 'Backend Frameworks',
    subcategory: 'Flask',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 15430,
    rating: 4.6,
    tags: ['flask', 'python', 'backend'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Laravel PHP Framework',
    slug: 'laravel',
    description: 'Master Laravel - the PHP framework for web artisans.',
    category: 'Backend Frameworks',
    subcategory: 'Laravel',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 14320,
    rating: 4.7,
    tags: ['laravel', 'php', 'backend'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Ruby on Rails',
    slug: 'rails',
    description: 'Build web applications with Ruby on Rails framework.',
    category: 'Backend Frameworks',
    subcategory: 'Ruby on Rails',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 12340,
    rating: 4.7,
    tags: ['rails', 'ruby', 'backend'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Spring Framework',
    slug: 'spring',
    description: 'Enterprise Java development with Spring Framework.',
    category: 'Backend Frameworks',
    subcategory: 'Spring',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 11230,
    rating: 4.8,
    tags: ['spring', 'java', 'backend'],
    lessons: Array.from({ length: 14 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '16 min', 
      order: i+1 
    }))
  },
  {
    title: 'Spring Boot',
    slug: 'spring-boot',
    description: 'Build microservices with Spring Boot - the modern Java framework.',
    category: 'Backend Frameworks',
    subcategory: 'Spring Boot',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 14320,
    rating: 4.9,
    tags: ['spring-boot', 'java', 'microservices'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'ASP.NET Core',
    slug: 'aspnet-core',
    description: 'Build web applications with ASP.NET Core using C#.',
    category: 'Backend Frameworks',
    subcategory: 'ASP.NET',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 12340,
    rating: 4.6,
    tags: ['aspnet', 'csharp', 'dotnet'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  }
];

// ============================================
// DATA SCIENCE & AI COURSES
// ============================================
const dataScienceCourses = [
  {
    title: 'TensorFlow for Deep Learning',
    slug: 'tensorflow',
    description: 'Master deep learning with TensorFlow. Build neural networks and AI models.',
    category: 'Data Science & AI',
    subcategory: 'TensorFlow',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 14320,
    rating: 4.8,
    tags: ['tensorflow', 'ai', 'deep-learning'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '16 min', 
      order: i+1 
    }))
  },
  {
    title: 'PyTorch',
    slug: 'pytorch',
    description: 'Learn PyTorch for deep learning and neural networks.',
    category: 'Data Science & AI',
    subcategory: 'PyTorch',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 12340,
    rating: 4.8,
    tags: ['pytorch', 'ai', 'deep-learning'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '16 min', 
      order: i+1 
    }))
  },
  {
    title: 'NumPy for Data Science',
    slug: 'numpy',
    description: 'Master NumPy for numerical computing in Python.',
    category: 'Data Science & AI',
    subcategory: 'NumPy',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 18760,
    rating: 4.7,
    tags: ['numpy', 'python', 'data-science'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Pandas for Data Analysis',
    slug: 'pandas',
    description: 'Learn Pandas for data manipulation and analysis in Python.',
    category: 'Data Science & AI',
    subcategory: 'Pandas',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 19870,
    rating: 4.8,
    tags: ['pandas', 'python', 'data-analysis'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Jupyter Notebook',
    slug: 'jupyter',
    description: 'Master Jupyter Notebook for interactive data science.',
    category: 'Data Science & AI',
    subcategory: 'Jupyter',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 14320,
    rating: 4.6,
    tags: ['jupyter', 'python', 'data-science'],
    lessons: Array.from({ length: 6 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'R Programming for Data Science',
    slug: 'r-programming',
    description: 'Learn R programming language for statistical computing.',
    category: 'Data Science & AI',
    subcategory: 'R',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 8760,
    rating: 4.5,
    tags: ['r', 'statistics', 'data-science'],
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
    title: 'PostgreSQL',
    slug: 'postgresql',
    description: 'Master PostgreSQL - the advanced open-source database.',
    category: 'Databases',
    subcategory: 'PostgreSQL',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 18760,
    rating: 4.7,
    tags: ['postgresql', 'sql', 'database'],
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
  {
    title: 'Oracle Database',
    slug: 'oracle',
    description: 'Master Oracle Database for enterprise applications.',
    category: 'Databases',
    subcategory: 'Oracle',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 8760,
    rating: 4.6,
    tags: ['oracle', 'sql', 'database'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'Redis',
    slug: 'redis',
    description: 'Learn Redis - the in-memory data structure store.',
    category: 'Databases',
    subcategory: 'Redis',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 12340,
    rating: 4.7,
    tags: ['redis', 'cache', 'database'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  },
  {
    title: 'Firebase',
    slug: 'firebase',
    description: 'Master Firebase - Google\'s mobile platform for app development.',
    category: 'Databases',
    subcategory: 'Firebase',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 19870,
    rating: 4.8,
    tags: ['firebase', 'nosql', 'database'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  }
];

// ============================================
// DEVOPS & CLOUD COURSES
// ============================================
const devopsCourses = [
  {
    title: 'Docker Mastery',
    slug: 'docker',
    description: 'Master Docker containers for modern application deployment.',
    category: 'DevOps & Cloud',
    subcategory: 'Docker',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 23450,
    rating: 4.8,
    tags: ['docker', 'containers', 'devops'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Kubernetes',
    slug: 'kubernetes',
    description: 'Learn Kubernetes for container orchestration and management.',
    category: 'DevOps & Cloud',
    subcategory: 'Kubernetes',
    difficulty: 'Advanced',
    language: 'English',
    enrolled: 18760,
    rating: 4.8,
    tags: ['kubernetes', 'containers', 'devops'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '16 min', 
      order: i+1 
    }))
  },
  {
    title: 'AWS Certified',
    slug: 'aws',
    description: 'Master Amazon Web Services for cloud computing.',
    category: 'DevOps & Cloud',
    subcategory: 'AWS',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 27650,
    rating: 4.9,
    tags: ['aws', 'cloud', 'devops'],
    lessons: Array.from({ length: 16 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '15 min', 
      order: i+1 
    }))
  },
  {
    title: 'Azure Fundamentals',
    slug: 'azure',
    description: 'Learn Microsoft Azure cloud platform.',
    category: 'DevOps & Cloud',
    subcategory: 'Azure',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 16540,
    rating: 4.6,
    tags: ['azure', 'cloud', 'microsoft'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Google Cloud Platform',
    slug: 'gcp',
    description: 'Master Google Cloud Platform for cloud computing.',
    category: 'DevOps & Cloud',
    subcategory: 'Google Cloud',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 14320,
    rating: 4.7,
    tags: ['gcp', 'cloud', 'google'],
    lessons: Array.from({ length: 12 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '14 min', 
      order: i+1 
    }))
  },
  {
    title: 'Heroku Deployment',
    slug: 'heroku',
    description: 'Deploy applications on Heroku cloud platform.',
    category: 'DevOps & Cloud',
    subcategory: 'Heroku',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 12340,
    rating: 4.5,
    tags: ['heroku', 'cloud', 'deployment'],
    lessons: Array.from({ length: 6 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'Netlify',
    slug: 'netlify',
    description: 'Deploy static sites and serverless functions on Netlify.',
    category: 'DevOps & Cloud',
    subcategory: 'Netlify',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 15670,
    rating: 4.6,
    tags: ['netlify', 'jamstack', 'deployment'],
    lessons: Array.from({ length: 6 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '8 min', 
      order: i+1 
    }))
  },
  {
    title: 'Vercel',
    slug: 'vercel',
    description: 'Deploy frontend applications on Vercel platform.',
    category: 'DevOps & Cloud',
    subcategory: 'Vercel',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 18760,
    rating: 4.8,
    tags: ['vercel', 'nextjs', 'deployment'],
    lessons: Array.from({ length: 6 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '8 min', 
      order: i+1 
    }))
  },
  {
    title: 'Git Complete Guide',
    slug: 'git',
    description: 'Master Git version control system.',
    category: 'DevOps & Cloud',
    subcategory: 'Git',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 32450,
    rating: 4.8,
    tags: ['git', 'version-control', 'devops'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'GitHub Mastery',
    slug: 'github',
    description: 'Learn GitHub for collaboration and open source.',
    category: 'DevOps & Cloud',
    subcategory: 'GitHub',
    difficulty: 'Beginner',
    language: 'English',
    enrolled: 28760,
    rating: 4.7,
    tags: ['github', 'git', 'collaboration'],
    lessons: Array.from({ length: 8 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '10 min', 
      order: i+1 
    }))
  },
  {
    title: 'GitLab CI/CD',
    slug: 'gitlab',
    description: 'Master GitLab for CI/CD and DevOps pipelines.',
    category: 'DevOps & Cloud',
    subcategory: 'GitLab',
    difficulty: 'Intermediate',
    language: 'English',
    enrolled: 12340,
    rating: 4.6,
    tags: ['gitlab', 'cicd', 'devops'],
    lessons: Array.from({ length: 10 }, (_, i) => ({ 
      title: `Lesson ${i+1}`, 
      slug: `lesson-${i+1}`, 
      content: '', 
      duration: '12 min', 
      order: i+1 
    }))
  }
];

// Combine all courses
const allCourses = [
  ...programmingCourses,
  ...webDevCourses,
  ...dsaCourses,
  ...mobileDevCourses,
  ...androidDevCourses,
  ...frontendCourses,
  ...backendLangCourses,
  ...backendFrameworkCourses,
  ...dataScienceCourses,
  ...databaseCourses,
  ...devopsCourses
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
    console.log(`   - Mobile Development: ${mobileDevCourses.length}`);
    console.log(`   - Android Development: ${androidDevCourses.length}`);
    console.log(`   - Frontend Frameworks: ${frontendCourses.length}`);
    console.log(`   - Backend Languages: ${backendLangCourses.length}`);
    console.log(`   - Backend Frameworks: ${backendFrameworkCourses.length}`);
    console.log(`   - Data Science & AI: ${dataScienceCourses.length}`);
    console.log(`   - Databases: ${databaseCourses.length}`);
    console.log(`   - DevOps & Cloud: ${devopsCourses.length}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

seedCourses();