import React from "react";
import GSpacing from "../../../components/Layout/GSpacing";
import BreadCrum from "../BreadCrum/BreadCrum";
import { CardTitle, Col, Container, Row, Label, Table } from "reactstrap";
import { useTranslation } from "react-i18next";
import GMemberShipPlanBox from "../../../components/Layout/GMemberShipPlanBox/GMemberShipPlanBox";
import Img from "../../../assets/Img/Img";
import Svg from "../../../assets/svg/Svg";
import "./SalonMembershipPlan.css";
import GButton from "../../../components/Layout/GButton";
import GAlign from "../../../components/Layout/GAlign";

const SalonMembershipPlan = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <div className="p_30 mb30">
        <GSpacing>
          <BreadCrum />
        </GSpacing>
        <section className="bgWhite radius mb30 box_shabow">
          {/* <Container fluid>
            <div>
              <Row className=" mb30 align-items-center card-body-box">
                <Col md={12}>
                  <div className="card-body1">
                    <div className="">
                         
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container> */}

          <div className="card-body">
            <Container fluid className="">
              <Row>
                <Col>
                  <div className="card-body-box">
                    <CardTitle tag="h2" className="fs24 lb mb20 mobMb10">
                      {t("AdminMembershipplan")}
                    </CardTitle>

                    <CardTitle tag="h4" className="fs20 lm  mobMb10">
                      {t("Mymembershipplan")}
                    </CardTitle>
                  </div>
                </Col>
              </Row>

              <div className="overflow_y border-bottom pb20 pt20">
                <Col md={4} className="position-relative">
                  <GMemberShipPlanBox
                    Svg_active={Svg.salonmembershipcheck}
                    Svg={Svg.adminsalonmembership}
                    title="Intro plan"
                    days="36 days remaining"
                    price="₺99"
                    month="month"
                    backgroundColor="#37a3d20f"
                    border="1px solid #37a3d2"
                    Buttontext="Cancel Subscription"
                    ButtontextbgColor="#12B0B900"
                    Buttontextborder="1px solid #37a3d2"
                    Buttontextcolor="#37A3D2"
                    color="#000"
                    color_grey="red"
                  />
                </Col>

                <Col md={4}>
                  <GMemberShipPlanBox
                    Svg={Svg.adminsalonmembershipwhite}
                    title="Intro plan"
                    days="36 days remaining"
                    price="₺99"
                    month="month"
                    backgroundImage={Img.linewhite}
                    backgroundColor="#FF385C"
                    border="1px solid #FF385C"
                    Buttontext="Upgrade"
                    ButtontextbgColor="#FFFFFF"
                    Buttontextborder="1px solid #FFFFFF"
                    Buttontextcolor="#FF385C"
                    subtext="Learn more about this plan"
                  />
                </Col>

                <Col md={4}>
                  <GMemberShipPlanBox
                    Svg={Svg.adminsalonmembershipgreen}
                    title="Intro plan"
                    days="36 days remaining"
                    price="₺99"
                    month="month"
                    backgroundImage={Img.linewhite}
                    backgroundColor="#5CB84B"
                    border="1px solid #5CB84B"
                    Buttontext="Upgrade"
                    ButtontextbgColor="#FFFFFF"
                    Buttontextborder="1px solid #FFFFFF"
                    Buttontextcolor="#5CB84B"
                    subtext="Learn more about this plan"
                  />
                </Col>

                <Col md={4}>
                  <GMemberShipPlanBox
                    Svg={Svg.adminsalonmembershipyellow}
                    title="Intro plan"
                    days="36 days remaining"
                    price="₺99"
                    month="month"
                    backgroundImage={Img.linewhite}
                    backgroundColor="#FCB503"
                    border="1px solid #FCB503"
                    Buttontext="Upgrade"
                    ButtontextbgColor="#FFFFFF"
                    Buttontextborder="1px solid #FFFFFF"
                    Buttontextcolor="#FCB503"
                    subtext="Learn more about this plan"
                  />
                </Col>
              </div>

              <div className="border-bottom pb20 pt20">
                <CardTitle tag="h4" className="fs20 lm mb20 mobMb10">
                  {t("Addonplans")}
                </CardTitle>

                <Row>
                  <Col md={4}>
                    <AddonPlans />
                  </Col>
                </Row>
              </div>

              <div className="border-bottom pb20 pt20">
                <Row>
                  <Col md={11}>
                    <CardTitle tag="h4" className="fs20 lm mb20 mobMb10">
                      {t("Enableautorenew")}
                    </CardTitle>
                    <p className="mb-0">{t("EnableautorenewSubtext")}</p>
                  </Col>

                  <Col md={1} className="text-end">
                    <Label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </Label>
                  </Col>
                </Row>
              </div>

              <div className=" pt20">
                <CardTitle tag="h4" className="fs20 lm mb20 mobMb10">
                  {t("Invoicinghistory")}
                </CardTitle>

                <Table className="salon_membership" responsive>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Details</th>
                      <th>Amount</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>07/07/2022</td>
                      <td>Beginner plan, monthly</td>
                      <td>₺99 / month</td>
                      <td>{Svg.pdfdownload} Pdf</td>
                    </tr>
                    <tr>
                      <td>07/07/2022</td>
                      <td>Beginner plan, monthly</td>
                      <td>₺99 / month</td>
                      <td>{Svg.pdfdownload} Pdf</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Container>
          </div>
          <div className="bTop card-body">
            <Row>
              <Col md={6}>
                {" "}
                <p>
                  <span className="mr10">{Svg.Toparoow}</span> {t("AccessSalonDashboard")}
                </p>
              </Col>
              <Col md={6}>
                <div className="card-body-box">
                  <GAlign align="right">
                    <GButton
                      mr="15px"
                      backgroundColor="#fff"
                      color="#000"
                      border="0px solid #707070"
                      hoverBg="#fff"
                      hoveColor="#000"
                      hoverBorder="0px solid #000"
                    >
                      {t("PreviewofBakimRandevu")}
                    </GButton>
                    <GButton>{t("Save")}</GButton>
                  </GAlign>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default SalonMembershipPlan;

const AddonPlans = () => {
  return (
    <>
      <div className="border pt15 pb15 pl15 pr15 radius">
        <div className="">
          <div>
            <Row className="justify-content-betweeen">
              <Col>
                <GButton
                  borderRadius="30px"
                  color="#FF385C"
                  backgroundColor="#ff385c40"
                >
                  Staff plan
                </GButton>
              </Col>
              <Col className="text-end">
                <p className="fs14 mb-0">₺10 / month</p>
                <span className="fs12"> 15 days remaining</span>
              </Col>
            </Row>

            <Row className="align-items-end justify-content-betweeen">
              <Col>
                <div className="d-flex mb8 mt12">
                  <span className="mr10">{Svg.check}</span>
                  <span>5 Staff Limit</span>
                </div>
                <div className="d-flex mb8">
                  <span className="mr10">{Svg.cross}</span>
                  <span>5 Staff Limit</span>
                </div>
                <div className="d-flex">
                  <span className="mr10">{Svg.cross}</span>
                  <span>5 Staff Limit</span>
                </div>
              </Col>
              <Col className="text-end">
                <GButton
                
                  color="#282A3A"
                  backgroundColor="#F5F7F9"
                >
                  Activated
                </GButton>
              </Col>
            </Row>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
