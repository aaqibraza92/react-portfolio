import React, { useEffect, useState } from "react";
import { CardTitle, Col, Container, Row, Label, Table } from "reactstrap";
import { useTranslation } from "react-i18next";
import Svg from "../../../../assets/svg/Svg";
import GButton from "../../../../components/Layout/GButton";
import Img from "../../../../assets/Img/Img";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";

import { useSelector, useDispatch } from "react-redux";
import { AuthGetMembershipNames } from "../../../../store/auth/salon/getMembershipNameList/actions";
import styled from "styled-components";
import { AuthGetMembershipAddonList } from "../../../../store/auth/salon/getMembershipAddonList/actions";
import {
  getMembershipAddonList,
  membershipAutoRenew,
} from "../../../../helpers/backend";
import { AuthActivatedMembership } from "../../../../store/auth/salon/getActivatedMembership/actions";
import GAlign from "../../../../components/Layout/GAlign";
import { AuthSalonInvoice } from "../../../../store/auth/salon/getSalonInvoice/actions";
import { dateFormatter } from "../../../../helpers/Global/GlobalFunc/GlobalFunc";
import { notify } from "react-notify-toast";
import AlertModal from "../../../../components/AlertModal/AlertModal";
import SalonInvoice from "./SalonInvoice";
import { getSalonInvoice } from "../../../../helpers/backend";
import {
  activeMembershipAddOnDisp,
  getSalonTeams,
} from "../../../../store/salon/activeMembershipAddOn/action";
let myColor = { background: "#4bb543", text: "#FFFFFF" };

const Membership = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const addonIdata = {
    planType: "",
    sort_by: { planType: 1 },
    pagesize: "10",
    page: 1,
  };

  useEffect(() => {
    dispatch(AuthGetMembershipNames());
    dispatch(AuthGetMembershipAddonList(addonIdata));
    dispatch(AuthActivatedMembership());
    dispatch(AuthSalonInvoice());
    dispatch(activeMembershipAddOnDisp());
  }, [dispatch]);

  const selPlansNames = useSelector((state) => {
    return (
      state &&
      state.RedMembershipNamesList.getMembershipNames &&
      state.RedMembershipNamesList.getMembershipNames
    );
  });

  const [plansNames, setPlansNames] = useState(selPlansNames && selPlansNames);
  useEffect(() => {
    setPlansNames(selPlansNames && selPlansNames);
  }, [selPlansNames]);

  const selPlansAddons = useSelector((state) => {
    return (
      state &&
      state.RedMembershipAddon.getMembershipAddon &&
      state.RedMembershipAddon.getMembershipAddon
    );
  });

  const [addonList, setaddonList] = useState(selPlansAddons && selPlansAddons);
  useEffect(() => {
    setaddonList(selPlansAddons && selPlansAddons);
  }, [selPlansAddons]);

  const selActivatedMembership = useSelector((state) => {
    return (
      state &&
      state.RedActivatedMembership.getActivatedMembership &&
      state.RedActivatedMembership.getActivatedMembership
    );
  });

  const [activatedMembershipPlan, setactivatedMembershipPlan] = useState(
    selActivatedMembership && selActivatedMembership
  );
  useEffect(() => {
    setactivatedMembershipPlan(
      selActivatedMembership && selActivatedMembership
    );
  }, [selActivatedMembership]);

  const getSalonInvoice = useSelector((state) => {
    return (
      state &&
      state.RedGetSalonInvoice.getSalonInvoice &&
      state.RedGetSalonInvoice.getSalonInvoice
    );
  });

  const [salonInvoice, setsalonInvoice] = useState(
    getSalonInvoice && getSalonInvoice
  );
  useEffect(() => {
    setsalonInvoice(getSalonInvoice && getSalonInvoice);
  }, [getSalonInvoice]);

  const [renew, setrenew] = useState(false);
  const renewFun = () => {
    setrenew(!renew);
    const iData = {
      enableAutoRenew: renew,
    };
    membershipAutoRenew(iData).then((res) => {
      if (res && res.status === 200) {
        notify.show(res.message, "custom", 5000, myColor);
      }
    });
  };

  const selactiveMembershipAddOn = useSelector((state) => {
    return state && state.fetchActiveMembershipAddOn;
  });

  const [activatedAddon, setactivatedAddon] = useState(
    selactiveMembershipAddOn && selactiveMembershipAddOn
  );
  useEffect(() => {
    setactivatedAddon(selactiveMembershipAddOn && selactiveMembershipAddOn);
  }, [selactiveMembershipAddOn]);

  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 salon_pc_container">
          <SalonAuthHeader />
          <div className="card-body heightVh64">
            <div className="p_30 mb30">
              <section className="bgWhite radius mb30 box_shabow">
                <div className="">
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

                    <div className="ml0 testimonial-group border-bottom pb20 pt20">
                      <Row>
                        {plansNames &&
                          plansNames.map((e, i) => {
                            return (
                              <Col md={4} className="position-relative">
                                <MemberShipPlanBox
                                  active={
                                    activatedMembershipPlan &&
                                    e._id ===
                                      activatedMembershipPlan.activateMembershipId &&
                                    true
                                  }
                                  dark={
                                    activatedMembershipPlan &&
                                    e._id ===
                                      activatedMembershipPlan.activateMembershipId &&
                                    true
                                  }
                                  title={e.planName}
                                  days="36 days remaining"
                                  price={`₺${e.price}`}
                                  month="month"
                                  backgroundColor={
                                    activatedMembershipPlan &&
                                    e._id ===
                                      activatedMembershipPlan.activateMembershipId
                                      ? "#fff"
                                      : "#FF385C"
                                  }
                                  border={
                                    activatedMembershipPlan &&
                                    e._id ===
                                      activatedMembershipPlan.activateMembershipId
                                      ? "1px solid #37a3d2"
                                      : "#FF385C"
                                  }
                                  Buttontext={
                                    activatedMembershipPlan &&
                                    e._id ===
                                      activatedMembershipPlan.activateMembershipId
                                      ? "Cancel Subscription"
                                      : "Upgrade"
                                  }
                                  ButtontextbgColor="#12B0B900"
                                  Buttontextborder="1px solid #37a3d2"
                                  Buttontextcolor="#37A3D2"
                                  color="#000"
                                  color_grey="red"
                                />
                              </Col>
                            );
                          })}
                      </Row>
                    </div>

                    <div className="border-bottom pb20 pt20">
                      <CardTitle tag="h4" className="fs20 lm mb20 mobMb10">
                        {t("Addonplans")}
                        {/*628b3195f1955dc7e5958fbe activatedAddon.activateMembershipId */}
                      </CardTitle>
                      {addonList &&
                        addonList.map((el, i) => {
                          if (el._id === activatedAddon.activateMembershipId) {
                            return (
                              <Row className="gy-3 mb18">
                                <Col md={4}>
                                        <AddOnPlans
                                          planname={activatedAddon.description}
                                          price={activatedAddon.amount}
                                          remainingdays={`${activatedAddon.expDay} Days is Remaining`}
                                          stafflimitstatus={false}
                                          statfflimit=""
                                          subdomain=""
                                          uniquedomain=""
                                          activestatus={true}
                                        />
                                      </Col>
                              </Row>
                            );
                          }
                        })}
                      <Row className="gy-3">
                        {addonList &&
                          addonList.map((e, i) => {
                            return (
                              <Col md={4}>
                                <AddOnPlans
                                  planname={e.planAddonName}
                                  price={e.price}
                                  stafflimitstatus={true}
                                  statfflimit={e.staffLimit}
                                  subdomain={e.subDomain}
                                  uniquedomain={e.uniqueDomain}
                                  activestatus={false}
                                />
                              </Col>
                            );
                          })}
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
                            <input
                              type="checkbox"
                              onChange={(e) => renewFun(e)}
                            />
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
                          {salonInvoice &&
                            salonInvoice.map((val, i) => {
                              return (
                                <tr>
                                  <td>{dateFormatter(val.createdAt)}</td>
                                  <td>
                                    {val.planName && val.planName}{" "}
                                    {val.planType && val.planType}
                                  </td>
                                  <td>
                                    ₺ {val.amount && val.amount} /{" "}
                                    {val.planType && val.planType}
                                  </td>
                                  <td>
                                    <button
                                      onClick={(e) =>
                                        AlertModal.show(
                                          <SalonInvoice data={val} />
                                        )
                                      }
                                      className="colorGrey noBtn"
                                    >
                                      {Svg.pdfdownload} Pdf
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Membership;

// Add on plans
const AddOnPlans = (props) => {
  return (
    <>
      <div className="border pt15 pb15 pl15 pr15 radius">
        <div>
          <div>
            <Row className="justify-content-betweeen">
              <Col>
                <GButton
                  borderRadius="30px"
                  color="#FF385C"
                  backgroundColor="#ff385c40"
                >
                  {props.planname}
                </GButton>
              </Col>
              <Col className="text-end">
                <p className="fs15 mb-0">
                  <span className="lb">₺ {props.price}</span> / month
                </p>
                {props.remainingdays && (
                  <span className="fs12"> {props.remainingdays}</span>
                )}
              </Col>
            </Row>

            <Row className="align-items-end justify-content-betweeen">
              <Col>
                <div className="d-flex mb8 mt12">
                  <span className="mr10">
                    {" "}
                    {props.stafflimitstatus ? Svg.check : Svg.cross}
                  </span>
                  <span>{props.statfflimit} Staff Limit</span>
                </div>
                <div className="d-flex mb8">
                  <span className="mr10">
                    {props.subdomain ? Svg.check : Svg.cross}
                  </span>
                  <span>Subdomain</span>
                </div>
                <div className="d-flex">
                  <span className="mr10">
                    {props.uniquedomain ? Svg.check : Svg.cross}
                  </span>
                  <span>Unique domain</span>
                </div>
              </Col>
              <Col className="text-end">
                {props.activestatus ? (
                  <GButton color="#282A3A" backgroundColor="#F5F7F9">
                    Activated
                  </GButton>
                ) : (
                  <GButton
                    color="#FF385C"
                    backgroundColor="#fff"
                    border="1px solid #FF385C"
                    hoverBg="#FF385C"
                  >
                    Choose Plan
                  </GButton>
                )}
              </Col>
            </Row>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

const Wrap = styled.div`
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
   background-image: ${(props) => `url(../../..${props.bgImage})`};
   background-color: ${(props) => (props.bgColor ? props.bgColor : "#12B0B9")};
   border: ${(props) => (props.border ? props.border : "1px solid red")};
   border-radius: ${(props) => (props.radius ? props.radius : "4px")}; 
   color:${(props) => (props.color ? props.color : "#fff")};
   position-relative;

   .color_grey{
    color: #000;
    opacity: 0.5;
   }
`;

const ButtonText = styled.div`
  background-color: ${(props) =>
    props.ButtontextbgColor ? props.ButtontextbgColor : "transparent"};
  border: ${(props) =>
    props.Buttontextborder ? props.Buttontextborder : "1px solid transparent"};
  border-radius: ${(props) =>
    props.Buttontextradius ? props.Buttontextradius : "4px"};
  color: ${(props) => (props.Buttontextcolor ? props.Buttontextcolor : "#fff")};
`;

// Membership Plan Box
const MemberShipPlanBox = (props) => {
  return (
    <>
      <Wrap
        bgColor={props.backgroundColor}
        border={props.border}
        radius={props.radius}
        bgImage={props.backgroundImage}
        color={props.color}
      >
        <div className="pt20 pb20 pl20 pr20">
          {props.active && (
            <span className="salon_active">
              {props.active && Svg.salonmembershipcheck}
            </span>
          )}
          <Row>
            <Col md={7} className="d-flex">
              {props.dark ? (
                <div className="mr10">{Svg.adminsalonmembershipwhite}</div>
              ) : (
                <div className="mr10">{Svg.heartWhite}</div>
              )}

              <div>
                <h5 className={`${props.dark ? "mb-0 fs15" : "colorWhite"}`}>
                  {props.title}
                </h5>
                <span
                  className={`${
                    props.dark ? "fs12 color_grey" : "fs12 colorWhite"
                  }`}
                >
                  {props.days}
                </span>
              </div>
            </Col>
            <Col md={5}>
              <div className={`${props.dark ? "fs15" : "fs15 colorWhite"}`}>
                {props.price} /
                <span
                  className={`${
                    props.dark ? "fs12 color_grey" : "fs12 colorWhite"
                  }`}
                >
                  {props.month}
                </span>
              </div>
            </Col>

            <Col className="pt15 d-flex align-items-center">
              {props.Buttontext &&
              props.Buttontext === "Cancel Subscription" ? (
                <GButton
                  backgroundColor="transparent"
                  border="1px solid #37a3d2"
                  color="#37A3D2"
                >
                  Cancel Subscription
                </GButton>
              ) : (
                <GAlign alignV="center">
                  <GButton
                    backgroundColor="#fff"
                    border="1px solid #fff"
                    color="#37A3D2"
                  >
                    Upgrade
                  </GButton>
                  <div className="colorWhite fs12 ml15">
                    Learn more about this plan
                  </div>
                </GAlign>
              )}

              {/* <GButton  backgroundColor="transparent" border="1px solid #FF385C" color="#FF385C">Cancel Subscription</GButton>
               <GButton backgroundColor="#fff" border="1px solid #fff" color="#FF385C">Upgrade</GButton>
               <GButton  backgroundColor="transparent" border="1px solid #5CB84B" color="#5CB84B">Cancel Subscription</GButton>
               <GButton backgroundColor="#fff" border="1px solid #fff" color="#5CB84B">Upgrade</GButton>
               <GButton  backgroundColor="transparent" border="1px solid #FCB503" color="#FCB503">Cancel Subscription</GButton>
               <GButton backgroundColor="#fff" border="1px solid #fff" color="#FCB503">Upgrade</GButton>
              <span className="fs14 ml10">Learn more about this plan</span> */}
            </Col>
          </Row>
        </div>
      </Wrap>
    </>
  );
};
