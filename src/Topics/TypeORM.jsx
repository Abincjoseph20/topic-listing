import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function TypeORM() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "SystemDesign_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>TypeORM</h1>
      <h2>Basic to Advanced</h2>
      <ol>
        <li>Introduction to TypeORM</li>
        <li>Installation & Setup</li>
        <li>Connecting to a Database</li>
        <li>Creating Entities</li>
        <li>Primary Keys & Generated Columns</li>
        <li>Column Types</li>
        <li>Relations
          <ul type="i">
            <li>One-to-One</li>
            <li>One-to-Many</li>
            <li>Many-to-One</li>
            <li>Many-to-Many</li>
          </ul>
        </li>
        <li>Relation Options & Cascading</li>
        <li>Embedded Entities</li>
        <li>Repositories</li>
        <li>QueryBuilder</li>
        <li>Find Options</li>
        <li>CRUD Operations</li>
        <li>Using Migrations</li>
        <li>Custom Repository</li>
        <li>Event Listeners & Subscribers</li>
        <li>Lazy & Eager Loading</li>
        <li>Soft Deletes</li>
        <li>Indexes & Constraints</li>
        <li>Transactions</li>
        <li>Connection Pooling</li>
        <li>Caching</li>
        <li>Working with Enums</li>
        <li>Advanced Querying</li>
        <li>Working with Multiple Databases</li>
        <li>Performance Optimization</li>
        <li>Testing with TypeORM</li>
        <li>Deploying TypeORM Applications</li>
      </ol>
    </div>
    </div>
  );
}

export default TypeORM;
