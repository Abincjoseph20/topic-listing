import './css/python.css';

function ReactTopics() {
  return (
    <div className="react-container">
      <h1>React</h1>

      <h2>Set up</h2>
      <ol>
        <li>
          <code>npx create-react-app {'<appName>'}</code>
        </li>
        <li>
          Components
          <ul>
            <li>Default is App</li>
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
        <li>What is React</li>
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
        <li>Server Side vs Client Side Rendering in React</li>
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
            <li>Importance of making them pure</li>
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
          Ul as a tree
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
            <li><code>onClick</code>, <code>onSubmit</code>, etc.</li>
            <li>Stopping propagation</li>
            <li>Preventing default</li>
          </ul>
        </li>
        <li>
          LifeCycle Methods
          <ul>
            <li>
              Mounting phase
              <ul>
                <li>constructor</li>
                <li>render</li>
                <li>getDerivedStateFromProps</li>
                <li>componentDidMount</li>
              </ul>
            </li>
            <li>
              Updating phase
              <ul>
                <li>shouldComponentUpdate</li>
                <li>componentWillUpdate</li>
                <li>componentDidUpdate</li>
                <li>getSnapshotBeforeUpdate</li>
              </ul>
            </li>
            <li>
              Unmounting phase
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
            <li>
              useState
              <ul>
                <li>changeValue</li>
                <li>changeValueWithFunction</li>
              </ul>
            </li>
            <li>
              useRef
              <ul>
                <li>html</li>
                <li>useState vs useRef</li>
                <li>forwardRef</li>
                <li>useImperativeHandle</li>
                <li>flushSync</li>
              </ul>
            </li>
            <li>
              useEffect
              <ul>
                <li>dependency</li>
                <li>return in useEffect</li>
                <li>useLayoutEffect</li>
              </ul>
            </li>
            <li>
              useMemo
              <ul>
                <li>sample</li>
                <li>recache</li>
                <li>Pros and cons</li>
                <li>Referential equality</li>
              </ul>
            </li>
            <li>
              useHistory
              <ul>
                <li>push</li>
                <li>pop</li>
                <li>replace</li>
                <li>Redirect</li>
              </ul>
            </li>
            <li>
              useNavigate
              <ul>
                <li>navigate()</li>
                <li>-1, 1</li>
              </ul>
            </li>
            <li>
              useCallback
              <ul>
                <li>sample</li>
                <li>useMemo vs useCallback</li>
                <li>uses</li>
              </ul>
            </li>
            <li>
              useContext
              <ul>
                <li>sample</li>
              </ul>
            </li>
            <li>useReducer</li>
            <li>
              Create custom hooks
              <ul>
                <li>useDebugValue</li>
              </ul>
            </li>
            <li>useTransition</li>
            <li>useDeferredValue</li>
            <li>
              useId
              <ul>
                <li>sample</li>
              </ul>
            </li>
            <li>useImperativeHandle</li>
          </ul>
        </li>
        <li>
          Props
          <ul>
            <li>Default prop</li>
            <li>Prop Drilling</li>
            <li>Children</li>
          </ul>
        </li>
        <li>
          Components
          <ul>
            <li>Creating Components</li>
            <li>
              Controlled vs Uncontrolled Components
              <ul>
                <li>Inputs</li>
              </ul>
            </li>
            <li>Higher order components</li>
            <li>Pure components</li>
          </ul>
        </li>
        <li>
          React Router
          <ul>
            <li>Install</li>
            <li>
              Hooks
              <ul>
                <li>useHistory</li>
                <li>useNavigate</li>
              </ul>
            </li>
            <li>Use</li>
            <li>
              Link
              <ul>
                <li>replace</li>
                <li>reloadDocument</li>
              </ul>
            </li>
            <li>state={'{}'}</li>
            <li>useLocation()</li>
            <li>
              NavLink
              <ul>
                <li>isActive</li>
                <li>end</li>
              </ul>
            </li>
            <li>
              Navigate
              <ul>
                <li>useNavigate</li>
                <li>navigate(-1)</li>
              </ul>
            </li>
            <li>
              Types of Router
              <ul>
                <li>BrowserRouter</li>
                <li>HashRouter</li>
                <li>HistoryRouter</li>
                <li>MemoryRouter</li>
                <li>StaticRouter</li>
                <li>NativeRouter</li>
              </ul>
            </li>
            <li>params (id)</li>
            <li>const {'{ name }'} = useParams()</li>
            <li>useSearchParams</li>
            <li>
              Nesting Routes
              <ul>
                <li>index</li>
                <li>location</li>
                <li>shared element with children</li>
                <li>outlet</li>
                <li>useOutletContext()</li>
                <li>Nesting in separate file</li>
                <li>useRoute</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h2>Good to Know</h2>
      <ol start="32">
        <li>Immer</li>
        <li>Object.entries(e)</li>
        <li>Icons</li>
        <li>
          Experimental Hooks
          <ul>
            <li>useEffectEvent</li>
            <li>use</li>
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
            <li>Route based</li>
            <li>Component based</li>
            <li>React.lazy</li>
          </ul>
        </li>
        <li>Higher order comps</li>
        <li>
          Lazy Loading
          <ul>
            <li>
              Fallback UI
              <ul>
                <li>suspense</li>
                <li>Error boundaries</li>
                <li>componentDidCatch</li>
                <li>Fallback UI</li>
                <li>Nested & Propagation</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          useReducer
          <ul>
            <li>Dispatch</li>
          </ul>
        </li>
      </ol>

      <h2>Topics to Learn</h2>
      <ol start="45">
        <li>
          PropTypes
          <ul>
            <li>types {"=> "}name, string, any</li>
            <li>required, optional</li>
            <li>node, element type</li>
            <li>oneof, shape</li>
            <li>PropTypes vs Typescript</li>
          </ul>
        </li>
        <li>
          useMemo vs useCallback
          <ul>
            <li>React.memo vs useMemo</li>
            <li>Object reference</li>
            <li>Pros and cons of memoization</li>
          </ul>
        </li>
        <li>
          Context API
          <ul>
            <li>Provider</li>
            <li>Consumer</li>
            <li>useContext</li>
            <li>useReducer</li>
          </ul>
        </li>
        <li>
          Webpack
          <ul>
            <li>Module Bundler</li>
            <li>Code Splitting</li>
            <li>Webpack Dev Server</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default ReactTopics;
