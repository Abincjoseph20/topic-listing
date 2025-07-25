import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Base from './pages/base';
import Navbar from './pages/Navbar';
import Python3 from './components/python3';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="content-container">
          <Routes>
            <Route path='base/' element={<Base/>} />
            <Route path='python3/' element={<Python3 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;