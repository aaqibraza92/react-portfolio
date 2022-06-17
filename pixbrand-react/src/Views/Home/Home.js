import React from "react";
import BlogList from "./BlogList";
import Faq from "./Faq";
import "./Home.css";
import HomeBanner from "./HomeBanner";
import Services from "./Services";
import Services2 from "./Services2";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio/Portfolio";
import Services3 from "./Services3";
import Skills from "./Skills";
import Marque from "../Marque/Marque";
import { Helmet } from "react-helmet";
import Slide from "react-reveal/Slide";

const Home = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Pixbrand</title>
        <meta name="home" content="Pixbrand Home"></meta>
      </Helmet>
      <div className="overflow-hidden">
        <HomeBanner />
        <Slide bottom>
          <Services />
        </Slide>
        <Services2 />
        <Portfolio />
        <Marque />
        <Services3 />
        <Skills />
        <Testimonials />
        <BlogList />
        <Faq />
      </div>
    </>
  );
};

export default Home;
