
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function NextJS() {
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
      <h1>Next.js</h1>
      <h2>Basic to Advanced</h2>
      <ol>
        <li>Introduction to Next.js</li>
        <li>Project Setup</li>
        <li>File-based Routing</li>
        <li>Pages and Navigation</li>
        <li>Static Assets (Images, Fonts, etc.)</li>
        <li>CSS Styling in Next.js</li>
        <li>Layout Components</li>
        <li>Dynamic Routes</li>
        <li>API Routes</li>
        <li>Fetching Data
          <ul type="i">
            <li>getStaticProps</li>
            <li>getServerSideProps</li>
            <li>getStaticPaths</li>
          </ul>
        </li>
        <li>Client-side Data Fetching (SWR, fetch)</li>
        <li>Image Optimization</li>
        <li>Static Site Generation (SSG)</li>
        <li>Server-side Rendering (SSR)</li>
        <li>Incremental Static Regeneration (ISR)</li>
        <li>Middleware</li>
        <li>API Integration</li>
        <li>Authentication</li>
        <li>Environment Variables</li>
        <li>Internationalization (i18n)</li>
        <li>Performance Optimization</li>
        <li>Custom Document (_document.js)</li>
        <li>Custom App (_app.js)</li>
        <li>Deploying Next.js Apps</li>
        <li>Advanced Patterns
          <ul type="i">
            <li>Dynamic Imports</li>
            <li>Custom Hooks</li>
            <li>Reusable Components</li>
          </ul>
        </li>
      </ol>
    </div>
    </div>
  );
}

export default NextJS;
