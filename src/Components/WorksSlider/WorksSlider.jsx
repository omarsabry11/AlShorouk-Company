import React from "react";

import one from "../../assets/imgs/General/one.jpg";
import two from "../../assets/imgs/General/two.jpg";
import three from "../../assets/imgs/General/three.jpg";
import four from "../../assets/imgs/General/four.jpg";
import five from "../../assets/imgs/General/five.jpg";
import sex from "../../assets/imgs/General/sex.jpg";
import seven from "../../assets/imgs/General/seven.jpg";
import eight from "../../assets/imgs/General/eight.jpg";
import nine from "../../assets/imgs/General/nine.jpg";
import ten from "../../assets/imgs/General/ten.jpg";

export default function WorksSlider() {
  const images = [one, two, three, four, five, sex, seven, eight, nine, ten];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* <div className="slider-container">
        <Slider {...settings}>
          <div>One</div>
        </Slider>
      </div> */}
    </>
  );
}
