import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function Git() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "Git_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      <h1>Git</h1>
      

      <ol>
        <li>THEORY</li>
        <li>Centralized Version control system vs Distributed Version control system</li>
        <li>Config</li>
        <li>Working directory</li>
        <li>Staging area</li>
        <li>git clear</li>
        <li>git clean</li>
        <li>git status</li>
        <li>git log</li>
        <li>
          Cloning Version
          <ul>
            <li>1. git clone url</li>
            <li>2. git pull</li>
            <li>
              3. git commit -m &quot;&lt;message&gt;&quot;
              <ul>
                <li>command without staging</li>
              </ul>
            </li>
            <li>
              4. add
              <ul>
                <li>1. command</li>
                <li>2. commit details</li>
                <li>3. preview details</li>
                <li>4. doc..</li>
              </ul>
            </li>
            <li>5. clone to branch</li>
            <li>6. clone to hash</li>
          </ul>
        </li>
        <li>stash</li>
        <li>log show</li>
        <li>
          git log graph
          <ul>
            <li>1. git log</li>
            <li>2. git log --all</li>
            <li>3. git log --graph</li>
            <li>4. git log graph</li>
          </ul>
        </li>
        <li>git diff</li>
        <li>git diff --staged</li>
        <li>
          Revert
          <ul>
            <li>1. git restore --staged</li>
          </ul>
        </li>
        <li>
          Branching
          <ul>
            <li>1. git branch &lt;branchName&gt;</li>
            <li>2. git checkout &lt;branchName&gt;</li>
            <li>3. creating branch</li>
            <li>4. clone branch</li>
            <li>5. checking branch on switch</li>
            <li>6. delete branch</li>
            <li>7. delete local only branch</li>
            <li>8. branch hash</li>
          </ul>
        </li>
        <li>
          Stashing
          <ul>
            <li>1. git stash apply</li>
            <li>2. git stash pop</li>
            <li>3. git stash drop</li>
            <li>4. git stash clear</li>
          </ul>
        </li>
        <li>
          gitignore (cli/node)</li>
        <li>
          Types of merging
          <ul>
            <li>1. forward merge</li>
            <li>2. rebase</li>
          </ul>
        </li>
        <li>
          Git reset
          <ul>
            <li>
              Uncommit and remove cache - cache
              <ul>
                <li>1. git restore .</li>
                <li>2. git checkout filename -- &lt;branchName&gt;</li>
                <li>3. git pull upstream</li>
                <li>4. Git reset</li>
                <li>5. Git soft</li>
                <li>6. Git mixed</li>
                <li>7. Git hard</li>
                <li>8. pull rebase</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Git remote
          <ul>
            <li>1. git remote -v</li>
            <li>2. git branch &lt;branchName&gt;</li>
            <li>3. git push origin</li>
            <li>4. pull with branch</li>
            <li>5. git remote show</li>
            <li>6. git push --set-upstream origin</li>
            <li>7. Git with repos</li>
          </ul>
        </li>
        <li>
          Git tags
          <ul>
            <li>1. versioning</li>
            <li>2. changelog</li>
            <li>3. deleting / pushing tags</li>
          </ul>
        </li>
        <li>Forking</li>
        <li>Git upstream</li>
        <li>Git aliases</li>
        <li>Git GUI</li>
        <li>
          <strong>GOOD TO KNOW</strong>
        </li>
        <li>ignore files</li>
        <li>Rebase</li>
        <li>tree</li>
      </ol>
    </div>
    </div>
  );
}

export default Git;
