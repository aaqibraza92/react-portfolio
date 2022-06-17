import React from "react";
import { useTranslation } from "react-i18next";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../assets/Img/Img";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GTextarea from "../../../components/Layout/GTextarea";
import SalonDataTable from "../SalonDataTable/SalonDataTable";
import SalonDataTablePagination from "../SalonDataTable/SalonDataTablePagination";
import "./ClientList.css";

const ClientDetails = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Data table columns
  const columns = [
    {
      label: <span>{t("Onlydate")}</span>,
      field: "date",
    },
    {
      label: t("Service"),
      field: "service",
    },
    {
      label: t("Specialist"),
      field: "specialist",
    },
    {
      label: t("Source"),
      field: "source",
    },
    {
      label: t("Paid"),
      field: "paid",
    },
    {
      label: t("Status"),
      field: "status",
    },
    {
      label: t("Invoice"),
      field: "invoice",
    },
  ];

  // Dummy Row
  let rows = [
    {
      date: (
        <div>
          09-07-2022 <br /> 10:30
        </div>
      ),
      service: "Manicure (30 min)",
      specialist: "Rachel Foster",
      source: "Bakim",
      paid: "£ 5",
      status: (
        <div>
          <GButton
            backgroundColor="#37A3D2"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
            mr="10px"
          >
            {t("Completed")}
          </GButton>
          <GButton
            backgroundColor="#37A3D2"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
          >
            {t("Paid")}
          </GButton>
        </div>
      ),
      invoice: (
        <div>
          <span className="mr5">{Svg.pdfdownload}</span>
          {t("Pdf")}
        </div>
      ),
    },

    {
      date: (
        <div>
          09-07-2022 <br /> 10:30
        </div>
      ),
      service: "Manicure (30 min)",
      specialist: "Rachel Foster",
      source: "Bakim",
      paid: "£ 5",
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
            backgroundColor="#D50303"
            color="#fff"
            borderRadius="20px"
            transform="uppercase"
          >
            {t("Unpaid")}
          </GButton>
        </div>
      ),
      invoice: (
        <div>
          <span className="mr5">{Svg.pdfdownload}</span>
          {t("Pdf")}
        </div>
      ),
    },
    {
      date: (
        <div>
          09-07-2022 <br /> 10:30
        </div>
      ),
      service: "Manicure (30 min)",
      specialist: "Rachel Foster",
      source: "Bakim",
      paid: "£ 5",
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
      invoice: (
        <div>
          <span className="mr5">{Svg.pdfdownload}</span>
          {t("Pdf")}
        </div>
      ),
    },
  ];

  return (
    <>
      <GAlign
        align="between"
        alignV="center"
        className="pt15 pb15 pl15 pr15 bBottom mb30"
      >
        <h3 className="fs14 lb mb0 text-uppercase">{t("Clientdetails")}</h3>
        <UncontrolledDropdown className="noBgonDropDown">
          <DropdownToggle>
            <span className="fm12 colorBlack">{Svg.ellipsiswhitebg}</span>
          </DropdownToggle>
          <DropdownMenu className="radius4 shadow noBorder">
            <DropdownItem>
              <ul className="noBg noUl mb0 pt15 pb15">
                <li className="fs15 lm mb10"> {t("Editcard")}</li>
                <li className="fs15 lm"> {t("Delete")}</li>
              </ul>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </GAlign>
      <section className="pl30 pr30">
        <GAlign alignV="center" className="mb20">
          <div>
            <img src={Img.homebanner} alt="" className="w64 radius100 mr15" />
          </div>
          <h3 className="fs18 lm mb0">Emma Watson</h3>
        </GAlign>
        <Row className="mb50">
          <Col md={6}>
            <GAlign
              align="between"
              alignV="center"
              className="pb10 pt10 bTop bBottom"
            >
              <h3 className="fs14 mb0 colorGrey">{t("Source")}</h3>
              <GButton
                backgroundColor="#37A3D2"
                borderRadius="20px"
                pl="12px"
                pr="12px"
                pt="5px"
                pb="5px"
              >
                Logo or name
              </GButton>
            </GAlign>
            <GAlign
              align="between"
              alignV="center"
              className="pb15 pt15 bBottom"
            >
              <h3 className="fs14 mb0 colorGrey">{t("Phone")}</h3>
              <h3 className="fs14 mb0">+44 (876) 543-2100</h3>
            </GAlign>
            <GAlign
              align="between"
              alignV="center"
              className="pb15 pt15 mb15 bBottom"
            >
              <h3 className="fs14 mb0 colorGrey">{t("Email")}</h3>
              <h3 className="fs14 mb0">emma@email.com</h3>
            </GAlign>
            <div className="mb8">
              <span className="mr10">{Svg.redcross}</span>
              <span>{t("Promotionalemails")}</span>
            </div>
            <div>
              <span className="mr10">{Svg.redcardwithibtn}</span>
              <span>{t("Prepaymentrequired")}</span>
            </div>
          </Col>
          <Col md={6}>
            <GAlign
              align="between"
              alignV="center"
              className="pb15 pt15 bTop bBottom"
            >
              <h3 className="fs14 mb0 colorGrey">{t("Gender")}</h3>
              <h3 className="fs14 mb0">Female</h3>
            </GAlign>
            <GAlign
              align="between"
              alignV="center"
              className="pl20 pr20 pb15 pt15 bBottom mb15"
            >
              <h3 className="fs14 mb0 colorGrey">{t("Dateofbirth")}</h3>
              <h3 className="fs14 mb0">15 April 1990</h3>
            </GAlign>
            <GTextarea></GTextarea>
          </Col>
        </Row>
        <div className="mb20">
          <span>{t("History")}</span>
          <GButton
            pl="10px"
            pr="10px"
            pb="3px"
            pt="3px"
            backgroundColor="#A7A9B1"
            ml="20px"
          >
            {t("5")}
          </GButton>
        </div>
      </section>
      <SalonDataTable key="ClientDetailsTable" columns={columns} rows={rows} />
    </>
  );
};

export default ClientDetails;
