import React from "react";
import layerimg from "/src/assets/imgs/TeamWork/one.jpg";
import logo from "../../assets/imgs/AlShroukLogo/AlShorouk.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sendEmail = () => {
    const recipient = 'abdelrahmansabry515@gamil.com';
    const subject = 'Subject of your email';
    const body = 'Hello, I would like to get in touch!';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = '+201550721259';
    const message = 'Hello, I would like to get in touch!';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div id="contact" className="overflow-hidden pt-24" ref={ref}>
      <div className="relative h-auto py-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${layerimg})` }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative h-full text-center text-white">
          <h1 className="text-white text-4xl font-bold">
            يمكنك التواصل معنا عبر
          </h1>
          <div className="grid grid-cols-3 w-[85%] mx-auto text-center text-white mt-6 justify-center items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}

              transition={{ duration: 1 }}
              className="flex flex-col items-center justify-center gap-3 "
            >
              <img src={logo} alt="شركة الشروق" className="w-28 " />
              <h4>شركة الشروق </h4>
              <p>الاختيار الأمثل لأعمالك الكهروميكانيكية</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
              exit={{ opacity: 0, y: -150 }}
              transition={{ duration: 1 }}
            >
              
              <div >
                <h5 className="">البريد الالكتروني :</h5>
                <div onClick={sendEmail} className="flex justify-center items-center cursor-pointer">
                  <h6  className="p-2 ">abdelrahmansabry515@gamil.com</h6>
                  <i className="fa-solid fa-envelope"></i>
                </div>

              </div>
              <div>
                <h5>اتصل بنا : </h5>
                <div onClick={sendWhatsAppMessage} className="flex justify-center items-center cursor-pointer">
                  <h6  className="p-2">201550721259+</h6>
                  <i className="fa-solid fa-phone"></i>
                </div>

              </div>



              <div className="flex justify-center items-center ">
                <i className="fa-solid fa-location-dot"></i>
                <h6 className="p-2"> الإسكندرية - مصر</h6>
              </div>
              <div className="flex justify-center items-center gap-3 text-xl">
                <a href="#" className="hover:text-blue-900 ">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-pink-700 ">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-green-900 ">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
              exit={{ opacity: 0, x: 150 }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center items-center gap-3"
            >
              <h5>موقعنا على الخريطة:</h5>
              <div className="map-responsive w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8116269659064!2d29.952922115145063!3d31.215641281468607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c37d7bfe6c73%3A0x646e5037a647d99a!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2sus!4v1637687318286!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
