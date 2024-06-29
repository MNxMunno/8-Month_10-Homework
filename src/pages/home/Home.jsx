import React from "react";
import Products from "../../components/products/Products";
import Hero from "../../components/hero/Hero";
import Watch from "../../components/watch/Watch";
import Contact from "../../components/contact/Contact";
import About from "../about/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Watch />
      <Products />
      <About />
      <Contact />
    </>
  );
};

export default Home;
