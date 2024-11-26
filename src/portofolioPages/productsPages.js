import React from "react";
import MainNav from "../components/main_and_side_Bar/mainNav";
import Footer from "../components/footer";
import CoverSection from "../components/coverSection";

const ProductsPages = () => {
  return (
    <>
      <section id="cover">
        <MainNav />
      </section>
      <CoverSection/>
      <Footer/>
    </>
  );
};

export default ProductsPages;
