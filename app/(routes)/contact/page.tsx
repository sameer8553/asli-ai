import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-xl text-blue-100">
            We're here to help and answer any questions you might have.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Send a Message
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Let's get in touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                Have questions or suggestions? We'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FiMapPin className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">New Mustafabad, Delhi - 110094</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FiPhone className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9818239247</p>
                  </div>  
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FiMail className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">learncoding.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map with iframe */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Google Maps iframe */}
              <div className="h-64 w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3456789!2d77.123456!3d28.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d123456789abc%3A0x123456789abcdef!2sNew%20Mustafabad%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Content - */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h3>
                
                <a 
                  href="https://www.google.com/maps/search/New+Mustafabad+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline inline-block mb-2">
                
                </a>
                
              </div>
            </div>
          </div>
        </div> 

        {/* Query Form */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Fill The Form For Query...</h3>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Leave a message here..."
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Miscellaneous */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">MISCELLANEOUS</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact-Us</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">ABOUT</h4>
            <p className="text-gray-600 leading-relaxed">
              Learn Coding is a platform designed to empower young Indian programmers with easy-to-understand 
              technical content. Through our website, we deliver the latest insights in technology, explained 
              in a simple Hinglish format. Our goal is to make learning accessible and engaging for aspiring 
              developers. <Link href="/about" className="text-blue-600 hover:underline">Learn More</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}