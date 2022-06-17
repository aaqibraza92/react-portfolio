import React from "react";
import { Container } from "reactstrap";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";
import FinanceTabMenu from "./FinanceTabMenu";

const BankDetails = () => {
  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 position-relative salon_pc_container">
          <SalonAuthHeader />
          <FinanceTabMenu />
          <div className="card-body height_70_vh">
            <h1 className="fs24 lb mb20">Bank Details</h1>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BankDetails;
