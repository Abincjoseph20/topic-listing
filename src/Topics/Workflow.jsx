import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function WorkFlow() {
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
      <h1>WorkFlow</h1>
      <h2>Basic Stages</h2>
      <ol>
        <li>Idea Generation</li>
        <li>Requirement Gathering</li>
        <li>Planning</li>
        <li>Task Breakdown</li>
        <li>Resource Allocation</li>
        <li>Timeline Creation</li>
        <li>Execution</li>
        <li>Collaboration & Communication</li>
        <li>Progress Tracking</li>
        <li>Quality Checks</li>
        <li>Iteration & Improvement</li>
        <li>Review & Feedback</li>
        <li>Approval Process</li>
        <li>Final Delivery</li>
        <li>
          Post-Delivery Processes
          <ul type="i">
            <li>Documentation</li>
            <li>Retrospective Meeting</li>
            <li>Archiving</li>
          </ul>
        </li>
      </ol>
    </div>
    </div>
  );
}

export default WorkFlow;
