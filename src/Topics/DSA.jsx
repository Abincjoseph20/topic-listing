import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function DSASyllabus() {
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
      <h1>Data Structures and Algorithms Syllabus (Beginner to Advanced)</h1>
      
      <h2>Overview</h2>
      <p>This syllabus provides a structured, beginner-friendly roadmap for mastering Data Structures and Algorithms (DSA) using Python. It is designed for self-study or classroom use, progressing from foundational concepts to advanced topics over 17 weeks. Each week includes key concepts, Python tools, and practical applications to build a strong foundation for coding interviews and efficient programming.</p>

      <h2>Weekly Plan</h2>
      <p>The following table outlines the 17-week plan, detailing the focus topic, key concepts, and Python tools for each week.</p>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Focus Topic</th>
            <th>Key Concepts & Python Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>DSA Intro + Python Basics</td>
            <td><code>list</code>, <code>dict</code>, functions, recursion basics</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Time & Space Complexity</td>
            <td>Big-O, analyzing Python code</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Searching (Linear & Binary)</td>
            <td><code>while</code>, recursion, <code>bisect</code></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Recursion & Backtracking</td>
            <td>Recursive problems, base/recursive case</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Sorting Algorithms</td>
            <td>Bubble, Merge, Quick (with Python <code>list</code>)</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Arrays & Strings</td>
            <td>Slicing, 2D arrays, string functions</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Hashing</td>
            <td><code>dict</code>, <code>set</code>, frequency counters</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Stack & Queue</td>
            <td><code>list</code>, <code>deque</code>, LIFO/FIFO logic</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Linked List</td>
            <td>Custom class + pointer-like logic</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Trees (Binary, BST)</td>
            <td>Recursive traversals</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Heaps & Priority Queues</td>
            <td><code>heapq</code> module</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Graphs</td>
            <td><code>dict</code>, adjacency list, DFS/BFS</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Dynamic Programming (Intro)</td>
            <td>Memoization, tabulation</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Advanced DP + Patterns</td>
            <td>Subset, LIS, Matrix paths</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Bit Manipulation & Tries</td>
            <td>Bitwise ops, Trie with nested <code>dict</code></td>
          </tr>
          <tr>
            <td>16</td>
            <td>Segment Trees / Fenwick Trees</td>
            <td>Range queries (optional)</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Interview Problems + Practice</td>
            <td>Leetcode/GFG in Python</td>
          </tr>
        </tbody>
      </table>

      <h2>Full DSA Syllabus</h2>
      <p>The syllabus is organized by difficulty level, with topics progressing logically from beginner to advanced. Each level is color-coded for clarity: <span className="highlight-green">Beginner</span>, <span className="highlight-yellow">Early-Intermediate</span>, <span className="highlight-orange">Intermediate</span>, <span className="highlight-red">Advanced</span>, and <span className="highlight-red">Expert</span>.</p>

      <h3 className="level-beginner">1. DSA Foundations (Beginner, Week 1)</h3>
      <ul>
        <li>What is a Data Structure?</li>
        <li>What is an Algorithm?</li>
        <li>Importance of DSA (job interviews, efficient coding)</li>
        <li>Real-life analogies (e.g., books on shelf, queue in bank)</li>
        <li>Writing and analyzing algorithms</li>
      </ul>

      <h3 className="level-beginner">2. Python Basics for DSA (Week 1–2)</h3>
      <ul>
        <li>Variables, Data Types</li>
        <li>Conditionals (<code>if</code>, <code>else</code>)</li>
        <li>Loops (<code>for</code>, <code>while</code>)</li>
        <li>Lists, Tuples, Dictionaries, Sets</li>
        <li>Functions (including <code>*args</code>, <code>**kwargs</code>)</li>
        <li>Recursion basics</li>
        <li>Understanding <code>None</code>, return values</li>
        <li>Basic I/O and Exception handling</li>
      </ul>

      <h3 className="level-early-intermediate">3. Complexity Analysis (Early-Intermediate, Week 2)</h3>
      <ul>
        <li>Time Complexity (Big O, Big Omega, Big Theta)</li>
        <li>Space Complexity</li>
        <li>Best, Worst, and Average Case</li>
        <li>Complexity of common operations (<code>O(1)</code>, <code>O(n)</code>, <code>O(log n)</code>, etc.)</li>
        <li>Amortized Analysis (e.g., dynamic arrays resizing)</li>
      </ul>

      <h3 className="level-early-intermediate">4. Searching Algorithms (Early-Intermediate, Week 3)</h3>
      <ul>
        <li>Linear Search</li>
        <li>Binary Search (Iterative & Recursive)</li>
        <li>Ternary Search (Advanced)</li>
        <li>Binary Search on Answer</li>
      </ul>

      <h3 className="level-early-intermediate">5. Recursion & Backtracking (Early-Intermediate, Week 4)</h3>
      <ul>
        <li>What is Recursion? (Call Stack concept)</li>
        <li>Recursion vs Iteration</li>
        <li>Tail Recursion</li>
        <li>Practice Problems: Fibonacci, Factorial, Power, Palindrome</li>
        <li>Backtracking: N-Queens, Sudoku Solver, Rat in Maze</li>
      </ul>

      <h3 className="level-early-intermediate">6. Sorting Algorithms (Early-Intermediate, Week 5)</h3>
      <ul>
        <li>Bubble Sort</li>
        <li>Selection Sort</li>
        <li>Insertion Sort</li>
        <li>Merge Sort</li>
        <li>Quick Sort</li>
        <li>Heap Sort</li>
        <li>Count Sort, Radix Sort (for integers)</li>
        <li>Time & Space complexity comparison chart</li>
      </ul>

      <h3 className="level-intermediate">7. Arrays (Intermediate, Week 6)</h3>
      <ul>
        <li>Introduction and Memory Layout</li>
        <li>Insertion, Deletion</li>
        <li>Traversal</li>
        <li>1D & 2D Arrays</li>
        <li>Sliding Window Technique</li>
        <li>Prefix Sum</li>
        <li>Two Pointer Technique</li>
        <li>Kadane's Algorithm (Max Subarray)</li>
      </ul>

      <h3 className="level-intermediate">8. Strings (Intermediate, Week 6–7)</h3>
      <ul>
        <li>String Manipulation</li>
        <li>Palindrome Check</li>
        <li>String Compression</li>
        <li>Substrings and Subsequences</li>
        <li>Anagram problems</li>
        <li>String Matching: Naive, KMP, Rabin Karp</li>
      </ul>

      <h3 className="level-intermediate">9. Hashing & Hash Tables (Intermediate, Week 8)</h3>
      <ul>
        <li>Hash Functions</li>
        <li>HashMap / HashSet in Python (<code>dict</code>, <code>set</code>)</li>
        <li>Collision Handling</li>
        <li>Chaining, Open Addressing</li>
        <li>Applications: Frequency Count, Subarray with 0 sum, Longest Consecutive Sequence</li>
      </ul>

      <h3 className="level-intermediate">10. Stacks & Queues (Intermediate, Week 9)</h3>
      <ul>
        <li>Stack (LIFO): Using <code>list</code> or <code>collections.deque</code></li>
        <li>Queue (FIFO): Using <code>deque</code></li>
        <li>Priority Queue (Min/Max Heap)</li>
        <li>Applications: Balanced Parentheses, Next Greater Element, Infix to Postfix, LRU Cache</li>
        <li>Implement with and without libraries</li>
      </ul>

      <h3 className="level-intermediate">11. Linked Lists (Intermediate, Week 10)</h3>
      <ul>
        <li>Singly Linked List</li>
        <li>Doubly Linked List</li>
        <li>Circular Linked List</li>
        <li>Operations: Insert, Delete, Search, Reverse</li>
        <li>Detect Loop (Floyd's Cycle)</li>
        <li>Intersection Point</li>
      </ul>

      <h3 className="level-advanced">12. Trees (Advanced, Week 11–12)</h3>
      <ul>
        <li>Binary Tree, Traversals (Inorder, Preorder, Postorder, Level Order)</li>
        <li>Binary Search Tree (BST): Insert, Delete, Search</li>
        <li>AVL Tree (Balanced BST)</li>
        <li>N-ary Trees</li>
        <li>Tree Problems: Diameter, Height, LCA (Lowest Common Ancestor)</li>
      </ul>

      <h3 className="level-advanced">13. Heap & Priority Queue (Advanced, Week 13)</h3>
      <ul>
        <li>Min Heap / Max Heap</li>
        <li>Heapify, Insertion</li>
        <li>Applications: K Largest Elements, HeapSort, Median Stream</li>
      </ul>

      <h3 className="level-advanced">14. Graphs (Advanced, Week 14–15)</h3>
      <ul>
        <li>Representation (Adjacency List/Matrix)</li>
        <li>BFS, DFS</li>
        <li>Topological Sort</li>
        <li>Shortest Path: Dijkstra, Bellman-Ford, Floyd-Warshall</li>
        <li>Minimum Spanning Tree: Kruskal's Algorithm, Prim's Algorithm</li>
        <li>Cycle Detection (Directed & Undirected)</li>
        <li>Disjoint Set Union (Union-Find)</li>
      </ul>

      <h3 className="level-advanced">15. Greedy Algorithms (Advanced, Week 16)</h3>
      <ul>
        <li>Activity Selection</li>
        <li>Huffman Encoding</li>
        <li>Fractional Knapsack</li>
        <li>Job Scheduling</li>
        <li>Minimum Coins</li>
      </ul>

      <h3 className="level-advanced">16. Dynamic Programming (Advanced, Week 17–18)</h3>
      <ul>
        <li>Recursion → Memoization → Tabulation</li>
        <li>0/1 Knapsack</li>
        <li>Longest Common Subsequence</li>
        <li>Longest Increasing Subsequence</li>
        <li>Matrix Chain Multiplication</li>
        <li>DP on Trees</li>
        <li>DP on Subsets / Grids</li>
      </ul>

      <h3 className="level-expert">17. Tries and Advanced Trees (Expert, Week 19)</h3>
      <ul>
        <li>Trie (Prefix Tree)</li>
        <li>Insert/Search/Delete Words</li>
        <li>Compressed Trie / Radix Tree</li>
        <li>Segment Trees (Range Queries)</li>
        <li>Fenwick Tree (Binary Indexed Tree)</li>
      </ul>

      <h3 className="level-expert">18. Bit Manipulation (Expert, Week 20)</h3>
      <ul>
        <li>AND, OR, XOR, NOT, Left/Right Shift</li>
        <li>Checking Odd/Even</li>
        <li>Set/Unset a bit</li>
        <li>Counting bits</li>
        <li>Power of Two</li>
        <li>XOR Tricks</li>
      </ul>

      <h3 className="level-expert">19. Mathematical Algorithms (Expert)</h3>
      <ul>
        <li>Prime Numbers (Sieve of Eratosthenes)</li>
        <li>GCD, LCM (Euclidean Algorithm)</li>
        <li>Modular Arithmetic</li>
        <li>Fast Exponentiation</li>
        <li>Combinatorics (nCr, Factorials)</li>
        <li>Number of Trailing Zeros</li>
      </ul>

      <h3 className="level-expert">20. Advanced Memory & Systems Topics (Expert, Optional)</h3>
      <ul>
        <li>Stack vs Heap Memory</li>
        <li>Call Stack, Virtual Memory</li>
        <li>Memory Allocation in Python</li>
        <li>Cache-Aware Programming</li>
        <li>Manual Memory Management (C/C++ comparison)</li>
      </ul>

      <h3 className="level-expert">21. Interview Prep & Practice (Expert)</h3>
      <ul>
        <li>DSA Patterns (Sliding Window, Recursion Tree, DP States)</li>
        <li>Top 100 Interview Questions (Leetcode, GFG)</li>
        <li>Mock Interviews</li>
        <li>Time-Limited Coding Rounds</li>
      </ul>

      <h3>Bonus: Language-Specific Skills</h3>
      <ul>
        <li>Python <code>List</code>/<code>Dict</code>/<code>Set</code> Time Complexities</li>
        <li>Python <code>heapq</code>, <code>bisect</code>, <code>collections</code></li>
        <li>Custom class + <code>__lt__</code>, <code>__eq__</code> for sorting/heap</li>
      </ul>

      <h2>Summary View</h2>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Topics Covered</th>
          </tr>
        </thead>
        <tbody>
          <tr className="level-beginner">
            <td>Beginner</td>
            <td>Basics, Python, Time Complexity, Searching</td>
          </tr>
          <tr className="level-early-intermediate">
            <td>Early-Intermediate</td>
            <td>Recursion, Sorting, Arrays, Strings</td>
          </tr>
          <tr className="level-intermediate">
            <td>Intermediate</td>
            <td>Hashing, Stacks, Queues, Linked Lists</td>
          </tr>
          <tr className="level-advanced">
            <td>Advanced</td>
            <td>Trees, Heaps, Graphs, DP, Tries</td>
          </tr>
          <tr className="level-expert">
            <td>Expert</td>
            <td>Bit Tricks, Segment Trees, Memory, Interview Practice</td>
          </tr>
        </tbody>
      </table>

      <h2>How to Use This Syllabus</h2>
      <ul>
        <li>Follow the weekly plan for a structured 17-week learning journey.</li>
        <li>Use Python for implementation, leveraging built-in libraries like <code>collections</code>, <code>heapq</code>, and <code>bisect</code>.</li>
        <li>Practice problems on platforms like <a href="https://leetcode.com">Leetcode</a> or <a href="https://www.geeksforgeeks.org">GeeksforGeeks (GFG)</a> for each topic.</li>
        <li>Refer to the color-coded difficulty levels to track progress.</li>
        <li>For further assistance, explore resources at <a href="https://leetcode.com">https://leetcode.com</a> or <a href="https://www.geeksforgeeks.org">https://www.geeksforgeeks.org</a>.</li>
      </ul>
    </div>
    </div>
  );
}

export default DSASyllabus;