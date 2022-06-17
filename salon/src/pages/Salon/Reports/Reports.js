import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../assets/Img/Img";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import GLinkReports from "../../../components/GLinkReports";
import GImage from "../../../components/Layout/GImage/GImage";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import "./Reports.css"
import ReportsAppointmentRequested from "./ReportsModal/ReportsAppointmentRequested";
import ReportsCancelled from "./ReportsModal/ReportsCancelled";
import ReportsCompleted from "./ReportsModal/ReportsCompleted";
import ReportsViewCheckout from "./ReportsModal/ReportsViewCheckout";

const Reports = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 position-relative salon_pc_container">
          <SalonAuthHeader />
          <div className="card-body max_h">
            <h1 className="fs24 lb mb20">{t("Reports")}</h1>
            <Row>
              <Col xl={6} lg={6} md={6}>
                <div className="border radius4  pt25 pb15 pr25 pl25 position-relative mb20">
                  <Row className="align-items-center">
                    <Col md={12}>
                      <div className="d-flex">
                        <div className="icon_image width8 mr15">
                          <GImage src={Img.reportsbooking} onClick={() =>
                              AlertModal02.show(<ReportsCompleted />, "", () => {}, "lg")
                            } />
                        </div>

                        {/* <div className="icon_image width8 mr15">
                          <GImage src={Img.reportsbooking} onClick={() =>
                              AlertModal02.show(<ReportsCancelled />, "", () => {}, "lg")
                            } />
                        </div>

                        <div className="icon_image width8 mr15">
                          <GImage src={Img.reportsbooking} onClick={() =>
                              AlertModal02.show(<ReportsViewCheckout />, "", () => {}, "lg")
                            } />
                        </div>

                         <div className="icon_image width8 mr15">
                          <GImage src={Img.reportsbooking} onClick={() =>
                              AlertModal02.show(<ReportsAppointmentRequested />, "", () => {}, "lg")
                            } />
                        </div> */}

                        <div className="width90">
                          <h6 className="fs18 lm">
                            {t("Bookings")}
                          </h6>
                          <p>{t("BookingSubText")}</p>
                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/booking-list"
                              text={t("Viewbookingreport")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="border radius4  pt25 pb15 pr25 pl25 position-relative mb20">
                  <Row className="align-items-center">
                    <Col md={12}>
                      <div className="d-flex">
                        <div className="icon_image width8 mr15">
                          <GImage src={Img.reportscontact} />
                        </div>
                        <div className="width90">
                          <h6 className="fs18 lm">
                            {t("Clients")}
                          </h6>
                          <p>{t("ClientsSubText")}</p>
                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/client-acquisition"
                              text={t("Clientacquisition")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>
                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/client-retention"
                              text={t("Clientretention")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col xl={6} lg={6} md={6}>
                <div className="border radius4  pt25 pb15 pr25 pl25 position-relative mb20">
                  <Row className="align-items-center">
                    <Col md={12}>
                      <div className="d-flex">
                        <div className="icon_image width8 mr15">
                          <GImage src={Img.reportssalon} />
                        </div>
                        <div className="width90">
                          <h6 className="fs18 lm">
                            {t("Sales")}
                          </h6>
                          <p>{t("SalesSubText")}</p>
                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/sales-overview"
                              text={t("SalesOverview")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>

                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/service-sales"
                              text={t("ServiceSale")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>

                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/sales-employee"
                              text={t("SalesbyEmployee")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>

                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/sales-channel"
                              text={t("SalesbyChannel")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>

                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/daily-channels"
                              text={t("DailySales")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>

                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/monthly-sales"
                              text={t("MonthlySales1")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>

                          <p className="w-100 position-relative">
                            <GLinkReports
                              to="/salon/reports/product-sales"
                              text={t("Productsales")}
                              color="#282A3A"
                              border="1px solid #E2E3E9"
                              width="100%"
                              paddingTop="6px"
                              paddingBottom="6px"
                              paddingLeft="10px"
                              paddingRight="10px"
                            />
                            <span className="reports_a"><GImage src={Img.resportarrow} /></span>
                          </p>


                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>


           

            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Reports;
