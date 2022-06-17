import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import styled from "styled-components";
import MenuNav from "./MenuNav";
import $ from "jquery";
import Flip from 'react-reveal/Flip';

const Header = () => {
  const [menuenable, setmenuenable] = useState(false);
  const [delayer, setdelayer] = useState(false);

  const menuFn = (data) => {
    setmenuenable(data);
    setTimeout(() => {
      setdelayer(true);
    }, 500);
  };

  const closemenuFn = (data) => {
    if (data === false) {
      $(".top-layer").removeClass("active");
    }
    setTimeout(() => {
      setmenuenable(data);
      setdelayer(false);
    }, 500);
  };

  useEffect(() => {
    $(".animateTrigger").on("click", function () {
      $(".top-layer").addClass("active");
    });

    if (menuenable) {
      document.body.className = "menuOpened";
      return () => {
        document.body.className = "";
      };
    } else if (menuenable === false) {
      document.body.className = "menuClosed";
      return () => {
        document.body.className = "";
      };
    }

    const buttons = document.getElementsByTagName("button");

    for (const button of buttons) {
      button.addEventListener("click", () => {
        var id = button.getAttribute("id");

        var layerClass = "." + id + "-layer";
        var layers = document.querySelectorAll(layerClass);
        for (const layer of layers) {
          layer.classList.toggle("active");
        }
      });
    }
  });

  return (
    <div>
      <div className="containerEffect">
        <div className="top-layer"></div>
        <div className="top-layer top-layer--2"></div>
        <div className="top-layer top-layer--3"></div>
        <div className="top-layer top-layer--4"></div>
        <div className="top-layer top-layer--5"></div>
      </div>
      <header className="siteHeader pt15 pb15">
        {menuenable && (
          <>{delayer && <MenuNav closeCallback={closemenuFn} />}</>
        )}

        <Container>
          <Row className="align-items-center">
            <WebRightSideHeaderContentWithoutLogin callback={menuFn} />
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Header;

const WebRightSideHeaderContentWithoutLogin = (props) => {
  //const {data}=props;
  const [burgerStatus, setBurgerStatus] = useState(false);

  const burgerMenu = (status) => {
    if (props.callback) {
      props.callback(status);
    }
  };
  return (
    <>
      <Col lg={6} xs={6}>
        <div className="d-flex align-items-center flex-wrap">
          <div className="logo mr20">
            <Link to="/">
              <Flip left >
                <img src={Img.logo.default} alt="" />
              </Flip>
            </Link>
          </div>
        </div>
      </Col>
      <Col lg={6} xs={6} className="d-flex justify-content-end">
        <button
          id="top"
          className="no-link noBtn buttons animateTrigger"
          onClick={() => burgerMenu(true)}
        >
          {Svg.menu}
        </button>
        <div className="buttons aaaaa"></div>
      </Col>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <div onClick={() => setBurgerStatus(false)}>X</div>
        </CloseWrapper>
        <li>
          <Link to="/good-reads">Good Reads</Link>
        </li>
        <li>
          <Link to="/privacy-policy">PrivacyPolicy</Link>
        </li>
      </BurgerNav>
    </>
  );
};

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translate(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  overflow-y: scroll;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      color: #000;
    }
    a:hover {
      color: #ff0a2b;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
