import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function TypeScript() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
          contentRef: DownloadRef, // Use contentRef instead of content
          documentTitle: "SQL_Notes"
        });


  return (
     <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>TypeScript</h1>

      <h2>Basics</h2>
      <ol>
        <li>What is TypeScript?</li>
        <li>Setting Up the Environment</li>
        <li>TypeScript Compiler (tsc)</li>
        <li>Basic Syntax</li>
        <li>Type Annotations</li>
        <li>Primitive Types</li>
        <ul>
          <li>string</li>
          <li>number</li>
          <li>boolean</li>
          <li>null</li>
          <li>undefined</li>
        </ul>
        <li>Arrays</li>
        <li>Tuples</li>
        <li>Enums</li>
        <li>Any, Unknown, Never</li>
      </ol>

      <h2>Functions</h2>
      <ol start="11">
        <li>Function Types</li>
        <li>Optional and Default Parameters</li>
        <li>Rest Parameters</li>
        <li>Arrow Functions</li>
        <li>Function Overloading</li>
      </ol>

      <h2>Objects & Interfaces</h2>
      <ol start="16">
        <li>Object Types</li>
        <li>Readonly Properties</li>
        <li>Optional Properties</li>
        <li>Interfaces</li>
        <li>Extending Interfaces</li>
        <li>Intersection Types</li>
      </ol>

      <h2>Classes</h2>
      <ol start="22">
        <li>Class Basics</li>
        <li>Constructors</li>
        <li>Access Modifiers (public, private, protected)</li>
        <li>Readonly Properties</li>
        <li>Inheritance</li>
        <li>Abstract Classes</li>
        <li>Implementing Interfaces</li>
      </ol>

      <h2>Advanced Types</h2>
      <ol start="29">
        <li>Union Types</li>
        <li>Type Aliases</li>
        <li>Literal Types</li>
        <li>Type Assertions</li>
        <li>Generics</li>
        <li>Conditional Types</li>
        <li>Mapped Types</li>
        <li>Utility Types</li>
      </ol>

      <h2>Modules</h2>
      <ol start="37">
        <li>Import & Export</li>
        <li>Default Exports</li>
        <li>Re-exporting</li>
        <li>Namespaces</li>
      </ol>

      <h2>Decorators</h2>
      <ol start="41">
        <li>Class Decorators</li>
        <li>Method Decorators</li>
        <li>Property Decorators</li>
        <li>Parameter Decorators</li>
      </ol>

      <h2>Tooling & Configuration</h2>
      <ol start="45">
        <li>tsconfig.json</li>
        <li>Strict Mode</li>
        <li>Linting with ESLint</li>
        <li>Prettier Integration</li>
      </ol>

      <h2>TypeScript with Frameworks</h2>
      <ol start="49">
        <li>TypeScript with React</li>
        <li>TypeScript with Node.js</li>
        <li>TypeScript with Express</li>
        <li>TypeScript with Angular</li>
      </ol>
    </div>
    </div>
  );
}

export default TypeScript;
