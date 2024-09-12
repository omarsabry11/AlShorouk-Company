import React from "react"
import WorksSlider from "../WorksSlider/WorksSlider"
import AlShorouk from "../../assets/imgs/AlShroukLogo/AlShorouk.png"
import team from "../../assets/imgs/LandingPage/one.jpg"
import { IoDiamondSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";





export default function About() {

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <>
      {/* <div id="partners" className="py-20">


        <div className="w-[85%] mx-auto">
          <h2 className="text-center font-bold mb-14"><i class="fas fa-building fa-xl text-[#00001C]"></i> <span className="text-3xl ms-2">عن الشركة</span></h2>

          <div className="flex justify-between items-center">
            <ul className="w-[70%]">
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">شركة الشروق هي اسم مرادف للتميز والخبرة والجودة في مجال الأعمال الكهروميكانيكية.</span> </li>
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">نقدم حلولًا شاملة ذات جودة عالية منذ 20 عامًا.</span></li>
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">نفخر بفريقنا المتميز من المهندسين و الفنيين والعمال ذوي المهارات العالية ونسعى دائماً لتقديم حلولٍ مبتكرة وفريدة من نوعها لعملائنا.</span> </li>
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">نُدرك أنّ الجودة هي ركيزة أساسية  في نجاح أي مشروع، ولذلك  نلتزم بتطبيق معايير الجودة  العالمية في جميع مراحل  عملنا.</span> </li>
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">نُركز على الابتكار و التكنولوجيا الحديثة، ونلتزم بتقديم خدماتنا بكفاءة عالية و بأعلى معايير السلامة.</span> </li>
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">نُقدم مجموعة واسعة من الخدمات  التصنيعية والهندسية، بما في ذلك  تصميم وتنفيذ وصيانة الأنظمة الميكانيكية و تركيب المواسير والمعدات  في  مختلف القطاعات.</span> </li>
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">نُقدّم حلولاً مصمّمة  خصيصًا  لِتلبية  احتياجات  كل عميل  وضمان  الرضا التام.</span> </li>
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">نقدم لكم حلولًا متكاملة لجميع احتياجاتكم في مجال نقل وتركيب المعدات الثقيلة، مع التركيز على كفاءة الطاقة لتوفير التكاليف وتحقيق الاستدامة.</span>  </li>
              <li className="pb-5 flex "><span><i class="fas fa-tag"></i></span> <span className="ms-2">هدفنا بناء علاقات طويلة الأمد مع عملائنا بناءً على الثقة واحترام المصالح المُشترك.</span></li>
            </ul>
            <div>
              <img src={AlShorouk} alt="" />
            </div>


          </div>
        </div>
      </div> */}



      <div id="about" className="pt-24 overflow-x-hidden" ref={ref}>
        <div className="w-[85%] mx-auto">
          <h2 className="text-center font-bold mb-20"><i className="fas fa-building fa-xl text-[#00001C]"></i> <span className="text-3xl ms-2">عن الشركة</span></h2>
          <div className="flex">

            <motion.div initial={{opacity:0,x:100}}
             animate={inView ? {opacity:1,x:0}:{opacity:0,x:150}}
             exit={{ opacity: 0, x: -150 }}
             transition={{duration:1}}

              className="w-[40%] relative">
              <div className="h-full">
                <img src={team} className="rounded-xl w-full h-full" alt="" />
              </div>

              <div className="absolute top-0 start-0 left-0 h-full bg-[rgba(0,0,0,0.7)] text-white flex items-center rounded-xl">
                <div className="w-[80%] mx-auto border bg-[rgba(0,0,0,0)] p-5 rounded-xl">
                  <h2 className="text-center text-3xl font-bold pb-5">من نحن </h2>
                  <p className="tracking-wider text-center font-semibold leading-7">تأسست شركة الشروق منذ أكثر من 20 عامًا، واستطاعت على مر السنوات أن تُصبح واحدة من الشركات الرائدة في مجال الأعمال الكهروميكانيكية. نحن نُقدم حلولًا شاملة تغطي التصميم، التركيب، الصيانة، والتوريد، بهدف تحقيق أقصى درجات الجودة والموثوقية. بفضل فريقنا من المهندسين والفنيين المحترفين، نضمن تقديم خدمات ذات مستوى عالمي تلبي احتياجات عملائنا في مختلف القطاعات الصناعية والتجارية.</p>

                </div>


              </div>


            </motion.div>

            <motion.div
            initial={{opacity:0,x:-150}}
            animate={inView ? {opacity:1,x:0}:{opacity:0,x:-150}}
            exit={{ opacity: 0, x: -150 }}
            transition={{duration:1}}
             className="w-[60%] px-10">
              <div className="flex flex-col justify-between gap-11">
                <div className="bg-gray-100 p-5 rounded-lg">

                  <div className="flex items-center gap-2 mb-5 ">

                    <IoDiamondSharp color="darkblue" size="30px" />
                    <h2 className="text-2xl font-bold">رسالتنا</h2>
                  </div>
                  <p className="font-semibold text-lg flex "><span><i class="fa-solid fa-angle-left me-2"></i></span><span>تتمحور رسالتنا حول تقديم خدمات هندسية وحلول صناعية مبتكرة بجودة عالية وبأسعار تنافسية. نحن نؤمن أن جودة الخدمة هي حجر الزاوية لنجاحنا، لذلك نحرص على تطبيق معايير الجودة العالمية في جميع مراحل عملنا. كما نُركز على توفير حلول مخصصة تتناسب مع متطلبات كل عميل، مما يضمن رضاهم التام عن الخدمات التي نقدمها. نُعزز ثقافة التميز المستمر والتطوير الذاتي بين جميع أفراد فريقنا، لنبقى دائمًا في مقدمة الشركات التي تقدم حلولًا نوعية ومتميزة.</span></p>
                </div>

                <div className="bg-gray-100 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-5">

                    <FaEye color="darkred" size="30px" />
                    <h2 className="text-2xl font-bold">رؤيتنا</h2>
                  </div>
                  <p className="font-semibold text-lg flex "><span><i class="fa-solid fa-angle-left me-2"></i></span>نسعى في شركة الشروق إلى تعزيز مكانتنا كأحد اللاعبين الأساسيين في قطاع الأعمال الكهروميكانيكية على مستوى المنطقة. نؤمن أن الابتكار والتكنولوجيا هما مفتاح النجاح في هذا المجال، لذلك نركز على تبني أحدث الحلول التكنولوجية وتقديم خدمات تضمن الكفاءة والجودة العالية. هدفنا هو أن نُحقق التفوق في كل مشروع ننفذه من خلال الالتزام بمعايير الجودة العالمية، وتحقيق رضا العملاء في كل خطوة.<span></span></p>
                </div>


              </div>

            </motion.div>

          </div>


        </div>
      </div>


    </>

  )
}
