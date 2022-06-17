import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import Select from "react-select";
import Svg from "../../../assets/svg/Svg";
import GSpacing from "../../../components/Layout/GSpacing";
import GButton from "../../../components/Layout/GButton";
import SalonDataTable from "../SalonDataTable/SalonDataTable";

const ReportsClientRetention = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Data table columns
  const columns = [
    {
      label: t("Onlymonth"),
      field: "month",
    },
    {
      label: t("Totalclients"),
      field: "totalClients",
    },
    {
      label: t("Returningclients"),
      field: "returningClients",
    },
  ];

  // Dummy Row
  let rows = [
    {
      month: "March 2022",
      totalClients: "21",
      returningClients: "21%",
    },
    {
      month: "March 2022",
      totalClients: "21",
      returningClients: "21%",
    },
    {
      month: "March 2022",
      totalClients: "21",
      returningClients: "21%",
    },
    {
      month: "March 2022",
      totalClients: "21",
      returningClients: "21%",
    },
    {
      month: "March 2022",
      totalClients: "21",
      returningClients: "21%",
    },
    {
      month: "March 2022",
      totalClients: "21",
      returningClients: "21%",
    },
    {
      month: "March 2022",
      totalClients: "21",
      returningClients: "21%",
    },
    {
      month: "March 2022",
      totalClients: "21",
      returningClients: "21%",
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
          <ReportClientAction />
          <SalonDataTable
            key="RetentionTable"
            columns={columns}
            rows={rows}
          />
        </div>
      </Container>
    </div>
  );
};

export default ReportsClientRetention;

// Heading and Select Option Code here
const ReportClientAction = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [acquisition, setacquisition] = useState({
    value: "",
    label: t("Clientacquisition"),
  });

  const [employee, setemployee] = useState({
    value: "",
    label: t("Allemployees"),
  });

  const [date, setdate] = useState({
    value: "",
    label: "14 March 2022 - 28 March 2022",
  });

  const [channels, setchannels] = useState({
    value: "",
    label: t("Allchannels"),
  });

  const EmployeeList = [
    { value: "lastmonth", label: t("Allemployees") },
    { value: "cancelled", label: "Todd Coleman" },
    { value: "confirmed", label: "Martin Wright" },
    { value: "confirmed", label: "Rachel Foster" },
    { value: "paid", label: "Ann Bryant" },
    { value: "unpaid", label: "Jonathan Roberts" },
  ];

  const Acquisition = [
    { value: "client", label: t("Clientacquisition") },
    { value: "retention", label: t("Clientretention") },
  ];

  const Allchannels = [
    { value: "allchannels", label: t("Allchannels") },
    { value: "connect", label: t("Connect") },
    { value: "widget", label: t("Widget") },
    { value: "bakim", label: t("Bakimrandevu") },
  ];

  return (
    <>
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
          <div className="mr10">
            <Select
              className="themeSelect"
              classNamePrefix="themeSelect"
              options={Allchannels}
              value={channels}
              onChange={(e) => setchannels(e)}
            />
          </div>
          <Select
            className="themeSelect"
            classNamePrefix="themeSelect"
            options={EmployeeList}
            value={employee}
            onChange={(e) => setemployee(e)}
          />
        </Col>
        <Col lg={5} className="d-flex justify-content-end">
          <h3 className="mb0 colorGrey fs12">
            Generated Monday, March 21, 2022 3:38 PM
          </h3>
        </Col>
      </Row>
      <h3 className="fs14 brownColor bgLightRed pt10 pb10 pl15 radius4 mb15">
        <span className="mr10">{Svg.brownibtn}</span>
        {t("Youmustenter")}
      </h3>
      <h3 className="fs14 brownColor bgLightRed pt10 pb10 pl15 radius4 mb15">
        <span className="mr10">{Svg.brownibtn}</span>
        {t("Thereturningrate")}
      </h3>
    </>
  );
};
