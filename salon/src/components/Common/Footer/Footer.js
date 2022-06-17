import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardTitle,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  List,
  Row,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import Img from "../../../assets/Img/Img";
import "./Footer.css";
import LanguageDropdown from "../../Multilanguage/LanguageDropdown";

const Footer = () => {
  return (
    <>
      <section className="bg_dark_theme">
        <Container className="pt_45 pb_35">
          <Row>
            <Col md="6" lg="3" xs="6">
              <CardTitle tag="h6" className="text-white">
                Company
              </CardTitle>
              <List className="pl-0 list_style_none footer_ul">
                <li>
                  <Link to="#">About Company</Link>
                </li>
                <li>
                  <Link to="/">We are Hiring</Link>
                </li>
                <li>
                  <Link to="/#">Legal</Link>
                </li>
                <li>
                  <Link to="#">Privacy and Cookie Policy</Link>
                </li>
                <li>
                  <Link to="#">Booking terms</Link>
                </li>
                <li>
                  <Link to="#">User generated content policy</Link>
                </li>
                <li>
                  <Link to="#">Tax strategy</Link>
                </li>
                <li>
                  <Link to="#">Modern Slavery Statement</Link>
                </li>
              </List>
            </Col>

            <Col md="6" lg="3" xs="6">
              <CardTitle tag="h6" className="text-white">
                Discover
              </CardTitle>
              <List className="pl-0 list_style_none footer_ul">
                <li>
                  <Link to="#">Services Guide</Link>
                </li>
                <li>
                  <Link to="#">The Service Files</Link>
                </li>
                <li>
                  <Link to="#">Bakim Randevu Gift Card</Link>
                </li>
                <li>
                  <Link to="#">Sign up for our newsletter</Link>
                </li>
                <li>
                  <Link to="#">The Bakim Randevu Glossary</Link>
                </li>
              </List>
            </Col>
            <Col md="6" lg="3" xs="6">
              <CardTitle tag="h6" className="text-white">
                Partners
              </CardTitle>
              <List className="pl-0 list_style_none footer_ul">
                <li>
                  <Link to="/for-your-business">For your business</Link>
                </li>
                <li>
                  <Link to="#">Partner Help Centre</Link>
                </li>
                <li>
                  <Link to="#">BR & partner terms of business</Link>
                </li>
              </List>
            </Col>
            <Col md="6" lg="3" xs="6">
              <CardTitle tag="h6" className="text-white">
                Contact
              </CardTitle>
              <List className="pl-0 list_style_none footer_ul">
                <li>
                  <Link to="#">Customer Help Centre</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </List>

              <List className="pl-0 list_style_none d-flex social_icon">
                <li>
                  <Link to="#">{Svg.fb}</Link>
                </li>
                <li>
                  <Link to="#">{Svg.instagram}</Link>
                </li>
                <li>
                  <Link to="#">{Svg.tw}</Link>
                </li>
                <li>
                  <Link to="#">{Svg.youtube}</Link>
                </li>
              </List>

              <div className="mb-2">
                <Link to="#">
                  <img src={Img.google} alt="google" />
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img src={Img.app} alt="app" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <section className="footer_bg_line height_3"></section>
        <Container className="pt_15 pb_15">
          <Row className="align-item-center">
            <Col md="9" xs="7">
              <p className="mb-0 fm12 text-white op_5">
                Copyright © 2021 All rights reserved
              </p>
            </Col>
            <Col md="3" xs="5" className="text-start">
              <LanguageDropdown />
             
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
