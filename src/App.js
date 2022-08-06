//import UdanAir from './UdanAir.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
//import Alert from './components/Alert'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("Dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <div>Hello</div>
      <div className="container">
        {/* <Router>
          <Switch>
          <Route path="/About">
          <About />
          </Route>
          <Route path="/">
          <TextForm heading="Welcome To UdanAir Reserveration " />
          </Route>
          </Switch>
        </Router> */}
        <BrowserRouter>
          <Navbar title="UdanAir" mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={<TextForm heading="Welcome To UdanAir Reserveration " />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* <UdanAir/> <Alert/> */}
    </>
  );
}

export default App;
