import React from "react";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GSpacing from "../../../components/Layout/GSpacing";
import BreadCrum from "../BreadCrum/BreadCrum";
import GMultiImageUpload from "../../../components/Layout/GMultiImageUpload/GMultiImageUpload";
import GImageUploadSalon from "../../../components/Layout/GImageUploadSalon/GImageUploadSalon";
import UpdateSalonRequestTab from "./UpdateSalonRequestTab";

const UpdateSalonImages = () => {
  return (
    <div className="p_30 mb30">
      <GSpacing>
        <BreadCrum />
      </GSpacing>
      <section className="bgWhite radius box_shabow">
        <UpdateSalonRequestTab />
        <Container fluid>
          <div>
            <Row className=" mb30 align-items-center card-body-box">
              <Col md={12}>
                <div className="card-body1">
                  <div className="">
                    <GImageUploadSalon />
                  </div>
                  <div>
                    <GMultiImageUpload />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <Container fluid className="p-0">
          <Row>
            <Col>
              <div className="bTop card-body-box">
                <GAlign align="right">
                  <GButton
                    mr="15px"
                    backgroundColor="#fff"
                    color="#000"
                    border="1px solid #707070"
                    hoverBg="#fff"
                    hoveColor="#000"
                    hoverBorder="1px solid #000"
                  >
                    Close
                  </GButton>
                  <GButton>Save</GButton>
                </GAlign>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default UpdateSalonImages;
