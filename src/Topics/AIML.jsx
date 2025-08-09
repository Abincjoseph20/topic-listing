import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function AIML() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "DSASyllabus_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>Artificial Intelligence (AI) & Machine Learning (ML)</h1>
      <h2>Basic to Advanced</h2>
      <ol>
        <li>Introduction to AI & ML</li>
        <li>History & Applications</li>
        <li>Key AI Concepts
          <ul type="i">
            <li>Agents & Environments</li>
            <li>Search Algorithms</li>
            <li>Knowledge Representation</li>
            <li>Logic & Reasoning</li>
          </ul>
        </li>
        <li>Types of Machine Learning
          <ul type="i">
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Reinforcement Learning</li>
            <li>Semi-Supervised Learning</li>
          </ul>
        </li>
        <li>Data Preprocessing</li>
        <li>Feature Engineering</li>
        <li>Model Selection</li>
        <li>Regression Models</li>
        <li>Classification Models</li>
        <li>Clustering Algorithms</li>
        <li>Decision Trees & Random Forests</li>
        <li>Support Vector Machines (SVM)</li>
        <li>Naive Bayes Classifier</li>
        <li>Neural Networks Basics</li>
        <li>Deep Learning
          <ul type="i">
            <li>CNN (Convolutional Neural Networks)</li>
            <li>RNN (Recurrent Neural Networks)</li>
            <li>LSTM & GRU</li>
            <li>Transformers</li>
          </ul>
        </li>
        <li>Natural Language Processing (NLP)</li>
        <li>Computer Vision</li>
        <li>Reinforcement Learning Advanced</li>
        <li>Model Evaluation & Metrics</li>
        <li>Hyperparameter Tuning</li>
        <li>Bias & Fairness in AI</li>
        <li>Model Deployment</li>
        <li>AI in Cloud Platforms</li>
        <li>Ethics in AI</li>
        <li>Future Trends in AI & ML</li>
      </ol>
    </div>
    </div>
  );
}

export default AIML;
