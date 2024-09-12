import "./App.css";
import About from "./Components/About/About";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Partners from "./Components/Partners/Partners";
import PreviousProjects from "./Components/PreviousProjects/PreviousProjects";
import TeamWork from "./Components/TeamWork/TeamWork";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <About></About>
      <PreviousProjects></PreviousProjects>

      <Partners />
      <Services />
      <TeamWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
