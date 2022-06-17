import React from "react";
import HeaderNavigation from "../../../components/Common/Header/Customer/HeaderNavigation";
import OurWork from "./OurWork";
import SalonDescription from "./SalonDescription";
import SalonDetailsSlider from "./SalonDetailsSlider";

const SalonDetails = () => {
  return (
    <>
      <HeaderNavigation />
      <SalonDetailsSlider />
      <SalonDescription />
      <OurWork />
    </>
  );
};

export default SalonDetails;
