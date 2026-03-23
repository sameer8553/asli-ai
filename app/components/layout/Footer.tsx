import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Learn Codeing </h3>
            <p className="text-sm leading-relaxed">
              Learn programming with easy-to-understand courses, tutorials, and AI-powered tools. Start your coding journey today.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-white transition">
                <FiGithub size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <FiTwitter size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <FiLinkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <FiMail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white transition">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="hover:text-white transition">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Top Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses?category=python" className="hover:text-white transition">
                  Python
                </Link>
              </li>
              <li>
                <Link href="/courses?category=java" className="hover:text-white transition">
                  Java
                </Link>
              </li>
              <li>
                <Link href="/courses?category=javascript" className="hover:text-white transition">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/courses?category=dsa" className="hover:text-white transition">
                  DSA
                </Link>
              </li>
              <li>
                <Link href="/courses?category=webdev" className="hover:text-white transition">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Learn Codeing  . All rights reserved. Made with ❤️ for learners worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;