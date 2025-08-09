import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function Kubernetes() {
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
      <h1>Kubernetes</h1>

      <h2>Fundamentals</h2>
      <ol>
        <li>What is Kubernetes?</li>
        <li>Core Concepts</li>
        <ul>
          <li>Cluster</li>
          <li>Master and Worker Nodes</li>
          <li>API Server</li>
          <li>etcd</li>
          <li>Controller Manager</li>
          <li>Scheduler</li>
        </ul>
        <li>Kubernetes Architecture</li>
        <li>Kubectl Basics</li>
      </ol>

      <h2>Workloads</h2>
      <ol start="5">
        <li>Pods</li>
        <li>ReplicaSets</li>
        <li>Deployments</li>
        <li>StatefulSets</li>
        <li>DaemonSets</li>
        <li>Jobs & CronJobs</li>
      </ol>

      <h2>Networking</h2>
      <ol start="11">
        <li>Cluster Networking Model</li>
        <li>Services</li>
        <ul>
          <li>ClusterIP</li>
          <li>NodePort</li>
          <li>LoadBalancer</li>
          <li>ExternalName</li>
        </ul>
        <li>Ingress</li>
        <li>Network Policies</li>
      </ol>

      <h2>Storage</h2>
      <ol start="16">
        <li>Volumes</li>
        <li>Persistent Volumes (PV)</li>
        <li>Persistent Volume Claims (PVC)</li>
        <li>Storage Classes</li>
        <li>Dynamic Provisioning</li>
      </ol>

      <h2>Configuration</h2>
      <ol start="21">
        <li>ConfigMaps</li>
        <li>Secrets</li>
        <li>Environment Variables</li>
        <li>Downward API</li>
      </ol>

      <h2>Security</h2>
      <ol start="25">
        <li>RBAC (Role-Based Access Control)</li>
        <li>Service Accounts</li>
        <li>Network Policies</li>
        <li>Pod Security Standards</li>
      </ol>

      <h2>Advanced Topics</h2>
      <ol start="29">
        <li>Horizontal Pod Autoscaler (HPA)</li>
        <li>Cluster Autoscaler</li>
        <li>Custom Resource Definitions (CRDs)</li>
        <li>Operators</li>
        <li>Helm Package Manager</li>
        <li>Kubernetes API</li>
      </ol>

      <h2>Monitoring & Logging</h2>
      <ol start="35">
        <li>Metrics Server</li>
        <li>Prometheus & Grafana</li>
        <li>Logging with Fluentd / EFK Stack</li>
      </ol>

      <h2>Troubleshooting</h2>
      <ol start="38">
        <li>Pod Debugging</li>
        <li>Node Issues</li>
        <li>Event Logs</li>
        <li>Kubectl Debug</li>
      </ol>
    </div>
    </div>
  );
}

export default Kubernetes;
