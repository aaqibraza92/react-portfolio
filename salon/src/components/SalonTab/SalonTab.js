import React, { useState, useEffect } from "react";
import styledComponents from "styled-components";
// import GAutoComplete from "../Layout/GAutoComplete/GAutoComplete";
import Svg from "../../assets/svg/Svg";
import GButton from "../Layout/GButton";
import { Button, Col, Row, CardTitle, Container } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { AuthMembershipPlans } from "../../store/auth/salon/membershipPlans/actions";
import { AuthPurchaseMembership } from "../../store/auth/salon/purchaseMembership/actions";
import { notify } from "react-notify-toast";
import {dateFormatter,nextOneYear,nextOneMonth} from "../../helpers/Global/GlobalFunc/GlobalFunc";

const WrapperSearch = styledComponents.div`
-webkit-border-radius: 8px;
border-radius: 8px;
background: #fff;
padding: 10px;
`;

const TabTrigger = styledComponents.ul`
list-style: none;
display: flex;
padding-left: 0px;
margin-bottom: 0px;

`;

const TabContent = styledComponents.h6`
  color:#5B5D6B;
        
`;

const SalonTab = (props) => {
  const [tab, settab] = useState("Monthly");
  const [plans, setplans] = useState(null);
  const membershipPlans = useSelector((state) => {
    return (
      state.salonMembershipsLists &&
      state.salonMembershipsLists.allmembershipPlans
    );
  });

  useEffect(() => {
    setplans(membershipPlans);
  }, [membershipPlans]);
  const dispatch = useDispatch();

  const iData = {
    planType: tab,
  };
  const successMsg = (resp) => {
    //
  };

  useEffect(() => {
    dispatch(AuthMembershipPlans(iData, successMsg));
  }, [dispatch, tab]);

  const [searchSelectedData, setSearchSelectedData] = useState(null);
  const [value, onChange] = useState("10:00");

  const [startDate, setStartDate] = useState(new Date());


  const spaceRemove = (val) => {
    return val.replace(/ /g, "");
  };
  return (
    <>
      <WrapperSearch className="bg-transparent">
        <TabTrigger className="tab_menu_salon position-relative">
          <li
            className={`tab_li pointer ${tab === "Monthly" && "activeTab"}`}
            onClick={() => settab("Monthly")}
          >
            Monthly
          </li>
          <li
            className={`tab_li pointer ${tab === "Yearly" && "activeTab"}`}
            onClick={() => settab("Yearly")}
          >
            Yearly
          </li>
        </TabTrigger>

        <TabContent>
          {tab === "Monthly" && (
            <div className="mt-4 container p-0">
              <Row>
                {plans &&
                  plans.data.map((elem, ind) => {
                    return (
                      <>
                        <Col md="3" className="mb30">
                          <div className="border pt20 pb10 pl20 pr20 radius box_membership">
                            <GButton
                              backgroundColor="#37A3D2"
                              className={spaceRemove(elem.planName)}
                              borderRadius="30px"
                            >
                              <span className="mr10">{Svg.heart}</span>
                              {elem.planName}
                            </GButton>
                            <MembershipPriceTabletext
                              price={elem.price}
                              monthlyOrYearly={tab}
                              listtext={elem.staffLimit}
                              listtext1={elem.commisionPercent}
                              bookingWidget={elem.bookingWidget}
                              subDomain={elem.subDomain}
                              uniqueDomain={elem.uniqueDomain}
                              choosebutton="Choose Plan"
                              membershipID={elem._id}
                            />
                          </div>
                        </Col>
                      </>
                    );
                  })}
              </Row>
            </div>
          )}

          {tab === "Yearly" && (
            <div className="mt-4 container p-0">
              <Row>
                {plans &&
                  plans.data.map((elem, ind) => {
                    return (
                      <>
                        <Col md="3">
                          <div className="border pt20 pb10 pl20 pr20 radius box_membership">
                            <GButton
                              backgroundColor="#37A3D2"
                              className={spaceRemove(elem.planName)}
                              borderRadius="30px"
                            >
                              <span className="mr10">{Svg.heart}</span>
                              {elem.planName}
                            </GButton>
                            <MembershipPriceTabletext
                              price={elem.price}
                              monthlyOrYearly={tab}
                              listtext={elem.staffLimit}
                              listtext1={elem.commisionPercent}
                              bookingWidget={elem.bookingWidget}
                              subDomain={elem.subDomain}
                              uniqueDomain={elem.uniqueDomain}
                              choosebutton="Choose Plan"
                              membershipID={elem._id}
                            />
                          </div>
                        </Col>
                      </>
                    );
                  })}
              </Row>
            </div>
          )}
        </TabContent>
      </WrapperSearch>
    </>
  );
};

export default SalonTab;

function MembershipPriceTabletext(props) {
  const dispatch = useDispatch();
  const [salonID, setsalonID] = useState("");
  const AuthIDForSalonID = useSelector((state) => {
    return state.authInfo && state.authInfo.authInfo._id;
  });
  useEffect(() => {
    setsalonID(AuthIDForSalonID);
  }, [salonID]);



  const successMsg=(resp)=>{
    let myColor = { background: 'green', text: "#FFFFFF" };
    notify.show(resp.message, "custom", 5000, myColor);
  }
  
  const purchaseMembership = (membershipID,price,monthlyOrYearly) => {
    
    const iData = {
      membershipid: membershipID,
      salonid: salonID,
      startDate: dateFormatter(new Date()),
      endDate: monthlyOrYearly==="Monthly" ? nextOneMonth() : nextOneYear(new Date()),
      amount: price,
      description: "lorem ipsum",
      transactionid: "",
    };

    dispatch(AuthPurchaseMembership(iData, successMsg));

   

  };
  return (
    <>
      <div className="mt20  mb10 d-flex">
        <CardTitle tag="h2" className="lb text-dark lh37 fs32">
        ₺ {props.price}
        </CardTitle>
        <p className="ml10">/ {props.monthlyOrYearly}</p>
      </div>

      <div className="d-flex mb12">
        <span className="mr10">
          {props.listtext > 0 ? Svg.check : Svg.cross}
        </span>
        <span>{props.listtext} Staff Limit</span>
      </div>

      <div className="d-flex mb12">
        <span className="mr10">
          {props.listtext1 > 0 ? Svg.check : Svg.cross}
        </span>
        <span>{props.listtext1} % Commision</span>
      </div>

      <div className="d-flex mb12">
        <span className="mr10">
          {props.bookingWidget ? Svg.check : Svg.cross}
        </span>
        <span>Booking Widget</span>
      </div>

      <div className="d-flex mb12">
        <span className="mr10">{props.subDomain ? Svg.check : Svg.cross}</span>
        <span>Subdomain</span>
      </div>

      <div className="d-flex mb12">
        <span className="mr10">
          {props.uniqueDomain ? Svg.check : Svg.cross}
        </span>
        <span>Unique domain</span>
      </div>

      <div className="mt15 mb12">
        <GButton
          onClick={() => purchaseMembership(props.membershipID,props.price,props.monthlyOrYearly)}
          className="w-100"
          backgroundColor="transparent"
          hoverBg="#FF385C"
          borderRadius="5px"
          border="1px solid #FF385C"
          color="#FF385C"
        >
          {props.choosebutton}
        </GButton>
      </div>
    </>
  );
}
