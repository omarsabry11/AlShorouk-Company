import { motion } from "framer-motion";
import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

export default function TeamWork() {
  const teamWork = Object.values(
    import.meta.glob(
      "/src/assets/imgs/TeamWork/*.{png,jpg,jpeg,PNG,JPEG,svg}",
      {
        eager: true,
        as: "url",
      }
    )
  );
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="pt-24">
      <div id="teamWork" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
          exit={{ opacity: 0, y: -150 }}
          transition={{ duration: 0.7 }}
          className="w-[85%] mx-auto text-center font-cairo "
        >
          <div className="flex justify-center items-center gap-4 mb-20">
            <RiTeamFill className="text-2xl" />

            <h5 className="font-bold py-5 text-4xl ">فريق العمل لدينا</h5>
          </div>

          <div className="grid grid-cols-5 grid-rows-2 gap-2 my-3">
            <div className="col-span-1 row-span-1">
              <img
                src={teamWork[0]}
                alt="teamWork image 0"
                className="w-full object-cover rounded-md"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src={teamWork[1]}
                alt="teamWork image 1"
                className="w-full object-cover rounded-md"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src={teamWork[2]}
                alt="teamWork image 2"
                className="w-full object-cover rounded-md"
              />
            </div>
            {/* the big in the first row */}
            <div className="col-span-2 row-span-2">
              <img
                src={teamWork[3]}
                alt="teamWork image 3"
                className="w-full object-cover rounded-md"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src={teamWork[7]}
                alt="teamWork image 4"
                className="w-full object-cover rounded-md"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src={teamWork[5]}
                alt="teamWork image 5"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src={teamWork[6]}
                alt="teamWork image 6"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* the big one in the 2nd row */}

            <div className="col-span-3 row-span-1 ">
              <img
                src={teamWork[4]}
                alt="teamWork image 7"
                className="w-full h-full object-cover rounded-md mt-1"
              />
            </div>
            <div className="col-span-1 row-span-2  ">
              <img
                src={teamWork[8]}
                alt="teamWork image 8"
                className="  object-cover object-top h-full rounded-md "
              />
            </div>
            <div className="col-span-1 row-span-2  ">
              <img
                src={teamWork[9]}
                alt="teamWork image 9"
                className="  object-cover object-left h-full  rounded-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
