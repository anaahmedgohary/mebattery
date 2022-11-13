// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/AppStyle/App.css"

// routes elements
import HomePage from './components/homepage/HomePage';
import SavedNotes from "./components/savednotes/SavedNotes";
import DataPoster from "./components/dataposter/DataPoster";

//aos animate on scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App()
{
  
  //aos
  AOS.init();

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/savednotes' element={<SavedNotes />} />
        <Route path="/dataposter" element={<DataPoster />} />
      </Routes>
    </Router>
  )
}

export default App
