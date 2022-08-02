//import UdanAir from './UdanAir.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react';
//import Alert from './components/Alert'

function App() {
const [mode, setMode]= useState('light');

 const toggleMode=()=>{
if(mode==='light'){
  setMode('dark');
}
 else {
   setMode('light');
 }
 }
  return (
    <>
  
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        
       <TextForm heading="Welcome To UdanAir Reserveration "/>
      </div>\  
      <About/>
       {/* <UdanAir/> <Alert/> */}
    </> 
  );
}

export default App;
