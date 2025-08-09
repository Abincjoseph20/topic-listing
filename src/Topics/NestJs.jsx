import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function NestJS() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => DownloadRef.current, // ✅ Correct way to set content
    documentTitle: "NestJS_Notes"
  });

  return (
    <div>
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

      <div ref={DownloadRef} className="python-container">
        <h1>NestJS</h1>
        <h2>Basic to Advanced</h2>
        <ol>
          <li>Introduction to NestJS</li>
          <li>Project Setup</li>
          <li>Modules</li>
          <li>Controllers</li>
          <li>Services & Dependency Injection</li>
          <li>Providers</li>
          <li>Routing</li>
          <li>Middleware</li>
          <li>Exception Filters</li>
          <li>Pipes</li>
          <li>Guards</li>
          <li>Interceptors</li>
          <li>Configuration Management</li>
          <li>Database Integration
            <ul type="i">
              <li>TypeORM</li>
              <li>Mongoose</li>
            </ul>
          </li>
          <li>Authentication & Authorization (JWT, Passport)</li>
          <li>File Upload</li>
          <li>Validation</li>
          <li>Event-based Communication</li>
          <li>WebSockets</li>
          <li>Microservices</li>
          <li>Testing
            <ul type="i">
              <li>Unit Testing</li>
              <li>e2e Testing</li>
            </ul>
          </li>
          <li>Deployment</li>
          <li>Advanced Patterns
            <ul type="i">
              <li>Custom Decorators</li>
              <li>Dynamic Modules</li>
              <li>Monorepo Support</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default NestJS;
