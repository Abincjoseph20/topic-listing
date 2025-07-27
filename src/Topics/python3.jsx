import './css/python.css';

function Python3() {
  return (
    <div className="python-container">
      <h1>Topics to Learn</h1>
      <h2>Python</h2>

      {/* Basic */}
      <h3>Basic</h3>
      <ol>
        <li>Syntax</li>
        <li>Variables and Data Types</li>
        <li>Integers</li>
        <li>Floats</li>
        <li>Strings</li>
        <li>Booleans</li>
        <li>Lists</li>
        <li>Tuples</li>
        <li>Dictionaries</li>
        <li>Sets</li>
        <li>Type casting</li>
        <li>Indexes and Negative Indexes</li>
        <li>Slicing</li>
        <li>Scope of variables</li>
        <li>Operators
          <ul type="i">
            <li>Arithmetic Operators</li>
            <li>Comparison Operators</li>
            <li>Logical Operators</li>
            <li>Assignment Operators</li>
            <li>Bitwise Operators</li>
          </ul>
        </li>
        <li>Control Flow</li>
        <li>Conditional Statements
          <ul type="i">
            <li>if</li>
            <li>elif</li>
            <li>else</li>
          </ul>
        </li>
        <li>Loops
          <ul type="i">
            <li>for loop</li>
            <li>while loop</li>
            <li>break, continue, pass</li>
          </ul>
        </li>
        <li>Comprehensions
          <ul type="i">
            <li>List Comprehensions</li>
            <li>Dictionary Comprehensions</li>
            <li>Set Comprehensions</li>
          </ul>
        </li>
        <li>Exception Handling
          <ul type="i">
            <li>try</li>
            <li>except</li>
            <li>finally</li>
            <li>else</li>
            <li>raise</li>
          </ul>
        </li>
        <li>Function
          <ul type="i">
            <li>docstring</li>
            <li>return</li>
            <li>Lambda Functions</li>
          </ul>
        </li>
        <li>Types of function arguments
          <ul type="i">
            <li>Default argument</li>
            <li>Keyword argument</li>
            <li>Positional Arguments</li>
            <li>Arbitrary Keyword Arguments</li>
          </ul>
        </li>
        <li>call by sharing</li>
        <li>Generator</li>
        <li>Iterator</li>
        <li>Decorators</li>
        <li>Recursion</li>
        <li>Map</li>
        <li>Filter</li>
        <li>Reduce</li>
        <li>eval</li>
      </ol>

      {/* Object-Oriented Programming (OOP) */}
      <h3>Object-Oriented Programming (OOP)</h3>
      <ol>
        <li>Classes and Objects
          <ul type="i">
            <li>constructor</li>
            <li>Deconstructor</li>
            <li>self parameter</li>
          </ul>
        </li>
        <li>Instance Variables</li>
        <li>Methods
          <ul type="i">
            <li>Static method</li>
            <li>Instance method</li>
            <li>Class method</li>
            <li>Magic Methods / Dunder
              <ul type="a">
                <li>init, str, new, repr, etc.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Inheritance
          <ul type="i">
            <li>Single Inheritance</li>
            <li>Multiple Inheritance</li>
            <li>super()</li>
            <li>Method Resolution Order (MRO)</li>
            <li>C3 Linearization Algorithm</li>
          </ul>
        </li>
        <li>Polymorphism</li>
        <li>Encapsulation</li>
        <li>Abstraction</li>
        <li>Metaclasses</li>
      </ol>

      {/* Modules and Packages */}
      <h3>Modules and Packages</h3>
      <ol>
        <li>Importing Modules</li>
        <li>Creating Modules</li>
        <li>Using Packages</li>
        <li>init.py</li>
        <li>Standard Library Modules</li>
        <li>File Handling
          <ul type="i">
            <li>Reading Files</li>
            <li>Writing Files</li>
            <li>Working with File Paths</li>
            <li>Context Managers</li>
          </ul>
        </li>
        <li>Other topics
          <ul type="i">
            <li>Pickling</li>
            <li>Programming Paradigms in Python</li>
          </ul>
        </li>
        <li>Memory Allocation</li>
        <li>Memory Management Mechanisms</li>
        <li>Reference counting</li>
        <li>Garbage collection</li>
        <li>Memory Leak in Python</li>
      </ol>

      {/* QA */}
      <h3>QA</h3>
      <ol>
        <li>role of init.py in package?</li>
        <li>Python is interpreter language?</li>
        <li>Difference between OOPS and POPs?</li>
        <li>Multithread language?</li>
        <li>Mutable vs immutable?</li>
        <li>Shallow copy vs deep copy?</li>
        <li>What is .pyc file?</li>
        <li>Generate random number between 1 and 100 using lambda function?</li>
        <li>Difference between "is" and "==?"</li>
        <li>Difference between "__name__" and "__main__"?</li>
        <li>What is iterable?</li>
        <li>What is primitive and non-primitive?</li>
        <li>staticmethod vs classmethod</li>
        <li>Regex</li>
        <li>Multithreading</li>
        <li>split</li>
      </ol>
    </div>
  );
}

export default Python3;