'use client';

import { useState, useEffect } from 'react';
import CourseCard from '@/app/components/cards/CourseCard';

// ✅ Type define
type Course = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  subcategory?: string;
  difficulty: string;
  language: string;
  enrolled: number;
  rating: number;
  totalLessons: number; 
  tags?: string[];
  lessons?: any[];
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Programming Languages');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    'Programming Languages',
    'Web Development',
    'Data Structures & Algorithms',
    'Mobile Development',
    'Android Development',
    'Frontend Frameworks',
    'Backend Languages',
    'Backend Frameworks',
    'Data Science & AI',
    'Databases',
    'DevOps & Cloud',
  ];

  // ✅ Programming Languages Topics
  const programmingTopics = [
    { name: 'C', slug: 'c' },
    { name: 'C++', slug: 'cpp' },
    { name: 'Java', slug: 'java' },
    { name: 'Python', slug: 'python' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
  ];

  // ✅ Web Development Topics
  const webDevTopics = [
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', slug: 'css3' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Node.js', slug: 'nodejs' },
    { name: 'Express.js', slug: 'express' },
  ];

  // ✅ DSA Topics
  const dsaTopics = [
    { name: 'DSA in C', slug: 'dsa-c' },
    { name: 'DSA in C++', slug: 'dsa-cpp' },
    { name: 'DSA in Java', slug: 'dsa-java' },
    { name: 'DSA in Python', slug: 'dsa-python' },
    { name: 'DSA in JavaScript', slug: 'dsa-javascript' },
  ];

  // ✅ Mobile Development Topics
  const mobileDevTopics = [
    { name: 'Android', slug: 'android' },
    { name: 'Android Studio', slug: 'android-studio' },
    { name: 'Flutter', slug: 'flutter' },
    { name: 'React Native', slug: 'react-native' },
    { name: 'Swift', slug: 'swift' },
  ];

  // ✅ Android Development Topics
  const androidDevTopics = [
    { name: 'Android', slug: 'android' },
    { name: 'Kotlin', slug: 'kotlin' },
    { name: 'Java', slug: 'java' },
    { name: 'Android Studio', slug: 'android-studio' },
    { name: 'Flutter', slug: 'flutter' },
  ];

  // ✅ Frontend Frameworks Topics
  const frontendTopics = [
    { name: 'React.js', slug: 'react' },
    { name: 'Angular', slug: 'angular' },
    { name: 'Vue.js', slug: 'vue' },
    { name: 'Tailwind CSS', slug: 'tailwind' },
    { name: 'Bootstrap', slug: 'bootstrap' },
  ];

  // ✅ Backend Languages Topics
  const backendLangTopics = [
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'Python', slug: 'python' },
    { name: 'Java', slug: 'java' },
  ];

  // ✅ Backend Frameworks Topics
  const backendFrameworkTopics = [
    { name: 'Django', slug: 'django' },
    { name: 'Flask', slug: 'flask' },
    { name: 'Laravel', slug: 'laravel' },
    { name: 'Spring Boot', slug: 'spring-boot' },
    { name: 'ASP.NET', slug: 'aspnet' },
  ];

  // ✅ Data Science & AI Topics
  const dataScienceTopics = [
    { name: 'TensorFlow', slug: 'tensorflow' },
    { name: 'PyTorch', slug: 'pytorch' },
    { name: 'NumPy', slug: 'numpy' },
    { name: 'Pandas', slug: 'pandas' },
  ];

  // ✅ Databases Topics
  const databaseTopics = [
    { name: 'MySQL', slug: 'mysql' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'PostgreSQL', slug: 'postgresql' },
  ];

  // ✅ DevOps & Cloud Topics
  const devopsTopics = [
    { name: 'Docker', slug: 'docker' },
    { name: 'AWS', slug: 'aws' },
    { name: 'Kubernetes', slug: 'kubernetes' },
    { name: 'Git', slug: 'git' },
  ];

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [selectedCategory, selectedTopic, courses]);

  const fetchCourses = async () => {
    try {
      const res = await fetch('/api/courses');
      const data = await res.json();
      if (data.success) {
        setCourses(data.courses);
        setFilteredCourses(data.courses);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Function to get display title
  const getDisplayTitle = (course: Course): string => {
    const title = course.title;
    const category = course.category;
    
    if (category === 'Programming Languages') {
      if (title.includes('C') && !title.includes('C++') && !title.includes('C#')) return 'C Complete Course';
      if (title.includes('C++')) return 'C++ Complete Course';
      if (title.includes('Java')) return 'Java Complete Course';
      if (title.includes('Python')) return 'Python Complete Course';
      if (title.includes('JavaScript')) return 'JavaScript Complete Course';
      if (title.includes('TypeScript')) return 'TypeScript Complete Course';
    }
    
    if (category === 'Web Development') {
      if (title.includes('HTML')) return 'HTML5 Complete Course';
      if (title.includes('CSS')) return 'CSS3 Complete Course';
      if (title.includes('Node.js')) return 'Node.js Complete Course';
      if (title.includes('Express')) return 'Express.js Complete Course';
      if (title.includes('JavaScript')) return 'JavaScript Complete Course';
      if (title.includes('TypeScript')) return 'TypeScript Complete Course';
    }
    
    if (category === 'Data Structures & Algorithms') {
      if (title.includes('C') && !title.includes('C++')) return 'DSA in C Complete Course';
      if (title.includes('C++')) return 'DSA in C++ Complete Course';
      if (title.includes('Java')) return 'DSA in Java Complete Course';
      if (title.includes('Python')) return 'DSA in Python Complete Course';
      if (title.includes('JavaScript')) return 'DSA in JavaScript Complete Course';
    }
    
    return title;
  };

  const filterCourses = () => {
    let filtered = [...courses];
  
    // ✅ Filter by category
    filtered = filtered.filter(
      (course) =>
        course.category &&
        course.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  
    // ✅ Topic filter - FIXED FOR ALL BUTTONS
    if (selectedTopic) {
      const topic = selectedTopic.toLowerCase();
      
      filtered = filtered.filter((course) => {
        const title = course.title.toLowerCase();
        const subcategory = (course.subcategory || '').toLowerCase();
        
        // C button
        if (topic === 'c') {
          return (title.includes('c ') || title.includes('c programming') || title.includes('c language')) 
                 && !title.includes('c++') && !subcategory.includes('cpp');
        }
        
        // C++ button
        if (topic === 'cpp') {
          return title.includes('c++') || title.includes('cpp');
        }
        
        // Java button - exclude JavaScript
        if (topic === 'java') {
          return (title.includes('java') && !title.includes('javascript')) || subcategory === 'java';
        }
        
     
// ✅ Python button - FIXED
if (topic === 'python') {
  return title.includes('python') || title.includes('python mastery') || title.includes('python programming');
}

        
 // ✅ JavaScript button - FIXED
 if (topic === 'javascript') {
  return title.includes('javascript') || title.includes('js') || title.includes('javascript complete');
}


        // TypeScript button
        if (topic === 'typescript') {
          return title.includes('typescript') || title.includes('ts');
        }
        
        return false;
      });
    }
  
    // ✅ Programming Languages sorting (only when no topic selected)
    if (selectedCategory === 'Programming Languages' && !selectedTopic) {
      const orderList = ['c', 'cpp', 'java', 'python', 'javascript', 'typescript'];
      
      filtered = filtered.filter((course) => {
        const subcategory = (course.subcategory || '').toLowerCase();
        const title = (course.title || '').toLowerCase();
        return orderList.some(topic => 
          subcategory.includes(topic) || title.includes(topic)
        );
      });
      
      filtered.sort((a, b) => {
        const aVal = (a.subcategory || a.title || '').toLowerCase();
        const bVal = (b.subcategory || b.title || '').toLowerCase();
        
        const aIndex = orderList.findIndex(o => aVal.includes(o));
        const bIndex = orderList.findIndex(o => bVal.includes(o));
        
        return aIndex - bIndex;
      });
    }
  
    setFilteredCourses(filtered);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedTopic('');
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
  };

  const getTopicsForCategory = () => {
    switch (selectedCategory) {
      case 'Programming Languages': return programmingTopics;
      case 'Web Development': return webDevTopics;
      case 'Data Structures & Algorithms': return dsaTopics;
      case 'Mobile Development': return mobileDevTopics;
      case 'Android Development': return androidDevTopics;
      case 'Frontend Frameworks': return frontendTopics;
      case 'Backend Languages': return backendLangTopics;
      case 'Backend Frameworks': return backendFrameworkTopics;
      case 'Data Science & AI': return dataScienceTopics;
      case 'Databases': return databaseTopics;
      case 'DevOps & Cloud': return devopsTopics;
      default: return [];
    }
  };

  const topics = getTopicsForCategory();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Courses</h1>
          <p className="text-gray-600">Choose your path and start learning today</p>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Topics */}
        {topics.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {topics.map((topic) => (
                <button
                  key={topic.slug}
                  onClick={() => handleTopicClick(topic.slug)}
                  className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
                    selectedTopic === topic.slug
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                  }`}
                >
                  {topic.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Course Grid with modified titles */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course._id} 
                course={{
                  ...course,
                  title: getDisplayTitle(course)
                }} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-500">Try selecting a different category or topic</p>
            <button
              onClick={() => {
                setSelectedCategory('Programming Languages');
                setSelectedTopic('');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}