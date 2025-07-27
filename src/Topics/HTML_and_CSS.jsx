import './css/python.css';

function HTML_and_CSS() {
  return (
    <div className="python-container">
      <h1>HTML &amp; CSS</h1>

      {/* HTML */}
      <h2>HTML</h2>

      {/* Basics */}
      <h3>Basics</h3>
      <ol>
        <li>Block element and inline element</li>
        <li>Element
          <ul type="i">
            <li>Void Elements</li>
            <li>Container Element</li>
          </ul>
        </li>
        <li>Attributes
          <ul type="i">
            <li>Boolean attributes</li>
            <li>lang attribute</li>
          </ul>
        </li>
        <li>Nesting</li>
        <li><code>{"<!DOCTYPE html>"}</code></li>
        <li>head
          <ul type="i">
            <li><code>{"<meta>"}</code></li>
            <li><code>{"<meta charset=\"utf-8\">"}</code></li>
            <li>Adding an author and description</li>
          </ul>
        </li>
      </ol>

      {/* VS */}
      <h3>VS</h3>
      <ol>
        <li><code>{"<h1>"}</code> vs <code>{"<title>"}</code> in head</li>
        <li><code>{"<em>"}</code> vs <code>{"<i>"}</code></li>
        <li><code>{"<b>"}</code> vs <code>{"<strong>"}</code></li>
      </ol>

      {/* Good to Know */}
      <h3>GOOD TO KNOW</h3>
      <ol>
        <li>Whitespace</li>
        <li>Entity references
          <ul type="i">
            <li><code>{"<"}</code> = <code>&amp;lt;</code></li>
            <li><code>{">"}</code> = <code>&amp;gt;</code></li>
            <li><code>{'"'}</code> = <code>&amp;quot;</code></li>
          </ul>
        </li>
        <li>Open Graph Data</li>
      </ol>

      {/* HTML Questions */}
      <h3>🔍 HTML Questions</h3>
      <ul>
        <li>What is the difference between block and inline elements?</li>
        <li>What is the purpose of the <code>{"<!DOCTYPE>"}</code> declaration?</li>
        <li>What are semantic tags in HTML?</li>
        <li>What is the difference between <code>{"<b>"}</code> and <code>{"<strong>"}</code>?</li>
        <li>What are void elements in HTML?</li>
      </ul>

      {/* CSS */}
      <h2>CSS</h2>
      <ol>
        <li>Anatomy of CSS ruleset</li>
        <li>Selectors
          <ul type="i">
            <li>Element</li>
            <li>Id, Class</li>
            <li>Attribute</li>
            <li>Pseudo</li>
          </ul>
        </li>
        <li>Box model</li>
      </ol>

      {/* CSS Questions */}
      <h3>🔍 CSS Questions</h3>
      <ul>
        <li>What is the CSS Box Model?</li>
        <li>What is the difference between ID and class selectors?</li>
        <li>What is specificity in CSS?</li>
        <li>What is the difference between relative and absolute positioning?</li>
        <li>What is Grid in CSS? How is it different from Flexbox?</li>
        <li>How do media queries work in responsive design?</li>
      </ul>
    </div>
  );
}

export default HTML_and_CSS;
