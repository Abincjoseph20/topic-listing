import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function CleanCode() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "DSASyllabus_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>Clean Code</h1>
      <h2>Principles & Practices</h2>
      <ol>
        <li>Meaningful Names</li>
        <li>Functions</li>
        <ul>
          <li>Small Functions</li>
          <li>Do One Thing</li>
          <li>Use Descriptive Names</li>
          <li>Limit Parameters</li>
        </ul>
        <li>Comments</li>
        <ul>
          <li>When to Comment</li>
          <li>Self-Documenting Code</li>
        </ul>
        <li>Formatting</li>
        <ul>
          <li>Consistent Indentation</li>
          <li>Proper Spacing</li>
          <li>Logical Grouping</li>
        </ul>
        <li>Error Handling</li>
        <ul>
          <li>Exceptions over Return Codes</li>
          <li>Meaningful Error Messages</li>
        </ul>
        <li>Objects and Data Structures</li>
        <ul>
          <li>Encapsulation</li>
          <li>Avoid Data Clumps</li>
        </ul>
        <li>Classes</li>
        <ul>
          <li>Small and Focused</li>
          <li>Single Responsibility Principle</li>
        </ul>
        <li>Code Smells</li>
        <ul>
          <li>Duplicated Code</li>
          <li>Long Methods</li>
          <li>Large Classes</li>
        </ul>
        <li>Testing</li>
        <ul>
          <li>Unit Testing</li>
          <li>Test-Driven Development (TDD)</li>
          <li>Readable Test Cases</li>
        </ul>
        <li>Refactoring</li>
        <ul>
          <li>Continuous Improvement</li>
          <li>Safe Refactoring Practices</li>
        </ul>
      </ol>
    </div>
    </div>
  );
}

export default CleanCode;
