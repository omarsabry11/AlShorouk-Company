import React from "react"
import AlShorouk from "../../assets/imgs/Logos/AlShorouk.png"
import { NavLink } from "react-router-dom"


export default function Navbar() {
  return (
    <>

      <div className="fixed top-0 start-0 end-0 bg-black z-40">
        <div className="w-[85%] mx-auto py-2 flex justify-between items-center relative">

          <div className="flex items-center gap-3">
            <div className="w-12">
              <img src={AlShorouk} alt="AlShorouk Logo" />
            </div>
            <div className="text-white text-sm">
              <p className="font-bold ">شركة الشروق</p>
              <p className="text-[#F5E928]">للأعمال الكهروميكانيكية</p>

            </div>

          </div>

          <ul className="text-white flex gap-5">
            <li>
              <a href="#about">عن الشركة</a>
            </li>

            <li>
              <a href="#ourWorks">المشاريع</a>
            </li>
            <li className="relative">
              <a href="#ourWorks">الخدمات</a>

            </li>
            <li>
              <a href="#teamWork">فريق العمل</a>
            </li>
            <li>
              <a href="#partners">شركاء النجاح</a>
            </li>

            <li>
              <a href="#contact">تواصل معنا</a>
            </li>

            {/* <div className="absolute w-full bg-[#F0F0F0] flex justify-between top-[100px]  start-0 rounded-xl">
              <div className="w-1/4 px-4">
                <div className=" px-3 py-8 ">
                  <h3 className="boxServices-title relative mb-9 w-fit  text-lg  duration-300 text-[#002D62] cursor-pointer py-1  font-bold">أعمال التركيبات</h3>

                  <ul className="flex flex-col gap-5">
                    <li className="duration-300 hover:ps-3 text-[#4D4D4D] font-semibold hover:text-[#00B3B3] border-b-[2px] border-gray-300 pb-3">
                      <a href=""><i class="fa-solid fa-angles-left me-2 text-[#00B3B3]"></i>العزل الحراري</a>
                    </li>
                    <li className="duration-300 hover:ps-3 text-[#4D4D4D] font-semibold hover:text-[#00B3B3] border-b-[2px] border-gray-300 pb-3">
                      <a href=""><i class="fa-solid fa-angles-left me-2 text-[#00B3B3]"></i> أنظمة المواسير</a>
                    </li>
                    <li className="duration-300 hover:ps-3 text-[#4D4D4D] hover:text-[#00B3B3] font-semibold">
                      <a href=""><i class="fa-solid fa-angles-left me-2 text-[#00B3B3]"></i>توصيلات التحكم بالهواء</a>
                    </li>
                  </ul>


                </div>

              </div>



              <div className="w-1/4 px-4">
                <div className=" px-3 py-8 ">
                  <h3 className="boxServices-title relative mb-9 w-fit text-lg   duration-300 text-[#002D62] cursor-pointer py-1  font-bold ">أعمال التصنيع</h3>

                  <ul className="flex flex-col gap-5">
                    <li className="duration-300 hover:ps-3 text-[#4D4D4D] font-semibold hover:text-[#00B3B3] border-b-[2px] border-gray-300 pb-3">
                      <a href=""><i class="fa-solid fa-angles-left me-2 text-[#00B3B3]"></i>السابورتات</a>
                    </li>
                    <li className="duration-300 hover:ps-3 text-[#4D4D4D] font-semibold hover:text-[#00B3B3] border-b-[2px] border-gray-300 pb-3">
                      <a href=""><i class="fa-solid fa-angles-left me-2 text-[#00B3B3]"></i>الخزانات</a>
                    </li>
                
                  </ul>


                </div>

              </div>


              <div className="w-1/4 px-4">
                <div className=" px-3 py-8 ">
                  <h3 className="boxServices-title relative mb-9 w-fit  text-lg  duration-300 text-[#002D62] cursor-pointer py-1  font-bold ">أعمال الصيانة</h3>

                  <ul className="flex flex-col gap-5">
                    <li className="duration-300 hover:ps-3 text-[#4D4D4D] font-semibold hover:text-[#00B3B3] border-b-[2px] border-gray-300 pb-3">
                      <a href=""><i class="fa-solid fa-angles-left me-2 text-[#00B3B3]"></i>الصيانة السنوية</a>
                    </li>
                   
                  </ul>


                </div>

              </div>

              <div className="w-1/4 px-4">
                <div className=" px-3 py-8">
                  <h3 className="boxServices-title relative mb-9 w-fit  text-lg   duration-300 text-[#002D62] cursor-pointer py-1  font-bold  ">توريد الخامات الميكانيكية</h3>

                  <ul className="flex flex-col gap-5">
                    <li className="duration-300 hover:ps-3 text-[#4D4D4D] font-semibold hover:text-[#00B3B3] border-b-[2px] border-gray-300 pb-3">
                      <a href=""><i class="fa-solid fa-angles-left me-2 text-[#00B3B3]"></i>الخامات</a>
                    </li>
                  
                  </ul>


                </div>

              </div>









            </div> */}






            
            <div className="absolute w-full bg-[#F0F0F0] flex justify-between top-[100px]  start-0 rounded-xl">
              <div className="text-black">
                <h2>نُقدم لك لمحة عن مشاريعنا الناجحة، التي تُظهر التزامنا بتقديم خدمات عالية الجودة لشركائنا</h2>
              </div>
              <div>
                <ul></ul>
                <ul></ul>
              </div>
       



          

             









            </div>




          </ul>

        </div>
      </div>



    </>
  )
}
