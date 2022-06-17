import React from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../Assets/Svg/Svg";
import "./Work.css";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";


const Work = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Works - Pixbrand</title>
        <meta name="Works" content="Pixbrand Works"></meta>
      </Helmet>
      <Container>
        <Title />
        <CardsDesc />
      </Container>
    </>
  );
};

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Row>
        <Col xl={10} lg={10} md={12}>
          <section>
            <Slide bottom>
              <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                This is how
              </h1>
              <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0 mobMl0 work-head">
                We make it work!
              </h1>
            </Slide>
          </section>
        </Col>
      </Row>
    </section>
  );
};

export default Work;

// Cards
const CardsDesc = () => {
  return (
    <>
      <Row>
        <Col lg={4} md={4}>
          <section className="mb60 mobMb30">
            <Slide bottom>
              <div className="work-cards work-cards-1">
                <div className="ml20">
                  <div className="mb20 mobMb10">{Svg.philosophy}</div>
                  <h3 className="fs28 tabFs20 tabLgFs20 mobFs18 mb20 mobMb10 colorWhite">
                    People First Philosophy
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    At the workplace and even in solutions, we ensure to put
                    humans first!
                  </p>
                </div>
              </div>
            </Slide>
          </section>
        </Col>
        <Col lg={4} md={4}>
          <section className="mb60 mobMb30">
            <Slide bottom>
              <div className="work-cards work-cards-2">
                <div className="ml20">
                  <div className="mb20 mobMb10">{Svg.size}</div>
                  <h3 className="fs28 tabFs20 tabLgFs20 mobFs18 mb20 mobMb10 colorWhite">
                    Just the Right Size
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0 ">
                    Call us a boutique, studio, agency, or company. We won’t
                    mind anything
                  </p>
                </div>
              </div>
            </Slide>
          </section>
        </Col>
        {/* <Col lg={4}  md={6}></Col> */}
      </Row>
      <Row>
        <Col lg={4} md={4}>
          <section className="mb60 mobMb30">
            <Slide bottom>
              <div className="work-cards work-cards-3">
                <div className="ml20">
                  <div className="mb20 mobMb10">{Svg.pixball}</div>
                  <h3 className="fs28 tabFs20 tabLgFs20 mobFs18 mb20 mobMb10 colorWhite">
                    Global Footprint
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0 ">
                    With clients all over the globe, we at Pixbrand are truly
                    global in every sense.
                  </p>
                </div>
              </div>
            </Slide>
          </section>
        </Col>
        <Col lg={4} md={4}>
          <section className="mb60 mobMb30">
            <Slide bottom>
              <div className="work-cards work-cards-4">
                <div className="ml20">
                  <div className="mb20 mobMb10">{Svg.perspective}</div>
                  <h3 className="fs28 tabFs20 tabLgFs20 mobFs18 mb20 mobMb10 colorWhite">
                    A Fresh Perspective
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0 ">
                    {" "}
                    With the experience we bring, every project offers a new
                    approach to the horizon.
                  </p>
                </div>
              </div>
            </Slide>
          </section>
        </Col>
        <Col lg={4} md={4}>
          <section className="mb60 mobMb30">
            <Slide bottom>
              <div className="work-cards work-cards-5">
                <div className="ml20">
                  <div className="mb20 mobMb10">{Svg.quality}</div>
                  <h3 className="fs28 tabFs20 tabLgFs20 mobFs18 mb20 mobMb10 colorWhite">
                    Obsessed with Quality
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0 ">
                    {" "}
                    We are obsessed with perfect quality and seamless operations
                    in our products.
                  </p>
                </div>
              </div>
            </Slide>
          </section>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4}></Col>
        <Col lg={4} md={4}>
          <section className="mb100 mobMb30">
            <Slide bottom>
              <div className="work-cards work-cards-6">
                <div className="ml20">
                  <div className="mb20 mobMb10">{Svg.learning}</div>
                  <h3 className="fs28 tabFs20 tabLgFs20 mobFs18 mb20 mobMb10 colorWhite">
                    Constant Learning Notes
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0 ">
                    {" "}
                    As we create, we inspire and aspire to grow. That’s Pixbrand
                    for you.
                  </p>
                </div>
              </div>
            </Slide>
          </section>
        </Col>
        <Col lg={4} md={4}>
          <section className="mb100 mobMb60">
            <Slide bottom>
              <div className="work-cards work-cards-7">
                <div className="ml20">
                  <div className="mb20 mobMb10">{Svg.doing}</div>
                  <h3 className="fs28 tabFs20 tabLgFs20 mobFs18 mb20 mobMb10 colorWhite">
                    Doing Things Right, Every Time
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0 ">
                    Support, service, maintenance. We keep at it long after
                    deployment.
                  </p>
                </div>
              </div>
            </Slide>
          </section>
        </Col>
      </Row>
    </>
  );
};
