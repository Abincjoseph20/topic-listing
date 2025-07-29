import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function ReactJS() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "ReactJS_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>React</h1>

      <h2>Set up</h2>
      <ol>
        <li><code>npx create-react-app {'<appName>'}</code></li>
        <li>
          Components
          <ul>
            <li>Default is App</li>
            <li>Functional and Class Components</li>
          </ul>
        </li>
        <li>rafce, tsrafce</li>
        <li>
          Calling function on button click
          <ul>
            <li>Without parameter</li>
            <li>With parameter</li>
          </ul>
        </li>
        <li>Fragments</li>
        <li>Children Prop</li>
      </ol>

      <h2>Theory</h2>
      <ol start="7">
        <li>What is React?</li>
        <li>
          DOM
          <ul>
            <li>DOM vs Virtual DOM</li>
            <li>
              Reconciliation
              <ul>
                <li>Working</li>
              </ul>
            </li>
            <li>Diffing Algorithm</li>
            <li>
              React Fibre
              <ul>
                <li>Incremental rendering</li>
                <li>Shadow DOM</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Dynamic rendering</li>
        <li>props vs state</li>
        <li>Server Side vs Client Side Rendering</li>
        <li>
          Synthetic Events
          <ul>
            <li>Event Pooling</li>
          </ul>
        </li>
        <li>Life Cycle</li>
        <li>View Oriented</li>
        <li>Memoization</li>
        <li>Pure functions and components</li>
        <li>Strict Mode</li>
        <li>SPAs vs MPAs</li>
        <li>CSR vs SSR</li>
        <li>
          Static vs Dynamic rendering
          <ul>
            <li>ISR, SPA</li>
          </ul>
        </li>
        <li>
          Components
          <ul>
            <li>
              A React render tree
              <ul>
                <li>Top-level components</li>
                <li>Leaf components</li>
              </ul>
            </li>
            <li>
              Props
              <ul>
                <li>Immutable</li>
              </ul>
            </li>
            <li>Forwarding props</li>
            <li>Children</li>
            <li>Importance of purity</li>
            <li>Local mutation</li>
          </ul>
        </li>
        <li>
          JSX
          <ul>
            <li>Rules of JSX</li>
            <li>Fragment</li>
            <li>JavaScript in JSX</li>
            <li>HTML vs JSX</li>
          </ul>
        </li>
        <li>Conditional rendering</li>
        <li>Key</li>
        <li>
          UI as a tree
          <ul>
            <li>Render trees</li>
            <li>Module Dependency Tree</li>
            <li>
              Bundler
              <ul>
                <li>Webpack</li>
                <li>Compiling</li>
                <li>Loader</li>
                <li>Code splitting</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Rendering steps
          <ul>
            <li>Triggering</li>
            <li>Rendering</li>
            <li>Committing</li>
          </ul>
        </li>
        <li>Rerendering</li>
        <li>Batching updates</li>
        <li>
          State
          <ul>
            <li>Behavior</li>
            <li>Queueing updates</li>
            <li>Updater function</li>
            <li>Updating object</li>
            <li>Local var vs state var</li>
            <li>Local mutation</li>
            <li>Lifting state</li>
            <li>Reducer</li>
          </ul>
        </li>
        <li>Declarative vs Imperative UI</li>
        <li>
          Event handlers
          <ul>
            <li><code>onClick</code>, <code>onSubmit</code></li>
            <li>Stopping propagation</li>
            <li>Preventing default</li>
          </ul>
        </li>
        <li>
          LifeCycle Methods
          <ul>
            <li>
              Mounting
              <ul>
                <li>constructor</li>
                <li>render</li>
                <li>getDerivedStateFromProps</li>
                <li>componentDidMount</li>
              </ul>
            </li>
            <li>
              Updating
              <ul>
                <li>shouldComponentUpdate</li>
                <li>componentDidUpdate</li>
                <li>getSnapshotBeforeUpdate</li>
              </ul>
            </li>
            <li>
              Unmounting
              <ul>
                <li>componentWillUnmount</li>
              </ul>
            </li>
            <li>
              Error Handling
              <ul>
                <li>getDerivedStateFromError</li>
                <li>componentDidCatch</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Hooks
          <ul>
            <li>useState</li>
            <li>useRef</li>
            <li>useEffect</li>
            <li>useMemo</li>
            <li>useCallback</li>
            <li>useContext</li>
            <li>useReducer</li>
            <li>useTransition</li>
            <li>useDeferredValue</li>
            <li>useId</li>
            <li>useImperativeHandle</li>
            <li>useDebugValue</li>
          </ul>
        </li>
        <li>
          Props
          <ul>
            <li>Default Props</li>
            <li>Prop Drilling</li>
            <li>Children</li>
          </ul>
        </li>
        <li>
          Components
          <ul>
            <li>Creating Components</li>
            <li>
              Controlled vs Uncontrolled
              <ul>
                <li>Inputs</li>
              </ul>
            </li>
            <li>HOC (Higher Order Components)</li>
            <li>Pure Components</li>
          </ul>
        </li>
        <li>
          React Router
          <ul>
            <li>Install</li>
            <li>Hooks: useHistory, useNavigate, useLocation</li>
            <li>Link, NavLink</li>
            <li>Routes and Route</li>
            <li>Outlet and Nested Routes</li>
            <li>Different Routers: Browser, Hash, Memory, Static</li>
          </ul>
        </li>
      </ol>

      <h2>Good to Know</h2>
      <ol start="32">
        <li>Immer</li>
        <li>Object.entries(e)</li>
        <li>Icons libraries (e.g., react-icons)</li>
        <li>
          Experimental Hooks
          <ul>
            <li>useEffectEvent</li>
            <li>useFormStatus</li>
          </ul>
        </li>
        <li>useOptimistic</li>
      </ol>

      <h2>Week 2</h2>
      <ol start="38">
        <li>Render props</li>
        <li>Higher order components</li>
        <li>Custom hooks</li>
        <li>
          Code splitting
          <ul>
            <li>Route-based</li>
            <li>Component-based</li>
            <li>React.lazy</li>
          </ul>
        </li>
        <li>Lazy Loading with Suspense</li>
        <li>
          useReducer
          <ul>
            <li>Dispatch actions</li>
          </ul>
        </li>
      </ol>

      <h2>Topics to Learn</h2>
      <ol start="45">
        <li>
          PropTypes
          <ul>
            <li>name, string, any</li>
            <li>required, optional</li>
            <li>node, element</li>
            <li>oneOf, shape</li>
            <li>PropTypes vs TypeScript</li>
          </ul>
        </li>
        <li>
          useMemo vs useCallback
          <ul>
            <li>React.memo vs useMemo</li>
            <li>Object reference</li>
            <li>Pros and cons</li>
          </ul>
        </li>
        <li>
          Context API
          <ul>
            <li>Provider</li>
            <li>Consumer</li>
            <li>useContext</li>
            <li>useReducer with context</li>
          </ul>
        </li>
        <li>
          Webpack & Babel
          <ul>
            <li>Module Bundler</li>
            <li>Tree Shaking</li>
            <li>Dynamic Imports</li>
            <li>Runtime Polyfills</li>
          </ul>
        </li>
        <li>Dead code elimination</li>
      </ol>

      <h2>Others</h2>
      <ol>
        <li>forwardRef</li>
        <li>useDebugValue</li>
        <li>useImperativeHandle</li>
        <li>Axios interceptor</li>
        <li>
          Concurrent Requests
          <ul>
            <li><code>axios.all()</code>, <code>axios.spread()</code></li>
            <li>Cancel token</li>
          </ul>
        </li>
      </ol>

      <h2>Important Interview Questions</h2>
      <ol>
        <li>What is reconciliation in React and how does it work?</li>
        <li>Difference between useMemo and React.memo?</li>
        <li>Explain prop drilling and how to avoid it?</li>
        <li>What is the difference between controlled and uncontrolled components?</li>
        <li>Why are keys important in lists?</li>
        <li>Explain how useEffect cleanup works</li>
        <li>What causes unnecessary re-renders?</li>
        <li>What is closure and how does it affect hooks?</li>
        <li>Difference between SSR, CSR, and SSG?</li>
        <li>How does batching work in React?</li>
      </ol>
    </div>
    </div>
  );
}

export default ReactJS;
