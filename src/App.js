import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from './components/Alert'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("danger");
  const [alert, setAlert] = useState(null);
 const showAlert = ( message, type) =>{
   setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },5000);
 }
  
  const toggleMode = () => {
    if (mode === "info") {
      setMode("danger");
      document.body.style.backgroundColer="rgb(35 54 70)";
      showAlert("info Mode has been enable", "success");

    } else {
      setMode("info");
      document.body.style.backgroundColer="white";
      showAlert("danger Mode has been enable", "success");
    }
  };
  return (
    <>
      <div >
        <BrowserRouter>
          <Navbar title="Tutorials" mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route path="/about" element={<About mode={mode}  toggleMode={toggleMode} />}></Route>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Welcome To Tutorials "
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
                  alert={alert}
                />
              }
            ></Route>
           
        <Route path="/Alert" element={<Alert alert={alert} mode={mode}/> }></Route> 
        
      </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
