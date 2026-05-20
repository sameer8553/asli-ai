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
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Changed default to 'All'
  const [selectedTopic, setSelectedTopic] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    'All', // Added 'All' option
    'Programming Languages',
    'Web Development',
    'Data Structures & Algorithms',
    'Frontend Frameworks',
    'Backend Languages',
    'Databases',
  ];

  // Define all topics with their categories for better filtering
  const topicDefinitions = {
    'Programming Languages': [
      { name: 'C', slug: 'c', keywords: ['C', 'C Programming'] },
      { name: 'C++', slug: 'cpp', keywords: ['C++', 'CPP'] },
      { name: 'Java', slug: 'java', keywords: ['Java'] },
      { name: 'Python', slug: 'python', keywords: ['Python'] },
      { name: 'JavaScript', slug: 'javascript', keywords: ['JavaScript'] },
    ],
    'Web Development': [
      { name: 'HTML5', slug: 'html5', keywords: ['HTML', 'HTML5'] },
      { name: 'CSS3', slug: 'css3', keywords: ['CSS', 'CSS3'] },
      { name: 'JavaScript', slug: 'javascript', keywords: ['JavaScript'] },
      { name: 'Node.js', slug: 'nodejs', keywords: ['Node.js', 'NodeJS'] },
      { name: 'Express.js', slug: 'express', keywords: ['Express', 'Express.js'] },
    ],
    'Data Structures & Algorithms': [
      { name: 'DSA in C', slug: 'dsa-c', keywords: ['DSA in C', 'Data Structures C'] },
      { name: 'DSA in C++', slug: 'dsa-cpp', keywords: ['DSA in C++', 'Data Structures C++'] },
      { name: 'DSA in Java', slug: 'dsa-java', keywords: ['DSA in Java', 'Data Structures Java'] },
      { name: 'DSA in Python', slug: 'dsa-python', keywords: ['DSA in Python', 'Data Structures Python'] },
    ],
   
    'Frontend Frameworks': [
      { name: 'React.js', slug: 'react', keywords: ['React', 'React.js'] },
      { name: 'Angular', slug: 'angular', keywords: ['Angular'] },
      { name: 'Tailwind CSS', slug: 'tailwind', keywords: ['Tailwind', 'Tailwind CSS'] },
      { name: 'Bootstrap', slug: 'bootstrap', keywords: ['Bootstrap'] },
    ],
    'Backend Languages': [
      { name: 'JavaScript', slug: 'javascript', keywords: ['JavaScript'] },
      { name: 'Python', slug: 'python', keywords: ['Python'] },
      { name: 'Java', slug: 'java', keywords: ['Java'] },
    ],
    'Databases': [
      { name: 'MySQL', slug: 'mysql', keywords: ['MySQL'] },
      { name: 'MongoDB', slug: 'mongodb', keywords: ['MongoDB'] },
      { name: 'PostgreSQL', slug: 'postgresql', keywords: ['PostgreSQL'] },
    ],
    
  };

  // Fetch all courses once on component mount
  useEffect(() => {
    fetchAllCourses();
  }, []);

  // Filter courses when category or topic changes
  useEffect(() => {
    filterCoursesLocally();
  }, [selectedCategory, selectedTopic, allCourses]);

  const fetchAllCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/courses');
      const data = await res.json();
      
      console.log('📦 Total courses fetched:', data.courses?.length);
      
      if (data.success) {
        setAllCourses(data.courses);
      }
    } catch (error) {
      console.error('❌ Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  // Improved local filtering logic
  const filterCoursesLocally = () => {
    if (!allCourses.length) {
      setFilteredCourses([]);
      return;
    }

    let filtered = [...allCourses];

    // Filter by category (skip if 'All' is selected)
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Filter by topic if selected
    if (selectedTopic && selectedCategory !== 'All') {
      const topicsForCategory = topicDefinitions[selectedCategory as keyof typeof topicDefinitions];
      const selectedTopicData = topicsForCategory?.find(topic => topic.slug === selectedTopic);
      
      if (selectedTopicData) {
        // Filter based on keywords in course title or description
        filtered = filtered.filter(course => {
          const searchText = `${course.title} ${course.description}`.toLowerCase();
          return selectedTopicData.keywords.some(keyword => 
            searchText.includes(keyword.toLowerCase())
          );
        });
      }
    }

    console.log(`🔍 Filtered courses: ${filtered.length} (Category: ${selectedCategory}, Topic: ${selectedTopic})`);
    setFilteredCourses(filtered);
  };

  // Improved display title logic
  const getDisplayTitle = (course: Course): string => {
    const title = course.title;
    const category = course.category;
    
    // Create a more generic and flexible title mapping
    // const titleMap: { [key: string]: string } = {
    //   'C': 'C Complete Course',
    //   'C++': 'C++ Complete Course',
    //   'Java': 'Java Complete Course',
    //   'Python': 'Python Complete Course',
    //   'JavaScript': 'JavaScript Complete Course',
    //   'TypeScript': 'TypeScript Complete Course',
    //   'HTML': 'HTML5 Complete Course',
    //   'CSS': 'CSS3 Complete Course',
    //   'Node.js': 'Node.js Complete Course',
    //   'Express': 'Express.js Complete Course',
    //   'Django': 'Django Complete Course',
    //   'Flask': 'Flask Complete Course',
    //   'React': 'React.js Complete Course',
    //   'Angular': 'Angular Complete Course',
    //   'Vue': 'Vue.js Complete Course',
    // };
    
    // // Check if title contains any of the keys and return mapped value
    // for (const [key, value] of Object.entries(titleMap)) {
    //   if (title.includes(key)) {
    //     return value;
    //   }
    // }
    
    // For DSA courses
    if (category === 'Data Structures & Algorithms') {
      if (title.includes('C') && !title.includes('C++')) return 'DSA in C Complete Course';
      if (title.includes('C++')) return 'DSA in C++ Complete Course';
      if (title.includes('Java')) return 'DSA in Java Complete Course';
      if (title.includes('Python')) return 'DSA in Python Complete Course';
      if (title.includes('JavaScript')) return 'DSA in JavaScript Complete Course';
    }
    
    // Return original title if no mapping found
    return title;
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedTopic(''); // Reset topic when category changes
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedTopic('');
  };

  const getTopicsForCategory = () => {
    if (selectedCategory === 'All') return [];
    return topicDefinitions[selectedCategory as keyof typeof topicDefinitions] || [];
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


        {/* Course Grid */}
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
              onClick={handleResetFilters}
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