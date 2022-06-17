import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

const Game = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio View - Pixbrand</title>
        <meta name="Portfolio View" content="Pixbrand Portfolio View"></meta>
      </Helmet>
      <Title />
      <Challenge />
      <Gallery />
    </div>
  );
};

export default Game;

// Title
const Title = () => {
  return (
    <section className="mb100 mobMb60">
      <Container>
        <section className="pt80 pb80">
          <Slide bottom>
            <h4 className="fs16 colorWhite">TITAN LOUNGE -</h4>
            <h1 className="fs65 tabFs60 tabLgFs60 mobFs45 mb40 mobMb20 colorWhite">
              Find Your Best Companion App
            </h1>
            <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite width50 mobWidth100 tabWidth100 tabLgWidth100">
              We launched this branding agency as a result of we love to serve
              businesses & reach their potential through honest web selling
              efforts
            </p>
          </Slide>
        </section>
      </Container>
      <div>
        <Slide bottom>
          <img src={Img.g1} alt="" className="w-100 mobMb15" />
        </Slide>
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
                <Slide bottom>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                    Location
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    New Jersey, United States
                  </p>
                </Slide>
              </div>
              <div className="mb30 mobMb15">
                <Slide bottom>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                    Location
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    New Jersey, United States
                  </p>
                </Slide>
              </div>
              <div className="mb30 mobMb15">
                <Slide bottom>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite mb10">
                    Location
                  </h3>
                  <span className="mr10">{Svg.android}</span>
                  <span className="mr10">{Svg.mac}</span>
                  <span className="mr10">{Svg.node}</span>
                  <span>{Svg.react}</span>
                </Slide>
              </div>
              <div className="mb20 mobMb15">
                <Slide bottom>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                    Services se provided
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    - Visual Identity
                  </p>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    - Visual Identity
                  </p>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    - Visual Identity
                  </p>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    - Visual Identity
                  </p>
                </Slide>
              </div>
              <div className="mb30 mobMb15">
                <Slide bottom>
                  <span className="fs16 colorWhite mr15">Visit Giofox</span>
                  <span>{Svg.arrowwithLightBground}</span>
                </Slide>
              </div>
            </section>
          </Col>
          <Col lg={8}>
            <section>
              <div className="mb40 mobMb20">
                <Slide bottom>
                  <h3 className="fs55 tabFs40 tabLgFs40 mobFs32 colorWhite mb25 mobMb10">
                    The Client
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi quod nihil non dolorum dolores consectetur,
                    accusamus provident harum! Blanditiis ex voluptatem qui
                    recusandae reiciendis, ipsum nemo deserunt! Porro doloribus
                    qui perspiciatis inventore autem doloremque delectus sequi
                    saepe, dolorum, atque, animi quam. Alias autem minima quas
                    voluptatem eaque, ad at quaerat!
                  </p>
                </Slide>
              </div>
              <div className="mb40 mobMb20">
                <Slide bottom>
                  <h3 className="fs55 tabFs40 tabLgFs40 mobFs32 colorWhite mb25 mobMb10">
                    The Client
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb25 mobMb15">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi quod nihil non dolorum dolores consectetur,
                    accusamus provident harum! Blanditiis ex voluptatem qui
                    recusandae reiciendis, ipsum nemo deserunt! Porro doloribus
                    qui perspiciatis inventore autem doloremque delectus sequi
                    saepe, dolorum, atque, animi quam. Alias autem minima quas
                    voluptatem eaque, ad at quaerat!
                  </p>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi quod nihil non dolorum dolores consectetur,
                    accusamus provident harum! Blanditiis ex voluptatem qui
                    recusandae reiciendis, ipsum nemo deserunt! Porro doloribus
                    qui perspiciatis inventore autem doloremque delectus sequi
                    saepe, dolorum, atque, animi quam. Alias autem minima quas
                    voluptatem eaque, ad at quaerat!
                  </p>
                </Slide>
              </div>
              <div>
                <Slide bottom>
                  <h3 className="fs55 tabFs40 tabLgFs40 mobFs32 colorWhite mb25 mobMb10">
                    The Client
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb25 mobMb15">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi quod nihil non dolorum dolores consectetur,
                    accusamus provident harum! Blanditiis ex voluptatem qui
                    recusandae reiciendis, ipsum nemo deserunt! Porro doloribus
                    qui perspiciatis inventore autem doloremque delectus sequi
                    saepe, dolorum, atque, animi quam. Alias autem minima quas
                    voluptatem eaque, ad at quaerat!
                  </p>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi quod nihil non dolorum dolores consectetur,
                    accusamus provident harum! Blanditiis ex voluptatem qui
                    recusandae reiciendis, ipsum nemo deserunt! Porro doloribus
                    qui perspiciatis inventore autem doloremque delectus sequi
                    saepe, dolorum, atque, animi quam. Alias autem minima quas
                    voluptatem eaque, ad at quaerat!
                  </p>
                </Slide>
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
          <Slide bottom>
            <img src={Img.g2} alt="" className="w-100 mb70 mobMb40" />
          </Slide>
        </div>
        <Row className="gx-5">
          <Col lg={6} xs={6}>
            <div>
              <Slide bottom>
                <img src={Img.g3} alt="" className="w-100 mb70 mobMb40" />
              </Slide>
            </div>
          </Col>
          <Col lg={6} xs={6}>
            <div>
              <Slide bottom>
                <img src={Img.g4} alt="" className="w-100 mb70 mobMb40" />
              </Slide>
            </div>
          </Col>
        </Row>
        <div>
          <Slide bottom>
            <img src={Img.g5} alt="" className="w-100 mb70 mobMb40" />
          </Slide>
        </div>
        <div>
          <Slide bottom>
            <img src={Img.g6} alt="" className="w-100 mb70 mobMb40" />
          </Slide>
        </div>
        <div>
          <Slide bottom>
            <img src={Img.g7} alt="" className="w-100 mb70 mobMb40" />
          </Slide>
        </div>
        <div>
          <Slide bottom>
            <img src={Img.g8} alt="" className="w-100 mb70 mobMb40" />
          </Slide>
        </div>
        <Row className="gx-5">
          <Col lg={6} xs={6}>
            <div>
              <Slide bottom>
                <img src={Img.g9} alt="" className="w-100 mb70 mobMb40" />
              </Slide>
            </div>
          </Col>
          <Col lg={6} xs={6}>
            <div>
              <Slide bottom>
                <img src={Img.g10} alt="" className="w-100 mb70 mobMb40" />
              </Slide>
            </div>
          </Col>
        </Row>
        <div>
          <Slide bottom>
            <img src={Img.g11} alt="" className="w-100 mb70 mobMb40" />
          </Slide>
        </div>
        <section className="bBottom mb100 mobMb60">
          <Slide bottom>
            <div className="mb100 mobMb60">
              <h3 className="fs32 tabFs20 tabLgFs20 mobFs18 colorWhite mb40 mobMb20">
                The result
              </h3>
              <p className="colorLightBlack mb30">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate tempore laboriosam eius inventore. Quas expedita
                fugit soluta laudantium non sed nobis error consequatur.
                Adipisci doloremque iste perspiciatis quaerat debitis omnis
                perferendis. soluta laudantium non sed nobis error consequatur.
                Adipisci doloremque iste perspiciatis quaerat debitis omnis
                perferendis. Qui, vel assumenda?Qui, vel assumenda?
              </p>
              <p className="colorLightBlack mb0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate tempore laboriosam eius inventore. Quas expedita
                fugit
              </p>
            </div>
          </Slide>
        </section>
        <section>
          <Slide bottom>
            <div className="text-center">
              <h3 className="fs65 tabFs60 tabLgFs60 mobFs45 mb40 mobMb20">
                <Link to="/house-tripping" className="colorWhite">
                  Next Project
                </Link>
              </h3>
              <div>
                <Link to="/house-tripping">{Svg.arrowDiagnalWhite}</Link>
              </div>
            </div>
          </Slide>
        </section>
      </Container>
    </section>
  );
};
