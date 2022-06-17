import React from "react";
import {  useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import Img from "../../assets/Img/Img";
import GButton from "../../components/Layout/GButton";
import GLink from "../../components/Layout/GLink";

export default function Unauthorized() {
  const history = useNavigate();
  return (
    <>
      <Container>
        <div
          style={{ height: "90vh" }}
          className="w-100 d-flex justify-content-center flex-column align-items-center"
        >
          <div>
            <img src={Img.unauthorized} alt="" className="mb30 w-100" />
          </div>
          <h1 className="fBold">404</h1>
          <br />
          <p style={{color: "#888"}}>
            Sorry, the page you are looking for cannot be found.{" "}
          </p>
          <div className="d-flex mb15 align-items-center">
            <GButton
              onClick={(e) => {
                history.goBack();
              }}
            >
              Go Back
            </GButton>
            <GLink
             to="/"
              backgroundColor="#fff"
              color="#000"
              border="1px solid #E8E9E9"
              marginLeft="10px"
              paddingLeft="10px"
              paddingRight="10px"
              paddingTop="8px"
              paddingBottom="8px"
            >
              Go Home
            </GLink>
          </div>
          <GLink
            to="#"
            text="Get a Quotation"
            textDecoration="underline"
           
          ></GLink>
        </div>
      </Container>
    </>
  );
}
