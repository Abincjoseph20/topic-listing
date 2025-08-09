
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function PHP() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "Node_&_Express_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>PHP</h1>
      <h2>Basic to Advanced</h2>
      <ol>
        <li>Introduction to PHP</li>
        <li>Setting Up PHP Environment (XAMPP, MAMP, WAMP)</li>
        <li>PHP Syntax and Tags</li>
        <li>Variables and Constants</li>
        <li>Data Types
          <ul type="i">
            <li>String</li>
            <li>Integer</li>
            <li>Float</li>
            <li>Boolean</li>
            <li>Array</li>
            <li>Object</li>
            <li>NULL</li>
          </ul>
        </li>
        <li>Operators
          <ul type="i">
            <li>Arithmetic Operators</li>
            <li>Comparison Operators</li>
            <li>Logical Operators</li>
            <li>Assignment Operators</li>
            <li>Increment/Decrement Operators</li>
          </ul>
        </li>
        <li>Control Structures
          <ul type="i">
            <li>if, else, elseif</li>
            <li>switch</li>
            <li>while</li>
            <li>do...while</li>
            <li>for</li>
            <li>foreach</li>
          </ul>
        </li>
        <li>Functions in PHP</li>
        <li>Scope of Variables</li>
        <li>Include and Require</li>
        <li>Working with Forms
          <ul type="i">
            <li>GET and POST Methods</li>
            <li>Form Validation</li>
          </ul>
        </li>
        <li>PHP Arrays
          <ul type="i">
            <li>Indexed Arrays</li>
            <li>Associative Arrays</li>
            <li>Multidimensional Arrays</li>
            <li>Array Functions</li>
          </ul>
        </li>
        <li>String Handling</li>
        <li>Date and Time in PHP</li>
        <li>File Handling
          <ul type="i">
            <li>Reading Files</li>
            <li>Writing Files</li>
            <li>File Upload</li>
          </ul>
        </li>
        <li>Working with Cookies and Sessions</li>
        <li>PHP and MySQL Database
          <ul type="i">
            <li>Connecting to Database</li>
            <li>CRUD Operations</li>
            <li>Prepared Statements</li>
          </ul>
        </li>
        <li>Error Handling in PHP</li>
        <li>Object-Oriented PHP
          <ul type="i">
            <li>Classes and Objects</li>
            <li>Constructors and Destructors</li>
            <li>Inheritance</li>
            <li>Interfaces and Traits</li>
            <li>Namespaces</li>
          </ul>
        </li>
        <li>PHP and JSON</li>
        <li>PHP and REST APIs</li>
        <li>Security in PHP
          <ul type="i">
            <li>Data Sanitization</li>
            <li>SQL Injection Prevention</li>
            <li>XSS Prevention</li>
          </ul>
        </li>
        <li>Composer and Autoloading</li>
        <li>PHP Frameworks Overview (Laravel, Symfony, CodeIgniter)</li>
      </ol>
    </div>
    </div>
  );
}

export default PHP;
