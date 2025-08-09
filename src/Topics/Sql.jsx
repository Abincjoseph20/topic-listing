import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function SQL() {
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
      <h1>SQL</h1>

      <h2>Fundamentals</h2>
      <ol>
        <li>What is SQL?</li>
        <li>Relational Database Concepts</li>
        <li>
          SQL Statement Types
          <ul>
            <li>DDL (Data Definition Language)</li>
            <li>DML (Data Manipulation Language)</li>
            <li>DQL (Data Query Language)</li>
            <li>DCL (Data Control Language)</li>
            <li>TCL (Transaction Control Language)</li>
          </ul>
        </li>
        <li>
          Database Design Basics
          <ul>
            <li>Primary Keys</li>
            <li>Foreign Keys</li>
            <li>Relationships (1:1, 1:M, M:N)</li>
            <li>Normalization</li>
          </ul>
        </li>
      </ol>

      <h2>DDL (Data Definition Language)</h2>
      <ol start="5">
        <li>CREATE DATABASE</li>
        <li>CREATE TABLE</li>
        <li>ALTER TABLE</li>
        <li>DROP TABLE</li>
        <li>TRUNCATE TABLE</li>
        <li>
          Constraints
          <ul>
            <li>NOT NULL</li>
            <li>UNIQUE</li>
            <li>PRIMARY KEY</li>
            <li>FOREIGN KEY</li>
            <li>CHECK</li>
            <li>DEFAULT</li>
          </ul>
        </li>
      </ol>

      <h2>DML (Data Manipulation Language)</h2>
      <ol start="11">
        <li>INSERT</li>
        <li>UPDATE</li>
        <li>DELETE</li>
      </ol>

      <h2>DQL (Data Query Language)</h2>
      <ol start="14">
        <li>SELECT Statement</li>
        <li>WHERE Clause</li>
        <li>ORDER BY</li>
        <li>DISTINCT</li>
        <li>
          Operators
          <ul>
            <li>Comparison Operators (=, &lt;&gt;, !=, &gt;, &lt;, &gt;=, &lt;=)</li>
            <li>Logical Operators (AND, OR, NOT)</li>
            <li>Special Operators (BETWEEN, IN, LIKE, IS NULL)</li>
          </ul>
        </li>
        <li>
          Aggregate Functions
          <ul>
            <li>COUNT()</li>
            <li>SUM()</li>
            <li>AVG()</li>
            <li>MIN()</li>
            <li>MAX()</li>
          </ul>
        </li>
        <li>GROUP BY</li>
        <li>HAVING</li>
        <li>Aliases (AS)</li>
      </ol>

      <h2>Joins</h2>
      <ol start="24">
        <li>INNER JOIN</li>
        <li>LEFT JOIN (LEFT OUTER JOIN)</li>
        <li>RIGHT JOIN (RIGHT OUTER JOIN)</li>
        <li>FULL JOIN (FULL OUTER JOIN)</li>
        <li>CROSS JOIN</li>
        <li>Self Join</li>
        <li>Non-Equi Join</li>
      </ol>

      <h2>Subqueries</h2>
      <ol start="31">
        <li>Single Row Subqueries</li>
        <li>
          Multiple Row Subqueries
          <ul>
            <li>IN</li>
            <li>ANY</li>
            <li>ALL</li>
          </ul>
        </li>
        <li>Correlated Subqueries</li>
        <li>Nested Subqueries</li>
      </ol>

      <h2>Set Operations</h2>
      <ol start="36">
        <li>UNION</li>
        <li>UNION ALL</li>
        <li>INTERSECT</li>
        <li>MINUS/EXCEPT</li>
      </ol>

      <h2>Advanced SQL</h2>
      <ol start="40">
        <li>
          Views
          <ul>
            <li>Creating Views</li>
            <li>Updating Views</li>
            <li>Materialized Views</li>
          </ul>
        </li>
        <li>
          Indexes
          <ul>
            <li>Single Column</li>
            <li>Composite</li>
            <li>Unique</li>
          </ul>
        </li>
        <li>Sequences</li>
        <li>
          Functions
          <ul>
            <li>Scalar Functions</li>
            <li>Aggregate Functions</li>
            <li>User Defined Functions</li>
          </ul>
        </li>
        <li>Stored Procedures</li>
        <li>Triggers</li>
        <li>
          Transactions
          <ul>
            <li>ACID Properties</li>
            <li>BEGIN/COMMIT/ROLLBACK</li>
            <li>Savepoints</li>
          </ul>
        </li>
        <li>
          Constraints
          <ul>
            <li>Domain Constraints</li>
            <li>Entity Integrity Constraints</li>
            <li>Referential Integrity Constraints</li>
          </ul>
        </li>
      </ol>

      <h2>Database Objects</h2>
      <ol start="50">
        <li>Tables</li>
        <li>Views</li>
        <li>Indexes</li>
        <li>Sequences</li>
        <li>Synonyms</li>
      </ol>

      <h2>String Functions</h2>
      <ol start="55">
        <li>CONCAT()</li>
        <li>LENGTH()</li>
        <li>UPPER()/LOWER()</li>
        <li>SUBSTRING()</li>
        <li>TRIM()</li>
        <li>REPLACE()</li>
      </ol>

      <h2>Date Functions</h2>
      <ol start="61">
        <li>CURRENT_DATE</li>
        <li>CURRENT_TIMESTAMP</li>
        <li>DATEADD()</li>
        <li>DATEDIFF()</li>
        <li>EXTRACT()</li>
        <li>DATE_FORMAT()</li>
      </ol>

      <h2>Numeric Functions</h2>
      <ol start="67">
        <li>ABS()</li>
        <li>ROUND()</li>
        <li>CEIL()/CEILING()</li>
        <li>FLOOR()</li>
        <li>POWER()</li>
        <li>SQRT()</li>
      </ol>

      <h2>Window Functions</h2>
      <ol start="73">
        <li>ROW_NUMBER()</li>
        <li>RANK()</li>
        <li>DENSE_RANK()</li>
        <li>LEAD()/LAG()</li>
        <li>FIRST_VALUE()/LAST_VALUE()</li>
      </ol>

      <h2>Case Statements</h2>
      <ol start="78">
        <li>CASE Expression</li>
        <li>Simple CASE</li>
        <li>Searched CASE</li>
      </ol>

      <h2>Performance Tuning</h2>
      <ol start="81">
        <li>Query Optimization</li>
        <li>Execution Plans</li>
        <li>Indexing Strategies</li>
        <li>Statistics</li>
      </ol>

      <h2>Security</h2>
      <ol start="85">
        <li>Users and Roles</li>
        <li>Privileges</li>
        <li>GRANT/REVOKE</li>
      </ol>
    </div>
    </div>
  );
}

export default SQL;
