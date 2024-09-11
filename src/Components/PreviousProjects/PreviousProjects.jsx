import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../../assets/imgs/General/one.jpg"
import two from "../../assets/imgs/General/two.jpg"
import three from "../../assets/imgs/General/three.jpg"
import four from "../../assets/imgs/General/four.jpg"
import five from "../../assets/imgs/General/five.jpg"
import sex from "../../assets/imgs/General/sex.jpg"
import seven from "../../assets/imgs/General/seven.jpg"
import eight from "../../assets/imgs/General/eight.jpg"
import nine from "../../assets/imgs/General/nine.jpg"
import ten from "../../assets/imgs/General/ten.jpg"



const logos = Object.values(
  import.meta.glob("/src/assets/imgs/General/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
    eager: true,
    as: "url",
  })
);



export default function PreviousProjects() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <>
      <div id="previousProjects" className=" py-20 overflow-x-hidden ">
        <div className="w-[85%] mx-auto">

          <h2 className="text-center font-bold mb-20"><span className="text-3xl">أعمالنا السابقة</span></h2>
          <div className="grid grid-cols-3 text-center">
            

          </div>
          {/* <Slider {...settings}>
            {logos.map((img,index)=>
            <div className="bg-gray-100">
              <img className="w-1/2 mx-auto" src={img} alt="" />
            </div>
            )}
            
          </Slider> */}


        </div>



      </div>
    </>

  )
}
