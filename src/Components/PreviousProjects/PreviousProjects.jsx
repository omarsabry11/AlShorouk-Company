import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

import prometeon from "../../assets/imgs/PreviousWorks/Prometeon.jpg";
import pepsico from "../../assets/imgs/PreviousWorks/Pepsico.jpg";
import mondlez from "../../assets/imgs/PreviousWorks/Mondelez.jpg";
import total from "../../assets/imgs/PreviousWorks/Total.jpg";
import coveris from "../../assets/imgs/PreviousWorks/Coveris.jpg";
import egic from "../../assets/imgs/PreviousWorks/EGIC.jpg";
import { MdWorkspacePremium } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import Swiper styles

// import './styles.css';

// import required modules

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
    autoplay: true,
  };
  return (
    <>
      <div id="previousProjects" className="pt-24 overflow-x-hidden ">
        <div className="w-[85%] mx-auto">
          <div className="flex justify-center items-center">
            <MdWorkspacePremium size={"35px"} className="me-2" />
            <h2 className="font-bold ">
              <span className="text-3xl">أعمالنا السابقة</span>
            </h2>
            <MdWorkspacePremium size={"35px"} className="ms-2" />
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper mt-20"
          >
            <SwiperSlide>
              <img src={one} alt="" />
            </SwiperSlide>
            {/* <SwiperSlide>
          <img src={two} alt="" />
        </SwiperSlide> */}
            <SwiperSlide className="test">
              <img className="rounded-xl h-full" src={three} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-xl h-full" src={four} alt="" />
            </SwiperSlide>
            {/* <SwiperSlide>
          <img className="rounded-xl h-full" src={five} alt="" />
        </SwiperSlide> */}
            <SwiperSlide>
              <img className="rounded-xl h-full" src={sex} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-xl h-full" src={seven} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-xl h-full" src={eight} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-xl h-full" src={nine} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="flex flex-wrap gap-y-6 mt-10 flex-row-reverse">
            <div className="w-1/3 px-3 h-[450px] ">
              <a href="">
                <div className="border-[3px] border-gray-300 rounded-xl p-3 h-full">
                  <div className=" border-gray-300 h-[200px]">
                    <img src={prometeon} alt="" />
                  </div>
                  <div className="py-2">
                    <h3 className="text-end py-2 font-bold ">
                      <span className="bg-blue-600 text-white px-2 ms-2 rounded-md">
                        1
                      </span>
                      <span className="text-lg tracking-wider">
                        PROMETEON TYRE GROUP
                      </span>
                    </h3>
                    <p className="font-semibold flex leading-7">
                      <i class="fa-solid fa-angle-left mt-2 me-1"></i>  شركة
                      إيطالية رائدة في تصنيع إطارات الشاحنات والحافلات والمعدات
                      الزراعية، تُعرف بجودتها العالية ومقاومتها للأضرار والتآكل.
                      تُقدم بروميتيون مجموعة واسعة من الإطارات التي تناسب مختلف
                      الاستخدامات والتضاريس.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/3 px-3 h-[450px]">
              <a href="">
                <div className="border-[3px] border-gray-300 rounded-xl p-3 h-full">
                  <div className=" border-gray-300 h-[200px]">
                    <img src={pepsico} alt="" />
                  </div>
                  <div className="py-2">
                    <h3 className="text-end py-2 font-bold ">
                      <span className="bg-blue-600 text-white px-2 ms-2 rounded-md">
                        2
                      </span>
                      <span className="text-lg tracking-wider">PEPSICO</span>
                    </h3>
                    <p className="font-semibold flex leading-6">
                      <i class="fa-solid fa-angle-left mt-2 me-1"></i> شركة
                      عالمية رائدة في صناعة وتوزيع الأطعمة والمشروبات، تُركز على
                      تقديم خدمات الطعام والمشروبات للقطاع المؤسسي مثل مطاعم
                      الفنادق والمؤسسات وغيرها. تُقدم بيبسيكو مجموعة واسعة من
                      المنتجات مثل البطاطس المقلية والمشروبات الغازية والمشروبات
                      غير الغازية وغيرها من المنتجات الغذائية
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/3 px-3 h-[450px]">
              <a href="">
                <div className="border-[3px] border-gray-300 rounded-xl p-3 h-full">
                  <div className=" h-[200px]">
                    <img src={total} alt="" />
                  </div>
                  <div className="py-2">
                    <h3 className="text-end py-2 font-bold ">
                      <span className="bg-blue-600 text-white px-2 ms-2 rounded-md">
                        3
                      </span>
                      <span className="text-lg tracking-wider">
                        TotalEnergies
                      </span>
                    </h3>
                    <p className="font-semibold flex leading-7">
                      <i class="fa-solid fa-angle-left mt-2 me-1"></i>شركة
                      فرنسية عالمية رائدة في مجال الطاقة، تُركز على استخراج
                      وإنتاج وتوزيع النفط والغاز والتوسع في مجالات الطاقة
                      الجديدة مثل الطاقة الشمسية وطاقة الرياح. تُقدم توتال
                      حلولاً متكاملة لإدارة الطاقة والتقليل من انبعاثات الكربون
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/3 px-3 h-[450px]">
              <a href="">
                <div className="border-[3px] border-gray-300 rounded-xl p-3 h-full">
                  <div className=" h-[200px]">
                    <img src={mondlez} className="mx-auto py-3" alt="" />
                  </div>
                  <div className="py-2">
                    <h3 className="text-end py-2 font-bold ">
                      <span className="bg-blue-600 text-white px-2 ms-2 rounded-md">
                        4
                      </span>
                      <span className="text-lg tracking-wider">
                        Mondelez International
                      </span>
                    </h3>
                    <p className="font-semibold flex leading-7">
                      <i class="fa-solid fa-angle-left mt-2 me-1"></i> شركة
                      عالمية رائدة في مجال صناعة المواد الغذائية، تُركز على
                      إنتاج حلويات ووجبات خفيفة ومشروبات وغيرها من منتجات المواد
                      الغذائية. تُقدم موندليز مجموعة واسعة من العلامات التجارية
                      المشهورة عالمياً{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/3 px-3 h-[450px]">
              <a href="">
                <div className="border-[3px] border-gray-300 rounded-xl p-3 h-full">
                  <div className=" h-[200px]">
                    <img src={coveris} alt="" />
                  </div>
                  <div className="py-2">
                    <h3 className="text-end py-2 font-bold ">
                      <span className="bg-blue-600 text-white px-2 ms-2 rounded-md">
                        5
                      </span>
                      <span className="text-lg tracking-wider">COVERIS</span>
                    </h3>
                    <p className="font-semibold flex leading-7">
                      <i class="fa-solid fa-angle-left mt-2 me-1"></i> شركة
                      عالمية رائدة في مجال تصنيع وتعبئة المنتجات ، وتُركز على
                      تقديم حلول عالية الأداء للتعبئة والتغليف للمواد الغذائية
                      وغير الغذائية. تُقدم كوفيريس مجموعة واسعة من المنتجات
                      والتقنيات لتلبي احتياجات مختلف القطاعات
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/3 px-3 h-[450px]">
              <a href="">
                <div className="border-[3px] border-gray-300 rounded-xl p-3 h-full">
                  <div className=" h-[200px]">
                    <img src={egic} alt="" />
                  </div>
                  <div className="py-2">
                    <h3 className="text-end py-2 font-bold ">
                      <span className="bg-blue-600 text-white px-2 ms-2 rounded-md">
                        6
                      </span>
                      <span className="text-lg tracking-wider">EGIC</span>
                    </h3>
                    <p className="font-semibold flex leading-7">
                      <i class="fa-solid fa-angle-left mt-2 me-1"></i> الشركة
                      الرائدة فى مجال تصنيع حلول التغذية والصرف الصحي , وتعد من
                      أكبر الشركات التي تصنع أنظمة تغذية المياة وحلول الصرف من
                      أنقي خامات البولي بروبلين والـ (يو بي في سي) والبولي
                      إيثيلين في مصر والشرق الأوسط بقمة الجودة الألمانية.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
