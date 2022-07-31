//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        
       <TextForm heading="Welcome To UdanAir Reserveration "/>
      </div>\  
      <About/>
    </> 
  );
}

export default App;
