import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function Robotics() {
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
      <h1>Robotics</h1>
      <h2>Basic to Advanced</h2>
      <ol>
        <li>Introduction to Robotics</li>
        <li>History & Evolution of Robotics</li>
        <li>Applications of Robotics</li>
        <li>Types of Robots
          <ul type="i">
            <li>Industrial Robots</li>
            <li>Service Robots</li>
            <li>Humanoid Robots</li>
            <li>Autonomous Mobile Robots (AMR)</li>
            <li>Collaborative Robots (Cobots)</li>
          </ul>
        </li>
        <li>Robot Components
          <ul type="i">
            <li>Sensors</li>
            <li>Actuators</li>
            <li>Controllers</li>
            <li>Power Supply</li>
          </ul>
        </li>
        <li>Robot Kinematics
          <ul type="i">
            <li>Forward Kinematics</li>
            <li>Inverse Kinematics</li>
          </ul>
        </li>
        <li>Dynamics of Robots</li>
        <li>Robot Control Systems
          <ul type="i">
            <li>PID Control</li>
            <li>Trajectory Planning</li>
            <li>Motion Control</li>
          </ul>
        </li>
        <li>Robotics Programming Languages
          <ul type="i">
            <li>Python</li>
            <li>C++</li>
            <li>ROS (Robot Operating System)</li>
          </ul>
        </li>
        <li>Artificial Intelligence in Robotics</li>
        <li>Computer Vision in Robotics</li>
        <li>Machine Learning for Robotics</li>
        <li>Autonomous Navigation</li>
        <li>SLAM (Simultaneous Localization and Mapping)</li>
        <li>Human-Robot Interaction (HRI)</li>
        <li>Safety in Robotics</li>
        <li>Robotics in Industry 4.0</li>
        <li>Swarm Robotics</li>
        <li>Underwater & Space Robotics</li>
        <li>Ethics in Robotics</li>
        <li>Future Trends in Robotics</li>
      </ol>
    </div>
    </div>
  );
}

export default Robotics;
