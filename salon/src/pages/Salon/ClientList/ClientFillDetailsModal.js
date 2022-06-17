import React from "react";
import { CardTitle, Col, Row } from "reactstrap";
import CmnRadioBorder from "../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GButton from "../../../components/Layout/GButton";
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";

const ClientFillDetailsModal = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="box_s border_radius8">
        <div className="border-bottom card_thank">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("Fillclient")}
          </CardTitle>
        </div>
        <div className="card_thank">
          <Row className="align-items-center">
            <Col md={12}>
              <label>{t("Emailsubject")}</label>
              <input type="text" className="form_custom" placeholder="" />
            </Col>

            <Col md={12} className="d-flex mb15">
              <GCheckbox
                name="remember1"
                id="remember9"
                label={t("Showprofilephoto")}
              />
            </Col>

            <Col md={12}>
              <label>{t("Titleheader")}</label>
              <input type="text" className="form_custom" placeholder="" />
            </Col>

            <Col md={12}>
              <label>{t("Messagetext")}</label>
              <textarea
                className="form_custom"
                rows={2}
                cols={2}
                placeholder=""
              ></textarea>
            </Col>

            <Col md={3}>
              <label>{t("Bookingbutton")}</label>
            </Col>

            <Col md={9}>
              <div className="d-flex">
                <CmnRadioBorder
                  id="ert"
                  value="Venue"
                  name="Venue"
                  label={t("Venuepage")}
                  checked
                />
                <CmnRadioBorder
                  id="Bakim"
                  value="Bakim"
                  name="Venue"
                  label={t("Bakimwidge")}
                />
              </div>
            </Col>
            <Col md={12}>
              <label>{t("Footersignature")}</label>
              <input type="text" className="form_custom" placeholder="" />
            </Col>
          </Row>
        </div>
        <div className="border-top card_thank m_bg_footer">
          <div className="d-flex align-items-center justify-content-end">
            <GButton
              mr="15px"
              backgroundColor="#fff"
              color="#000"
              border="1px solid #707070"
              hoverBg="#fff"
              hoveColor="#000"
              hoverBorder="1px solid #000"
            >
              {t("Close")}
            </GButton>
            <GButton>{t("Previewsend")}</GButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFillDetailsModal;
