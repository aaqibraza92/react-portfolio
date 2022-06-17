import React from "react";
import Categories from "./Categories";
import Treatments from "./Treatments";
import HomeBanner from "./HomeBanner";
import BookAppointment from "./BookAppointment";
import HomeSectionfive from "./HomeSectionfive";
import HomeSectionsix from "./HomeSectionsix";
import Brighter from "./Brighter";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Categories />
      <Treatments />
      <BookAppointment />
      <HomeSectionfive />
      <HomeSectionsix />
      <Brighter />
    </div>
  );
};

export default Home;
