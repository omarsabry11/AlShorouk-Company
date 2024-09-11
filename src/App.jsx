

import './App.css'
import About from './Components/About/About'
import LandingPage from './Components/LandingPage/LandingPage'
import Navbar from './Components/Navbar/Navbar'
import Slider from "react-slick";


import "./App.css";

import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


import Partners from "./Components/Partners/Partners";
import PreviousProjects from './Components/PreviousProjects/PreviousProjects';


function App() {
  return (
    <>

      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <PreviousProjects></PreviousProjects>
      <About></About>

      <Partners />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
