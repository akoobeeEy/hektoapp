import { motion } from "framer-motion";
import { FeaturedProducts } from "../../constants";
import FeatutedCard from "../card/FeatutedCard";

export const Featured = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto">
        <h1 className="mb-12 text-center title">Featured Products</h1>
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10"
        >
          {FeaturedProducts.map((el) => (
            <FeatutedCard key={el.id} {...el} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
