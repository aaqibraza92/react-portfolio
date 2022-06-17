import React from "react";
import GAlign from "../../../../components/Layout/GAlign";

const SalonInvoice = (props) => {
  console.log("ee",props.data.financeInfo);
  return (
    <div className="pt10 pb10 pl10 pr10">
      <GAlign className="bBottom pb10" align="between">
        <div className="text-capitalize">Plan Name</div>
        <div className="text-capitalize">{props.data && props.data.planName}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">Plan Type</div>
        <div className="text-capitalize">{props.data && props.data.planType}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">Amount</div>
        <div className="text-capitalize">{props.data && props.data.amount}</div>
      </GAlign>

      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">Email</div>
        <div className="text-capitalize">{props.data && props.data.financeInfo && props.data.financeInfo.bussinessEmail}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">Phone</div>
        <div className="text-capitalize">{props.data && props.data.financeInfo && props.data.financeInfo.bussinessPhone}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">Contact Person</div>
        <div className="text-capitalize">{props.data && props.data.financeInfo && props.data.financeInfo.contactPersion}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">Registration No</div>
        <div className="text-capitalize">{props.data && props.data.financeInfo && props.data.financeInfo.registrationNo}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">Address</div>
        <div className="text-capitalize">{props.data && props.data.financeInfo && props.data.financeInfo.address}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">City</div>
        <div className="text-capitalize">{props.data && props.data.financeInfo && props.data.financeInfo.city}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">state</div>
        <div className="text-capitalize">{props.data && props.data.financeInfo && props.data.financeInfo.state}</div>
      </GAlign>
      <GAlign className="bBottom pb10 pt10" align="between">
        <div className="text-capitalize">country</div>
        <div className="text-capitalize">{props.data && props.data.financeInfo && props.data.financeInfo.country}</div>
      </GAlign>
    </div>
  );
};

export default SalonInvoice;
