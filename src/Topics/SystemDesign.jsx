import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function SystemDesign() {
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
      <h1>System Design</h1>
     

      <ol>
        <li>Dark scale distributed system</li>
        <li>
          Scaling
          <ul>
            <li>Vertical</li>
            <li>Horizontal</li>
            <li>Auto</li>
          </ul>
        </li>
        <li>
          Async/Asynchronous system
          <ul>
            <li>Queue system</li>
          </ul>
        </li>
        <li>Scaling database and server</li>
        <li>Rate limiter vs limiter</li>
        <li>
          API Rate Limiting
          <ul>
            <li>Token Bucket</li>
            <li>pro and cons</li>
            <li>Leaky Bucket</li>
          </ul>
        </li>
        <li>Concurrency controller</li>
        <li>Handling failure</li>
      </ol>

      <h2>Theory</h2>
      <ol>
        <li>
          Components of System Design
          <ul>
            <li>Logical</li>
            <li>
              a. Data
              <ul>
                <li>b. Database</li>
                <li>c. Users</li>
                <li>d. Applications</li>
                <li>e. Cache</li>
                <li>f. Communication protocol</li>
                <li>g. Immu</li>
                <li>h. Message queues</li>
                <li>i. Presentation layer</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Engine
          <ul>
            <li>a. Table - Text, Image</li>
            <li>b. Database - SQL, NoSQL</li>
            <li>c. App - Java, node</li>
            <li>d. Cache - redis, mem-cache</li>
            <li>e. Infra - AWS, GCP</li>
            <li>f. Comm - API, RPC, MessageQ</li>
            <li>g. Queues - Kafka, RabbitMQ</li>
          </ul>
        </li>
        <li>
          Client/Server Arch
          <ul>
            <li>1. Thick and Thin client</li>
            <li>2. 1 Tier, 2 Tier, n-Tier Client</li>
          </ul>
        </li>
        <li>
          Fault and Failure
          <ul>
            <li>1. Full failure</li>
            <li>2. fail fast</li>
            <li>3. graceful fail</li>
            <li>4. fallback</li>
            <li>5. Tolerance</li>
            <li>6. Transient vs Permanent fault</li>
          </ul>
        </li>
      </ol>

      <h2>Other</h2>
      <ol>
        <li>Critical and non critical tasks</li>
      </ol>
    </div>
    </div>
  );
}

export default SystemDesign;