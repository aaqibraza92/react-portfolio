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

const ReportBookingList = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Data table columns
  const columns = [
    {
      label: t("Orderref"),
      field: "orderRef",
    },
    {
      label: t("Orderdate"),
      field: "orderDate",
    },
    {
      label: t("Appointmentdate"),
      field: "appointmentDate",
    },
    {
      label: t("Onlyemployee"),
      field: "employee",
    },
    {
      label: t("Customer"),
      field: "customer",
    },
    {
      label: t("Service"),
      field: "service",
    },
    {
      label: t("Value"),
      field: "value",
    },
    {
      label: t("Status"),
      field: "status",
    },
  ];

  // Dummy Row
  let rows = [
    {
      orderRef: "#806402981",
      orderDate: "21.03.2022 12:41",
      appointmentDate: "21.03.2022 13:45",
      employee: "Todd Coleman",
      customer: "Sara Charrad",
      service: "Damen - Waschen & Schneiden",
      value: "₺200",
      status: (
        <div>
          <GButton
            backgroundColor="#5CB84B"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
            mr="10px"
          >
            {t("Confirmed")}
          </GButton>
          <GButton
            backgroundColor="#D50303"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
          >
            {t("Unpaid")}
          </GButton>
        </div>
      ),
    },
    {
      orderRef: "#806402981",
      orderDate: "21.03.2022 12:41",
      appointmentDate: "21.03.2022 13:45",
      employee: "Todd Coleman",
      customer: "Sara Charrad",
      service: "Damen - Waschen & Schneiden",
      value: "₺200",
      status: (
        <div>
          <GButton
            backgroundColor="#D50303"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
            mr="10px"
          >
            {t("Cancelled")}
          </GButton>
          <GButton
            backgroundColor="#37A3D2"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
            mr="10px"
          >
            {t("Completed")}
          </GButton>
        </div>
      ),
    },
    {
      orderRef: "#806402981",
      orderDate: "21.03.2022 12:41",
      appointmentDate: "21.03.2022 13:45",
      employee: "Todd Coleman",
      customer: "Sara Charrad",
      service: "Damen - Waschen & Schneiden",
      value: "₺200",
      status: (
        <div>
          <GButton
            backgroundColor="#37A3D2"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
            mr="10px"
          >
            {t("Paid")}
          </GButton>
          <GButton
            backgroundColor="#522472"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
          >
            {t("Requested")}
          </GButton>
        </div>
      ),
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
            <Link to="/salon/reports" className="fs15 colorBlack">
              <span className="mr10">{Svg.leftblackarrow}</span>
              {t("Goback")}
            </Link>
          </GSpacing>
          <ReportsActions />

          <SalonDataTable
            key="ReportBookingListTable"
            columns={columns}
            rows={rows}
          />
        </div>
      </Container>
    </div>
  );
};

export default ReportBookingList;

// Heading and Select Option Code here
const ReportsActions = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [statusalltypes, setstatusalltypes] = useState({
    value: "",
    label: t("Statusalltypes"),
  });

  const [days, setdays] = useState({
    value: "",
    label: t("Lastdays"),
  });

  const Status = [
    { value: "lastmonth", label: t("Lastmonth") },
    { value: "cancelled", label: t("Cancelled") },
    { value: "confirmed", label: t("Confirmed") },
    { value: "confirmed", label: t("Confirmed") },
    { value: "paid", label: t("Paid") },
    { value: "unpaid", label: t("Unpaid") },
  ];
  const Days = [
    { value: "lastdays", label: t("Lastdays") },
    { value: "lastsixtydays", label: t("Lastsixtydays") },
    { value: "lastthreemonths", label: t("Lastthreemonths") },
    { value: "lastsixmonths", label: t("Lastsixmonths") },
    { value: "lasttwelevemonths", label: t("Lasttwelevemonths") },
    { value: "customrange", label: t("Customrange") },
  ];

  return (
    <>
      <Row className="align-items-center mb15">
        <Col lg={6}>
          <h2 className="fs24 lb mb0">{t("Bookinglist")}</h2>
        </Col>
        <Col lg={6} className="d-flex justify-content-end">
          <div className="select_border mr15">
            <Select
              className="themeSelect"
              classNamePrefix="themeSelect"
              options={Status}
              value={statusalltypes}
              onChange={(e) => setstatusalltypes(e)}
            />
          </div>
          <Select
            className="themeSelect"
            classNamePrefix="themeSelect"
            options={Days}
            value={days}
            onChange={(e) => setdays(e)}
          />
        </Col>
      </Row>
    </>
  );
};
