import Link from 'next/link';
import { FiClock, FiUser } from 'react-icons/fi';

// Sample articles data
const articles = [
  {
    id: 1,
    title: 'JavaScript Closures - Hinglish mein Samjhein',
    excerpt: 'JavaScript closures ko aasan bhasha mein samjhein. Examples ke saath poori jaankari.',
    author: 'Sameer Saifi',
    date: 'Mar 15, 2026',
    readTime: '8 min read',
    category: 'JavaScript',
    slug: 'javascript-closures'
  },
  {
    id: 2,
    title: 'Python Lists vs Tuples - Kya antar hai?',
    excerpt: 'Python mein lists aur tuples mein kya difference hai? Kab kya use karein?',
    author: 'Sameer Saifi',
    date: 'Mar 14, 2026',
    readTime: '6 min read',
    category: 'Python',
    slug: 'python-lists-vs-tuples'
  },
  {
    id: 3,
    title: 'React Hooks - useState aur useEffect',
    excerpt: 'React Hooks ko samjhein simple Hinglish mein. useState aur useEffect ka complete guide.',
    author: 'Sameer Saifi',
    date: 'Mar 13, 2026',
    readTime: '10 min read',
    category: 'React',
    slug: 'react-hooks'
  },
  {
    id: 4,
    title: 'CSS Flexbox - Aasan Bhasha mein',
    excerpt: 'CSS Flexbox ko aasani se samjhein. Flex container, flex items aur properties ke saath.',
    author: 'Sameer Saifi',
    date: 'Mar 12, 2026',
    readTime: '7 min read',
    category: 'CSS',
    slug: 'css-flexbox'
  },
  {
    id: 5,
    title: 'HTML5 - New Features',
    excerpt: 'HTML5 mein aaye naye features - video, audio, canvas, local storage aur bhi bahut kuch.',
    author: 'Sameer Saifi',
    date: 'Mar 11, 2026',
    readTime: '5 min read',
    category: 'HTML',
    slug: 'html5-features'
  },
  {
    id: 6,
    title: 'DSA - Arrays kya hote hain?',
    excerpt: 'Data Structures mein Arrays ka kya role hai? Operations aur complexity samjhein.',
    author: 'Sameer Saifi',
    date: 'Mar 10, 2026',
    readTime: '9 min read',
    category: 'DSA',
    slug: 'dsa-arrays'
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tutorials & Articles</h1>
          <p className="text-gray-600">
            Easy to understand programming tutorials in Hinglish
          </p>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-lg shadow p-4 mb-8 overflow-x-auto">
          <div className="flex gap-2">
            {['All', 'JavaScript', 'Python', 'React', 'CSS', 'HTML', 'DSA'].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition h-full"
            >
              <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-5xl text-white">{article.category[0]}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FiUser className="text-blue-600" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="text-blue-600" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}