import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img.js";
import GButton from "../../../../components/Layout/GButton.js";
import ReportsBookingBox from "./ReportsBookingBox.js";
import "./ReportsBox.css";
import Select from "react-select";
import Svg from "../../../../assets/svg/Svg.js";

// const options = [
//   { value: "Verified", label: "Verified" },
//   { value: "Scheduled photoshoot", label: "Scheduled photoshoot" },
//   { value: "Registered", label: "Registered" },
//   { value: "Had first call", label: "Had first call" },
//   { value: "Final review & approved", label: "Final review & approved" },
// ];

const ReportsViewCheckout = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <style jsx="true">{`
        .bg_light_report {
          background-color: #5b5d6b;
        }
        .border_view {
          border: 1px solid #5cb84b;
        }
        .border_button {
          position: absolute;
          top: 0px;
          right: 0px;
        }
        .report_b button {
          margin-right: 20px;
        }
      `}</style>
      <div className="card-body">
        <ReportsBookingBox
          firsttext="Booked on 22 Mar via Bakim Randevu (35% fee). Order ref#"
          id="T807610015"
          firstname="FIRST VISIT"
          TextColor="#5CB84B"
          title="Emma Watson"
          backgroundColor="#EEF8EC"
          border="1px solid #EEF8EC"
          phone={Img.vreportphone}
          link="+44 876 543 2100"
          phonenumber="+44 876 543 2100"
          email={Img.vreportmail}
          emailid="emma@email.com"
          booktext={Img.vreporttext}
          alwaystext="Always late"
          Buttontext={Img.reportsuser}
          Buttontext1={Img.reportsedit}
          color="#000"
        />
      </div>
      <div className="heightVh2 bgLightBlue"></div>

      <div className="card-body">
        <div className="border_view position-relative radius pl15 pr15 pt15 pb15 mb15">
          <div className="border_button">
            <GButton
              backgroundColor="#5CB84B"
              transform="uppercase"
              hoverBg="#5CB84B"
            >
              {t("Confirmed")}
            </GButton>
          </div>
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <label className="fs12">{t("Service")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={12} className="mb-3">
              <label className="fs12">{t("Subservice")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={2} className="mb-3">
              <label className="fs12">{t("Dater")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={2} className="mb-3">
              <label className="fs12">{t("Time")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <label className="fs12">{t("Duration")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <label className="fs12">{t("Teammembers")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={12} className="mb-3">
              <label className="fs15 opacity-75 lm">{t("timeend")}</label>
            </Col>

            <Col md={10} className="mt10 d-flex report_b">
              <GButton
                backgroundColor="transparent"
                color="#000"
                hoveColor="#000"
                pl="0px"
                pr="0px"
                hoverBg="transparent"
              >
                <u>{t("Addnote")}</u>
              </GButton>
              <GButton
                backgroundColor="transparent"
                color="#000"
                hoveColor="#000"
                pl="0px"
                pr="0px"
                hoverBg="transparent"
              >
                <u>{t("Reschedule")}</u>
              </GButton>
              <GButton
                backgroundColor="transparent"
                color="#000"
                hoveColor="#000"
                pl="0px"
                pr="0px"
                hoverBg="transparent"
              >
                <u>{t("Cancelappointment")}</u>
              </GButton>
            </Col>
            <Col md={2} className="mt10 text-end">
              <label className="fs15 text-danger  lm">Unpaid: £ 50</label>
            </Col>
          </Row>
        </div>

        <div className="border_view1 position-relative radius   pt15 pb15">
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <label className="fs12">{t("Service")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={12} className="mb-3">
              <label className="fs12">{t("Subservice")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={2} className="mb-3">
              <label className="fs12">{t("Dater")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={2} className="mb-3">
              <label className="fs12">{t("Time")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <label className="fs12">{t("Duration")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <label className="fs12">{t("Teammembers")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={12} className="mb-3">
              <label className="fs15 opacity-75 lm">{t("timeend")}</label>
            </Col>

            <Col md={10} className="mt10 d-flex report_b">
              <GButton
                backgroundColor="transparent"
                color="#000"
                hoveColor="#000"
                pl="0px"
                pr="0px"
                hoverBg="transparent"
              >
                <u>{t("Addnote")}</u>
              </GButton>
              <GButton
                backgroundColor="transparent"
                color="#000"
                hoveColor="#000"
                pl="0px"
                pr="0px"
                hoverBg="transparent"
              >
                <u>{t("Delete")}</u>
              </GButton>
             
            </Col>
            <Col md={2} className="mt10 text-end">
              <label className="fs15 text-danger  lm">Unpaid: £ 50</label>
            </Col>
          </Row>
        </div>
      </div>

      <div className="bTop pt20 pr35 mt10 pb20 pl35">
             <div className="d-flex justify-content-between">
               
              <GButton
                mr="15px"
                backgroundColor="#000"
                color="#fff"
                border="1px solid #707070"
                hoverBg="#000"
                hoveColor="#fff"
                hoverBorder="1px solid #000"
                transform="capitalize"
              >
                <span className="mr5">{Svg.whiteplus}</span> {t("AddNextService")}
              </GButton>
              <GButton backgroundColor="#5CB84B" transform="capitalize">{t("Save")}</GButton>
             </div>
            
          </div>
    </>
  );
};

export default ReportsViewCheckout;
