import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FeaturedCard } from "../card";
import { toast } from "react-toastify";
import { request } from "../../server";

export const Featured = () => {
  const [data,setData] = useState([]);

  const getPosts = async()=>{
    try{
        const {data} = await request("products")
        setData(data);
    }catch(err){
      toast.error(err.message)
    }
  }
  useEffect(()=>{
    getPosts()
  },[])
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
          {data.map((el) => (
            <FeaturedCard key={el.id} {...el} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
