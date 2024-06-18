
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './pages/Hero';
import About from './pages/About';
import Menu from './pages/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
function App() {
  const [click, setClick] = useState(false)
  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     if (!document.querySelector("i.fas.fa-bars.fa-xl").contains(e.target)) {
  //       setClick(false)
        
  //     }
  //   })
  // })
  return (
    <>
      <BrowserRouter>
        <Navbar click={click} setClick={setClick} />
        <Routes>
          <Route path='/' exact element={<Hero />} />
          <Route path='/menu' exact element={<Menu />} />
          <Route path='/about' exact element={<About />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
