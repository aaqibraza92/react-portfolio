import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import GSpacing from "../../../components/Layout/GSpacing";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import { useTranslation } from "react-i18next";
import SalonDataTable from "../SalonDataTable/SalonDataTable";
import Select from "react-select";
import Svg from "../../../assets/svg/Svg";
import GButton from "../../../components/Layout/GButton";
import GLink from "../../../components/Layout/GLink";

const SalesByEmployee = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Data table columns
  const columns = [
    {
      label: t("Onlyemployee"),
      field: "employee",
    },
    {
      label: t("Totalservices"),
      field: "totalServices",
    },
    {
      label: t("Total"),
      field: "total",
    },
  ];

  // Dummy Row
  let rows = [
    {
      employee: (
        <GLink to="#" textDecoration="underline" text={t("Services")}></GLink>
      ),
      totalServices: "1",
      total: "1.696,22 ₺",
    },
    {
      employee: (
        <GLink to="#" textDecoration="underline" text={t("Services")}></GLink>
      ),
      totalServices: "1",
      total: "1.696,22 ₺",
    },
    {
      employee: (
        <GLink to="#" textDecoration="underline" text={t("Services")}></GLink>
      ),
      totalServices: "1",
      total: "1.696,22 ₺",
    },
    {
      employee: t("Salesbychannel"),
      totalServices: "1",
      total: "1.696,22 ₺",
    },
  ];

  return (
    <div className="d-flex">
      <SalonSidebar />
      <Container fluid className="p-0 bgCream salon_pc_container">
        <SalonAuthHeader />
        <div className="card-body ">
          {/* <GLink text={t("Goback")} to="/salon/reports"></GLink> */}
          <GSpacing>
            <Link to="#" className="fs15 colorBlack">
              <span className="mr10">{Svg.leftblackarrow}</span>
              {t("Goback")}
            </Link>
          </GSpacing>
          <SalonOverviewAction />
          <SalonDataTable
            key="SalesByEmployeeTable"
            columns={columns}
            rows={rows}
          />
        </div>
      </Container>
    </div>
  );
};

export default SalesByEmployee;

// Heading and Select Option Code here
const SalonOverviewAction = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [sales, setsales] = useState({
    value: "",
    label: t("Salesbyemployee"),
  });

  const [date, setdate] = useState({
    value: "",
    label: "14 March 2022 - 28 March 2022",
  });

  const Salesoverview = [
    { value: "client", label: t("Salesoverview") },
    { value: "retention", label: t("Servicesales") },
    { value: "retention", label: t("Productsales") },
    { value: "retention", label: t("Salesbyemployee") },
    { value: "retention", label: t("Salesbychannel") },
    { value: "retention", label: t("Dailysales") },
    { value: "retention", label: t("Monthlysales") },
  ];

  return (
    <>
      <Row className="align-items-center mb15">
        <Col lg={2}>
          <div className="select_border_edit report_select_bold">
            <Select
              className="themeSelect"
              classNamePrefix="themeSelect"
              options={Salesoverview}
              value={sales}
              onChange={(e) => setsales(e)}
            />
          </div>
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

      <Row className="align-items-center mb15">
        <Col lg={7} className="d-flex">
          <div className="mr10">
            <Select
              className="themeSelect"
              classNamePrefix="themeSelect"
              value={date}
              onChange={(e) => setdate(e)}
            />
          </div>
        </Col>
        <Col lg={5} className="d-flex justify-content-end">
          <h3 className="mb0 colorGrey fs12">
            Generated Monday, March 21, 2022 3:38 PM
          </h3>
        </Col>
      </Row>
      <h3 className="fs14 brownColor bgLightRed pt10 pb10 pl15 radius4 mb15">
        <span className="mr10">{Svg.brownibtn}</span>
        {t("Alwaysmakesure")}
      </h3>
    </>
  );
};
