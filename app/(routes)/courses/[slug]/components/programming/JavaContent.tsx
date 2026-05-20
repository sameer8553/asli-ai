'use client';

interface JavaContentProps {
  course: any;
  author: any;
}

export function JavaContent({ course, author }: JavaContentProps) {
  return (
    <div>
      {/* Introduction to Java */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction to Java</h2>
        
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is Java?</h3>
          <p className="text-gray-700 leading-relaxed">
            Java ek object-oriented programming language hai jo James Gosling ne Sun Microsystems mein 1995 mein banayi thi. Java "Write Once, Run Anywhere" principle par kaam karti hai, matlab ek baar code likhne ke baad aap usse kisi bhi platform (Windows, Mac, Linux) par chala sakte ho.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Java mobile apps (Android), web applications, desktop applications, aur enterprise systems mein use hoti hai.
          </p>
        </div>
      </div>

      {/* Hello World Program in Java */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hello World Program in Java</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Programming ki duniya me "Hello, World!" program likhna ek tradition hai. Ye kisi bhi naye programming language ko seekhne ka pehla step hota hai.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">Java Code</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}</code>
          </pre>
          <p className="text-gray-700 leading-relaxed mt-2"><strong>Output:</strong> Hello, World!</p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Code Explanation (Step-by-Step)</h3>
          
          <h4 className="font-semibold text-gray-900 mt-4">1. public class Main</h4>
          <p className="text-gray-700 leading-relaxed">Java mein har code class ke andar likha jata hai. Main class ka naam hai.</p>
          
          <h4 className="font-semibold text-gray-900 mt-4">2. public static void main(String[] args)</h4>
          <p className="text-gray-700 leading-relaxed">main() method program ka entry point hai. Execution yahin se start hoti hai.</p>
          
          <h4 className="font-semibold text-gray-900 mt-4">3. System.out.println()</h4>
          <p className="text-gray-700 leading-relaxed">System.out.println() output display karne ke liye use hota hai.</p>
        </div>
      </div>

      {/* Variables in Java */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Variables in Java</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Variables memory mein ek location ko represent karte hain jahan hum data store karte hain.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">Data Types in Java</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>int</strong> - Whole numbers (4 bytes)</li>
            <li><strong>float</strong> - Decimal values (4 bytes)</li>
            <li><strong>double</strong> - High precision decimal (8 bytes)</li>
            <li><strong>char</strong> - Single character (2 bytes)</li>
            <li><strong>boolean</strong> - true/false</li>
            <li><strong>String</strong> - Sequence of characters (non-primitive)</li>
          </ul>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Variable Declaration and Initialization</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`public class Main {
  public static void main(String[] args) {
    int age = 25;
    float price = 99.99f;
    double pi = 3.14159;
    char grade = 'A';
    boolean isStudent = true;
    String name = "Sameer";
    
    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
    System.out.println("Price: " + price);
  }
}`}</code>
          </pre>
        </div>
      </div>

      {/* Operators in Java */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Operators in Java</h2>
        
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">1. Arithmetic Operators</h3>
          <p className="text-gray-700">+, -, *, /, %</p>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`int a = 10, b = 3;
System.out.println("Addition: " + (a + b));      // 13
System.out.println("Subtraction: " + (a - b));   // 7
System.out.println("Multiplication: " + (a * b)); // 30
System.out.println("Division: " + (a / b));      // 3
System.out.println("Modulus: " + (a % b));       // 1`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">2. Relational Operators</h3>
          <p className="text-gray-700">&lt;, &lt;=, &gt;, &gt;=, ==, !=</p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">3. Logical Operators</h3>
          <p className="text-gray-700">&& (AND), || (OR), ! (NOT)</p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">4. Increment/Decrement Operators</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`int x = 5;
System.out.println("++x: " + (++x)); // 6
System.out.println("x++: " + (x++)); // 6
System.out.println("x: " + x);       // 7`}</code>
          </pre>
        </div>
      </div>

      {/* If-Else Statements */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Conditional Statements (if-else) in Java</h2>
        
        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    System.out.print("Enter your age: ");
    int age = sc.nextInt();
    
    if(age >= 18) {
      System.out.println("You are eligible to vote!");
    } else {
      System.out.println("You are not eligible to vote!");
    }
    
    sc.close();
  }
}`}</code>
          </pre>
        </div>
      </div>

      {/* Loops in Java */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Loops in Java</h2>
        
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">1. for Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`for(int i = 0; i < 5; i++) {
  System.out.println("Number: " + i);
}
// Output: 0,1,2,3,4`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">2. while Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`int i = 0;
while(i < 5) {
  System.out.println("Number: " + i);
  i++;
}`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">3. do-while Loop</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`int i = 0;
do {
  System.out.println("Number: " + i);
  i++;
} while(i < 5);`}</code>
          </pre>
        </div>
      </div>

      {/* Arrays in Java */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Arrays in Java</h2>
        
        <div className="prose max-w-none">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`public class Main {
  public static void main(String[] args) {
    int[] numbers = {10, 20, 30, 40, 50};
    
    for(int i = 0; i < numbers.length; i++) {
      System.out.println("numbers[" + i + "] = " + numbers[i]);
    }
  }
}`}</code>
          </pre>
        </div>
      </div>

      {/* Addition of Two Numbers in Java */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Addition of Two Numbers in Java</h2>
        
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">With Static Values</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`public class Main {
  public static void main(String[] args) {
    int num1 = 10, num2 = 20;
    int sum = num1 + num2;
    System.out.println("Sum = " + sum);
  }
}
// Output: Sum = 30`}</code>
          </pre>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">With Dynamic Values (User Input)</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    System.out.print("Enter first number: ");
    int num1 = sc.nextInt();
    
    System.out.print("Enter second number: ");
    int num2 = sc.nextInt();
    
    int sum = num1 + num2;
    System.out.println("Sum = " + sum);
    
    sc.close();
  }
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}