import { motion } from "framer-motion";
import { heroPos, sofa } from "../../assets/img";
export const Hero = () => {
  return (
    <div className="bg-shadeColor relative py-[58px]">
      <div className="w-[300px] absolute top-0 left-0 hidden  xl:flex">
        <img src={heroPos} alt="" className="object-cover " />
      </div>
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-4 lg:grid-cols-2">
          <motion.div
          initial={{y: 300, opacity:0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1}}
          className="">
            <p className="mb-3 text-sm font-bold text-designColor md:text-base">
              Best Furniture For Your Castle....
            </p>
            <h1 className="font-bold text-2xl md:text-[53px] leading-tight mb-3">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="mb-5 text-xs font-bold md:text-base text-textColor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="button"
            >
              Shop Now
            </motion.button>
          </motion.div>
          <motion.div
          initial={{y: 300, opacity:0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1}}
          className="">
            <img src={sofa} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
