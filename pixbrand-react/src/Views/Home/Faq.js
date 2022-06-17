import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import GSectionTitle from "../../Components/GComponents/GSectionTitle";
import Fade from "react-reveal/Fade";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const WrapperFaq = styled.div`
  background-color: #111;
`;
const Faq = () => {
  return (
    <div>
      <WrapperFaq className="pt80 pb100">
        <Container className="overflow-hidden">
          <Fade bottom >
            <div>
              <GSectionTitle
                titlecolor="#fff"
                maxWidth="90%"
                fsT="40px"
                fsSubT="22px"
                mbT="25px"
                subtitlecolor="#fff"
                title="Frequently asked questions"   
              />
            </div>
          </Fade>

          <Row className="mt25 mobMt0 gx-5">
            <Col lg={7} md={7}>
              <div className="prr30">
                <Accordion>
                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How a good web design helps businesses?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Web design has become the first point of contact for
                          businesses of all shapes and sizes. With the onslaught
                          of digital resources for customers, good web design
                          has become important for businesses. Here’s why-
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Perfect First Impression
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          A nicely done web design makes for a great first
                          impression on every visitor coming over to the
                          business site.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>Better SEO</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Without a website, it will always be difficult to
                          ensure visibility amidst competition in search engine
                          results. A great web development company assists with
                          that.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Better Consistency
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          With properly designed web pages, a business can
                          create a consistent brand across the entire website
                          profile. It helps in reducing the bounce rate of the
                          web pages too. These and many more are the reasons why
                          you should always pay a lot of attention to the web
                          design for your business- a place where we can help
                          you out.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What is the difference between web design and web
                          development?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <ul className="mb0 ">
                          <li className="colorPara mb10 fs17 tabFs15 tabLgFs15 mobFs15 ">
                            Web design - Web design in its essence, refers to
                            the abstract aspects of a website that determine its
                            overall usability. As far as web design is
                            concerned, the developers use different tools to
                            create varying templates for designing related
                            visual aspects within the website.
                          </li>
                          <li className="colorPara fs17 tabFs15 tabLgFs15 mobFs15 ">
                            Web Development - In web development, the developers
                            choose a design and then create a fully functional
                            website with the help of web creation tools like
                            CSS, Javascript, to enliven the design files and
                            create the right website.
                          </li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Are our websites mobile responsive?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          At Pix Brand, we have been creating spectacular mobile
                          and web products since 2017. To ensure that we create
                          cross-platform applications and websites, we employ
                          the use of the latest technologies and development
                          frameworks which are then followed by intense testing
                          and Quality Assurance practices. The final product
                          coming at you is, expectedly, bug-free, smooth, and
                          sticks to our Pix mantra with perfection.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Can I get access to the website after it is finished?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Pix Brand takes its commitment to professionalism and
                          transparency very seriously, which is why after we
                          complete your website, we take you through all the
                          logs, credentials, and using all the other features of
                          the site. Despite that, we are always there for all
                          our clients, and that’s not just client support-
                          that’s our Pix Brand promise.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>
                </Accordion>
              </div>
            </Col>
            <Col lg={5} md={5} className="dNoneXs">
              <Row className="justify-content-right text-end mb28">
                <Col lg={2}></Col>
                <Col lg={10}>
                  <Fade bottom >
                    <GImage src={Img.faq1} radius="10px" />
                  </Fade>
                </Col>
              </Row>
              <Row className="justify-content-right text-end">
                <Col lg={4} md={4}>
                  <Fade bottom >
                    <GImage src={Img.faq2} radius="10px" />
                  </Fade>
                </Col>
                <Col lg={8} md={8}>
                <Fade bottom >
                  <GImage src={Img.faq3} width="100%" radius="10px" />
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </WrapperFaq>
    </div>
  );
};

export default Faq;
