"use client";

interface PythonContentProps {
  course: any;
  author: any;
}

export function PythonContent({ course, author }: PythonContentProps) {
  return (
    <div>
      {/* Introduction to Python */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Introduction to Python
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
            What is Python?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Python ek high-level, interpreted programming language hai jo Guido
            van Rossum ne 1991 mein banayi thi. Python apne simple aur
            easy-to-read syntax ke liye famous hai. Ye data science, artificial
            intelligence, web development, automation, aur machine learning mein
            use hoti hai.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Python ki sabse badi specialty ye hai ki iska code bahut simple aur
            readable hota hai, jo beginners ke liye perfect hai.
          </p>
        </div>
      </div>

      {/* Hello World Program in Python */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Hello World Program in Python
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Programming ki duniya me "Hello, World!" program likhna ek tradition
            hai. Ye kisi bhi naye programming language ko seekhne ka pehla step
            hota hai.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Python Code</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`print("Hello, World!")`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Output:</strong> Hello, World!
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
            Code Explanation (Step-by-Step)
          </h3>

          <h4 className="font-semibold text-gray-900 mt-4">
            1. print() function
          </h4>
          <p className="text-gray-700 leading-relaxed">
            print() Python ka ek built-in function hai jo output display karne
            ke liye use hota hai.
          </p>
        </div>
      </div>

      {/* Variables in Python */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Variables in Python
        </h2>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Variables memory mein ek location ko represent karte hain jahan hum
            data store karte hain.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Data Types in Python
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>int - Whole numbers (e.g., age = 25)</li>
            <li>float - Decimal values (e.g., price = 99.99)</li>
            <li>str - String/Text (e.g., name = "Sameer")</li>
            <li>bool - Boolean True/False (e.g., is_student = True)</li>
          </ul>

          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`name = "Sameer"
age = 25
price = 99.99
is_student = True

print("Name:", name)
print("Age:", age)`}</code>
          </pre>
        </div>
      </div>

      {/* Operators in Python */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Operators in Python
        </h2>

        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Arithmetic Operators
          </h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`a, b = 10, 3
print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)`}</code>
          </pre>
        </div>
      </div>

      {/* Conditional Statements */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Conditional Statements (if-else)
        </h2>

        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`age = int(input("Enter your age: "))

if age >= 18:
    print("You are eligible to vote!")
else:
    print("You are not eligible to vote!")`}</code>
          </pre>
        </div>
      </div>

      {/* Loops in Python */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Loops in Python
        </h2>

        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`# for loop
for i in range(5):
    print("Number:", i)

# while loop
i = 0
while i < 5:
    print("Number:", i)
    i += 1`}</code>
          </pre>
        </div>
      </div>

      {/* Lists in Python */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Lists in Python
        </h2>

        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`fruits = ["Apple", "Banana", "Mango"]
for fruit in fruits:
    print(fruit)

numbers = [10, 20, 30]
numbers.append(40)
print(numbers)`}</code>
          </pre>
        </div>
      </div>

      {/* Functions in Python */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Functions in Python
        </h2>

        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`def add(a, b):
    return a + b

result = add(10, 20)
print("Sum:", result)`}</code>
          </pre>
        </div>
      </div>

      {/* Addition of Two Numbers */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Addition of Two Numbers
        </h2>

        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
sum = num1 + num2
print("Sum =", sum)`}</code>
          </pre>
        </div>
      </div>

      {/* Subtraction of Two Numbers */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Subtraction of Two Numbers
        </h2>

        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
sub = num1 - num2
print("Subtraction =", sub)`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
