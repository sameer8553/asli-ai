"use client";

interface CSSContentProps {
  course: any;
  author: any;
}

export function CSSContent({ course, author }: CSSContentProps) {
  return (
    <div>
      {/* Introduction to CSS */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Introduction to CSS
        </h2>

        <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {author.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
            <p className="text-sm text-gray-500">Date: Tue, Aug 5, 2025</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is CSS?</h3>
          <p className="text-gray-700 leading-relaxed">
            CSS ki full form hai <strong>Cascading Style Sheets</strong>. Ye ek
            styling language hai jo HTML documents ko design aur layout deti
            hai.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            HTML structure provide karta hai, CSS us structure ko beautiful aur
            attractive banata hai.
          </p>
        </div>
      </div>

      {/* Types of CSS */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of CSS</h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            CSS ko HTML mein add karne ke 3 tarike hote hain:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            1. Inline CSS
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Direct HTML tag ke andar style likhna.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`<p style="color: green; font-size: 20px;">Hello World</p>`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            2. Internal CSS
          </h3>
          <p className="text-gray-700 leading-relaxed">
            HTML ke head section mein style tag ke andar likhna.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`<style>
  h1 { color: blue; }
</style>`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            3. External CSS
          </h3>
          <p className="text-gray-700 leading-relaxed">
            CSS ko separate file mein likhna aur link karna.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`<link rel="stylesheet" href="style.css">`}</code>
          </pre>
        </div>
      </div>

      {/* CSS Selectors */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">CSS Selectors</h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Selectors se aap HTML elements ko target karte ho.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Class Selector
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`.btn { background: blue; }`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            ID Selector
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`#header { font-size: 24px; }`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            Element Selector
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`p { color: blue; }`}</code>
          </pre>
        </div>
      </div>

      {/* Colors & Backgrounds */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Colors &amp; Backgrounds
        </h2>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Colors</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`/* Named Colors */
h1 { color: red; }

/* Hex Colors */
h1 { color: #ff0000; }

/* RGB Colors */
h1 { color: rgb(255, 0, 0); }`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            Backgrounds
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`body {
  background-color: lightblue;
  background-image: url("bg.jpg");
  background-size: cover;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Box Model */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Box Model</h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Har HTML element ek box ki tarah hota hai. Box Model 4 parts mein
            bata hota hai:
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`.box {
  margin: 20px;   /* Bahar ka gap */
  padding: 15px;  /* Andar ka gap */
  border: 2px solid black;
  width: 200px;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Flexbox */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">CSS Flexbox</h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Flexbox ek modern layout system hai jo elements ko easily arrange
            karne me help karta hai.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`.container {
  display: flex;
  justify-content: center;  /* Horizontal alignment */
  align-items: center;      /* Vertical alignment */
  gap: 20px;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Media Queries */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Media Queries (Responsive Design)
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Media Queries se aap alag screen sizes ke liye alag CSS likh sakte
            ho.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`/* Mobile */
body { font-size: 14px; }

/* Tablet */
@media (min-width: 768px) {
  body { font-size: 16px; }
}

/* Desktop */
@media (min-width: 1200px) {
  body { font-size: 18px; }
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
