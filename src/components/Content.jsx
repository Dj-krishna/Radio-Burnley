import React from "react";
import Banner from "./Banner";
import WeatherNews from "./WeatherNews";
import ListenOptions from "./ListenOptions";
import Footer from "./Footer";

const Content = () => {
  return (
    <section>
      <Banner />
      <WeatherNews />
      <ListenOptions />
      <Footer />
    </section>
  );
};

export default Content;