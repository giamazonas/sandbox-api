import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [navItems, setNavItems] = useState([
  ])
  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        {/* <Route path='/class-list' element={< />} /> */}
        {/* <Route path='/class' element={< />} /> */}
      </Routes>
    </>
  );
}

export default App;
