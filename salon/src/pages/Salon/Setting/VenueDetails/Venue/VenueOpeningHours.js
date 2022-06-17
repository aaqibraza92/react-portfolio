import React from "react";
import {Container } from "reactstrap";

import SalonSidebar from "../../../SalonSidebar/SalonSidebar";
import SalonAuthHeader from "../../../../../components/Common/Header/Salon/SalonAuthHeader";
import OpeningHours from "../OpeningHours";

const VenueOpeningHours = () => {


  return (
    <>
    <div className="d-flex">
      <SalonSidebar />
      <Container fluid className="p-0 salon_pc_container">
        <SalonAuthHeader />
        <div className="noContainer">
        <OpeningHours venue={true}/>
        </div>
      </Container>
    </div>
    </>
  );
};

export default VenueOpeningHours;
