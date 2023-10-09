import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineZoomIn } from "react-icons/ai";
import PropTypes from "prop-types"
const FeatutedCard = ({image,title,price,code}) => {
  return (
    <div className="relative flex flex-col overflow-hidden shadow-xl group">
      <div className="h-[236px] pb-4 px-10 bg-shadeColor">
        <div className="flex items-center justify-center h-full">
          <img src={image} alt="" className="duration-200 hover:scale-105" />
        </div>
      </div>
      <div className="bg-white py-4 px-10 flex flex-col items-center group-hover:bg-[#2F1AC4]  duration-200">
        <h1 className="font-bold text-sm md:text-[18px] text-designColor mb-3 group-hover:text-white duration-200">
         {title}
        </h1>
        <p className="text-sm font-normal duration-200 text-titleColor group-hover:text-white">{code}</p>
        <p className="text-sm font-normal duration-200 text-titleColor group-hover:text-white">${price}</p>
      </div>
      <div className="absolute transition-transform duration-300 -translate-x-40 group-hover:translate-x-2 top-2">
        <div className="flex flex-col gap-2">
            <AiOutlineShoppingCart className="text-xl text-blue-500 cursor-pointer"/>
            <AiOutlineHeart className="text-xl text-blue-500 cursor-pointer"/>
            <AiOutlineZoomIn className="text-xl text-blue-500 cursor-pointer"/>

        </div>
      </div>
    </div>
  );
};

FeatutedCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  code: PropTypes.string,
}

export default FeatutedCard;
