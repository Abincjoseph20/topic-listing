import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function JS() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
      contentRef: DownloadRef, // Use contentRef instead of content
      documentTitle: "JS_Notes"
    });

  return (
    <div >
       <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>
    <div ref={DownloadRef} className="python-container">
      <h1>JavaScript</h1>

      {/* DOM */}
      <h2>DOM</h2>
      <ol>
        <li>querySelector</li>
        <li>textContent</li>
        <li>addEventListener</li>
        <li>Order of Parsing</li>
        <li>event Propagation
          <ul type="i">
            <li>event Bubbling</li>
            <li>event Capturing / Trickling</li>
            <li>how to add both on program</li>
          </ul>
          {/* Q: What's the difference between event bubbling and capturing? */}
        </li>
        <li>event.stopPropagation()</li>
        <li>instance</li>
        <li>e.target
          <ul type="i">
            <li>id</li>
            <li>tagName</li>
            <li>pros and cons</li>
          </ul>
          {/* Q: How does event.target differ from event.currentTarget? */}
        </li>
      </ol>

      {/* Architecture */}
      <h2>Architecture</h2>
      <ol>
        <li>Execution context
          <ul type="i">
            <li>variable environment (memory)</li>
            <li>Thread of execution (code)
              <ul type="a">
                <li>global &amp; local execution context</li>
                <li>phases:
                  <ul type="a">
                    <li>Memory allocation</li>
                    <li>Code execution</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {/* Q: What phases happen in the execution context creation? */}
        </li>
        <li>Synchronous single-threaded app</li>
        <li>Call stack</li>
        <li>Proxy
          <ul type="i">
            <li>Proxy traps</li>
            <li>Reflect</li>
            <li>proxy vs reflect</li>
          </ul>
          {/* Q: When would you use a Proxy in JS? */}
        </li>
        <li>Event loop
          <ul type="i">
            <li>Callback queue / task queue</li>
            <li>Microtask queue
              <ul type="a">
                <li>Mutation observer</li>
                <li>Starvation</li>
                <li>Memory Heap</li>
              </ul>
            </li>
            <li>Just In Time Compilation</li>
          </ul>
          {/* Q: Explain the difference between microtasks and macrotasks. */}
        </li>
      </ol>

      {/* Theory */}
      <h2>Theory</h2>
      <ol>
        <li>Data types
          <ul type="i">
            <li>wrapper objects</li>
            <li><code>0 vs new Number(0)</code></li>
            <li>Numbers
              <ul type="a">
                <li><code>1_000_000</code></li>
                <li><code>1e9</code>, <code>1e-6</code></li>
                <li>Hex, binary and octal numbers</li>
                <li><code>toString(base)</code></li>
                <li><code>Math.trunc()</code></li>
              </ul>
            </li>
          </ul>
          {/* Q: What is the difference between primitive types and wrapper objects? */}
        </li>
        <li>Operators</li>
        <li>Enum
          <ul type="i">
            <li>how to simulate enums in JavaScript</li>
          </ul>
          {/* Q: Can JavaScript enums be mutable? */}
        </li>
        <li>Function
          <ul type="i">
            <li>Function Statement</li>
            <li>Function Expression</li>
            <li>Function Declaration</li>
            <li>Anonymous function</li>
            <li>Named Function Expression</li>
            <li>Functional Programming</li>
            <li>Higher-order function</li>
            <li>First-class function</li>
            <li>Decorator function
              <ul type="a">
                <li>use cases:
                  <ul type="a">
                    <li>count number of function calls</li>
                    <li>validate parameters</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {/* Q: What is a higher-order function? */}
        </li>
        <li>Pure function
          <ul type="i">
            <li>rules</li>
            <li>pros and cons</li>
            <li>pure vs impure</li>
          </ul>
          {/* Q: Why prefer pure functions in FP? */}
        </li>
        <li>IIFE
          <ul type="i">
            <li>pros</li>
            <li>cons</li>
          </ul>
          {/* Q: When to use an IIFE? */}
        </li>
        <li>Set, Map, Flat
          <ul type="i">
            <li>set
              <ul type="a">
                <li>add, delete, has, clear, keys, values, entries</li>
                <li><code>mySet.size</code></li>
              </ul>
            </li>
            <li>map
              <ul type="a">
                <li>get, set, has, delete, clear, keys, values, entries, forEach</li>
                <li>iteration</li>
              </ul>
            </li>
            <li>object vs map</li>
            <li>WeakSet
              <ul type="a">
                <li>features</li>
              </ul>
            </li>
            <li>WeakMap
              <ul type="a">
                <li>features</li>
                <li>key privacy</li>
              </ul>
            </li>
            <li>Set vs Map summary</li>
            <li><code>flat()</code></li>
            <li><code>flatMap()</code></li>
            <li><code>reduceRight()</code></li>
            <li><code>copyWithin()</code></li>
          </ul>
          {/* Q: When use a Map over an Object? */}
        </li>
        <li>Operators (Advanced)
          <ul type="i">
            <li>Nullish coalescing operator</li>
            <li>Optional chaining</li>
            <li><code>||</code> vs <code>??</code></li>
            <li>Ternary operator</li>
            <li>Type operators</li>
            <li>Unary operators
              <ul type="a">
                <li>delete</li>
                <li><code>typeof</code></li>
                <li><code>!</code>, <code>++</code>, <code>--</code>, <code>+</code></li>
              </ul>
            </li>
            <li>Bitwise operators
              <ul type="a">
                <li>bitwise OR</li>
                <li>bitwise AND</li>
                <li>use cases</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Scope
          <ul type="i">
            <li>Global scope</li>
            <li>Module scope</li>
            <li>Function scope</li>
            <li>Lexical scope</li>
            <li>Block scope</li>
          </ul>
          {/* Q: What causes a variable shadowing error? */}
        </li>
        <li>Closure
          <ul type="i">
            <li>Disadvantages</li>
            <li>Uses</li>
            <li>Lexical scope vs closure</li>
            <li>IIFE</li>
          </ul>
          {/* Q: Explain closure with an example. */}
        </li>
        <li>Garbage collection
          <ul type="i">
            <li>How it works?</li>
            <li>Mark-and-sweep</li>
            <li>Reachability</li>
            <li>Optimizations:
              <ul type="a">
                <li>Generational</li>
                <li>Incremental</li>
                <li>Idle-time</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Hoisting
          <ul type="i">
            <li>TDZ (<code>let</code>, <code>const</code> vs <code>var</code>)</li>
            <li>Function vs arrow function</li>
          </ul>
        </li>
        <li>Call, Apply, Bind
          <ul type="i">
            <li>Function borrowing</li>
            <li><code>call</code> vs <code>apply</code> vs <code>bind</code></li>
            <li>Polyfills</li>
          </ul>
          {/* Q: When use bind over call/apply? */}
        </li>
        <li>Async / Promises
          <ul type="i">
            <li>Promise states</li>
            <li>Promise chaining</li>
            <li><code>Promise.all</code>, <code>.allSettled</code>, <code>.any</code>, <code>.race</code></li>
            <li><code>finally</code>, <code>catch</code></li>
            <li>promisify</li>
            <li>Pros and cons</li>
          </ul>
          {/* Q: Compare Promise.all vs Promise.allSettled */}
        </li>
        <li>Async/Await
          <ul type="i">
            <li>Async always returns a promise</li>
            <li>Error handling patterns</li>
          </ul>
        </li>
        <li>Debouncing &amp; Throttling</li>
        <li>Spread and Rest Operator</li>
        <li>DOM vs BOM</li>
        <li>Window object</li>
        <li>ES6 Features
          <ul type="i">
            <li><code>let</code>, <code>const</code>, <code>var</code></li>
            <li>Ternary operators</li>
            <li>Arrow functions</li>
            <li>Template literals</li>
            <li>Default parameters</li>
            <li>Classes</li>
            <li>Modules</li>
            <li>Iterators</li>
            <li>Object & Array destructuring</li>
          </ul>
        </li>
        <li>Pass by value vs reference</li>
        <li>Generator functions</li>
        <li>Prototype & prototype chain</li>
        <li>Recursion & base vs recursive case</li>
        <li>Truthy & falsy</li>
        <li>This substitution</li>
        <li>Strict mode</li>
        <li>Life (patterns, use cases?)</li>
      </ol>

      {/* VS */}
      <h2>VS</h2>
      <ol>
        <li>Label vs function</li>
        <li><code>==</code> vs <code>===</code></li>
        <li><code>let</code>, <code>const</code> vs <code>var</code></li>
        <li>Synchronous vs asynchronous</li>
        <li><code>while</code> vs <code>do...while</code></li>
        <li><code>forEach</code> vs <code>map</code></li>
        <li>Parameters vs arguments</li>
        <li>undefined vs null vs NaN</li>
        <li>Keyframes animation</li>
        <li>Type casting vs type coercion</li>
        <li><code>textContent</code> vs <code>innerText</code></li>
        <li>Identifiers vs variables</li>
        <li><code>dot</code> vs <code>bracket</code></li>
        <li><code>defer</code> vs <code>async</code></li>
      </ol>

      {/* Good to Know */}
      <h2>Good to Know</h2>
      <ol>
        <li>Interpreted vs compiled code</li>
        <li>Server-side vs client-side code</li>
        <li>Node.js vs browser</li>
      </ol>
      <h2>Interview Questions</h2>
      <ol>
        <li>What is the difference between <code>==</code> and <code>===</code>?</li>
        <li>What is hoisting in JavaScript?</li>
        <li>What is a closure and how does it work?</li>
        <li>Explain <code>var</code>, <code>let</code>, and <code>const</code>.</li>
        <li>What is the difference between <code>async</code> and <code>defer</code>?</li>
        <li>What is the event loop in JavaScript?</li>
        <li>What are promises and how do you use <code>async/await</code>?</li>
        <li>What is the spread operator?</li>
        <li>Explain the difference between <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>.</li>
        <li>What is the difference between <code>undefined</code> and <code>null</code>?</li>
      </ol>
    </div>
    </div>
  );
}

export default JS;
