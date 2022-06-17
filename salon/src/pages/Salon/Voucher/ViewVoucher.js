import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import { useTranslation } from "react-i18next";

const ViewVoucher = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <GAlign align="between" alignV="center" className="card-body bBottom">
        <h3 className="fs14 lb mb0 text-uppercase">{t("Viewvoucher")}</h3>
      </GAlign>
      <div className="box_s border_radius8">
        <div className="card_thank">
          <Container>
            <Row>
              <Col md={12}>
                <p>{t("AddVoucherSubText")}</p>
              </Col>
              <Col md={12}>
                <label className="fs12">{t("Vouchercode")}</label>
                <input
                  type="text"
                  name="name"
                  className="form_custom"
                  placeholder="Enter device or cabin name"
                />
              </Col>
              <Col md={6} className="position-relative">
                <label className="fs12">{t("Amount")}</label>
                <input
                  type="text"
                  name="name"
                  className="form_custom"
                  placeholder="Enter voucher price"
                />
                <span className="voucher_from">{Svg.currency}</span>
              </Col>
              <Col md={6}>
                <label className="fs12">{t("Quantityinstock")}</label>
                <input
                  type="text"
                  name="name"
                  className="form_custom"
                  placeholder="Enter quantity in stock"
                />
              </Col>

              <Col md={6} className="mb15 tab_date tab_voucher_box">
                <label className="fs12">{t("Startingdate")}</label>
                <DatePicker
                  showYearDropdown
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Col>
              <Col md={6} className="mb15 tab_date tab_voucher_box">
                <label className="fs12">{t("Endingdate")}</label>
                <DatePicker
                  showYearDropdown
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Col>
              <Col md={12} className="position-relative">
                <label className="fs12">{t("Discounts")}</label>
                <input
                  type="text"
                  name="name"
                  className="form_custom"
                  placeholder="0"
                />
                <span className="voucher_from">{Svg.division}</span>
              </Col>
            </Row>
          </Container>
        </div>
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
          <GButton>{t("Save")}</GButton>
        </div>
      </div>
    </>
  );
};

export default ViewVoucher;
