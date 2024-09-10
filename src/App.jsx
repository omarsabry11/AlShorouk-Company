import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Partners from "./Components/Partners/Partners";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <About></About>
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
