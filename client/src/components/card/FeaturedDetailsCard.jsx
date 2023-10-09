import PropTypes from "prop-types";
import ReactStars from "react-stars";
import { motion } from "framer-motion";
import {
  AiFillFacebook,
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
const FeaturedDetailsCard = ({ title, image, price, description, lorem }) => {
  return (
    <div className="p-5 bg-white shadow-detailShadow">
      <div className="flex gap-10">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="details-left"
        >
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              <div className="p-2 bg-white rounded-md shadow-xl">
                <img
                  src={image}
                  alt=""
                  className="w-[151px] h-[155px] hover:scale-105 duration-200 object-cover"
                />
              </div>
              <div className="p-2 bg-white rounded-md shadow-xl">
                <img
                  src={image}
                  alt=""
                  className="w-[151px] h-[155px] hover:scale-105 duration-200 object-cover"
                />
              </div>
              <div className="p-2 bg-white rounded-md shadow-xl">
                <img
                  src={image}
                  alt=""
                  className="w-[151px] h-[155px] hover:scale-105 duration-200 object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center bg-white shadow-xl w-[400px] p-2">
              <img
                src={image}
                alt=""
                className="object-cover hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-10 details-right"
        >
          <h1 className="text-[#0D134E] text-xl md:text-4xl font-semibold mb-3">
            {title}
          </h1>
          <ReactStars
            className="mb-3"
            count={5}
            value={4}
            isHalf={true}
            edit={true}
            size={24}
            activeColor="#ffd700"
          />
          <p className="text-[#151875] text-sm md:text-base font-normal mb-3">
            ${price}
          </p>
          <p className="text-[#151875] text-sm md:text-base font-normal mb-3">
            {description}
          </p>
          <p className="text-[#A9ACC6] text-sm md:text-base font-semibold mb-10 w-[80%]">
            {lorem}
          </p>

          <div className="flex items-center px-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-1 text-white bg-designColor"
            >
              Add To Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineHeart className="ml-3 text-xl cursor-pointer" />
            </motion.button>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="text-[#151875] text-sm md:text-base font-semibold">
              Categories:
            </p>
            <p className="text-[#151875] text-sm md:text-base font-semibold">
              Tags:
            </p>
            <div className="flex items-center gap-10">
              <p className="text-[#151875] text-sm md:text-base font-semibold">
                Share
              </p>
              <div className="flex gap-3">
                <button className="p-3 duration-200 rounded-full bg-blue-950 hover:-translate-y-1">
                  <AiFillFacebook className="text-white" />
                </button>
                <button className="p-3 duration-200 rounded-full hover:-translate-y-1 bg-designColor">
                  <AiOutlineInstagram className="text-white" />
                </button>
                <button className="p-3 duration-200 rounded-full bg-blue-950 hover:-translate-y-1">
                  <AiOutlineTwitter className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

FeaturedDetailsCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  lorem: PropTypes.string,
};
export default FeaturedDetailsCard;
