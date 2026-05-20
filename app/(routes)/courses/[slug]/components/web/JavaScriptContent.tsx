'use client';

interface JavaScriptContentProps {
  course: any;
  author: any;
}

export function JavaScriptContent({ course, author }: JavaScriptContentProps) {
  return (
    <div>
      {/* Introduction to JavaScript */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction to JavaScript</h2>
        
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is JavaScript?</h3>
          <p className="text-gray-700 leading-relaxed">
            JavaScript ek programming language hai jo websites ko interactive banati hai. Isse aap web pages mein dynamic content, animations, form validation, aur bahut kuch add kar sakte ho.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            JavaScript ko browser understand karta hai aur ye client-side pe run hoti hai.
          </p>
        </div>
      </div>

      {/* Variables - Theory + Code */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Variables in JavaScript</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Variables data store karne ke liye use hote hain. JavaScript mein 3 tarike se variables declare kar sakte ho:
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">var</h3>
          <p className="text-gray-700 leading-relaxed">
            Old way to declare variables. Ye function-scoped hota hai aur ise dubara declare kar sakte ho.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`var name = "John";
var name = "Doe"; // ✅ Can be redeclared`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">let</h3>
          <p className="text-gray-700 leading-relaxed">
            Modern way to declare variables. Ye block-scoped hota hai. Iski value update kar sakte ho but redeclare nahi kar sakte.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`let age = 25;
age = 26; // ✅ Can be updated
// let age = 30; // ❌ Cannot be redeclared`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">const</h3>
          <p className="text-gray-700 leading-relaxed">
            Constant variables ke liye use hota hai. Ye block-scoped hota hai. Iski value kabhi change nahi kar sakte.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`const PI = 3.14;
// PI = 3.15; // ❌ Cannot be reassigned`}</code>
          </pre>
        </div>
      </div>

      {/* Data Types - Theory + Code */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Types in JavaScript</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            JavaScript mein 8 basic data types hote hain:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`// String - Text data
let name = "Sameer";

// Number - Integer or decimal
let age = 25;
let price = 99.99;

// Boolean - true or false
let isLoggedIn = true;

// Array - List of values
let fruits = ["Apple", "Banana", "Mango"];

// Object - Key-value pairs
let person = {
  name: "Sameer",
  age: 25
};

// Null - Empty value
let empty = null;

// Undefined - Value not assigned
let notDefined;`}</code>
          </pre>
        </div>
      </div>

      {/* Functions - Theory + Code */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Functions in JavaScript</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Functions code ke reusable blocks hote hain. JavaScript mein 3 tarike se functions likh sakte ho:
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">1. Function Declaration</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`function greet(name) {
  return "Hello " + name;
}
console.log(greet("Sameer")); // Hello Sameer`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">2. Function Expression</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`const greet = function(name) {
  return "Hello " + name;
};
console.log(greet("Sameer")); // Hello Sameer`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">3. Arrow Function (ES6)</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`// Single line
const add = (a, b) => a + b;

// Multiple lines
const multiply = (a, b) => {
  return a * b;
};
console.log(add(5, 3));     // 8`}</code>
          </pre>
        </div>
      </div>

      {/* Loops - Theory + Code */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Loops in JavaScript</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Loops ka use same code ko multiple times run karne ke liye kiya jata hai.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">for Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`for(let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}
// Output: 0,1,2,3,4`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">while Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`let i = 0;
while(i < 5) {
  console.log("Number: " + i);
  i++;
}`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">for...of Loop (Arrays)</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits) {
  console.log(fruit);
}`}</code>
          </pre>
        </div>
      </div>

      {/* Arrays - Theory + Code */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Arrays in JavaScript</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Arrays multiple values ko ek single variable mein store karne ke liye use hote hain.
          </p>
          
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`let fruits = ["Apple", "Banana", "Mango"];

// Array Methods
fruits.push("Orange");     // Add at end
fruits.pop();              // Remove from end
fruits.shift();            // Remove from start
fruits.unshift("Apple");   // Add at start

// Loop through array
fruits.forEach(fruit => {
  console.log(fruit);
});`}</code>
          </pre>
        </div>
      </div>

      {/* DOM Manipulation - Theory + Code */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">DOM Manipulation</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            DOM (Document Object Model) manipulation se aap HTML elements ko select aur modify kar sakte ho.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">Selecting Elements</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`// By ID
let heading = document.getElementById("myHeading");

// By Class
let paragraphs = document.getElementsByClassName("text");

// By Query Selector
let element = document.querySelector(".myClass");`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Changing Content & Events</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`// Change text
element.textContent = "New Text";

// Add event listener
button.addEventListener("click", () => {
  alert("Button clicked!");
});`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}