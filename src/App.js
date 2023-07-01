import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';


import Navbar from './components/Navbar';
import TopNews from './components/TopNews';
import Technology from './components/Technology';
import Films from './components/Films';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Sports from './components/Sports';
import Header from './components/Header';




function App() {
  

  
  return (
    <>
    <BrowserRouter>
   <Header/>
    <Navbar/>
    
    <Routes>
    
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/films' element={<Films/>}/>
      <Route path='/topnews' element={<TopNews/>}/>
      
    </Routes>
    </BrowserRouter>
     
     
    </>
    
  );
}

export default App;
