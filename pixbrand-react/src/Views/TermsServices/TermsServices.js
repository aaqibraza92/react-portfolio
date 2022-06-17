import React from "react";
import { Col, Container, Row } from "reactstrap";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

const TermsServices = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms and Conditions - Pixbrand</title>
        <meta
          name="Terms and Conditions"
          content="Pixbrand Terms and Conditions"
        ></meta>
      </Helmet>
      <section className="pt80 tabPt80 mobPt60">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mobtl">
                <Slide bottom>
                  <p className="fs16 colorRed mb20 mobMb10 lsws">
                    LAST UPDATED JANUARY 8, 2020
                  </p>
                  <h1 className="fs80 tabFs60 tabLgFs60 mobFs45 mb20 mobMb10 fw600 colorWhite">
                    Terms of Service
                  </h1>
                  <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite  mb100 mobMb60 mobtl">
                    By visiting our Pixbrand website, a user shall be bound
                    under the aforementioned terms of service. They will also be
                    bound under the rules, regulations, and laws, agreeing to be
                    compliant to all such laws present at the time of website
                    access.
                  </p>
                </Slide>
              </div>
              <Slide bottom>
                <section className="pb30 mobPb15 bBottom pb20 mb60 mobMb30">
                  <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
                    Terms
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    It is to be foretold that if a user is not in complete
                    agreement with the said terms, they are prohibited from
                    accessing the Pixbrand website, as all materials and
                    creative aspects are covered under trade, patent, and
                    copyright laws.
                  </p>
                </section>
              </Slide>
              <Slide bottom>
                <section className="pb30 mobPb15 bBottom pb20 mb60 mobMb30">
                  <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
                    License of Use
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb20 mobMb10">
                    Pixbrand grants permission to make a temporary download a
                    copy of the materials on its website for a view-only,
                    non-commercial purpose. The conditions against this, and
                    ones which will enforce legal action from our end shall be-
                  </p>
                  <ul className="mb0">
                    <li className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb20 mobMb10">
                      make copies or modify the existing material.
                    </li>
                    <li className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb20 mobMb10">
                      attempts to reverse engineer any software products offered
                      by Pixbrand.
                    </li>
                    <li className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb20 mobMb10">
                      make conscious attempts to remove the company watermark or
                      other proprietary materials about company copyright.
                    </li>
                    <li className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                      make conscious attempts to transfer existing data to other
                      third-party servers.
                    </li>
                  </ul>
                </section>
              </Slide>
              <Slide bottom>
                <section className="pb30 mobPb15 bBottom pb20 mb60 mobMb30">
                  <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
                    Material Accuracy
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    Anything(text, designs, typography, tables, statistics,
                    etc.) on the Pixbrand website is subject to unforced errors.
                    It is to be duly noted that such errors are nothing but
                    them, and Pixbrand does not, in any way, state on behalf of
                    such aspects being accurate. However, we are also free to
                    make changes and/or modify the materials present on our
                    website at any given time, without any prior notice.
                  </p>
                </section>
              </Slide>
              <Slide bottom>
                <section className="pb30 mobPb15 bBottom pb20 mb60 mobMb30">
                  <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
                    Service Term Modifications
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    Pixbrand is free to modify, amend, or completely change its
                    terms and policies without providing any prior notice for
                    the same.
                  </p>
                </section>
              </Slide>

              <section className="mb100 mobMb60">
                <Slide bottom>
                  <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
                    Governing Law
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                    All the mentioned terms and conditions have been framed
                    under the laws prevailing in (city or country name) and
                    users agree to work and act following the mentioned city,
                    state, or country.
                  </p>
                </Slide>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TermsServices;
