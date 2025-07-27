import './css/python.css';

function MongoDB() {
  return (
    <div className="python-container">
      <h1>MongoDB</h1>

      {/* Theory */}
      <h2>Theory</h2>
      <ol>
        <li>SQL (relational) vs NoSQL()</li>
        <li>NoSQL()</li>
        <li>What is MongoDB?</li>
        <li>Run on JS Engine</li>
        <li>How does MongoDB work?</li>
        <li>Non-relational Document-based</li>
        <li>Advantages and Disadvantages</li>
        <li>BSON</li>
        <li>MongoDB Structure</li>
        <li>MongoDB Architecture</li>
        <li>JSON vs BSON</li>
        <li>MongoDB Shell</li>
        <li>CRUD Operations</li>
        <li>Cursor, Iterate a Cursor</li>
        <li>Time to Leave</li>
        <li>Maximum Document Size: 16MB</li>
        <li>Storage Engines
          <ul type="i">
            <li>Types
              <ul type="a">
                <li>WiredTiger</li>
                <li>MMAPv1</li>
              </ul>
            </li>
            <li>GridFS</li>
            <li>Journal</li>
          </ul>
        </li>
        <li>Data Types in MongoDB (BSON)
          <ul type="i">
            <li>ObjectId
              <ul type="a">
                <li>Timestamp</li>
                <li>Random value</li>
                <li>Incrementing counter</li>
              </ul>
            </li>
            <li>String</li>
            <li>Int, LongInt, Double</li>
            <li>Array, Object</li>
            <li>Boolean</li>
            <li>Date</li>
            <li>Decimal128</li>
            <li>Regex</li>
            <li>Javascript
              <ul type="a">
                <li>With scope</li>
                <li>Without scope</li>
              </ul>
            </li>
            <li>MinKey, MaxKey</li>
            <li>Binary data</li>
          </ul>
        </li>
        <li>Cursor
          <ul type="i">
            <li>Cursor methods</li>
            <li>- toArray</li>
            <li>- forEach</li>
            <li>cursor.allowPartialResults()</li>
          </ul>
        </li>
        <li>Collection
          <ul type="i">
            <li><code>db</code></li>
            <li><code>db.createCollection(collectionName)</code></li>
            <li>Show collections</li>
            <li>Rename collection</li>
          </ul>
        </li>
        <li>Documents
          <ul type="i">
            <li>Adding new documents</li>
            <li>Nested Documents
              <ul type="a">
                <li>Advantages</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Inserting Document</li>
        <li>Insert One and Many</li>
        <li>Additional methods used for inserting</li>
        <li>Finding / Querying
          <ul type="i">
            <li><code>find()</code>
              <ul type="a">
                <li>Iterate (it)</li>
                <li><code>pretty()</code></li>
              </ul>
            </li>
            <li><code>findOne(&#123;"filter"&#125;)</code></li>
            <li>Finding in nested array
              <ul type="a">
                <li><code>field.field</code></li>
                <li>Match</li>
                <li>Exact match</li>
                <li>Multiple match</li>
              </ul>
            </li>
            <li>Array
              <ul type="a">
                <li>Finding in specific order</li>
                <li>Without regard to order</li>
                <li>Query by array index</li>
                <li>Query by array length</li>
              </ul>
            </li>
            <li>Projection
              <ul type="a">
                <li>Explicitly include fields</li>
              </ul>
            </li>
            <li><code>Null, $type: 10, $exists</code></li>
          </ul>
        </li>
        <li>Filtering
          <ul type="i">
            <li><code>find(&#123;"filter"&#125;)</code></li>
            <li><code>find(&#123;"filter"&#125;, &#123;"fieldsToGet"&#125;)</code></li>
          </ul>
        </li>
        <li>Method Chaining
          <ul type="i">
            <li><code>count()</code></li>
            <li><code>limit()</code></li>
            <li><code>sort(1 or -1)</code></li>
            <li><code>skip()</code></li>
          </ul>
        </li>
        <li>Operators (denoted by $)
          <ul type="i">
            <li><code>$gt: number</code>, <code>$gte</code></li>
            <li><code>$lt</code>, <code>$lte</code></li>
            <li><code>$eq</code>, <code>$ne</code></li>
            <li><code>$or</code>, <code>$and</code>, <code>$not</code></li>
            <li><code>$in: [1,2,3]</code>, <code>$nin: [1,2]</code></li>
            <li><code>$all</code></li>
            <li><code>$set</code>, <code>$unset</code></li>
            <li><code>$addToSet</code></li>
            <li><code>$elemMatch</code></li>
            <li><code>$slice</code></li>
            <li><code>$size</code></li>
            <li><code>$inc: 1</code>, <code>$inc: -1</code></li>
            <li><code>$pull</code>, <code>$push</code></li>
            <li><code>$each [1, 2]</code></li>
            <li><code>$eq</code>, <code>$ne</code></li>
            <li><code>$currentDate</code></li>
            <li><code>$exists</code></li>
            <li><code>$expr</code></li>
            <li><code>$cond</code></li>
            <li><code>$rename</code></li>
            <li><code>$min</code>, <code>$max</code></li>
            <li><code>$ifNull</code></li>
            <li><code>$let</code></li>
            <li>Array Operator
              <ul type="a">
                <li><code>$push</code></li>
                <li><code>$each</code></li>
                <li><code>$pull</code></li>
                <li><code>$pullAll</code></li>
                <li><code>$pop</code></li>
                <li><code>$elemMatch</code></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Deleting
          <ul type="i">
            <li><code>deleteOne(&#123;"field: value"&#125;)</code></li>
            <li><code>deleteMany()</code></li>
            <li><code>remove()</code></li>
            <li>Delete vs remove</li>
          </ul>
        </li>
        <li>Updating
          <ul type="i">
            <li><code>updateOne(&#123;"whichObject"&#125;, &#123;$set: &#123;"field:value", "field:value"&#125;&#125;)</code></li>
            <li>Operators
              <ul type="a">
                <li><code>$set</code></li>
                <li><code>$unset</code></li>
                <li><code>$rename</code></li>
              </ul>
            </li>
            <li><code>updateMany()</code></li>
            <li><code>replaceOne()</code></li>
            <li>Incrementing &amp; decrementing</li>
            <li>Adding and removing from array</li>
            <li>Upsert</li>
            <li><code>update()</code> vs <code>updateOne()</code></li>
            <li><code>updateOne()</code> vs <code>replaceOne()</code></li>
          </ul>
        </li>
        <li>BulkWrite()
          <ul type="i">
            <li><code>ordered: false</code></li>
            <li>Ordered vs unordered</li>
            <li>Advantages and disadvantages</li>
          </ul>
        </li>
        <li>Commands
          <ul type="i">
            <li><code>mongosh</code></li>
            <li><code>db</code></li>
            <li><code>show dbs</code></li>
            <li><code>db.stats</code></li>
          </ul>
        </li>
        <li>Aggregation
          <ul type="i">
            <li>How does it work?</li>
            <li>Advantages</li>
            <li>Types of aggregation</li>
            <li>Distinct</li>
            <li>Aggregate stages
              <ul type="a">
                <li><code>$addFields</code></li>
                <li><code>$match</code></li>
                <li><code>$group</code>
                  <ul type="a">
                    <li>Grouping by
                      <ul type="a">
                        <li>Nested field</li>
                        <li>Multiple field</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><code>$sort</code></li>
                <li><code>$set</code></li>
                <li><code>$count</code>
                  <ul type="a">
                    <li>Other ways to count</li>
                    <li>Client and server-side counting</li>
                  </ul>
                </li>
                <li><code>$limit</code>, <code>$skip</code></li>
                <li><code>$merge</code></li>
                <li><code>$out</code></li>
                <li><code>$project</code></li>
                <li><code>$lookup</code></li>
                <li><code>$unwind</code></li>
                <li><code>$facet</code></li>
                <li><code>$fill</code></li>
                <li><code>$bucket</code>
                  <ul type="a">
                    <li><code>$bucketAuto</code></li>
                    <li><code>$densify</code></li>
                    <li><code>$redact</code></li>
                    <li><code>$search</code></li>
                    <li><code>allowDiskUse: true</code></li>
                  </ul>
                </li>
                <li><code>$name</code> vs <code>"name"</code></li>
                <li>Accumulator Operators
                  <ul type="a">
                    <li><code>$sum</code>, <code>$avg</code>, <code>$max</code>, <code>$min</code></li>
                  </ul>
                </li>
                <li>Unary Operators
                  <ul type="a">
                    <li><code>$type</code>, <code>$gt</code>, <code>$or</code>, <code>$multiply</code></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>How does aggregation pipeline work?
              <ul type="a">
                <li>Memory limit: 100MB</li>
                <li>Spill to disk</li>
              </ul>
            </li>
            <li>Batch sizing</li>
            <li>Iterator size</li>
            <li>Query routing</li>
            <li>Map Reduce
              <ul type="a">
                <li>For what is it used?</li>
                <li>Find sum, avg</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Indexes
          <ul type="i">
            <li>Pros and cons of indexes</li>
            <li><code>createIndex(&#123;"field: value"&#125;)</code></li>
            <li>Options when creating index
              <ul type="a">
                <li><code>background: true</code></li>
                <li><code>unique: true</code></li>
                <li><code>name: "indexName"</code></li>
              </ul>
            </li>
            <li><code>getIndexes()</code></li>
            <li><code>dropIndex()</code>, <code>dropIndexes()</code></li>
            <li><code>reIndex()</code></li>
            <li>Rename index</li>
            <li>Hiding index</li>
            <li>Covered query</li>
            <li>Types of indexes
              <ul type="a">
                <li>Single Field Index</li>
                <li>Compound Index</li>
                <li>Multikey Index</li>
                <li>Text Index</li>
                <li>Geospatial, Hashed, Clustered Index</li>
                <li>Covered query</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Schemas
          <ul type="i">
            <li>Pros and cons of using schema</li>
            <li>Optional schema</li>
            <li>Validation action</li>
          </ul>
        </li>
        <li>Relationships
          <ul type="i">
            <li>Embedding</li>
            <li>Referencing</li>
            <li>One-to-one</li>
            <li>One-to-many</li>
            <li>One-to-squillions</li>
            <li>Many-to-many</li>
          </ul>
        </li>
        <li>Replication
          <ul type="i">
            <li>Replica set</li>
            <li>Advantages and disadvantages of replication</li>
            <li>Replication Architecture
              <ul type="a">
                <li>Primary and secondary nodes</li>
                <li>Arbiter</li>
                <li>Process of election</li>
                <li>Heartbeat</li>
              </ul>
            </li>
            <li>Process of Election</li>
            <li>Replication lag</li>
            <li>Operation log (oplog)</li>
            <li>Types of replication
              <ul type="a">
                <li>Asynchronous Replication</li>
                <li>Synchronous Replication</li>
                <li>Majority Commit</li>
                <li>etc...</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Sharding
          <ul type="i">
            <li>Advantages and disadvantages</li>
            <li>Sharding Architecture
              <ul type="a">
                <li>What is Mongos/Router</li>
                <li>Config Server</li>
                <li>Types of sharding
                  <ul type="a">
                    <li>Hashed sharding</li>
                    <li>Ranged sharding</li>
                    <li>Zone Sharding</li>
                  </ul>
                </li>
                <li>Shard key
                  <ul type="a">
                    <li>Shard hotspots</li>
                    <li>Normal shard key</li>
                    <li>Hashed shard key</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Vertical and horizontal scaling</li>
            <li>Zones</li>
            <li>Mongos</li>
            <li>Auto balancer</li>
            <li>Scatter-gather</li>
          </ul>
        </li>
        <li>Cluster
          <ul type="i">
            <li>Types of cluster</li>
            <li>Config servers</li>
          </ul>
        </li>
        <li>Data Modeling
          <ul type="i">
            <li>Embedded data model</li>
            <li>Reference data model</li>
            <li>Linking vs embedding</li>
          </ul>
        </li>
        <li>Transactions
          <ul type="i">
            <li>How to do transaction
              <ul type="a">
                <li>Session</li>
                <li>StartTransaction</li>
                <li>AbortTransaction</li>
                <li>CommitTransaction</li>
              </ul>
            </li>
            <li>ACID Transaction
              <ul type="a">
                <li>A - Atomicity</li>
                <li>C - Consistency</li>
                <li>I - Isolation</li>
                <li>D - Durability</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Create view in MongoDB</li>
        <li>CAP Theorem
          <ul type="i">
            <li>Theorem</li>
            <li>C - Consistency</li>
            <li>A - Availability</li>
            <li>P - Partition tolerance</li>
          </ul>
        </li>
        <li>Isolation levels</li>
        <li>Read Concerns
          <ul type="i">
            <li>Read local</li>
            <li><code>"local"</code></li>
            <li><code>"available"</code></li>
            <li><code>"majority"</code></li>
            <li><code>"linearizable"</code></li>
            <li><code>"snapshot"</code></li>
          </ul>
        </li>
        <li>Write Concerns
          <ul type="i">
            <li><code>w: 1</code> (Acknowledged)</li>
            <li><code>w: 0</code> (Unacknowledged)</li>
            <li><code>w: "majority"</code></li>
            <li><code>j: true</code> (journaled)</li>
            <li><code>wtimeout</code></li>
          </ul>
        </li>
      </ol>

      {/* VS */}
      <h2>VS</h2>
      <ol>
        <li><code>$or</code> vs <code>$in</code></li>
        <li><code>$all</code> vs <code>$in</code></li>
        <li><code>$elemMatch</code> vs <code>$in</code></li>
        <li><code>drop()</code> vs <code>remove()</code></li>
        <li><code>findAndModify()</code> vs <code>findOneAndUpdate()</code></li>
        <li>Primary key vs secondary key</li>
        <li>join vs lookup</li>
        <li>dot notation vs nested form</li>
        <li><code>$currentDate</code> vs <code>$$NOW</code></li>
        <li><code>delete()</code> vs <code>remove()</code></li>
        <li><code>bulkWrite</code> vs <code>InsertMany</code></li>
        <li>replace vs update</li>
        <li>shard vs node vs cluster</li>
        <li>Aggregation Pipeline vs Map Reduce</li>
        <li>vertical scalability vs horizontal scalability</li>
        <li>load balancer vs sharding</li>
        <li>odm vs driver</li>
        <li>stage operator vs accumulator operator</li>
        <li>normal shard key vs hashed shard key</li>
        <li><code>aggregate([&#123;$count:"total"&#125;])</code> vs <code>find(&#123;&#125;).count()</code></li>
        <li>replication vs replica set</li>
        <li>transaction vs query</li>
        <li>scaling up vs scaling down vs scaling out?</li>
        <li>config servers vs mongos</li>
        <li>load balancer vs auto balancer</li>
        <li><code>countDocuments</code> vs <code>count</code></li>
        <li>What is a MongoDB driver?</li>
        <li>Capped collection and its advantages</li>
        <li>Profiler</li>
        <li>Explain</li>
        <li>Soft deleting</li>
      </ol>

      {/* Interview Question */}
      <h2>Interview Question</h2>
      <ol>
        <li>What to do when your querying becomes slow?</li>
        <li>What to do when your files are getting very big?</li>
        <li>How to condense large volumes of data?</li>
        <li>How to search for text in MongoDB?</li>
        <li>How does MongoDB schema change?</li>
        <li>How can we Backup and Restore in MongoDB?</li>
        <li>What are the pros and cons of Normalising Data in MongoDB</li>
      </ol>

      {/* Good to Know */}
      <h2>Good to Know</h2>
      <ol>
        <li>Atomicity</li>
        <li>Type Bracketing</li>
        <li>Dot Notation</li>
        <li>Cursor behaviour</li>
        <li>Aggregation Pipeline</li>
        <li>Retryable Writes and Reads</li>
        <li>MongoDB CRUD Concepts</li>
        <li>B-Tree</li>
        <li>ACID compliance</li>
        <li>Mongoose</li>
        <li>Network Components
          <ul type="i">
            <li>load balancer</li>
            <li>firewall</li>
          </ul>
        </li>
        <li>CAP Theorem
          <ul type="i">
            <li>consistency</li>
            <li>availability</li>
            <li>partition tolerance</li>
          </ul>
        </li>
        <li>Firewall</li>
        <li>Mongo Utilities
          <ul type="i">
            <li>mongoexport</li>
            <li>mongoimport</li>
            <li>mongodump</li>
            <li>mongorestore</li>
            <li>mongostat</li>
            <li>mongotop</li>
            <li>mongooplog</li>
          </ul>
        </li>
        <li>Clustered collections</li>
        <li>WAL (Write-Ahead Logging)</li>
      </ol>
    </div>
  );
}

export default MongoDB;