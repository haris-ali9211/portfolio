import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experiance from './components/experiance/experiance';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';
import Cursor from './components/animations/mouse/pointer';
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <>
    
    <div className="App"> 
    <Cursor/>         
        <Header /> 
        <Navbar />
        <Fade bottom><About/></Fade>
        <Fade bottom><Experiance/></Fade>
        <Fade bottom><Portfolio/></Fade>        
        <Fade bottom><Contact/></Fade>
        <Fade bottom><Footer/></Fade> 
        
     
    </div>
   
    </>
  );
}

export default App;
