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

  const ToggleTheme = ()=>{
    const NewTheme = theme === "light" ? "dark" : "light";
    setTheme(NewTheme)
    document.body.setAttribute("data-theme",NewTheme);
    localStorage.setItem("theme",NewTheme);
  }


  return (
    <nav className="navbar">
      <Link to="/">📚 Topics to Learn</Link>
      <button className="theme-toggle" onClick={ToggleTheme}>
        {theme === "light" ? "🌙" : "🔆"}
      </button>
    </nav>
  );
}

export default Navbar;
