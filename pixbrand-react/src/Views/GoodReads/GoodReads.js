import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import { Helmet } from "react-helmet";

const Cards = [
  {
    img: Img.goodreads1,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads2,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads3,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads4,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads5,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads6,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads7,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads8,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads9,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads10,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads11,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
  {
    img: Img.goodreads12,
    pretitle: "JULY 05, 2021",
    title: "New jersey website design company – pix brand",
    desc: "Establishing the right visual connection with your customers and users by creating eye-catching",
    linkto: "/terms-services",
  },
];

const GoodReads = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Pixbrand</title>
        <meta name="Blog" content="Pixbrand Blog"></meta>
      </Helmet>
      <Title />
      <Trophy />
      <Products />
    </>
  );
};

export default GoodReads;

{
  /* <h2 className="colorBlack fs60 tabFs40  tabLgFs40 mobFs32 mb60 mobMb30">
  <Slide bottom>
    Let’s get on a newfound journey together and make an impact!
  </Slide>
</h2>; */
}

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={10} lg={10} md={12}>
            <section className="text-center mobtl">
              <h1 className="fs80 tabFs60 tabLgFs60 mobFs45 fw600 colorWhite mb20">
                Some Good Reads for You!
              </h1>
              <p className="fs24 colorWhite width70 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                Here are some of our curated blogs, fitting for a New Jersey web
                development company like us.
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Trophy
const Trophy = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <div>
              <GImage radius="24px" radiusMob="15px" src={Img.cup} />
            </div>
          </Col>
          <Col md={6}>
            <section className="d-flex justify-content-between mobMl0 ml40">
              <div>
                <p className="fs16 colorLightBlack">JULY 05, 2021</p>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite">
                  New jersey website design company – pix brand
                </h2>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorLightBlack">
                  Establishing the right visual connection with your customers
                  and users by creating eye-catching and memorable designs.
                </p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Products = (props) => {
  return (
    <>
      <Container>
        <Row>
          {Cards.map((obj, ind) => {
            return (
              <>
                <Col lg={4} md={4} className="" key={"p" + ind}>
                  <section className="mb80 mobMb40">
                    <div className="mb20 mobMb10">
                      <GImage radius="24px" radiusMob="15px" src={obj.img} />
                    </div>
                    <p className="fs16 colorLightBlack mb0">{obj.pretitle}</p>
                    <div className="mb20 mobMb10">
                      <Link
                        to={obj.linkto}
                        className="colorWhite fs28 tabFs20 tabLgFs20 mobFs18 "
                      >
                        {obj.title}
                      </Link>
                    </div>
                    <p className="fs20 colorLightBlack mobFs16 mb0">
                      {obj.desc}
                    </p>
                  </section>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
