import React, { useState } from "react";
import {
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Container,
} from "reactstrap";
import BreadCrum from "../BreadCrum/BreadCrum";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import Svg from "../../../assets/svg/Svg";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import GIconInput from "../../../components/Layout/GIconInput";

const Invoices = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Data table columns
  const columns = [
    { label: t("DateofInvoice"), field: "dateofInvoice" },
    { label: t("InvoiceID"), field: "InvoiceID" },
    { label: t("Salonname"), field: "salonName" },
    { label: t("Salonaddress"), field: "salonAddress" },
    { label: t("Salonid"), field: "salonID" },
    { label: t("Payoff"), field: "payOff" },
    { label: t("Payin "), field: "payIn" },
    { label: t("Action"), field: "action" },
  ];

  // Dummy Row
  let rows = [
    {
      dateofInvoice: "15-04-2022",
      InvoiceID: "INV-3145",
      salonName: "Indori Hair Salon & Parlor",
      salonAddress: "140 Palmerston Rd. Walthamsto...",
      salonID: "#SID97358",
      payOff: "₺37.08",
      payIn: "₺37.08",
      action: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="btn btn-danger">
              <span>{Svg.horizontalellipsis}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="mb10">
                    <span className="mr10">{Svg.updateinvoice}</span>
                    {t("Updateinvoice")}
                  </li>
                  <li className="mb10">
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.blackeye}</span>
                      {t("View")}
                    </span>
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.downloadpdf}</span>
                      {t("Downloadpdf")}
                    </span>
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
    {
      dateofInvoice: "15-04-2022",
      InvoiceID: "INV-3145",
      salonName: "Indori Hair Salon & Parlor",
      salonAddress: "140 Palmerston Rd. Walthamsto...",
      salonID: "#SID97358",
      payOff: "₺37.08",
      payIn: "₺37.08",
      action: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="btn btn-danger">
              <span>{Svg.horizontalellipsis}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="mb10">
                    <span className="mr10">{Svg.updateinvoice}</span>
                    {t("Updateinvoice")}
                  </li>
                  <li className="mb10">
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.blackeye}</span>
                      {t("View")}
                    </span>
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.downloadpdf}</span>
                      {t("Downloadpdf")}
                    </span>
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
    {
      dateofInvoice: "15-04-2022",
      InvoiceID: "INV-3145",
      salonName: "Indori Hair Salon & Parlor",
      salonAddress: "140 Palmerston Rd. Walthamsto...",
      salonID: "#SID97358",
      payOff: "₺37.08",
      payIn: "₺37.08",
      action: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="btn btn-danger">
              <span>{Svg.horizontalellipsis}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="mb10">
                    <span className="mr10">{Svg.updateinvoice}</span>
                    {t("Updateinvoice")}
                  </li>
                  <li className="mb10">
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.blackeye}</span>
                      {t("View")}
                    </span>
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.downloadpdf}</span>
                      {t("Downloadpdf")}
                    </span>
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
    {
      dateofInvoice: "15-04-2022",
      InvoiceID: "INV-3145",
      salonName: "Indori Hair Salon & Parlor",
      salonAddress: "140 Palmerston Rd. Walthamsto...",
      salonID: "#SID97358",
      payOff: "₺37.08",
      payIn: "₺37.08",
      action: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="btn btn-danger">
              <span>{Svg.horizontalellipsis}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="mb10">
                    <span className="mr10">{Svg.updateinvoice}</span>
                    {t("Updateinvoice")}
                  </li>
                  <li className="mb10">
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.blackeye}</span>
                      {t("View")}
                    </span>
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.downloadpdf}</span>
                      {t("Downloadpdf")}
                    </span>
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="row">
        <div className="card_tr">
          <Row className="align-items-center">
            <Col md={8}>
              <BreadCrum />
            </Col>
          </Row>
        </div>

        <Col md={12}>
          <div className="card">
            <InvoicesActions />
          </div>
          <div className="card">
            <div className="invoice_table"><AdminDataTable key="InvoicesTable" columns={columns} rows={rows} /></div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Invoices;

// Invoices Actions Part which is below breadcrum part
const InvoicesActions = () => {
  const [searchFilter, setsearchFilter] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={2} md={3} xl={2} xxl={1} className="mobMb15">
              <span className="fs14 colorLightGrey">{t("Alladdons")}</span>
            </Col>
            <Col lg={3} md={4} xl={3} xxl={3} className="mobMb15 ">
              <GIconInput
                value={searchFilter}
                name="searchfilter"
                placeholder="Search here..."
                iconRight={Svg.search}
                paddingBottom="0px"
                onChange={(e) => setsearchFilter(e.target.value)}
              />
            </Col>
            <Col lg={2} md={2} xl={2} xxl={2}>
              <h3 className="fs14 colorGrey text-underline mb0 mobMb10">
                {t("Resetall")}
              </h3>
            </Col>

            <Col
              xxl={6}
              xl={5}
              lg={5}
              md={12}
              className="text-end d-flex justify-content-end button_mr align-items-center mobile_b mobJustifyContentStart"
            >
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #000"
                hoverBg="#fff"
                hoveColor="#000"
                hoverBorder="1px solid #000"
              >
                {t("Sortbymonth")}
                <span className="ml5">{Svg.downblackarrowsmall}</span>
              </GButton>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
