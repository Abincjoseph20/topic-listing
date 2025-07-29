import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function Redux() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "Redux_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>Redux</h1>

      <h2>Theory</h2>
      <ol>
        <li>Why Redux?</li>
        <li>Redux</li>
        <ul>
          <li>How it stores data</li>
          <li>Architecture</li>
          <li>State</li>
          <li>Props and state</li>
          <li>Reducers</li>
          <li>Actions</li>
          <li>Calls API</li>
          <li>Initial render of Redux</li>
          <li>States</li>
          <ul>
            <li>Single source of truth</li>
            <li>Immutable state</li>
            <li>getDerivedStateFromProps</li>
            <li>setState</li>
            <li>React Thunk</li>
            <li>React Saga</li>
            <li>Redux Toolkit</li>
          </ul>
          <li>Reducer</li>
          <ul>
            <li>Default reducer</li>
            <li>Index.js</li>
            <li>Redux store file</li>
            <li>Redux dev tools</li>
            <li>Store</li>
            <li>Provider</li>
          </ul>
          <li>Middleware</li>
          <ul>
            <li>Logger, crash reporting</li>
            <li>Features async tasks</li>
            <li>Redux Thunk</li>
            <li>Redux Saga</li>
            <li>Redux Toolkit</li>
          </ul>
          <li>Redux Persist</li>
          <li>Reselect</li>
          <li>Immutability</li>
          <ul>
            <li>Shallow equality</li>
            <li>Deep equality</li>
          </ul>
          <li>Optimistic UI</li>
          <li>Hydrating State</li>
          <li>Saga on thunk</li>
        </ul>
      </ol>

      <h3>💬 Interview Questions - Redux Theory</h3>
      <ul>
        <li>What problems does Redux solve in large React applications?</li>
        <li>Explain Redux architecture and how data flows in Redux.</li>
        <li>What are actions and reducers in Redux?</li>
        <li>How do you handle async operations in Redux?</li>
        <li>What's the difference between Redux Thunk and Redux Saga?</li>
        <li>What is the role of the Redux store?</li>
        <li>How is immutability maintained in Redux?</li>
        <li>What is optimistic UI and how is it implemented?</li>
        <li>How does Redux devtools help during development?</li>
        <li>What is Redux Toolkit and why is it recommended now?</li>
      </ul>

      <h2>Others</h2>
      <ol>
        <li>Increment and the working of immer inside.</li>
        <li>Accessing values of redux components</li>
        <li>Flux vs Redux</li>
        <li>Log out user</li>
        <li>react-redux-thunk</li>
        <li>conditionallyAdapter</li>
        <li>customListenedAddons</li>
      </ol>

      <h3>💬 Interview Questions - Advanced/Other</h3>
      <ul>
        <li>How does Immer help with immutability in Redux?</li>
        <li>Explain the differences between Flux and Redux architecture.</li>
        <li>How would you handle logging out a user securely in Redux?</li>
        <li>What are some real-world use cases for custom middlewares in Redux?</li>
      </ul>

      <h2>JWT</h2>
      <ol>
        <li>JWT</li>
        <ul>
          <li>Introduction</li>
          <li>Header</li>
          <li>Payload</li>
          <li>Signature</li>
          <li>Verify JWT</li>
        </ul>
        <li>Authentication working</li>
        <ul>
          <li>Passport</li>
          <li>Google OAuth</li>
          <li>GitHub Token</li>
          <li>Facebook token</li>
          <li>JWT token</li>
          <li>Authentication or Authorization</li>
        </ul>
        <li>Types of Tokens</li>
        <ul>
          <li>public</li>
          <li>private</li>
          <li>jwt</li>
        </ul>
      </ol>

      <h3>💬 Interview Questions - JWT</h3>
      <ul>
        <li>What is JWT and how does it work?</li>
        <li>What are the parts of a JWT token?</li>
        <li>How do you validate a JWT token?</li>
        <li>What's the difference between authentication and authorization?</li>
        <li>How would you implement role-based access control with JWT?</li>
        <li>When should you use public vs private tokens?</li>
        <li>What security risks exist with JWT and how can you prevent them?</li>
      </ul>
    </div>
    </div>
  );
}

export default Redux;
