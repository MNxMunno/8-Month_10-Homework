import React from "react";
import Home from "./pages/home/Home";
import "./scss/main.scss";
import "./main.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
