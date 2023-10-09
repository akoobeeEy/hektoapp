import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
