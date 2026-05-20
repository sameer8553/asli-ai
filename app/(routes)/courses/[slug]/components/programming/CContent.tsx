"use client";

interface CContentProps {
  course: any;
  author: any;
}

export function CContent({ course, author }: CContentProps) {
  return (
    <div>
      {/* Hello World Program */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Hello World Program in C
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
          <p className="text-gray-700 leading-relaxed mb-4">
            Programming ki duniya me "Hello, World!" program likhna ek tradition
            hai. Ye kisi bhi New Programming Language ko seekhne ka pehla step
            hota hai. Is program ka basic purpose hota hai language ke syntex ko
            samjhna aur ye ensure karna ki aapka development environment sahi se
            setup ho chuka hai.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">C Code</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include<stdio.h> // Preprocessor Directive

int main(){  // Program Entry Point 
     printf("Hello, World!"); // Print Statement
     return 0; // Return To Function
}`}</code>
          </pre>

          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Output:</strong> Hello, World!
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            Code Explanation (Step-by-Step)
          </h3>

          <h4 className="font-semibold text-gray-900 mt-4">
            1. Preprocessor Directive - #include&lt;stdio.h&gt;
          </h4>
          <p className="text-gray-700 leading-relaxed">
            #include ek preprocessor directive hai jo compiler ko batata hai ki
            ek header file ko include karna hai. &lt;stdio.h&gt; ek standard
            input-output header file hai jo C language ke predefined functions
            ka collection hai.
          </p>

          <h4 className="font-semibold text-gray-900 mt-4">
            2. Program Entry Point - int main()
          </h4>
          <p className="text-gray-700 leading-relaxed">
            main() function kisi bhi C program ka starting point hota hai. int
            ka matlab hai ki yeh function ek integer value return karega.
          </p>

          <h4 className="font-semibold text-gray-900 mt-4">
            3. Output Statement - printf("Hello, World!");
          </h4>
          <p className="text-gray-700 leading-relaxed">
            printf() ek predefined function hai jo screen par output print karne
            ke liye use hota hai.
          </p>

          <h4 className="font-semibold text-gray-900 mt-4">
            4. Program Termination - return 0;
          </h4>
          <p className="text-gray-700 leading-relaxed">
            return 0; batata hai ki program successfully execute ho chuka hai.
          </p>
        </div>
      </div>

      {/* Addition of Two Numbers */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Addition of Two Numbers in C
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Addition ek arithmetic operation hai jisme hum two ya more than two
            numbers ko add karte hain. C language me ye operation + (Plus
            Operator) ki help se kiya jata hai.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            C Code With Static Values
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include<stdio.h>
int main(){
     int num1 = 10, num2 = 20;
     int sum;
     sum = num1 + num2;
     printf("Sum = %d", sum);
     return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Output:</strong> Sum = 30
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            C Code With Dynamic Values
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include<stdio.h>
int main(){
     int num1, num2, sum;
     printf("Enter two variables :");
     scanf("%d %d", &num1, &num2);
     sum = num1 + num2;
     printf("Sum = %d", sum);
     return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Output:</strong> Enter two variables : 30 40
            <br />
            Sum = 70
          </p>
        </div>
      </div>

      {/* Subtraction of Two Numbers */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Subtraction of Two Numbers in C
        </h2>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            C Code: Static Values ke Sath
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include<stdio.h>
int main(){
     int num1 = 40, num2 = 20;
     int sub;
     sub = num1 - num2;
     printf("Subtraction = %d", sub);
     return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Output:</strong> Subtraction = 20
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            C Code: Dynamic Values ke Sath
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include<stdio.h>
int main(){
     int num1, num2, sub;
     printf("Enter two variables :");
     scanf("%d %d", &num1, &num2);
     sub = num1 - num2;
     printf("Subtraction = %d", sub);
     return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Output:</strong> Enter two variables : 60 10
            <br />
            Subtraction = 50
          </p>
        </div>
      </div>

      {/* Data Types in C */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Data Types in C
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Data type ye decide karta hai ki variable ke andar kis type ka data
            store hoga aur kitni memory use hogi. Data Type = Type of Data +
            Memory Size
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            1. Basic (Primitive) Data Types
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>int</strong> - Whole numbers (2-4 bytes)
            </li>
            <li>
              <strong>float</strong> - Decimal values (4 bytes)
            </li>
            <li>
              <strong>double</strong> - High precision decimal (8 bytes)
            </li>
            <li>
              <strong>char</strong> - Single character (1 byte)
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            2. Derived Data Types
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Array</strong> - Multiple values of same type
            </li>
            <li>
              <strong>Pointer</strong> - Stores memory address
            </li>
            <li>
              <strong>Function</strong> - Reusable code block
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Example</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include <stdio.h>
int main() {
    int age = 20;
    float price = 99.99;
    char grade = 'A';
    
    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price);
    printf("Grade: %c\\n", grade);
    return 0;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Variables in C */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Variables in C
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Variables memory mein ek location ko represent karte hain jahan hum
            data/value store karte hain, jise baad mein use kiya ja sakta hai.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Rules for Naming Variable
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Variable name ke start mein (A-Z or a-z) or ek underscore _</li>
            <li>Variable name mein letters, digit(0-9), aur underscore _</li>
            <li>Variable name koi keyword nhi ho sakta (e.g., int, return)</li>
            <li>
              Variable name case-sensitive hote hai (e.g., age aur Age alag hai)
            </li>
          </ul>

          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-4 overflow-x-auto">
            <code>{`#include <stdio.h>
int main() {
    int age = 20;
    float price = 99.99;
    char grade = 'A';
    
    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price);
    printf("Grade: %c\\n", grade);
    return 0;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Constants in C */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Constants in C
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Constants ka matlab hota hai jo kabhi change na ho, jinki value ek
            baar assign karne ke baad change nhi ho sakti.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Types of Constants
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Integer Constants:</strong> 10, -20, 100
            </li>
            <li>
              <strong>Floating Point Constants:</strong> 3.14, -0.987
            </li>
            <li>
              <strong>Character Constants:</strong> 'A', '5'
            </li>
            <li>
              <strong>String Constants:</strong> "Hello World"
            </li>
            <li>
              <strong>Symbolic Constants:</strong> #define or const keyword
            </li>
          </ul>

          <pre className="bg-gray-900 text-white p-4 rounded-lg mt-4 overflow-x-auto">
            <code>{`#include <stdio.h>
#define PI 3.14159

int main() {
    const int AGE = 25;
    printf("Value of PI: %f\\n", PI);
    printf("Age: %d\\n", AGE);
    return 0;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Operators in C */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Operators in C
        </h2>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            1. Arithmetic Operators
          </h3>
          <p className="text-gray-700">+, -, *, /, %</p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            2. Relational Operators
          </h3>
          <p className="text-gray-700">&lt;, &lt;=, &gt;, &gt;=, ==, !=</p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            3. Logical Operators
          </h3>
          <p className="text-gray-700">&& (AND), || (OR), ! (NOT)</p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            4. Assignment Operators
          </h3>
          <p className="text-gray-700">=, +=, -=, *=, /=</p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            5. Increment/Decrement Operators
          </h3>
          <p className="text-gray-700">++ (increment), -- (decrement)</p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            6. Conditional (Ternary) Operator
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`int a = 10, b = 20;
int max = (a > b) ? a : b;
printf("%d", max); // Output: 20`}</code>
          </pre>
        </div>
      </div>

      {/* sizeof Operator */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          The sizeof Operator in C
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            The sizeof operator ek compile time operator hai, ye tab use hota
            hai jab programmer ko kisi variable or data type ki number of bytes
            chahiye hoti hai.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`#include <stdio.h>
int main() {
    int num = 10;
    int sizeOfNum = sizeof(num);
    printf("Size of Number: %d", sizeOfNum);
    return 0;
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Output:</strong> Size of Number: 4
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Yaha par int ka size 4 bytes hai because of 64-bit Machine
          </p>
        </div>
      </div>
    </div>
  );
}
