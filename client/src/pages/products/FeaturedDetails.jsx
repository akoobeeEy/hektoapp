import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { request } from "../../server";
import FeaturedDetailsTop from "./FeaturedDetailsTop";
import { FeaturedDetailsCard } from "../../components/card";

export const FeaturedDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const { data } = await request(`products/${id}`);
      setProduct(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <FeaturedDetailsTop {...product} />
      <section className="py-[120px]">
        <div className="container mx-auto">
         
            <FeaturedDetailsCard {...product}/>
     
        </div>
      </section>
    </div>
  );
};
