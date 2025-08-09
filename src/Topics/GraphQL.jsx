import React, { useRef } from 'react';
 // npm install react-to-print
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function GraphQL() {
  const DownloadRef = useRef();
  

 
  const handlePrint = useReactToPrint({
    contentRef: DownloadRef, // Use contentRef instead of content
    documentTitle: "HTML_and_CSS_Notes"
  });

  return (
    <div>
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

      <div ref={DownloadRef} className="python-container">
      <h1>GraphQL</h1>
      <h2>Basic to Advanced</h2>
      <ol>
        <li>Introduction to GraphQL</li>
        <li>Setting up a GraphQL Server</li>
        <li>GraphQL vs REST</li>
        <li>Schema Definition Language (SDL)</li>
        <li>Queries</li>
        <li>Mutations</li>
        <li>Resolvers</li>
        <li>Variables in Queries</li>
        <li>Fragments</li>
        <li>Aliases</li>
        <li>Directives (@include, @skip)</li>
        <li>Nested Queries</li>
        <li>Arguments</li>
        <li>Custom Scalars</li>
        <li>Enums</li>
        <li>Interfaces</li>
        <li>Unions</li>
        <li>Pagination</li>
        <li>Subscriptions (Real-time Data)</li>
        <li>Authentication & Authorization</li>
        <li>Error Handling</li>
        <li>Batching & Caching</li>
        <li>File Uploads</li>
        <li>Schema Stitching</li>
        <li>Federation</li>
        <li>Performance Optimization</li>
        <li>Testing GraphQL APIs</li>
        <li>Deploying GraphQL Services</li>
        <li>Advanced Patterns
          <ul type="i">
            <li>Custom Middleware</li>
            <li>Schema Directives</li>
            <li>Code-first vs Schema-first Development</li>
          </ul>
        </li>
      </ol>
    </div>
    </div>
  );
}

export default GraphQL;
