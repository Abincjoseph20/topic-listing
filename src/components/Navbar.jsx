import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on page load
  useEffect(()=>{
    const SaveTheme = localStorage.getItem("theme") || "light";
    setTheme(SaveTheme);
    document.body.setAttribute("data-theme",setTheme);
  },[])

  
// Toggle between light and dark
    const toggleTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };



  return (
    <nav className="navbar">
      <Link to="/">📚 Topics to Learn</Link>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "🌙" : "🔆"}
      </button>
    </nav>
  );
}

export default Navbar;
