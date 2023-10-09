import { Fragment } from "react";
import { Hero } from "../../components/hero/Hero";
import { Featured } from "../../components/featured";
import LatestProducts from "../../components/latestProducts/LatestProducts";

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Featured />
      <LatestProducts/>
    </Fragment>
  );
};
