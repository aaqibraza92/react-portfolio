import React from "react";
import { Col, Container, Row } from "reactstrap";
import GButton from "../../Components/GComponents/GButton";
import Portfolio from "../Home/Portfolio/Portfolio";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";

// const Data = [
//   { id: 1, name: "lorem", img: Img.cp1, title: "lorem", text: "lorem" },
// ];

const MainPortfolioPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - Pixbrand</title>
        <meta name="Portfolio" content="Pixbrand Portfolio"></meta>
      </Helmet>
      <Title />
      <Buttons />
      <Portfolio />
      {/* <PortfolioPage path={"/house-tripping"} /> */}
    </div>
  );
};

export default MainPortfolioPage;

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row>
          <Col xl={10} lg={10} md={12}>
            <section>
              <Slide bottom>
                <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                  The work we do,
                </h1>
                <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                  and the people we help.
                </h1>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Buttons
const Buttons = () => {
  return (
    <>
      <Container className="mb120 mobMb75">
        <section className="port-btn">
          <Slide bottom>
            <div className="port-btn-scroll">
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                All Projects
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Application
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Website
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Branding
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Service Provider
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Food & Grocery
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Real Estate
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Rental/Booking
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                E-Commerce
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Delivery
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Dating
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Logos
              </GButton>
              <GButton
                borderRadius="25px"
                mr="10px"
                mb="15px"
                mobpt="5px"
                mobpb="5px"
                mobmb="8px"
                mobmr="5px"
                mobfs="12px"
              >
                Dashboard
              </GButton>
            </div>
          </Slide>
        </section>
      </Container>
    </>
  );
};

// Practice
// const Practice = () => {
//   return (
//     <div>
//       {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, ind) => {
//         console.log("ele", el);
//         console.log("index", ind);
//         return (
//           <div>
//             <h1>Hello, World !</h1>
//             <p>Lorem ipsum dolor sit amet consectetur.</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// Content Show
// const Content = () => {
//   return(
//     <>
//       {Data.map((el)=>{
//         return(
//           <div className="colorWhite" key={el.id}>
//             <h1>{el.id}</h1>
//             <h1>{el.name}</h1>
//             <h1>{el.title}</h1>
//             <h1>{el.text}</h1>
//             <img src={Img.cp4} alt="" className="w-1"/>
//           </div>
//         )
//       })}
//     </>
//   )
// }
