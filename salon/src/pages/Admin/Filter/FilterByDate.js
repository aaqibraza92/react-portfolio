import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Container, Row } from "reactstrap";

const FilterByDate = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <style jsx="true">{`
        .filter_by_date input {
          width: 100%;
        }
      `}</style>
      <section>
        <div className="bgLightBlue">
          <h3 className="fs14 pl20 pt10 pb10 mb20">{t("Filterbydate")}</h3>
        </div>
        <Container>
          <Row className="mb20 ">
            <Col md={6}>
              <section className="filter_by_date">
                <label className="fs14 mb7 colorGrey">{t("From")}</label>
                <DatePicker
                  showYearDropdown
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </section>
            </Col>
            <Col md={6}>
              <section className="filter_by_date">
                <label className="fs14 mb7 colorGrey">{t("To")}</label>
                <DatePicker
                  showYearDropdown
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </section>
            </Col>
          </Row>

          <GAlign align="between" alignV="center" className="mb25">
            <span className="colorRed text-underline">
              {t("Resettodefault")}
            </span>
            <GButton>{t("Onlyfilter")}</GButton>
          </GAlign>
        </Container>
      </section>
    </>
  );
};

export default FilterByDate;
