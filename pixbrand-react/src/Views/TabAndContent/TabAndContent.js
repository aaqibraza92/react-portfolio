import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";

const WrapperSkills = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  margin-bottom: 100px;
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
    padding-top: 0px;
    padding-bottom: 0px;
  margin-bottom: 60px;
    .tabMobView {
      background: #191919;
      padding: 50px 35px;
      margin-top: 20px;
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

const WrapperTabContent = styled.div``;

const TabTriggerWrapper = styled.div``;

const TabAndContent = ({
  title,
  verticaldata1,
  verticaldata2,
  verticaldata3,
  verticaldata4,
  // verticaldata5,
  // verticaldata6,
  // verticaldata7,
  // img,
  // contenttitle,
  verticaldataresult1,
  verticaldataresult2,
  verticaldataresult3,
  verticaldataresult4,
  // verticaldataresult5,
  // verticaldataresult6,
  // verticaldataresult7,
}) => {
  const [verticalTab, setverticalTab] = useState(1);

  return (
    <WrapperSkills>
      <Container>
        <h3 className="fs40 tabFs28 mobFs24 colorWhite mb100 mobMb20">
          {title}
        </h3>
        <Row>
          <Col lg={3} md={3}>
            <TabTriggerWrapper>
              <Row>
                <div className="">
                  <div
                    className="pointer mb25 mobMb10"
                    onClick={(e) => setverticalTab(1)}
                  >
                    <span
                      className={`verticalTrigger1 colorWhite transition fs32 tabFs24 mobFs20 maxWidth70 lh24 mobMr10 ${
                        verticalTab === 1 && "activeTabVer"
                      }`}
                    >
                      {verticaldata1}
                    </span>
                  </div>
                  <div
                    className="pointer mb25 mobMb10"
                    onClick={(e) => setverticalTab(2)}
                  >
                    <span
                      className={`verticalTrigger1 colorWhite transition fs32 tabFs24 mobFs20 maxWidth70 lh24 mobMr10 ${
                        verticalTab === 2 && "activeTabVer"
                      }`}
                    >
                      {verticaldata2}
                    </span>
                  </div>
                  <div
                    className="pointer mb25 mobMb10"
                    onClick={(e) => setverticalTab(3)}
                  >
                    <span
                      className={`verticalTrigger1 colorWhite transition fs32 tabFs24 mobFs20 maxWidth70 lh24 mobMr10 ${
                        verticalTab === 3 && "activeTabVer"
                      }`}
                    >
                      {verticaldata3}
                    </span>
                  </div>
                  <div
                    className="pointer mb25 mobMb10"
                    onClick={(e) => setverticalTab(4)}
                  >
                    <span
                      className={`verticalTrigger1 colorWhite transition fs32 tabFs24 mobFs20 maxWidth70 lh24 mobMr10 ${
                        verticalTab === 4 && "activeTabVer"
                      }`}
                    >
                      {verticaldata4}
                    </span>
                  </div>
                  {/* <div
                    className="pointer mb25 mobMb10"
                    onClick={(e) => setverticalTab(5)}
                  >
                    <span
                      className={`verticalTrigger1 colorWhite transition fs32 tabFs24 mobFs20 maxWidth70 lh24 mobMr10 ${
                        verticalTab === 5 && "activeTabVer"
                      }`}
                    >
                      {verticaldata5}
                    </span>
                  </div> */}
                  {/* <div
                    className="pointer mb25 mobMb10"
                    onClick={(e) => setverticalTab(6)}
                  >
                    <span
                      className={`verticalTrigger1 colorWhite transition fs32 tabFs24 mobFs20 maxWidth70 lh24 mobMr10 ${
                        verticalTab === 6 && "activeTabVer"
                      }`}
                    >
                      {verticaldata6}
                    </span>
                  </div> */}
                  {/* <div
                    className="pointer mb25 mobMb10"
                    onClick={(e) => setverticalTab(7)}
                  >
                    <span
                      className={`verticalTrigger1 colorWhite transition fs32 tabFs24 mobFs20 maxWidth70 lh24 mobMr10 ${
                        verticalTab === 7 && "activeTabVer"
                      }`}
                    >
                      {verticaldata7}
                    </span>
                  </div> */}
                </div>
              </Row>
            </TabTriggerWrapper>
          </Col>
          <Col lg={9} md={9}>
            <WrapperTabContent>
              <Row className="justify-content-center">
                {verticalTab === 1 && (
                  <Col lg={7}>
                    <div className="tabMobView">
                      {/* <div className="mb10">{img}</div> */}
                      {/* <div className="mb10 colorWhite fs20">{contenttitle}</div> */}
                      <p
                        style={{ color: "#7D7D7D" }}
                        className="colorWhite fs17 tabFs15 mobFs15 lh25 "
                      >
                        {verticaldataresult1}
                      </p>
                    </div>
                  </Col>
                )}
                {verticalTab === 2 && (
                  <Col lg={7}>
                    <div className="tabMobView">
                      {/* <div className="mb10">{img}</div> */}
                      {/* <div className="mb10 colorWhite fs20">{contenttitle}</div> */}
                      <p
                        style={{ color: "#7D7D7D" }}
                        className="colorWhite fs17 tabFs15 mobFs15 lh25"
                      >
                        {verticaldataresult2}
                      </p>
                    </div>
                  </Col>
                )}
                {verticalTab === 3 && (
                  <Col lg={7}>
                    <div className="tabMobView">
                      {/* <div className="mb10">{img}</div> */}
                      {/* <div className="mb10 colorWhite fs20">{contenttitle}</div> */}
                      <p
                        style={{ color: "#7D7D7D" }}
                        className="colorWhite fs17 tabFs15 mobFs15 lh25"
                      >
                        {verticaldataresult3}
                      </p>
                    </div>
                  </Col>
                )}
                {verticalTab === 4 && (
                  <Col lg={7}>
                    <div className="tabMobView">
                      {/* <div className="mb10">{img}</div> */}
                      {/* <div className="mb10 colorWhite fs20">{contenttitle}</div> */}
                      <p
                        style={{ color: "#7D7D7D" }}
                        className="colorWhite fs17 tabFs15 mobFs15 lh25"
                      >
                        {verticaldataresult4}
                      </p>
                    </div>
                  </Col>
                )}
                {/* {verticalTab === 5 && (
                  <Col lg={7}>
                    <div className="tabMobView">
                      <div className="mb10">{img}</div>
                      <div className="mb10 colorWhite fs20">{contenttitle}</div>
                      <p
                        style={{ color: "#7D7D7D" }}
                        className="colorWhite fs17 tabFs15 mobFs15 fThin lh25"
                      >
                        {verticaldataresult5}
                      </p>
                    </div>
                  </Col>
                )}
                {verticalTab === 6 && (
                  <Col lg={7}>
                    <div className="tabMobView">
                      <div className="mb10">{img}</div>
                      <div className="mb10 colorWhite fs20">{contenttitle}</div>
                      <p
                        style={{ color: "#7D7D7D" }}
                        className="colorWhite fs17 tabFs15 mobFs15 fThin lh25"
                      >
                        {verticaldataresult6}
                      </p>
                    </div>
                  </Col>
                )}
                {verticalTab === 7 && (
                  <Col lg={7}>
                    <div className="tabMobView">
                      <div className="mb10">{img}</div>
                      <div className="mb10 colorWhite fs20">{contenttitle}</div>
                      <p
                        style={{ color: "#7D7D7D" }}
                        className="colorWhite fs17 tabFs15 mobFs15 fThin lh25"
                      >
                        {verticaldataresult7}
                      </p>
                    </div>
                  </Col>
                )} */}
              </Row>
            </WrapperTabContent>
          </Col>
        </Row>
      </Container>
    </WrapperSkills>
  );
};

export default TabAndContent;
