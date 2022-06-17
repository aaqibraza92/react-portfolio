import React from "react";
import { CardTitle, Col, Row } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import { useTranslation } from "react-i18next";

const EmailAlert = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="box_s border_radius8">
        <div className="border-bottom card_thank d-flex justify-content-between align-items-center">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("Nofilterselected")}
          </CardTitle>
        </div>
        <div className="card_thank">
          <Row>
            <Col md={12}>
              <h3 className="fs18 mb15">{t("Reallywrite")}</h3>
              <p className="fs15 colorGrey">{t("Preciselyyouaddress")}</p>
            </Col>
          </Row>
        </div>
        <div className="border-top card_thank m_bg_footer">
          <div className="d-flex align-items-center justify-content-end">
            <GButton transform="uppercase">{t("Ok")}</GButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailAlert;
