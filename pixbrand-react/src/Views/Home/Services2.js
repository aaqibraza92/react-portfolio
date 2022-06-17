import React from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../Assets/Svg/Svg";
import GSectionTitle from "../../Components/GComponents/GSectionTitle";
import GSpacing from "../../Components/GComponents/GSpacing";
import Fade from "react-reveal/Fade";

const Data = [
  {
    icon: Svg.folder,
    title: "Analysis",
    para: "Thorough market analysis gives our team the right idea regarding trends, technologies, competition, and SWOT break-up of every gap to take you to the next level.",
  },
  {
    icon: Svg.folder,
    title: "Development",
    para: "The analysis leads to putting ideas in the development phase, where we unleash our out-of-the-box approach throughout the development phase.",
  },
  {
    icon: Svg.folder,
    title: "Design",
    para: "From websites to creatives; from apps to campaigns, everything we design is governed with the right design methods and impactful practices for the best results. It’s creativity unleashed!",
  },
  {
    icon: Svg.folder,
    title: "QA ",
    para: "We are fully aware that design and development are not enough, which is why our QA team ensures that our products stay safe, secure, and supremely foolproof so that scaling up is the only focus. ",
  },
];
const Services2 = () => {
  return (
    <section className="pt0 pb100 mobPb40">
      <Container className="">
        <div>
          <GSpacing mb="5px">
            <Fade bottom >
              <GSectionTitle
                mtTitle="10px"
                tt="uppercase"
                widthTitle="80%"
                WidthTabLgTitle="82%"
                fsT="40px"
                // fsTitleMob="24px"
                pretitle="We're Different"
                fwPt="bold"
                colorPt="#FF0A2B"
                title="Don’t think of us as ‘just another marketing or web design company’. Our Pix mantra makes us your collaborative partner."
              />
            </Fade>
          </GSpacing>

          <p className="mb20 colorWhite fs22 tabFs18 tabLgFs18 mobFs16">
            <Fade bottom >
              At Pix Brand, we cover all facets of business enterprises by
              bringing stupendous branding campaigns and equally revolutionary
              products by leveraging the experience of our team with the most
              sophisticated technical methodologies, that maximize revenue and
              deliver impeccable client satisfaction and retention.
            </Fade>
          </p>
          <p className="mb20 colorWhite fs22 tabFs18 tabLgFs18 mobFs16 mb30">
            <Fade bottom >
              Our services at a glance-
            </Fade>
          </p>
        </div>

        <div>
          {Data.map((elem, ind) => {
            return (
              <Row className="align-items-center mb30" key={ind}>
                <Col lg={2} md={2} xs={2}>
                  <div>
                    
                  </div>
                  {elem.icon}
                </Col>

                <Col xl={5} lg={4} md={5} xs={5}>
                  <h3 className="colorWhite fs32 tabFs24 tabLgFs24 mobFs20 mb0">
                    <Fade bottom >
                      {elem.title}
                    </Fade>
                  </h3>
                </Col>

                <Col xl={5} lg={6} md={5} className="mobMt10">
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack ">
                    <Fade bottom >
                      {elem.para}
                    </Fade>
                  </p>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services2;
