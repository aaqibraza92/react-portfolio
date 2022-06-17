import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../assets/Img/Img";
import Svg from "../../../assets/svg/Svg";
import GItemCard from "../../../components/Layout/GItemCard/GItemCard";
import { useTranslation } from 'react-i18next';



const Categories = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="mb80 mt_75">
        <Container>
    
          <h3 className="fBold lm mb30">{t("Recommended")}</h3>
          
          <Row className="mb30 gy-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((obj, ind) => {
              return (
                <Col lg={3} xs={6} key={ind}>
                  {/* {
                    <GItemCard
                      width="100%"
                      cover={true}
                      title="Removalist"
                      rating="4.5"
                      icon={Svg.star}
                      iconText="(1,000) reviews"
                      src={Img.salon}
                      radius="4px"
                      titleMb="15px"
                      titleMt="5px"
                    />
                  } */}
                  <section>
                    <div className="geeks">
                      <img src={Img.salon} alt="" className="w-100 radius4" />
                    </div>
                    <h3 className="fs15 mb5 lm">Beauty Kulture - Wood Green</h3>
                    <p className="fs14 mb5 colorGrey d-flex align-items-center">
                      <span className="fs15 review_rating"> 5.0</span>
                      <span className="ml5 mr5">{Svg.star}</span>
                      <span className="mr5">{Svg.star}</span>
                      <span className="mr5">{Svg.star}</span>
                      <span className="mr5">{Svg.star}</span>
                      <span>{Svg.star}</span>
                    </p>
                    <span className="fs14 colorGrey">Clapham, London</span>
                  </section>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Categories;


