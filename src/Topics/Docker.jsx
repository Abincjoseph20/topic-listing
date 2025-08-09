import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function Docker() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "Git_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>Docker</h1>
      
      <h2>Fundamentals</h2>
      <ol>
        <li>What is Docker?</li>
        <li>Containerization vs Virtualization</li>
        <li>Docker Architecture</li>
        <ul>
          <li>Docker Engine</li>
          <li>Docker Client</li>
          <li>Docker Daemon</li>
          <li>Docker Registry</li>
        </ul>
        <li>Key Components</li>
        <ul>
          <li>Images</li>
          <li>Containers</li>
          <li>Registry</li>
          <li>Dockerfile</li>
        </ul>
        <li>Benefits of Docker</li>
      </ol>

      <h2>Docker Installation</h2>
      <ol start="6">
        <li>Installing Docker Desktop</li>
        <li>Installing Docker Engine (Linux)</li>
        <li>Verifying Installation</li>
        <li>Docker CLI Basics</li>
      </ol>

      <h2>Working with Images</h2>
      <ol start="10">
        <li>What are Docker Images?</li>
        <li>Pulling Images from Docker Hub</li>
        <li>Listing Images</li>
        <li>Inspecting Images</li>
        <li>Removing Images</li>
        <li>Image Tags</li>
      </ol>

      <h2>Working with Containers</h2>
      <ol start="16">
        <li>What are Containers?</li>
        <li>Running Containers</li>
        <li>Listing Containers</li>
        <li>Stopping Containers</li>
        <li>Removing Containers</li>
        <li>Executing Commands in Containers</li>
        <li>Container Logs</li>
      </ol>

      <h2>Dockerfile</h2>
      <ol start="23">
        <li>What is a Dockerfile?</li>
        <li>Dockerfile Instructions</li>
        <ul>
          <li>FROM</li>
          <li>RUN</li>
          <li>COPY</li>
          <li>ADD</li>
          <li>WORKDIR</li>
          <li>ENV</li>
          <li>EXPOSE</li>
          <li>CMD</li>
          <li>ENTRYPOINT</li>
        </ul>
        <li>Building Images from Dockerfile</li>
        <li>Multi-stage Builds</li>
        <li>Best Practices</li>
      </ol>

      <h2>Docker Compose</h2>
      <ol start="33">
        <li>What is Docker Compose?</li>
        <li>docker-compose.yml Structure</li>
        <li>Services, Networks, Volumes</li>
        <li>Running Multi-container Applications</li>
        <li>Managing Services</li>
        <li>Environment Variables</li>
      </ol>

      <h2>Networking</h2>
      <ol start="39">
        <li>Docker Network Drivers</li>
        <ul>
          <li>Bridge</li>
          <li>Host</li>
          <li>None</li>
          <li>Overlay</li>
        </ul>
        <li>Container Networking</li>
        <li>Port Mapping</li>
        <li>Custom Networks</li>
        <li>Network Inspection</li>
      </ol>

      <h2>Data Management</h2>
      <ol start="45">
        <li>Data Persistence in Containers</li>
        <li>Volumes</li>
        <li>Bind Mounts</li>
        <li>tmpfs Mounts</li>
        <li>Volume Management</li>
        <li>Backup and Restore</li>
      </ol>

      <h2>Advanced Concepts</h2>
      <ol start="51">
        <li>Docker Registries</li>
        <ul>
          <li>Docker Hub</li>
          <li>Private Registries</li>
          <li>Registry Authentication</li>
        </ul>
        <li>Docker Security</li>
        <ul>
          <li>User Namespaces</li>
          <li>Content Trust</li>
          <li>Security Scanning</li>
        </ul>
        <li>Docker Swarm</li>
        <ul>
          <li>Swarm Mode</li>
          <li>Services and Tasks</li>
          <li>Scaling Services</li>
        </ul>
        <li>Docker CLI Advanced Commands</li>
      </ol>

      <h2>Best Practices</h2>
      <ol start="58">
        <li>Image Optimization</li>
        <li>Layer Caching</li>
        <li>Minimizing Image Size</li>
        <li>Security Best Practices</li>
        <li>Resource Management</li>
      </ol>

      <h2>Use Cases</h2>
      <ol start="63">
        <li>Application Containerization</li>
        <li>Microservices Deployment</li>
        <li>CI/CD Integration</li>
        <li>Development Environment Consistency</li>
        <li>Testing Isolation</li>
      </ol>
    </div>
    </div>
  );
}

export default Docker;
