import React from "react";
import {
  CardTitle,
  CardText,
  Col,
  Container,
  Row,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Svg from "../../assets/svg/Svg";
import GButton from "../../components/Layout/GButton";
import GImage from "../../components/Layout/GImage/GImage";
import Img from "../../assets/Img/Img";
import GPasswordInput from "../../components/Layout/GPasswordInput";
import { Link } from "react-router-dom";
import GLink from "../../components/Layout/GLink";
import GIconInput from "../../components/Layout/GIconInput";
import GCheckbox from "../../components/Layout/GCheckbox";
import SalonMembershipPlan from "../Salon/SalonMembershipPlan/SalonMembershipPlan";

const ThankYou = () => {
  
  return (
    <>
      {/* <Container className="pt_45 pb_45">
        <Row>
          <Col className="text-center m-auto" md="4">
            <div className="card_thank box_s border_radius8">
              {Svg.thankyou}
              <CardTitle tag="h3" className="pt25 pb15">
                {" "}
                - Thank you -
              </CardTitle>
              <CardText>
                Phew, an email is now winging its way to you with instructions
                about how to get a new password.
              </CardText>
              <GButton className="w-100">Back to homepage</GButton>
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container className="pt_45 pb_45">
        <Row>
          <Col className="text-center m-auto" md="4">
            <div className="card_thank box_s border_radius8">
              {Svg.succes}
              <CardTitle tag="h3" className="pt25 pb15">
                Successful password reset!
              </CardTitle>
              <CardText>
                You can now use your new password to log in to your account!
              </CardText>
              <GButton className="w-100">Go to my profile</GButton>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <Container className="pt_45 pb_45">
        <Row>
          <Col className="m-auto" md="4">
            <div className="card_thank box_s border_radius8">
              <div className=" text-center">
                <GImage src={Img.lock} />
              </div>
              <CardTitle tag="h3" className="pt25 pb15 text-center">
                Set new password
              </CardTitle>
              <div className=" text-center">
                <span> Change password for </span>
              </div>

              <p className="lm text-center"> piwacob598@toudrum.com</p>

              <GPasswordInput
                label="New password"
                name="password"
                placeholder="Enter Password"
                required="true"
              />
              <GPasswordInput
                label="Re-Enter new password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                required="true"
              />
              <GButton className="w-100 text-center mt-2">
                Change Password
              </GButton>
            </div>
          </Col>
        </Row>
      </Container> */}

      {/* <Container className="pt_45 pb_45">
        <Row>
          <Col className="m-auto" md="6">
            <div className="card_thank box_s border_radius8">
              <GImage src={Img.logo.default} />

              <p className="mt-3">
                We use cookies to personalise content and ads, to provide social
                media features and to analyse our traffic. We also share
                information about your use of our site with our social media,
                advertising and analytics partners.&nbsp;
                <GLink to="#" text="Cookie Policy"></GLink>
              </p>

              <div className="text-end">
                <GButton className="mt-2">Accept All</GButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}


  





    </>
  );
};

export default ThankYou;
