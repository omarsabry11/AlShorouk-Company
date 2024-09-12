import React from "react"
import AlShorouk from "../../assets/imgs/AlShroukLogo/AlShorouk.png"
import { NavLink } from "react-router-dom"
import prometeon from "../../assets/imgs/Logos/01-Prometeon.jpg"
import pepsico from "../../assets/imgs/Logos/02-Pepsico.jpg"
import mondlez from "../../assets/imgs/Logos/03-Mandelez.png"
import total from "../../assets/imgs/Logos/04-Total.jpg"
import coveris from "../../assets/imgs/Logos/05-Coveris.jpg"
import egic from "../../assets/imgs/Logos/10-EGIC.jpg"

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
              <a href="#previousProjects">أعمالنا السابقة</a>
            </li>

           
            <li className="relative">
              <a href="#services">الخدمات</a>

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







            {/* <div className="absolute w-full bg-white flex justify-between top-[100px] py-12  start-0 rounded-xl px-4">
              <div className="w-1/3">
                <div className="text-black">
                  <h2>نُقدم لك لمحة عن مشاريعنا الناجحة، التي تُظهر التزامنا بتقديم خدمات عالية الجودة لشركائنانُقدم لك لمحة عن مشاريعنا الناجحة، التي تُظهر التزامنا بتقديم خدمات عالية الجودة لشركائنانُقدم لك لمحة عن مشاريعنا الناجحة، التي تُظهر التزامنا بتقديم خدمات عالية الجودة لشركائنا</h2>
                </div>

              </div>

              <div className="w-2/3">

                <div className="flex ">
                  <div className=" w-1/2 px-5">
                    <ul className="text-black flex flex-col gap-7">
                      <li className="border-[3px] p-2 rounded-lg duration-300 hover:scale-105 text-[#002D62]">
                        <a href="#" className="flex items-center justify-between">

                          <div className="w-20 h-11">
                            <img src={prometeon} alt="" />
                          </div>
                          <p className="text-[1.1rem] font-semibold">Prometeon Tyre Group </p>
                        </a>
                      </li>
                      <li className="border-[3px] p-2 rounded-lg duration-300 hover:scale-105 text-[#002D62]">
                        <a href="#" className="flex items-center justify-between">

                          <div className="w-20">
                            <img src={pepsico} alt="" />
                          </div>
                          <p className="text-[1.1rem] font-semibold">Pepsico FoodService</p>
                        </a>
                      </li>
                      <li className="border-[3px] p-2 rounded-lg duration-300 hover:scale-105 text-[#002D62]">
                        <a href="#" className="flex items-center justify-between">

                          <div className="w-20">
                            <img src={mondlez} alt="" />
                          </div>
                          <p className="text-[1.1rem] font-semibold">Mondelez International</p>
                        </a>
                      </li>
                      
                      

                    </ul>

                  </div>
                  <div className="w-1/2 px-5">
                    <ul className="text-black flex flex-col gap-7">
                    <li className="border-[3px] p-2 rounded-lg duration-300 hover:scale-105 text-[#002D62]">
                        <a href="#" className="flex items-center justify-between">

                          <div className="w-20 h-11">
                            <img src={total} alt="" />
                          </div>
                          <p className="text-[1.1rem] font-semibold">TotalEnergies</p>
                        </a>
                      </li>
                      <li className="border-[3px] p-2 rounded-lg duration-300 hover:scale-105 text-[#002D62]">
                        <a href="#" className="flex items-center justify-between">

                          <div className="w-20">
                            <img src={coveris} alt="" />
                          </div>
                          <p className="text-[1.1rem] font-semibold">COVERIS</p>
                        </a>
                      </li>
                      <li className="border-[3px] p-2 rounded-lg duration-300 hover:scale-105 text-[#002D62]">
                        <a href="#" className="flex items-center justify-between">

                          <div className="w-20">
                            <img src={egic} alt="" />
                          </div>
                          <p className="text-[1.1rem] font-semibold">EGIC</p>
                        </a>
                      </li>
                      

                    </ul>

                  </div>


                </div>



              </div>















            </div> */}




          </ul>

        </div>
      </div>



    </>
  )
}
