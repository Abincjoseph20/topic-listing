import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function Others() {
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
      <h1>VS Code, Git, and Postman</h1>
      <h2>Basic to Advanced</h2>
      <ol>
        <li>VS Code Basics
          <ul type="i">
            <li>Installing and Setting Up VS Code</li>
            <li>Interface Overview</li>
            <li>Command Palette</li>
            <li>Extensions and Marketplace</li>
            <li>Customizing Themes and Fonts</li>
            <li>File Navigation and Shortcuts</li>
            <li>Integrated Terminal</li>
            <li>Debugging in VS Code</li>
            <li>Git Integration in VS Code</li>
          </ul>
        </li>
        <li>Git Basics
          <ul type="i">
            <li>What is Git?</li>
            <li>Installing Git</li>
            <li>Basic Commands: init, add, commit</li>
            <li>Cloning Repositories</li>
            <li>Branching and Merging</li>
            <li>Remote Repositories (push, pull, fetch)</li>
            <li>Git Log and History</li>
            <li>Ignoring Files (.gitignore)</li>
          </ul>
        </li>
        <li>Git Advanced
          <ul type="i">
            <li>Rebasing</li>
            <li>Cherry-pick</li>
            <li>Stashing Changes</li>
            <li>Resolving Merge Conflicts</li>
            <li>Git Tags</li>
            <li>Git Hooks</li>
            <li>Working with Pull Requests</li>
            <li>Git Workflows (Gitflow, Feature Branching)</li>
          </ul>
        </li>
        <li>Postman Basics
          <ul type="i">
            <li>Installing Postman</li>
            <li>Interface Overview</li>
            <li>Creating and Sending Requests</li>
            <li>GET, POST, PUT, DELETE Methods</li>
            <li>Adding Headers and Parameters</li>
            <li>Saving Requests in Collections</li>
            <li>Environment Variables</li>
          </ul>
        </li>
        <li>Postman Advanced
          <ul type="i">
            <li>Authorization and Authentication</li>
            <li>Writing Tests in Postman</li>
            <li>Pre-request Scripts</li>
            <li>Chaining Requests</li>
            <li>Mock Servers</li>
            <li>API Documentation Generation</li>
            <li>Automated API Testing with Newman</li>
          </ul>
        </li>
      </ol>
    </div>
    </div>
  );
}

export default Others;
