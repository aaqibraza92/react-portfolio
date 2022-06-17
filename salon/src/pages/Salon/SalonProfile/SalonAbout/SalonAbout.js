import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img";
import GAlign from "../../../../components/Layout/GAlign";
import GHorizontalInput from "../../../../components/Layout/GHorizontalInput";
import GImage from "../../../../components/Layout/GImage/GImage";
import GSpacing from "../../../../components/Layout/GSpacing";
import SalonProfileNavigation from "../SalonProfileNavigation/SalonProfileNavigation";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import GButton from "../../../../components/Layout/GButton";
import { Link } from "react-router-dom";
import Svg from "../../../../assets/svg/Svg";
import "./SalonAbout.css";

const countryListData = [
  { value: "India", label: "India" },
  { value: "m", label: "Pradesh" },
];

// Images Data
const Imagesdata = [
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
  {
    img: Img.about,
  },
];

const SalonAbout = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [country, setcountry] = useState({ value: "", label: "" });
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [website, setwebsite] = useState("");

  return (
    <section className="pt40 pb40 bgLightBlue">
      <Container>
        <h2 className="fs24 mobFs18 lb mb20 mobMb10">{t("Setup")}</h2>
        <SalonProfileNavigation />
        <section className="bgWhite pt20 pb20 pl30 pr30">
          <h2 className="fs24 lb mb20 mobMb10">{t("Information")}</h2>
          <GAlign alignV="center" className="bBottom pb20 mb20 mobMb10">
            <GImage src={Img.about} radius="4px" />
            <h3 className="fs18 mobFs14 mb0 ml15">{t("Good")}</h3>
          </GAlign>
          <h3 className="fs18 mobFs14 mb30 mobMb15 lm">{t("Located")}</h3>
          <Row className="bBottom pb20 mb20 mobMb10">
            <Col md={6}>
              <GSpacing paddingBottom="15px">
                <GHorizontalInput
                  label={t("Address")}
                  placeholder={t("Address")}
                  type="text"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </GSpacing>
              <GSpacing paddingBottom="15px">
                <GHorizontalInput
                  label={t("City")}
                  placeholder={t("City")}
                  type="text"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                />
              </GSpacing>
              <GSpacing paddingBottom="15px">
                <GHorizontalInput
                  label={t("Zip")}
                  placeholder={t("Zip")}
                  type="text"
                  value={postalcode}
                  onChange={(e) => setpostalcode(e.target.value)}
                />
              </GSpacing>
              <Row className="align-items-center">
                <Col md={4} className="text-end">
                  <p className="fs15 colorLightGrey mb7">{t("Country")}</p>
                </Col>
                <Col md={8}>
                  <div className="cbd-select">
                    <Select
                      className="step_select themeSelect "
                      classNamePrefix="themeSelect"
                      value={country}
                      options={countryListData}
                      onChange={(e) => {
                        setcountry(e);
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <h4 className="colorLightGrey fs14 mb10">{t("Location")}</h4>
              <GImage src={Img.map} radius="4px" />
            </Col>
          </Row>

          <h3 className="fs18 mobFs14 mb30 mobMb15 lm">{t("Customers")}</h3>
          <Row className="bBottom pb20 mb20 mobMb10">
            <Col md={6}>
              <GSpacing paddingBottom="15px">
                <GHorizontalInput
                  label={t("Phone")}
                  placeholder={t("Phone")}
                  type="text"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </GSpacing>
              <GSpacing paddingBottom="15px">
                <GHorizontalInput
                  label={t("Email")}
                  placeholder="Berlin"
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </GSpacing>
              <GHorizontalInput
                label={t("Website")}
                placeholder={t("Website")}
                type="text"
                value={website}
                onChange={(e) => setwebsite(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <h4 className="colorLightGrey fs14 mb10">{t("Description")}</h4>
              <GImage src={Img.map} radius="4px" />
            </Col>
          </Row>

          <GAlign align="between" alignV="center" className="mb20 mobMb10">
            <h3 className="fs18 colorBlack mb0 fLight">{t("Photos")}</h3>
            <GButton
              backgroundColor="#fff"
              color="#000"
              border="1px solid #000"
            >
              <span className="mr10">{Svg.downloadicon}</span> {t("Download")}
            </GButton>
          </GAlign>

          <Row className="bBottom pb20 mb20 mobMb10">
            {Imagesdata.map((elem, ind) => {
              return (
                <Col md="auto" xs={6} className="mb10" key={"aa" + ind}>
                  <GImage src={elem.img} radius="4px" />
                </Col>
              );
            })}
          </Row>

          <GAlign align="right">
            <GButton>
              <Link to="#" className="colorWhite">
                {t("Next")}
              </Link>
            </GButton>
          </GAlign>
        </section>
      </Container>
    </section>
  );
};

export default SalonAbout;
