import React from "react";
import { Container } from "reactstrap";
import SalonAuthHeader from "../../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../../SalonSidebar/SalonSidebar";
import FinanceTabMenu from "../../Finance/FinanceTabMenu";
import SalonProfileNavigation from "../SalonProfileNavigation";
import { useTranslation } from "react-i18next";
import AboutCompany from "../AboutCompany";

const VenueAboutComp = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className="d-flex">
      <SalonSidebar />
      {/* <EmptyInvoices /> */}
      <Container fluid className="p-0 salon_pc_container">
        <SalonAuthHeader />
        <div className="noContainer">
          <AboutCompany venue={true} />
        </div>
      </Container>
    </div>
  );
};

export default VenueAboutComp;
