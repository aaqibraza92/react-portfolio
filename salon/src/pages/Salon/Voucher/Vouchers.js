import React, { useState } from "react";
import { Col, Container, Label, Row, Table } from "reactstrap";
import { useTranslation } from "react-i18next";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import GButton from "../../../components/Layout/GButton";
import Svg from "../../../assets/svg/Svg";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import "react-datepicker/dist/react-datepicker.css";
import "./Voucher.css";
import AddVoucher from "./AddVoucher";
import ViewVoucher from "./ViewVoucher";
import SalonSidebar from "../SalonSidebar/SalonSidebar";

const options = [{ value: "Full price", label: "Full price" }];

const Vouchers = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 salon_pc_container">
          <SalonAuthHeader />
          <div className="card-body ">
            <Row className="align-items-center mb15">
              <Col lg={6}>
                <h2 className="fs24 lb mb0">{t("Vouchers")}</h2>
              </Col>
              <Col lg={6} className="text-end">
                <GButton
                  onClick={() =>
                    AlertModal02.show(<AddVoucher />, "", () => {}, "lg")
                  }
                >
                  <span className="mr5">{Svg.whiteplus}</span>
                  {t("AddVouchers")}
                </GButton>
              </Col>
            </Row>

            <Row>
              <Table className="salon_membership" responsive>
                <thead>
                  <tr>
                    <th>Voucher code</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Discount</th>
                    <th>Starting date</th>
                    <th>Ending date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    onClick={() =>
                      AlertModal02.show(<ViewVoucher />, "", () => {}, "lg")
                    }
                  >
                    <td>Holispecial50off</td>
                    <td>12</td>
                    <td>7,90 €</td>
                    <td>0%</td>
                    <td>11/07/2022</td>
                    <td>11/08/2022</td>
                  </tr>
                  <tr
                    onClick={() =>
                      AlertModal02.show(<ViewVoucher />, "", () => {}, "lg")
                    }
                  >
                    <td>Holispecial50off</td>
                    <td>12</td>
                    <td>7,90 €</td>
                    <td>0%</td>
                    <td>11/07/2022</td>
                    <td>11/08/2022</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Vouchers;
