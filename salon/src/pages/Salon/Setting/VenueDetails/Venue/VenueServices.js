import React from "react";
import { Container } from "reactstrap";
import SalonAuthHeader from "../../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../../SalonSidebar/SalonSidebar";
import ServiceSetting from "../ServiceSetting";

const VenueServices = (props) => {
  return (
    <div className="d-flex">
      <SalonSidebar />
      <Container fluid className="p-0 salon_pc_container">
        <SalonAuthHeader />
        <div className="noContainer">
          <ServiceSetting venue={true} />
        </div>
      </Container>
    </div>
  );
};

export default VenueServices;
