import "./App.css";
import About from "./Components/About/About";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "react-slick";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Partners from "./Components/Partners/Partners";
import PreviousProjects from './Components/PreviousProjects/PreviousProjects';
import TeamWork from "./Components/TeamWork/TeamWork";


import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <About></About>
      <PreviousProjects></PreviousProjects>

      <Partners />
      <TeamWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
