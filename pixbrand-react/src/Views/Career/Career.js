import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import TabAndContent from "../TabAndContent/TabAndContent";
import "./Career.css";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

const Career = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Career - Pixbrand</title>
        <meta name="Career" content="Pixbrand Career"></meta>
      </Helmet>
      <section>
        <Title />
        <Tab />
        {/* <Openings /> */}
        <Working />
        <Image />
      </section>
    </>
  );
};

export default Career;

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row>
          <Col xl={8} lg={8} md={11}>
            <section>
              <Slide bottom>
                <h4 className="fs16 colorRed fBold">CAREER</h4>
                <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                  Be a part of a vibrant workplace community at Pixbrand
                </h1>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Tab
const Tab = () => {
  return (
    <div>
      <div className="position-relative">
        <img src={Img.circlepix} alt="" className="circle-pix" />
      </div>
      <TabAndContent
        title="Current openings"
        verticaldata1="UI Designer"
        verticaldata2="Project Manager"
        verticaldata3="Creative Developer"
        verticaldata4="Web Designer"
        verticalsubdata1="Remote — Part time or full time"
      />
    </div>
  );
};

// Working Section
const Working = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <h2 className="fs70 tabFs60 tabLgFs60 mobFs45 colorWhite mb40 mobMb20">
              <Slide bottom>Why will you love working with us? </Slide>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col lg={8}>
            <section>
              <div className="mb40 mobMb20">
                <Slide bottom>
                  <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                    We encourage fresh approaches
                  </h2>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                    Something new is not learned until failure is encountered.
                    At Pixbrand, we encourage every team member to build, keep
                    building, and improve on the existing builds consistently.
                    Other than unearthing the right talent, this also gives
                    Other than unearthing the right talent, this also gives
                    Other than unearthing the right talent, this also gives
                    everyone a chance to bring something new to the table every
                    day
                  </p>
                </Slide>
              </div>
              <div className="mb40 mobMb20">
                <Slide bottom>
                  <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                    Create a genuine overall impact
                  </h2>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                    By being equally supportive to in-house work as well as
                    remote work, you become the part of a work ecosystem where
                    results are the top priority, and we take it as you being
                    responsible enough for seeing the tasks allocated all
                    through completion.
                  </p>
                </Slide>
              </div>
              <div className="mb40 mobMb20">
                <Slide bottom>
                  <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                    Grow as a team, build as a team
                  </h2>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                    Pixbrand shares a highly promising work ethic that’s focused
                    on high levels of quality and dedication. A creative and
                    curious mind is what we look for, and if you are someone
                    among the tribe, then connect with us.{" "}
                  </p>
                </Slide>
              </div>
              <div className="mb100 mobMb60">
                <Slide bottom>
                  <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                    Connect with anyone, anytime
                  </h2>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                    At Pixbrand, nobody is above or below when it comes to
                    organizational hierarchy. You can connect or talk to anyone
                    at any time. As a team member, you can come up with your
                    ideas to us absolutely any time, and we will be there to
                    hear it out.{" "}
                  </p>
                </Slide>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

//Current Openings
// const Openings = () => {
//   return (
//     <>
//       <Container>
//         <h2 className="fs45 colorWhite bBottom pb15 mb40 mobFs45">
//           Current openings
//         </h2>
//         <p className="fs24 colorWhite mb15">
//           UI Designer
//           <span className="fs16 colorLightBlack ml10">
//             Remote — Part time or full time
//           </span>
//         </p>
//         <p className="fs24 colorWhite mb15">
//           Project Manager
//           <span className="fs16 colorLightBlack ml10">
//             Remote — Part time or full time
//           </span>
//         </p>
//         <p className="fs24 colorWhite mb15">
//           Creative Developer
//           <span className="fs16 colorLightBlack ml10">Remote — Full time</span>
//         </p>
//         <p className="fs24 colorWhite mb15">
//           Web Designer
//           <span className="fs16 colorLightBlack ml10">
//             Remote — Part time or full time
//           </span>
//         </p>
//       </Container>
//     </>
//   );
// };

// Image Section
const Image = () => {
  return (
    <>
      <Container>
        <section className="mb100 mobMb60">
          <div>
            <Slide bottom>
              <img src={Img.career} alt="" className="w-100 mb100 mobMb60" />
            </Slide>
          </div>
          <Row>
            <Col md={6}>
              <div>
                <Slide bottom>
                  <p className="fs16 colorRed mb20 mobMb10 fw700">
                    WHY PIXBRAND?
                  </p>
                  <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
                    Our core beliefs are the lens through which we exist as a
                    company.
                  </h3>
                  <span className="fs16 colorWhite mr15"> About Us</span>
                  <span> {Svg.arrowwithLightBground}</span>
                </Slide>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};
