import React, { useEffect, useState } from "react"
import one from "../../assets/imgs/LandingPage/one.jpg"
import two from "../../assets/imgs/LandingPage/two.jpg"
import three from "../../assets/imgs/LandingPage/three.jpg"



export default function LandingPage() {
  const [bgImage, setBgImage] = useState(`url(${one})`);

  useEffect(() => {
    const images = [
      `url(${one})`,
      `url(${two})`,
      `url(${three})`,
    ];
    let index = 0;

    const changeBackgroundImage = () => {
      index = (index + 1) % images.length;
      setBgImage(images[index]);
    };

    const intervalId = setInterval(changeBackgroundImage, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className="min-h-lvh landing bg-gray-200 duration-1000">
        <div className="min-h-lvh flex justify-center items-center">
          <div className="text-white relative z-10 text-center font-semibold">
            <h1 className="text-8xl py-8 font-bold">شركة الشروق</h1>
            <h2 className="text-5xl mb-10">الاختيار الأمثل لأعمالك الكهروميكانيكية</h2>
            {/* <h2>نحول رؤيتك إلى واقع بأعلى معايير الجودة والكفاءة.</h2> */}
            <button className="bg-[#F5E928] py-3 px-14 rounded-lg text-xl text-black font-bold">
              <a href="">أعمالنا السابقة</a>
            </button>

          </div>

        </div>

      </div>
    </>
  )
}
