import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import $ from "jquery";

const WrapperSkills = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  background: #111111; /* Old browsers */
  background: -moz-linear-gradient(
    to right,
    #111 33%,
    #191919 20%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    to right,
    #111 33%,
    #191919 20%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #111 33%, #191919 20%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#111111', endColorstr='#707070',GradientType=1 ); /* IE6-9 */
  @media only screen and (max-width: 767px) {
    background: none;
    .tabMobView {
      background: #191919;
      padding: 50px 35px;
      margin-top: 20px;
    }
  }
  h3 {
    padding-bottom: 10px;
  }
  .verticalTrigger1 {
    border-bottom: 1px solid transparent;
  }
  .activeTabVer {
    border-color: #fff;
  }
  .verticalTrigger1 {
    display: inline-block;
    padding-bottom: 5px !important;
  }
  .runningLine::after {
    background: #fff;
  }
`;

const WrapperTabContent = styled.div``;

const TabTriggerWrapper = styled.div``;

const tabTriggerContent = [
  {
    title: "Perfection",
  },
  {
    title: "Ideas",
  },
  {
    title: "Xcellence",
  },
];

const TabContent = [
  {
    content:
      "For every project or client onboarded, Pix Brand is committed to utmost perfection in delivery and support. In this industry, perfection is the bare minimum and we understand that completely.",
  },
  {
    content:
      "At the end of the day, it is the right set of ideas that need to be thought upon to deliver something unique and cutting-edge, every single time. This is what we strive to do at Pix Brand.",
  },
  {
    content:
      "For us, it's Xcellence, because we ensure to bring the X-factor in everyday excellence. It's important to help you stay ahead of whichever domain you belong to, and this counts in the long-term.",
  },
];

const Skills = () => {
  const isElementInViewport = (elem) => {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem =
      navigator.userAgent.toLowerCase().indexOf("webkit") != -1
        ? "body"
        : "html";
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return elemTop < viewportBottom && elemBottom > viewportTop;
  };

  const checkAnimation = () => {
    var $elem = $(".lineAnimateSkill");

    // If the animation has already been started
    if ($elem.hasClass("start")) return;

    if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass("start");
    }
  };

  useEffect(() => {
    $(window).scroll(function () {
      checkAnimation();
    });
  });

  const [verticalTab, setverticalTab] = useState("v0");
  const handleTab = (ind) => {
    setverticalTab(ind);
  };
  return (
    <div>
      <WrapperSkills>
        <Container>
          <Slide bottom>
            <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb100 mobMb15 lineAnimateSkill">
              We make you stand with PIX
            </h3>
          </Slide>

          <Row>
            <Col lg={3} md={3}>
              <TabTriggerWrapper>
                <Row>
                  <Slide bottom>
                    <div className="verticalTabbing">
                      {tabTriggerContent &&
                        tabTriggerContent.map((elem, ind) => {
                          return (
                            <div
                              key={ind}
                              className="pointer mb25 mobMb10"
                              onClick={(e) => handleTab("v" + ind)}
                            >
                              <span
                                className={`verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10 ${
                                  "v" + ind === verticalTab && "runningLine"
                                }`}
                              >
                                {elem.title}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </Slide>
                </Row>
              </TabTriggerWrapper>
            </Col>
            <Col lg={9} md={9}>
              {TabContent &&
                TabContent.map((elem, index) => {
                  return (
                    <>
                      {"v" + index === verticalTab && (
                        <WrapperTabContent key={"q" + index}>
                          <Row
                            className={`${
                              "v" + index === verticalTab && ""
                            } justify-content-center`}
                          >
                            <Col lg={7} md={8}>
                              <Slide bottom>
                                <p
                                  style={{ color: "#7D7D7D" }}
                                  className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                                >
                                  {elem.content}
                                </p>
                              </Slide>
                            </Col>
                          </Row>
                        </WrapperTabContent>
                      )}
                    </>
                  );
                })}
            </Col>
          </Row>
        </Container>
      </WrapperSkills>
    </div>
  );
};

export default Skills;
