import './App.css';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx';
import CivilizationList from './pages/CivilizationList/CivilizationList';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/civilizations", name: "Civilizations List"}, 
    {url: "/units", name: "Units"}, 
    {url: "/structures", name: "Structures List"}
  ])

  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/civilizations' element={<CivilizationList />}
        />
      </Routes>
    </>
  );
}

export default App;
