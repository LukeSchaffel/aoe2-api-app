import './App.css';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/civilizations", name: "Civilizations List"}, 
    {url: "/units", name: "Units"}, 
    {url: "/structures", name: "Structures List"}
  ])

  return (
    <>
      <NavBar navItems={navItems} />
    </>
  );
}

export default App;
