import React from "react"
import WorksSlider from "../WorksSlider/WorksSlider"
import AlShorouk from "../../assets/imgs/Logos/AlShorouk.png"

export default function About() {
  return (
    <>
      <div id="about" className="py-20">
        <div className="w-[85%] mx-auto">
          <h2 className="text-center font-semibold mb-14"><i class="fas fa-building fa-xl text-[red]"></i> <span className="text-3xl ms-2">عن الشركة</span></h2>

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
      </div>

      <div>
        <WorksSlider></WorksSlider>
      </div>

    </>

  )
}
