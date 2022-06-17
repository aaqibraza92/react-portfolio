import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../../assets/svg/Svg";

const Pagination = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt10 pb10">
        <Container fluid>
          <Row>
            <Col>
              <span className="fs14 mr10">
                {t("Total")} {props.data && props.data.totalDocs}{" "}
                {t("Catagories")}
              </span>
            </Col>
            <Col className="text-end">
              <div>
                <span className="fs14 mr10">Rows per page :</span>
                <select className="width8 bBottom bBlackBottom">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                <span className="fs14 mr15 ml15">
                  1-{props.data && props.data.totalPages} of
                  {props.data && props.data.totalDocs}
                </span>
                <span className="mr20">{Svg.leftblackarrow}</span>
                <span>{Svg.rightblackarrow}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pagination;
