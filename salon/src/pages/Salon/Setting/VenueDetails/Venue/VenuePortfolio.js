import React from "react";
import { Container } from "reactstrap";
import SalonAuthHeader from "../../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../../SalonSidebar/SalonSidebar";
import PortfolioImages from "../PortfolioImages";

const VenuePortfolio = () => {
  return (
    <div className="d-flex">
      <SalonSidebar />
      <Container fluid className="p-0 salon_pc_container">
        <SalonAuthHeader />
        <div className="noContainer">
          <PortfolioImages venue={true} />
        </div>
      </Container>
    </div>
  );
};

export default VenuePortfolio;
