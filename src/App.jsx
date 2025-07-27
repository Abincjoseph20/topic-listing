// App.js - Optimized Structure
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Base from './pages/base';


import Python3 from './Topics/python3';
import HTMLandCSS from './Topics/HTML_and_CSS';
import AIML from './Topics/AIML';
import CleanCode from './Topics/CleanCode';
import Django from './Topics/Django';
import Docker from './Topics/Docker';
import DSA from './Topics/DSA';
import Git from './Topics/Git';
import GraphQL from './Topics/GraphQL';
import Hosting from './Topics/Hosting';
import JS from './Topics/JS';
import Kubernetes from './Topics/Kubernetes';
import Microservice from './Topics/Microservices';
import MongoDB from './Topics/MongoDb';
import NestJS from './Topics/NestJs';
import NextJS from './Topics/NextJs';
import NodeExpress from './Topics/NodeExpress';
import Others from './Topics/Others';
import PHP from './Topics/Php';
import ReactJS from './Topics/ReactJS';
import ReactNative from './Topics/ReactNative';
import Redux from './Topics/Redux';
import Robotics from './Topics/Robotics';
import SQL from './Topics/Sql';
import SystemDesign from './Topics/SystemDesign';
import TypeORM from './Topics/TypeORM';
import TypeScript from './Topics/TypeScript';
import WorkFlow from './Topics/Workflow';



function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="content-container">
          <Routes>
            <Route path='/' element={<Base/>} />

            <Route path='python3/' element={<Python3 />} />
            <Route path='HTMLandCSS/' element={<HTMLandCSS />} />

            <Route path="AIML/" element={<AIML/>} />
            <Route path="CleanCode/" element={<CleanCode/>} />
            <Route path="Django/" element={<Django/>} />


            <Route path="Docker/" element={<Docker/>} />
            <Route path="DSA/" element={<DSA/>} />
            <Route path="Git/" element={<Git/>} />

            <Route path="GraphQL/" element={<GraphQL/>} />
            <Route path="Hosting/" element={<Hosting/>} />

            <Route path="HTMLandCSS/" element={<HTMLandCSS/>} />
            <Route path="JS/" element={<JS/>} />

            <Route path="Kubernetes/" element={<Kubernetes/>} />
            <Route path="Microservice/" element={<Microservice/>} />
            <Route path="MongoDB/" element={<MongoDB/>} />

            <Route path="NestJS/" element={<NestJS/>} />

            <Route path="NextJS/" element={<NextJS/>} />
            <Route path="NodeExpress/" element={<NodeExpress/>} />
            <Route path="Others/" element={<Others/>} />

            <Route path="PHP/" element={<PHP/>} />
            <Route path='ReactJS' element={<ReactJS/>}/>
            <Route path="ReactNative/" element={<ReactNative/>} />

            <Route path="Redux/" element={<Redux/>} />
            <Route path="Robotics/" element={<Robotics/>} />
            <Route path="SQL/" element={<SQL/>} />

            <Route path="SystemDesign/" element={<SystemDesign/>} />
            <Route path="TypeORM/" element={<TypeORM/>} />
            <Route path="TypeScript/" element={<TypeScript/>} />

            <Route path="WorkFlow/" element={<WorkFlow/>} />
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;