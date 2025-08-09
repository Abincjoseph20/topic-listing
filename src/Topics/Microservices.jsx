import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function Microservice() {
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
      <h1>Microservice</h1>
      
      <h2>Fundamentals</h2>
      <ol>
        <li>What is Microservice Architecture?</li>
        <li>Monolithic vs Microservice Architecture</li>
        <li>Benefits of Microservices</li>
        <ul>
          <li>Scalability</li>
          <li>Flexibility</li>
          <li>Resilience</li>
          <li>Technology Diversity</li>
        </ul>
        <li>Challenges of Microservices</li>
        <ul>
          <li>Complexity</li>
          <li>Network Latency</li>
          <li>Data Consistency</li>
          <li>Monitoring and Debugging</li>
        </ul>
        <li>Domain-Driven Design (DDD)</li>
        <li>Bounded Context</li>
      </ol>

      <h2>Design Principles</h2>
      <ol start="7">
        <li>Single Responsibility Principle</li>
        <li>Smart Endpoints and Dumb Pipes</li>
        <li>Decentralized Data Management</li>
        <li>Design for Failure</li>
        <li>Automated Deployment</li>
      </ol>

      <h2>Communication Patterns</h2>
      <ol start="12">
        <li>Synchronous Communication</li>
        <ul>
          <li>REST APIs</li>
          <li>GraphQL</li>
          <li>gRPC</li>
        </ul>
        <li>Asynchronous Communication</li>
        <ul>
          <li>Message Queues</li>
          <li>Event Streaming (Apache Kafka)</li>
          <li>Publish-Subscribe Pattern</li>
        </ul>
        <li>Service Discovery</li>
        <ul>
          <li>Client-Side Discovery</li>
          <li>Server-Side Discovery</li>
          <li>Eureka, Consul, Zookeeper</li>
        </ul>
      </ol>

      <h2>Data Management</h2>
      <ol start="18">
        <li>Database per Service</li>
        <li>Shared Database</li>
        <li>Event Sourcing</li>
        <li>CQRS (Command Query Responsibility Segregation)</li>
        <li>Distributed Transactions</li>
        <ul>
          <li>Saga Pattern</li>
          <li>Two-Phase Commit</li>
        </ul>
      </ol>

      <h2>Security</h2>
      <ol start="24">
        <li>Authentication</li>
        <ul>
          <li>JWT (JSON Web Tokens)</li>
          <li>OAuth 2.0</li>
          <li>API Keys</li>
        </ul>
        <li>Authorization</li>
        <li>Encryption</li>
        <li>API Gateway Security</li>
        <li>Service-to-Service Security</li>
      </ol>

      <h2>Observability</h2>
      <ol start="29">
        <li>Logging</li>
        <ul>
          <li>Centralized Logging</li>
          <li>ELK Stack (Elasticsearch, Logstash, Kibana)</li>
          <li>Structured Logging</li>
        </ul>
        <li>Monitoring</li>
        <ul>
          <li>Health Checks</li>
          <li>Metrics Collection</li>
          <li>Prometheus, Grafana</li>
        </ul>
        <li>Tracing</li>
        <ul>
          <li>Distributed Tracing</li>
          <li>OpenTelemetry</li>
          <li>Jaeger, Zipkin</li>
        </ul>
      </ol>

      <h2>Deployment & Infrastructure</h2>
      <ol start="35">
        <li>Containerization</li>
        <ul>
          <li>Docker</li>
          <li>Container Orchestration</li>
          <li>Kubernetes</li>
        </ul>
        <li>CI/CD Pipelines</li>
        <ul>
          <li>Jenkins</li>
          <li>GitLab CI</li>
          <li>GitHub Actions</li>
        </ul>
        <li>Infrastructure as Code (IaC)</li>
        <ul>
          <li>Terraform</li>
          <li>CloudFormation</li>
        </ul>
      </ol>

      <h2>API Gateway</h2>
      <ol start="41">
        <li>Routing</li>
        <li>Rate Limiting</li>
        <li>Authentication/Authorization</li>
        <li>Request/Response Transformation</li>
        <li>Load Balancing</li>
        <li>Caching</li>
        <li>API Gateway Solutions</li>
        <ul>
          <li>AWS API Gateway</li>
          <li>Kong</li>
          <li>Ambassador</li>
        </ul>
      </ol>

      <h2>Service Mesh</h2>
      <ol start="49">
        <li>What is Service Mesh?</li>
        <li>Istio</li>
        <li>Linkerd</li>
        <li>Traffic Management</li>
        <li>Security Policies</li>
        <li>Observability</li>
      </ol>

      <h2>Resilience Patterns</h2>
      <ol start="55">
        <li>Circuit Breaker</li>
        <li>Bulkhead</li>
        <li>Timeout</li>
        <li>Retry</li>
        <li>Fallback</li>
      </ol>

      <h2>Testing</h2>
      <ol start="60">
        <li>Unit Testing</li>
        <li>Integration Testing</li>
        <li>Contract Testing</li>
        <li>End-to-End Testing</li>
        <li>Testing in Production</li>
      </ol>

      <h2>Best Practices</h2>
      <ol start="65">
        <li>API Design Best Practices</li>
        <li>Versioning Strategies</li>
        <li>Error Handling</li>
        <li>Configuration Management</li>
        <li>Secrets Management</li>
        <li>Backup and Disaster Recovery</li>
      </ol>
    </div>
    </div>
  );
}

export default Microservice;
