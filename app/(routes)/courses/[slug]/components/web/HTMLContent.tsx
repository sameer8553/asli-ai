'use client';

interface HTMLContentProps {
  course: any;
  author: any;
}

export function HTMLContent({ course, author }: HTMLContentProps) {
  return (
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
  );
}










































