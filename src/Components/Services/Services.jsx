import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import "./Services.css";
import { GrServices } from "react-icons/gr";
import "swiper/css/autoplay";

export default function Services() {
  const services = Object.values(
    import.meta.glob(
      "/src/assets/imgs/Services/*.{png,jpg,jpeg,PNG,JPEG,svg}",
      {
        eager: true,
        as: "url",
      }
    )
  );

  const servicesData = [
    { name: "توصيلات التحكم بالهواء ", img: services[0] },
    { name: "الصيانة السنوية ", img: services[1] },
    { name: "أعمال صيانة الغلاية ", img: services[2] },
    { name: "صيانة مبادلات حرارية ", img: services[3] },
    { name: "أنظمة المواسير ", img: services[4] },
    { name: "توريد الخامات ", img: services[5] },
    { name: "السابورتات ", img: services[6] },
    { name: "الخزانات ", img: services[7] },
    { name: "العزل الحراري ", img: services[8] },
  ];

  return (
    <div id="services">
      <div className="flex justify-center items-center gap-3 mt-8">
        <GrServices className="text-3xl" />

        <h5 className="font-bold  text-4xl ">خـدمـاتـنـا</h5>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={3000}
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay]}
        className="mySwiper"
      >
        {servicesData.map((data, index) => {
          return (
            <SwiperSlide key={index} className="py-1" data-swiper-autoplay="20">
              <a href="#" className="w-full h-full">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-full object-cover rounded-md"
                />

                <h5 className="p-1 hover:drop-shadow-2xl">{data.name}</h5>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
