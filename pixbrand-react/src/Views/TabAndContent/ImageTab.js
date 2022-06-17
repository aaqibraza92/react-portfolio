import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

// For Tab Section
const WrapperSkills = styled.div`
  @media only screen and (max-width: 767px) {
    background: none;
    .tabMobView {
      padding: 15px;
      margin-top: 10px;
    }
  }
  h3 {
    border-bottom: 1px solid #3d3e42;
    padding-bottom: 10px;
  }
  .verticalTrigger1 {
    border-bottom: 1px solid transparent;
  }
  .verticalTrigger1:hover,
  .activeTabVer {
    border-color: #fff;
  }
`;

// Left Vertical Data of Tab Menu
const tabTriggerContent = [
  {
    title: "Frontend",
  },
  {
    title: "Backend",
  },
  {
    title: "Mobile",
  },
  {
    title: "CMS",
  },
  {
    title: "WebRTC technologies",
  },
  {
    title: "Design",
  },
  {
    title: "Support & maintenance",
  },
  {
    title: "Quality assurance",
  },
];

// Right Result of Tab Menu
const TabContent = [
  {
    content: Img.tabimg,
  },
  {
    content: Img.tabimg,
  },
  {
    content: Img.tabimg,
  },
  {
    content: Img.tabimg,
  },
  {
    content: Img.tabimg,
  },
  {
    content: Img.tabimg,
  },
  {
    content: Img.tabimg,
  },
  {
    content: Img.tabimg,
  },
];

// Soundness
const ImageTab = () => {
  const [verticalTab, setverticalTab] = useState("v0");
  const handleTab = (ind) => {
    setverticalTab(ind);
  };
  return (
    <WrapperSkills>
      <Container className="mb100 mobMb60">
        <Row className="justify-content-center">
          <Col lg={10}>
            <section className="text-center ">
              <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite">
                <Slide bottom>Technical Soundness</Slide>
              </h2>
              <p className="fs18 colorWhite mb40 mobMb20 fThin width76 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                <Slide bottom>
                  At Pixbrand, we know everything there is to know about
                  technologies that are driving innovation in the present market
                  scenario, helping you stay sharp.
                </Slide>
              </p>
            </section>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={3} md={3}>
            <Row>
              <div className="">
                {tabTriggerContent &&
                  tabTriggerContent.map((elem, ind) => {
                    return (
                      <div
                        key={ind}
                        className="pointer mb25 mobMb10"
                        onClick={(e) => handleTab("v" + ind)}
                      >
                        <span
                          className={`verticalTrigger1 colorWhite transition fs24 tabFs18 tabLgFs18 mobFs16 maxWidth70 lh24 mobMr10 ${
                            "v" + ind === verticalTab && "activeTabVer"
                          }`}
                        >
                          <Slide bottom> {elem.title}</Slide>
                        </span>
                      </div>
                    );
                  })}
              </div>
            </Row>
          </Col>
          <Col lg={9} md={9}>
            {TabContent &&
              TabContent.map((elem, index) => {
                return (
                  <>
                    {"v" + index === verticalTab && (
                      <Row className="justify-content-center">
                        <Col lg={7} md={8}>
                          <img
                            src={elem.content}
                            alt=""
                            className="w-100 tabMobView"
                          />
                        </Col>
                      </Row>
                    )}
                  </>
                );
              })}
          </Col>
        </Row>
      </Container>
    </WrapperSkills>
  );
};

export default ImageTab;
