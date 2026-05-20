"use client";

interface ProgrammingJSContentProps {
  course: any;
  author: any;
}

export function ProgrammingJSContent({
  course,
  author,
}: ProgrammingJSContentProps) {
  return (
    <div>
      {/* Introduction to JavaScript */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Introduction to JavaScript
        </h2>

        <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {author.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
            <p className="text-sm text-gray-500">Date: Mar 15, 2026</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            What is JavaScript?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            JavaScript ek programming language hai jo websites ko interactive
            banati hai. Isse aap web pages mein dynamic content, animations,
            form validation, aur bahut kuch add kar sakte ho.
          </p>
        </div>
      </div>

      {/* Hello World Program */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Hello World Program in JavaScript
        </h2>

        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`console.log("Hello, World!");`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Output:</strong> Hello, World!
          </p>
        </div>
      </div>

      {/* Variables */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Variables in JavaScript
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            JavaScript mein 3 tarike se variables declare kar sakte ho:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            var (Old way)
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`var name = "Sameer";
var name = "John"; // Can be redeclared`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            let (Modern way)
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`let age = 25;
age = 26; // Can be updated
// let age = 30; // Cannot be redeclared`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            const (Constant)
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`const PI = 3.14;
// PI = 3.15; // Cannot be reassigned`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            Data Types
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`let name = "Sameer";      // String
let age = 25;            // Number
let price = 99.99;       // Number (decimal)
let isStudent = true;    // Boolean
let fruits = ["Apple", "Banana"]; // Array
let person = {           // Object
  name: "Sameer",
  age: 25
};`}</code>
          </pre>
        </div>
      </div>

      {/* Operators */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Operators in JavaScript
        </h2>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Arithmetic Operators
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`let a = 10, b = 3;
console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333
console.log("Modulus:", a % b);         // 1`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            Comparison Operators
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`console.log(5 == "5");   // true (value only)
console.log(5 === "5");  // false (value and type)
console.log(5 != 3);     // true
console.log(5 > 3);      // true`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            Logical Operators
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`console.log(true && true);   // true (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)`}</code>
          </pre>
        </div>
      </div>

      {/* If-Else */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Conditional Statements (if-else)
        </h2>

        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`let age = 18;

if(age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote!");
}`}</code>
          </pre>
        </div>
      </div>

      {/* Loops */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Loops in JavaScript
        </h2>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">for Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`for(let i = 0; i < 5; i++) {
  console.log("Number:", i);
}
// Output: 0,1,2,3,4`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            while Loop
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`let i = 0;
while(i < 5) {
  console.log("Number:", i);
  i++;
}`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            for...of Loop (Arrays)
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits) {
  console.log(fruit);
}`}</code>
          </pre>
        </div>
      </div>

      {/* Functions */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Functions in JavaScript
        </h2>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Function Declaration
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`function greet(name) {
  return "Hello " + name;
}
console.log(greet("Sameer")); // Hello Sameer`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            Arrow Function (ES6)
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`const add = (a, b) => a + b;
console.log(add(5, 3)); // 8`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
