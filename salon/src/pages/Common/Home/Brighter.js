import React from "react";
import { CardText, CardTitle, Col, Container, Row } from "reactstrap";
import Img from "../../../assets/Img/Img";

const Data = [
  {
    image: Img.seven,
    title: "Smart prices",
    subtext: "Just book last-minute, or off-peak",
  },
  {
    image: Img.eight,
    title: "Book 24/7",
    subtext: "From bed, or the bus",
  },
  {
    image: Img.nine,
    title: "Choice of top-rated salons",
    subtext: "Thousands of venues (and reviews)",
  },
  {
    image: Img.ten,
    title: "Easy Reschedule or Cancel",
    subtext: "Thousands of venues (and reviews)",
  },
];

const Citydata = [
  {
    image: Img.London,
    title: "London",
  },
  {
    image: Img.Leeds,
    title: "Leeds",
  },
  {
    image: Img.Edinburgh,
    title: "Edinburgh",
  },
  {
    image: Img.Birmingham,
    title: "Birmingham",
  },
  {
    image: Img.Manchester,
    title: "Manchester",
  },
  {
    image: Img.Liverpool,
    title: "Liverpool",
  },
  {
    image: Img.Glasgow,
    title: "Glasgow",
  },
  {
    image: Img.Leeds,
    title: "Bristol",
  },
  {
    image: Img.Liverpool,
    title: "Liverpool",
  },
  {
    image: Img.Leeds,
    title: "Bristol",
  },
];

const Brighter = () => {
  return (
    <div>
      <Beauty />
      <City />
    </div>
  );
};

export default Brighter;

const Beauty = () => {
  return (
    <div className="mb100 mobMb60 mt_75">
      <Container>
        <div className="text-center">
          <h2 className="fs28 colorBlack lm mb60">
            The brighter way to book beauty
          </h2>
        </div>
        <Row>
          {Data.map((elem, ind) => {
            return (
              <>
                <Col md="3" xs="6" className="mobMb20" align="center" key={ind}>
                  <img className="w-84 mb-3" src={elem.image} alt="third" />
                  <CardTitle className="fs18 colorBlack lm" tag="h5">
                    {elem.title}
                  </CardTitle>
                  <CardText className="fs14 colorGrey">{elem.subtext}</CardText>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

const City = () => {
  return (
    <div className="pt_80 pb_80 bg_light_grey">
      <Container className="tab_overflow">
        <div className="text-center">
          <h2 className="fs28 colorBlack lm mb60">Browse by city</h2>
        </div>
        <Row className="gx-5">
          {Citydata.map((elem, ind) => {
            return (
              <>
                <div className="col-md-3 col-lg-2 col-xl-1 m-auto col-4" align="center" key={ind}>
                  <img className="w-84 mb-3" src={elem.image} alt="third" />
                  <CardTitle className="fs18 colorBlack lm" tag="h5">
                    {elem.title}
                  </CardTitle>
                </div>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
