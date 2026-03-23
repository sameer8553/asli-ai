'use client';

import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { useState } from "react";
import toast from 'react-hot-toast';

export default function AboutPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [savedEmail, setSavedEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Popup dikhao
        setSavedEmail(email);
        setShowPopup(true);
        setEmail('');
        
        // 3 seconds ke baad popup自动 close
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } else {
        toast.error(data.error || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-100 px-4 relative">

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed top-24 right-4 z-50 animate-slide-down">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3">
            <div className="bg-white text-green-500 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
              ✓
            </div>
            <div>
              <p className="font-semibold">Email Saved!</p>
              <p className="text-sm opacity-90">{savedEmail}</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-20">

        {/* WHO I AM */}
        <section>
          <h1 className="text-center text-3xl font-bold text-gray-800">
            WHO I AM
          </h1>
          <div className="w-12 h-[3px] bg-blue-600 mx-auto mt-2 mb-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* IMAGE */}
            <div className="flex-shrink-0">
              <Image
                src="/images/my image 1 .jpeg"
                alt="coding"
                width={300}
                height={140}
               className="rounded-xl object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                Hi, I'm <span className="text-blue-600 font-semibold">Sameer</span>, 
                a self-taught developer and tech enthusiast who loves to explore 
                and share knowledge about programming and software development.
              </p>

              <p>
                This is a self learning platform where anyone can learn by 
                themselves. My goal is to simplify tough topics, break down 
                real-world projects, and inspire beginners to build with 
                confidence.
              </p>
            </div>

          </div>
        </section>


        {/* MY MISSION */}
        <section>
          <h1 className="text-center text-3xl font-bold text-gray-800">
            MY MISSION
          </h1>
          <div className="w-12 h-[3px] bg-blue-600 mx-auto mt-2 mb-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* IMAGE */}
            <div className="flex-shrink-0">
              <Image
                src="/images/code image.jpg"
                alt="mission"
                width={300}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                My mission is to make programming and technology education 
                accessible and beginner-friendly.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Delivering high-quality, easy-to-understand content</li>
                <li>Encouraging hands-on learning through real projects</li>
                <li>Keeping up with the latest tools and frameworks</li>
                <li>Creating a space where learners feel supported</li>
              </ul>
            </div>

          </div>
        </section>


        {/* ABOUT ME */}
        <section>
          <h1 className="text-center text-3xl font-bold text-gray-800">
            ABOUT ME
          </h1>
          <div className="w-12 h-[3px] bg-blue-600 mx-auto mt-2 mb-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* IMAGE */}
            <div className="flex-shrink-0">
              <Image
                src="/images/my image 2.jpeg"
                alt="Sameer Saifi"
                width={250}
                height={250}
                className="rounded-xl object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-blue-600 font-semibold text-lg mb-1">
                Sameer 
              </h3>

              <p className="text-gray-500 mb-3">
                Founder and Developer
              </p>

              <p className="text-gray-700 leading-relaxed">
                I manage everything on this platform — from designing and 
                developing the site to writing article posts and engaging 
                with the community. I believe in continuous learning and 
                sharing knowledge to make tech easier for others.
              </p>
            </div>

          </div>
        </section>


        {/* CONTACT */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            CONTACT US
          </h2>

          <p className="text-gray-600 text-center mb-6">
            Enter your email and send your query.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FiMail />
                  <span>Send Email</span>
                </>
              )}
            </button>
          </form>
        </section>

      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}