import React from "react";
import { Container } from "reactstrap";
import SalonAuthHeader from "../../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../../SalonSidebar/SalonSidebar";
import SalonAmenities from "../SalonAmenities";

const VenueAmenities = () => {
  return (
    <div className="d-flex">
      <SalonSidebar />
      <Container fluid className="p-0 salon_pc_container">
        <SalonAuthHeader />
        <div className="noContainer">
          <SalonAmenities venue={true} />
        </div>
      </Container>
    </div>
  );
};

export default VenueAmenities;
