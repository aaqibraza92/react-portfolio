import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import Select from "react-select";
import Svg from "../../../assets/svg/Svg";
import GButton from "../../../components/Layout/GButton";
import SalesOverview from "./SalesOverview";

const ReportsTab = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 bgCream salon_pc_container">
          <SalonAuthHeader />
          <div className="card-body ">
            <Row className="align-items-center mb15">
              <Col lg={2}>
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  options={Acquisition}
                  value={acquisition}
                  onChange={(e) => setacquisition(e)}
                />
              </Col>
              <Col lg={10} className="d-flex justify-content-end">
                <GButton
                  backgroundColor="#fff"
                  border="1px solid #282A3A"
                  color="#282A3A"
                  hoverBg="#fff"
                  hoveColor="#282A3A"
                  hoverBorder="1px solid #282A3A"
                  mr="15px"
                >
                  <span className="mr10">{Svg.print}</span>
                  {t("Print")}
                </GButton>
                <GButton
                  backgroundColor="#fff"
                  border="1px solid #282A3A"
                  color="#282A3A"
                  hoverBg="#fff"
                  hoveColor="#282A3A"
                  hoverBorder="1px solid #282A3A"
                >
                  <span className="mr10">{Svg.downloadreport}</span>
                  {t("Onlydownload")}
                </GButton>
              </Col>
            </Row>

            <SalesOverview />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ReportsTab;
