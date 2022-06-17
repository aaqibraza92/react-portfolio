import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";
import BookingSettingsTab from "./BookingSettingsTab";
import Select from "react-select";
import GCheckbox from "../../../../components/Layout/GCheckbox";
import GHorizontalInput from "../../../../components/Layout/GHorizontalInput";
import GInput from "../../../../components/Layout/GInput";
import CmnRadioBorder from "../../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GButton from "../../../../components/Layout/GButton";

const BookinSettings = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [columns, setcolumns] = useState({ value: "", label: "15 min" });

  // <div className="d-flex">
  // <SalonSidebar />
  // {/* <EmptyInvoices /> */}
  // <Container fluid className="p-0  salon_pc_container">
  //   <SalonAuthHeader />
  //   <div className="sticy_46"><FinanceTabMenu /></div>
  //   <div className="card-body invoice-table">
  //     <h1 className="fs24 lb mb20">{t("Invoicing")}</h1>
  //     <SalonDataTable
  //       key="InvoiceDataTable"
  //       columns={columns}
  //       rows={rows}
  //     />
  //   </div>
  // </Container>

  return (
    <>
      <style jsx>{`
        .top_span {
          position: absolute;
          top: 39px;
          left: 54px;
        }
      `}</style>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 position-relative salon_pc_container">
          <SalonAuthHeader />
          <div className="sticy_46"><BookingSettingsTab /></div>
          <div className="card-body height_70_vh">
            <h1 className="fs24 lb mb20">{t("Settings")}</h1>
            <p className="fs15 colorGrey">{t("Editthesettings")}</p>

            <Row>
              <Col xl={8} lg={12} md={12}>
                <div className="booking_setting border-bottom pb15 pt10">
                  <Row className="align-items-center mb-3">
                    <Col md={6} className="text-end">
                     {t("Calendar_time_scale")}
                    </Col>
                    <Col md={3}>
                      <div className="select_border select_single">
                        <Select
                          label="Account type *"
                          className="themeSelect"
                          classNamePrefix="themeSelect"
                          // value={columns}
                          // onChange={(e) => setcolumns(e)}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row className="align-items-center mb-3">
                    <Col md={6} className="text-end">
                    {t("Online_booking_Interval")}
                    </Col>
                    <Col md={6}>
                      <div className="select_border select_single">
                        <Select
                          label="Account type *"
                          className="themeSelect"
                          classNamePrefix="themeSelect"
                          // value={columns}
                          // onChange={(e) => setcolumns(e)}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row className="align-items-center mb-3">
                    <Col md={6} className="text-end">
                    {t("Cancellation_policy")}
                    </Col>
                    <Col md={6}>
                      <div className="select_border select_single">
                        <Select
                          label="Account type *"
                          className="themeSelect"
                          classNamePrefix="themeSelect"
                          // value={columns}
                          // onChange={(e) => setcolumns(e)}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row className="align-items-center mb-3">
                    <Col md={6} className="text-end">
                       {t("Allow_multi_employee_selection")}
                    </Col>
                    <Col md={6}>
                      <GCheckbox name="agreeTerms" id="agreeTerms" />
                    </Col>
                  </Row>

                  <Row className="align-items-center mb-3">
                    <Col md={6} className="text-end">
                      {t("Advance_booking")}
                    </Col>
                    <Col md={2}>
                      <GInput />
                    </Col>

                    <Col md={4}>{t("days_in_advance")}</Col>
                  </Row>
                </div>

                <div className="booking_setting border-bottom pb15 pt15">
                  <Row className="align-items-center mb-3">
                    <Col md={12}>
                      <h6 className="lm mb20">{t("Off_peak_discount_settings")}</h6>
                    </Col>
                    <Col md={6} className="text-end">
                      {t("Afternoon_starts_At")}
                    </Col>
                    <Col md={6}>
                      <div className="select_border select_single">
                        <Select
                          label="Account type *"
                          className="themeSelect"
                          classNamePrefix="themeSelect"
                          // value={columns}
                          // onChange={(e) => setcolumns(e)}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row className="align-items-center mb-3">
                    <Col md={6} className="text-end">
                      {t("Evening_Starts_At")}
                    </Col>
                    <Col md={6}>
                      <div className="select_border select_single">
                        <Select
                          label="Account type *"
                          className="themeSelect"
                          classNamePrefix="themeSelect"
                          // value={columns}
                          // onChange={(e) => setcolumns(e)}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="booking_setting  pb15 pt15">
                  <Row className="align-items-center mb-3">
                    <Col md={12}>
                      <h6 className="lm mb20">{t("Booking_type")}</h6>
                    </Col>
                    <Col lg={5} md={6} className="position-relative">
                      <CmnRadioBorder
                        id="ert"
                        value="Instant_booking "
                        name="gender"
                        label="Instant booking "
                      />
                      <span className="fs12 top_span">
                         {t("You_will_receive_bookings_instently")}
                      </span>
                    </Col>
                    <Col lg={5} md={6} className="position-relative">
                      <CmnRadioBorder
                        id="ert1"
                        value="Instant_booking"
                        name="gender"
                        label="Confirm request booking "
                      />
                      <span className="fs12 top_span">
                       {t("You_will_receive_booking_request")}
                      </span>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div className="bTop pt15 pb15 w-100 position-absolute bottom_0 pr25 text-end">
          <GButton>{t("Save")}</GButton>
        </div>
        </Container>
      </div>
    </>
  );
};

export default BookinSettings;