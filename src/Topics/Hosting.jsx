import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function Hosting() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "Hosting_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>Hosting</h1>

      <ol>
        <li>Nginx</li>
        <li>
          Commands
          <ul>
            <li>permission</li>
            <li>rights status</li>
            <li>Internet and Inbound</li>
          </ul>
        </li>
        <li>
          Cache
          <ul>
            <li>log files, access, store</li>
            <li>Nginx response and connection</li>
            <li>location block</li>
            <li>browser cache</li>
            <li>max size, slice, .zip files</li>
          </ul>
        </li>
        <li>Worker Process</li>
        <li>Firewall</li>
        <li>DDOS protection</li>
        <li>Basic proxy</li>
        <li>Secure proxy</li>
        <li>Virtual host</li>
        <li>Brute force</li>
        <li>WAF</li>
        <li>SSL</li>
        <li>ELMP</li>
        <li>TCP vs UDP</li>
        <li>TCP vs TLS</li>
        <li>
          Load Balancing
          <ul>
            <li>based domain</li>
            <li>based connection</li>
            <li>IP hash</li>
          </ul>
        </li>
        <li>
          Caching
          <ul>
            <li>Proxy</li>
            <li>1. proxy server</li>
            <li>2. reverse proxy</li>
            <li>3. local between reverse proxy</li>
          </ul>
        </li>
        <li>Nginx Modules</li>
        <li>Working of HTTP/HTTPS</li>
        <li>SSH</li>
        <li>How does it work?</li>
        <li>Private key</li>
        <li>Public key</li>
        <li>SSL</li>
        <li>How does it work?</li>
        <li>Linux</li>
        <li>apt get</li>
        <li>ssh</li>
        <li>rm</li>
        <li>touch</li>
        <li>mv</li>
        <li>su</li>
        <li>nano</li>
        <li>linux files</li>
        <li>ls, pwd, tail</li>
        <li>df, du</li>
        <li>
          ./
          <ul>
            <li>ls</li>
            <li>ls -a</li>
            <li>ls -l</li>
            <li>cd</li>
            <li>cd ..</li>
            <li>vim</li>
          </ul>
        </li>
      </ol>
    </div>
    </div>
  );
}

export default Hosting;
