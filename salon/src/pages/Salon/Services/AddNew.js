import React from "react";
import { CardTitle, Col, Container, Row } from "reactstrap";
import Img from "../../../assets/Img/Img";
import GImage from "../../../components/Layout/GImage/GImage";
import { useTranslation } from "react-i18next";
import CreateNewPackage from "./PackageModal/CreateNewPackage";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import PackageModal from "./PackageModal/PackageModal";

const AddNew = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="box_s border_radius8">
        <div className="border-bottom card_thank d-flex justify-content-between align-items-center">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("Addnew")}
          </CardTitle>
        </div>
        <div className="card_thank">
          <Container>
            <Row>
              <Col md={4} className="pt-1 pb-1">
                <div className="card-body border radius text-center min_box_height pointer">
                  <div className="mb10">
                    <GImage src={Img.addservicescircle} />
                  </div>
                  <h5>{t("Service")}</h5>
                  <p>{t("ServiceText")}</p>
                </div>
              </Col>

              <Col md={4} className="pt-1 pb-1">
                <div
                  className="card-body border radius text-center min_box_height pointer"
                  onClick={() =>
                    AlertModal02.show(<PackageModal />, "", () => {}, "xl")
                  }
                >
                  <div className="mb10">
                    <GImage src={Img.addservicescircle} />
                  </div>
                  <h5>{t("Package")}</h5>
                  <p>{t("packageText")}</p>
                </div>
              </Col>

              <Col md={4} className="pt-1 pb-1">
                <div className="card-body border radius text-center min_box_height pointer">
                  <div className="mb10">
                    <GImage src={Img.addservicescircle} />
                  </div>
                  <h5>{t("MenuGroup")}</h5>
                  <p>{t("MenuGroupText")}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AddNew;
