import './css/python.css';

function NodeExpress() {
  return (
    <div className="python-container">
      <h1>Node.js, Express</h1>

      {/* Node */}
      <h2>Node</h2>

      {/* Theory */}
      <h3>Theory</h3>
      <ol>
        <li>What is Node.js</li>
        <li>Why V8 Engine</li>
        <li>Advantages & Disadvantages of Node.js</li>
        <li>How Node works</li>
        <li>libuv</li>
        <li>Node Module System</li>
        <li>Concurrency vs Parallelism</li>
        <li>REPL, CLI</li>
        <li>NPX</li>
      </ol>

      {/* Architecture */}
      <h3>Architecture</h3>
      <ol>
        <li>I/O Polling</li>
        <li>epoll</li>
        <li>kqueue</li>
        <li>Thread pool</li>
        <li>Event queue</li>
        <li>Event loop
          <ul>
            <li>phases</li>
          </ul>
        </li>
        <li>External Resources</li>
        <li>Globals
          <ul>
            <li><code>__dirname</code></li>
            <li><code>__filename</code></li>
            <li>Module</li>
            <li>Process</li>
          </ul>
        </li>
        <li>Modules
          <ul>
            <li>Core Modules.</li>
            <li>Local Modules.</li>
            <li>Third-party Modules.</li>
            <li><code>module.exports: {'{}'}</code></li>
            <li>require</li>
            <li>ESM
              <ul>
                <li>import and export</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>NPM
          <ul>
            <li>local and global</li>
            <li><code>npm init</code></li>
          </ul>
        </li>
        <li><code>npm install</code> or <code>npm i</code></li>
        <li>Nodemon
          <ul>
            <li>scripts
              <ul>
                <li>start</li>
                <li>dev</li>
              </ul>
            </li>
            <li><code>npm run dev</code></li>
          </ul>
        </li>
        <li>package.json</li>
        <li>package-lock.json</li>
        <li>Event loop</li>
        <li>Event Queue</li>
        <li>Events
          <ul>
            <li>Events emitter
              <ul>
                <li><code>on</code>, <code>emit</code></li>
              </ul>
            </li>
            <li>Http module</li>
          </ul>
        </li>
        <li>Streams
          <ul>
            <li>Types of streams
              <ul>
                <li>writable, readable, duplex, transform</li>
              </ul>
            </li>
            <li><code>createReadStream()</code></li>
            <li><code>readFile</code> vs <code>readFileSync</code></li>
            <li><code>pipe()</code></li>
            <li>Buffers</li>
            <li>Transfer-Encoding: chunked</li>
          </ul>
        </li>
        <li>Cron-job
          <ul>
            <li>* * * * *</li>
            <li>1st* = second</li>
            <li>2nd* = minute</li>
            <li>3rd* = hour</li>
            <li>4th* = day of month</li>
            <li>5th* = month</li>
            <li>6th* = day of week</li>
            <li>or, range selector</li>
            <li>time zone</li>
            <li>validation</li>
          </ul>
        </li>
        <li>CORS
          <ul>
            <li>Preflight request
              <ul>
                <li>header</li>
                <li><code>access-control-allow-origin: *</code></li>
                <li><code>access-control-allow-methods: *</code></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Cluster</li>
        <li>Multithreading in Node.js
          <ul>
            <li><code>require('worker_threads')</code></li>
            <li><code>new Worker</code></li>
          </ul>
        </li>
        <li>Thread pool</li>
        <li>Worker thread
          <ul>
            <li>Creating worker</li>
            <li>Parent port</li>
          </ul>
        </li>
        <li>Cluster vs WorkerThread</li>
        <li>Child process
          <ul>
            <li>Methods
              <ul>
                <li><code>fork</code></li>
                <li><code>exec</code></li>
                <li><code>execFile</code></li>
                <li><code>spawn</code></li>
              </ul>
            </li>
            <li><code>spawn</code> vs <code>fork</code></li>
            <li><code>child_process.fork()</code> vs <code>cluster.fork()</code></li>
          </ul>
        </li>
      </ol>

      {/* HTTP */}
      <h3>HTTP</h3>
      <ol>
        <li>HTTPS</li>
        <li>How does it work?</li>
        <li>SSL certificate working</li>
        <li>Default port</li>
        <li>Request-response cycle</li>
        <li>Stateless protocol
          <ul>
            <li>Local storage, Sessions, and Cookies</li>
          </ul>
        </li>
        <li>Request
          <ul>
            <li>General (start line)
              <ul>
                <li>Method/target/version</li>
              </ul>
            </li>
            <li>Header</li>
            <li>Body</li>
          </ul>
        </li>
        <li>Response
          <ul>
            <li>General (start line)
              <ul>
                <li>Version/statusCode/statusText</li>
              </ul>
            </li>
            <li>Header</li>
            <li>Content type</li>
            <li>Body
              <ul>
                <li>Requested resource</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>HTTP Methods
          <ul>
            <li>GET</li>
            <li>POST</li>
            <li>PUT</li>
            <li>PATCH</li>
            <li>DELETE</li>
            <li>HEAD</li>
            <li>CONNECT</li>
            <li>OPTIONS</li>
            <li>TRACE</li>
          </ul>
        </li>
        <li>Idempotent</li>
        <li>Safe Methods</li>
        <li>User-Agent</li>
        <li>Headers</li>
        <li>writeHead vs setHead</li>
        <li>Status code
          <ul>
            <li>1xx: Informational</li>
            <li>2xx: Success
              <ul>
                <li>200 - Success</li>
                <li>201 - Success and created</li>
              </ul>
            </li>
            <li>3xx: Redirect
              <ul>
                <li>301: Moved to new URL</li>
                <li>304: Not changed</li>
              </ul>
            </li>
            <li>4xx: Client Error
              <ul>
                <li>401: Unauthorized</li>
                <li>402: Payment Required</li>
                <li>403: Forbidden</li>
                <li>404: Page not found</li>
              </ul>
            </li>
            <li>5xx: Server Error</li>
          </ul>
        </li>
        <li>MIME type</li>
        <li>HTTP/2</li>
        <li>TCP and IP</li>
        <li>XSS</li>
        <li>CSRF</li>
        <li>MMA</li>
        <li>Referral header</li>
        <li>SQL injection</li>
        <li>Prepared statements</li>
      </ol>

      {/* Express */}
      <h2>Express</h2>
      <ol>
        <li><code>npm install express --save</code></li>
        <li><code>app = express()</code>
          <ul>
            <li><code>get()</code>
              <ul>
                <li><code>status()</code></li>
                <li><code>send()</code></li>
                <li><code>sendFile()</code></li>
              </ul>
            </li>
            <li><code>post()</code>
              <ul>
                <li><code>express.urlencoded()</code></li>
              </ul>
            </li>
            <li><code>put()</code></li>
            <li><code>patch()</code></li>
            <li><code>delete()</code></li>
            <li><code>all()</code></li>
            <li><code>use()</code></li>
            <li><code>listen()</code></li>
          </ul>
        </li>
        <li>Static files
          <ul>
            <li>Public</li>
            <li><code>express.static()</code></li>
          </ul>
        </li>
        <li>API
          <ul>
            <li><code>json()</code></li>
          </ul>
        </li>
        <li>Params vs Query String</li>
        <li>Route Parameter</li>
        <li>Query string/url Parameter</li>
        <li>Path params</li>
        <li>Middleware
          <ul>
            <li>What is middleware</li>
            <li>Used for what?</li>
            <li><code>req</code>, <code>res</code>, <code>next</code></li>
            <li><code>next()</code></li>
            <li><code>app.use</code> in middleware</li>
            <li>Passing two middleware</li>
            <li>Types of Middleware
              <ul>
                <li>Application-level middleware</li>
                <li>Third-party middleware
                  <ul>
                    <li>Morgan</li>
                    <li>Multer</li>
                  </ul>
                </li>
                <li>Router-level middleware</li>
                <li>Built-in middleware</li>
                <li>Error-handling middleware
                  <ul>
                    <li><code>err.statusCode</code></li>
                    <li><code>err.message</code></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Routing
          <ul>
            <li>Router</li>
            <li><code>express.Router()</code></li>
          </ul>
        </li>
      </ol>

      {/* Core Express */}
      <h3>Core Express</h3>
      <ol>
        <li>Session
          <ul>
            <li><code>express-session</code></li>
            <li>Secret</li>
            <li>Resave</li>
            <li>SaveUninitialized</li>
            <li>Destroy()</li>
          </ul>
        </li>
        <li>Cookies
          <ul>
            <li><code>cookie-parser</code></li>
          </ul>
        </li>
        <li>Core middleware</li>
        <li>Core routing</li>
        <li>Build own API</li>
        <li>Core views</li>
        <li>Database integration</li>
      </ol>

      {/* Questions */}
      <h3>Questions</h3>
      <ol>
        <li>How to send find as response</li>
        <li>Transaction in Node.js</li>
      </ol>

      {/* EJS */}
      <h3>EJS</h3>
      <ol>
        <li>EJS</li>
        <li>Server-side rendering</li>
        <li>View engine</li>
        <li><code>render()</code></li>
        <li><code>&lt;% %&gt;</code>, <code>&lt;%= %&gt;</code></li>
        <li>Partials</li>
        <li>REST API
          <ul>
            <li>RESTful</li>
          </ul>
        </li>
        <li>Fragment identifier</li>
      </ol>

      {/* VS */}
      <h3>VS</h3>
      <ol>
        <li>API vs HTTP</li>
        <li>API vs SSR</li>
        <li>HTTP vs HTTPS</li>
        <li>URLs vs URLs vs URNs</li>
        <li>Session vs Cookies</li>
        <li>GET vs POST</li>
        <li>PUT vs PATCH</li>
        <li>SSL vs TLS</li>
        <li>Build-in Modules (only imp)
          <ul type="i">
            <li><code>os</code></li>
            <li><code>path</code>
              <ul type="a">
                <li><code>join()</code></li>
                <li><code>basename()</code></li>
                <li><code>resolve()</code></li>
              </ul>
            </li>
            <li><code>fs</code>
              <ul type="a">
                <li><code>fs.sync</code></li>
                <li><code>readFileSync()</code></li>
                <li><code>writeFileSync()</code></li>
                <li><code>appendFileSync()</code></li>
                <li><code>unlinkSync()</code></li>
                <li><code>statSync()</code></li>
                <li><code>mkdirSync()</code>
                  <ul type="a">
                    <li><code>recursive: true</code></li>
                  </ul>
                </li>
                <li><code>fs.async</code></li>
                <li><code>readFile()</code></li>
                <li><code>writeFile()</code></li>
              </ul>
            </li>
            <li><code>http</code>
              <ul type="a">
                <li><code>createServer()</code></li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

    </div>
  );
}

export default NodeExpress;
