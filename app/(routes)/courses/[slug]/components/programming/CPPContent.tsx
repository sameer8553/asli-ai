'use client';

interface CPPContentProps {
  course: any;
  author: any;
}

export function CPPContent({ course, author }: CPPContentProps) {
  return (
    <div>
      {/* Introduction to C++ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction to C++</h2>
        
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is C++?</h3>
          <p className="text-gray-700 leading-relaxed">
            C++ ek powerful programming language hai jo Bjarne Stroustrup ne 1985 mein banayi thi. Ye C language ka extension hai aur object-oriented programming (OOP) ko support karta hai. Game development, system programming, aur competitive programming mein C++ ka use bahut hota hai.
          </p>
        </div>
      </div>

      {/* Hello World Program in C++ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hello World Program in C++</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Programming ki duniya me "Hello, World!" program likhna ek tradition hai. Ye kisi bhi naye programming language ko seekhne ka pehla step hota hai.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">C++ Code</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2"><strong>Output:</strong> Hello, World!</p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Code Explanation (Step-by-Step)</h3>
          
          <h4 className="font-semibold text-gray-900 mt-4">1. #include &lt;iostream&gt;</h4>
          <p className="text-gray-700 leading-relaxed">iostream ek header file hai jo input-output operations ke liye functions provide karti hai. Isme cout, cin, endl jaise functions hote hain.</p>
          
          <h4 className="font-semibold text-gray-900 mt-4">2. using namespace std;</h4>
          <p className="text-gray-700 leading-relaxed">Yeh line batati hai ki hum std namespace use kar rahe hain. Isse hume har baar std:: likhne ki zaroorat nahi hoti.</p>
          
          <h4 className="font-semibold text-gray-900 mt-4">3. int main()</h4>
          <p className="text-gray-700 leading-relaxed">main() function kisi bhi C++ program ka entry point hota hai. Execution yahin se start hoti hai.</p>
          
          <h4 className="font-semibold text-gray-900 mt-4">4. cout &lt;&lt; "Hello, World!" &lt;&lt; endl;</h4>
          <p className="text-gray-700 leading-relaxed">cout output display karne ke liye use hota hai. endl new line create karta hai.</p>
          
          <h4 className="font-semibold text-gray-900 mt-4">5. return 0;</h4>
          <p className="text-gray-700 leading-relaxed">return 0 batata hai ki program successfully execute ho chuka hai.</p>
        </div>
      </div>

      {/* Variables in C++ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Variables in C++</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Variables memory mein ek location ko represent karte hain jahan hum data store karte hain.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">Data Types in C++</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>int</strong> - Whole numbers (4 bytes)</li>
            <li><strong>float</strong> - Decimal values (4 bytes)</li>
            <li><strong>double</strong> - High precision decimal (8 bytes)</li>
            <li><strong>char</strong> - Single character (1 byte)</li>
            <li><strong>bool</strong> - Boolean (true/false)</li>
            <li><strong>string</strong> - Sequence of characters</li>
          </ul>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Variable Declaration and Initialization</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
  // Variable declaration and initialization
  int age = 25;
  float price = 99.99;
  double pi = 3.1415926535;
  char grade = 'A';
  bool isStudent = true;
  string name = "Sameer";
  
  cout << "Name: " << name << endl;
  cout << "Age: " << age << endl;
  cout << "Price: " << price << endl;
  cout << "Grade: " << grade << endl;
  
  return 0;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Operators in C++ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Operators in C++</h2>
        
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">1. Arithmetic Operators</h3>
          <p className="text-gray-700">+, -, *, /, %</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`int a = 10, b = 3;
cout << "Addition: " << a + b << endl;    // 13
cout << "Subtraction: " << a - b << endl; // 7
cout << "Multiplication: " << a * b << endl; // 30
cout << "Division: " << a / b << endl;    // 3
cout << "Modulus: " << a % b << endl;     // 1`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">2. Relational Operators</h3>
          <p className="text-gray-700">&lt;, &lt;=, &gt;, &gt;=, ==, !=</p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">3. Logical Operators</h3>
          <p className="text-gray-700">&& (AND), || (OR), ! (NOT)</p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">4. Increment/Decrement Operators</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{`int x = 5;
cout << "++x: " << ++x << endl; // 6 (prefix)
cout << "x++: " << x++ << endl; // 6 (postfix)
cout << "x: " << x << endl;     // 7`}</code>
          </pre>
        </div>
      </div>

      {/* If-Else Statements */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Conditional Statements (if-else) in C++</h2>
        
        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include <iostream>
using namespace std;

int main() {
  int age;
  cout << "Enter your age: ";
  cin >> age;
  
  if(age >= 18) {
    cout << "You are eligible to vote!" << endl;
  } else {
    cout << "You are not eligible to vote!" << endl;
  }
  
  return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2"><strong>Output:</strong> Enter your age: 20<br/>You are eligible to vote!</p>
        </div>
      </div>

      {/* Loops in C++ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Loops in C++</h2>
        
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">1. for Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`for(int i = 0; i < 5; i++) {
  cout << "Number: " << i << endl;
}
// Output: 0,1,2,3,4`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">2. while Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`int i = 0;
while(i < 5) {
  cout << "Number: " << i << endl;
  i++;
}`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">3. do-while Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`int i = 0;
do {
  cout << "Number: " << i << endl;
  i++;
} while(i < 5);`}</code>
          </pre>
        </div>
      </div>

      {/* Functions in C++ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Functions in C++</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Functions code ke reusable blocks hote hain. Ek baar function define karne ke baad use multiple times call kar sakte ho.
          </p>
          
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include <iostream>
using namespace std;

// Function declaration
int add(int a, int b) {
  return a + b;
}

int main() {
  int result = add(10, 20);
  cout << "Sum: " << result << endl;
  return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2"><strong>Output:</strong> Sum: 30</p>
        </div>
      </div>

      {/* Arrays in C++ */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Arrays in C++</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Arrays ek hi type ki multiple values store karne ke liye use hote hain.
          </p>
          
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include <iostream>
using namespace std;

int main() {
  int numbers[5] = {10, 20, 30, 40, 50};
  
  for(int i = 0; i < 5; i++) {
    cout << "numbers[" << i << "] = " << numbers[i] << endl;
  }
  
  return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2"><strong>Output:</strong> numbers[0] = 10, numbers[1] = 20, numbers[2] = 30, numbers[3] = 40, numbers[4] = 50</p>
        </div>
      </div>
    </div>
  );
}