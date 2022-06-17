import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";

const Pixxley = () => {
  return (
    <div className="pt80">
      <Title />
      <Challenge />
      <Gallery />
    </div>
  );
};

export default Pixxley;

// Title
const Title = () => {
  return (
    <section className="mb100 mobMb30">
      <Container>
        <section className="mb80 mobMb30">
          <h4 className="fs16 colorWhite">TITAN LOUNGE -</h4>
          <h1 className="fs60 mobMb10 mobFs45 tabFs60  colorWhite">
            Find Your Best Companion App
          </h1>
          <p className="fs16 fThin colorWhite width50 mobWidth100 tabWidth100 tabLgWidth100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            explicabo eligendi repellendus quo? Sed provident laudantium, alias
            asperiores dolore volupt
          </p>
        </section>
      </Container>
      <div>
        <img src={Img.px1} alt="" className="w-100 mobMb15" />
      </div>
    </section>
  );
};

// Challenge
const Challenge = () => {
  return (
    <section className="mb100 mobMb30">
      <Container>
        <Row>
          <Col lg={4} className="mobMb10">
            <section>
              <div className="mb30 mobMb15">
                <h3 className="fs16 colorWhite">Location</h3>
                <p className="colorLightBlack mb0">New Jersey, United States</p>
              </div>
              <div className="mb30 mobMb15">
                <h3 className="fs16 colorWhite">Location</h3>
                <p className="colorLightBlack mb0">New Jersey, United States</p>
              </div>
              <div className="mb30 mobMb15">
                <h3 className="fs16 colorWhite mb10">Location</h3>
                <span className="mr10">{Svg.android}</span>
                <span className="mr10">{Svg.mac}</span>
                <span className="mr10">{Svg.node}</span>
                <span>{Svg.react}</span>
              </div>
              <div className="mb20 mobMb15">
                <h3 className="fs16 colorWhite">Services se provided</h3>
                <p className="colorLightBlack mb0">- Visual Identity</p>
                <p className="colorLightBlack mb0">- Visual Identity</p>
                <p className="colorLightBlack mb0">- Visual Identity</p>
                <p className="colorLightBlack mb0">- Visual Identity</p>
              </div>
              <div className="mb30 mobMb15">
                <span className="fs16 colorWhite mr15">Visit Giofox</span>
                <span>{Svg.arrowwithLightBground}</span>
              </div>
            </section>
          </Col>
          <Col lg={8}>
            <section>
              <div className="mb30">
                <h3 className="fs30 colorWhite mb25 mobMb10">The Client</h3>
                <p className="colorLightBlack mb0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
              </div>
              <div className="mb30 ">
                <h3 className="fs30 colorWhite mb25 mobMb10">The Client</h3>
                <p className="colorLightBlack mb25 mobMb15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
                <p className="colorLightBlack mb0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
              </div>
              <div className="mb30">
                <h3 className="fs30 colorWhite mb25 mobMb10">The Client</h3>
                <p className="colorLightBlack mb25 mobMb15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
                <p className="colorLightBlack mb0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Gallery Section
const Gallery = () => {
  return (
    <section className="mb100 mobMb30">
      <Container className="overflow-hidden">
        <div>
          <img src={Img.px2} alt="" className="w-100 mb50 mobMb30" />
        </div>
        <Row className="gx-5">
          <Col lg={6} xs={6}>
            <div>
              <img src={Img.px3} alt="" className="w-100 mb50 mobMb30" />
            </div>
          </Col>
          <Col lg={6} xs={6}>
            <div>
              <img src={Img.px4} alt="" className="w-100 mb50 mobMb30" />
            </div>
          </Col>
        </Row>
        <div>
          <img src={Img.px5} alt="" className="w-100 mb50 mobMb30" />
        </div>
        <div>
          <img src={Img.px6} alt="" className="w-100 mb50 mobMb30" />
        </div>
        <div>
          <img src={Img.px7} alt="" className="w-100 mb50 mobMb30" />
        </div>
        <div>
          <img src={Img.px8} alt="" className="w-100 mb50 mobMb30" />
        </div>
        <Row className="gx-5">
          <Col lg={6} xs={6}>
            <div>
              <img src={Img.px9} alt="" className="w-100 mb50 mobMb30" />
            </div>
          </Col>
          <Col lg={6} xs={6}>
            <div>
              <img src={Img.px10} alt="" className="w-100 mb50 mobMb30" />
            </div>
          </Col>
        </Row>
        <div>
          <img src={Img.px11} alt="" className="w-100 mb50 mobMb30" />
        </div>
        <Row className="gx-5">
          <Col lg={6} xs={6}>
            <div>
              <img src={Img.px12} alt="" className="w-100 mb50 mobMb30" />
            </div>
          </Col>
          <Col lg={6} xs={6}>
            <div>
              <img src={Img.px13} alt="" className="w-100 mb50 mobMb30" />
            </div>
          </Col>
        </Row>
        <div>
          <img src={Img.px14} alt="" className="w-100 mb50 mobMb30" />
        </div>
        <section className="bBottom mb80 mobMb30">
          <div className="mb80 mobMb30">
            <h3 className="fs30 colorWhite mb25 mobMb10">The result</h3>
            <p className="colorLightBlack mb30">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate tempore laboriosam eius inventore. Quas expedita fugit
              soluta laudantium non sed nobis error consequatur. Adipisci
              doloremque iste perspiciatis quaerat debitis omnis perferendis.
              soluta laudantium non sed nobis error consequatur. Adipisci
              doloremque iste perspiciatis quaerat debitis omnis perferendis.
              Qui, vel assumenda?Qui, vel assumenda?
            </p>
            <p className="colorLightBlack mb0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate tempore laboriosam eius inventore. Quas expedita fugit
            </p>
          </div>
        </section>
        <section>
          <div className="mb80 mobMb15 text-center">
            <h3 className="fs60 mobMb10 mb30 mobFs45 tabFs60">
              <Link to="#" className="colorWhite">
                Next Project
              </Link>
            </h3>
            <div>
              <Link to="/cyberpal">{Svg.arrowDiagnalWhite}</Link>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};
