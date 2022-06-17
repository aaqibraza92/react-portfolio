import React from "react";
import { Link } from "react-router-dom";
import { CardText, CardTitle, Col, Container, Row } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import AdvancedSearch from "../../../components/AdvancedSearch/AdvancedSearch";
import { useTranslation } from "react-i18next";

// style={{ backgroundImage: "url(" + Img.homebanner + ")", height: "80vh" }}

const HomeBanner = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className="homebanner">
      <Container>
        <Row className="align-items-center">
          <Col md="12" lg="12" xl="8">
            <CardTitle className="text-white lb f45" tag="h1">
              {t("Behind")}
            </CardTitle>
            <CardText className="text-white f18">
             {t("Discover")}
            </CardText>

            <div className="serch_box mb-3">
              <AdvancedSearch />
            </div>
            <div className="d-flex align-items-center home_banner_a">
              <Link className="mr-2" to="#">
                {Svg.android}
              </Link>
              <Link to="#">{Svg.iphone}</Link>
              <span className="text-white">
                {t("Get")}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeBanner;

const HomeBannerMenu = () => {
  return <></>;
};
