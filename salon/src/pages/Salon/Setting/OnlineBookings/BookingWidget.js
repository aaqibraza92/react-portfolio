import React from "react";
import { Col, Container, Row } from "reactstrap";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";
import BookingSettingsTab from "./BookingSettingsTab";
import { useTranslation } from "react-i18next";
import GButton from "../../../../components/Layout/GButton";
import Img from "../../../../assets/Img/Img";
import { t } from "i18next";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../../components/Layout/GAlign";
import "./BookingWidget.css";
import GLink from "../../../../components/Layout/GLink";


const BookingWidget = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="d-flex">
      <SalonSidebar />
      <Container fluid className="p-0 salon_pc_container">
        <SalonAuthHeader />
        <div className="sticy_46"><BookingSettingsTab /></div>
        <div className="card-body heightVh64">
          <h1 className="fs24 lb mb20">{t("Bookingwidget")}</h1>
          {/* Accept bookings from your website and other sites */}
          <Row className="bBottom pb20 mb20">
            <Col md={1}>
              <div>
                <img src={Img.widget} alt="" />
              </div>
            </Col>
            <Col md={9}>
              <section>
                <h2 className="fs20 mb15">{t("Acceptbookings")}</h2>
                <div>
                  <p className="fs14 colorGrey mb15">
                    {t("Othersites")}
                    <GLink
                      to="#"
                      text={t("Learnmore")}
                      className="colorRed"
                      textDecoration="underline"
                    ></GLink>
                  </p>
                </div>
                <h3 className="fs14 mb15">{t("Booking")}</h3>
                <p className="fs14 colorGrey mb15">{t("Madevia")}</p>
                <p className="fs14 colorGrey mb0">{t("Bookingbuttonyour")}</p>
              </section>
            </Col>
            <Col md={2} className="text-end">
              <GButton>
                <span className="mr5">{Svg.whiteeye}</span>
                {t("Clicktest")}
              </GButton>
            </Col>
          </Row>
          {/* Booking button */}
          <Row className="bBottom pb20 mb20">
            <Col md={1}>
              <div>
                <img src={Img.widget} alt="" />
              </div>
            </Col>
            <Col md={9}>
              <section>
                <h2 className="fs20 mb15">{t("Bookingbtn")}</h2>
                <div>
                  <p className="fs15 colorGrey mb15">{t("Installthe")}</p>
                </div>
                <h3 className="fs15 mb15">{t("Instruction")}</h3>
                <GAlign alignV="center" className="mb15">
                  <div className="w36 radius100 circle_no mr15">{t("1")}</div>
                  <p className="fs15 colorGrey mb0">{t("CopyCodebutton")}</p>
                </GAlign>
                <GAlign alignV="center" className="mb25">
                  <div className="w36 radius100 circle_no mr15">{t("2")}</div>
                  <p className="fs15 colorGrey mb0">{t("Pastethecopied")}</p>
                </GAlign>
                <div className="bgCream pt35 pb35 pl15 pr15 radius4 mb15">
                  <GAlign alignV="center">
                    <h3 className="fs15 colorGrey mb0">
                      {t("Clicktest")}
                      <span className="ml10">{Svg.handpoint}</span>
                    </h3>
                    <GButton ml="80px">
                      <span className="mr10">{Svg.Icon_metro_calendar}</span>
                      {t("Booknow")}
                    </GButton>
                  </GAlign>
                </div>
                <h3 className="fs15 colorGrey mb0">
                  {t("Booknowwidget")}
                  <GLink
                    to="#"
                    text={t("Clickhere")}
                    className="colorRed"
                    textDecoration="underline"
                  ></GLink>
                </h3>
              </section>
            </Col>
            <Col md={2} className="text-end">
              <GButton backgroundColor="#37A3D2" color="#fff">
                <span className="mr5">{Svg.copied}</span>
                {t("Copycode")}
              </GButton>
            </Col>
          </Row>

          {/* // Embedded booking button */}
          <Row className="bBottom pb20 mb20">
            <Col md={1}>
              <div>
                <img src={Img.widget} alt="" />
              </div>
            </Col>
            <Col md={9}>
              <section>
                <h2 className="fs20 mb15">{t("Embeddedbookingbutton")}</h2>
                <div>
                  <p className="fs15 colorGrey mb15">{t("Copythecodebelow")}</p>
                </div>
                <h3 className="fs15 mb15">{t("Instruction")}</h3>
                <GAlign alignV="center" className="mb15">
                  <div className="w36 radius100 circle_no mr15">{t("1")}</div>
                  <p className="fs15 colorGrey mb0">{t("CopyCodebutton")}</p>
                </GAlign>
                <GAlign alignV="center" className="mb25">
                  <div className="w36 radius100 circle_no mr15">{t("2")}</div>
                  <p className="fs15 colorGrey mb0">{t("Pastethecopied")}</p>
                </GAlign>
                <h3 className="fs15 colorGrey mb0">
                  {t("Booknowwidget")}
                  <GLink
                    to="#"
                    text={t("Clickhere")}
                    className="colorRed"
                    textDecoration="underline"
                  ></GLink>
                </h3>
              </section>
            </Col>
            <Col md={2} className="text-end">
              <GButton backgroundColor="#37A3D2" color="#fff">
                <span className="mr5">{Svg.copied}</span>
                {t("Copycode")}
              </GButton>
            </Col>
          </Row>

          {/* // Share booking widget link */}
          <Row className="mb20">
            <Col md={1}>
              <div>
                <img src={Img.widget} alt="" />
              </div>
            </Col>
            <Col md={9}>
              <section>
                <h2 className="fs20 mb15">{t("Sharebookingwidgetlink")}</h2>
                <div>
                  <p className="fs15 colorGrey mb15">{t("Ownbookingwidget")}</p>
                </div>
                <h3 className="fs15 mb15">{t("Instruction")}</h3>
                <GAlign alignV="center" className="mb15">
                  <div className="w36 radius100 circle_no mr15">{t("1")}</div>
                  <p className="fs15 colorGrey mb0">{t("CopyCodebutton")}</p>
                </GAlign>
                <GAlign alignV="center" className="mb25">
                  <div className="w36 radius100 circle_no mr15">{t("2")}</div>
                  <p className="fs15 colorGrey mb0">{t("Pastethecopied")}</p>
                </GAlign>
                <div className="bgCream pt10 pb10 ml15 mb15">
                  <a
                    href="https://buchung.bakimrandevu.de/ort/414812/menue/"
                    target="_blank"
                    className="colorRed"
                  >
                    {t("Menue")}
                  </a>
                </div>
                <h3 className="fs15 colorGrey mb0">
                  {t("Booknowwidget")}
                  <GLink
                    to="#"
                    text={t("Clickhere")}
                    className="colorRed"
                    textDecoration="underline"
                  ></GLink>
                </h3>
              </section>
            </Col>
            <Col md={2} className="text-end">
              <GButton backgroundColor="#37A3D2" color="#fff">
                <span className="mr5">{Svg.copied}</span>
                {t("Copycode")}
              </GButton>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BookingWidget;
