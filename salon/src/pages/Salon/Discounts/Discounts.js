import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { Col, Container, Row, Table } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import GButton from "../../../components/Layout/GButton";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import AssignedService from "./AssignedService";
import DiscountModal from "./DiscountModal";
import "./Discounts.css";
import DiscountsServices from "./DiscountsServices";
import { getDiscounts } from '../../../store/salon/discountlist/action'
import { useDispatch, useSelector } from "react-redux";

const Discounts = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch();
  const discounts = useSelector((state) => {
    return state.discountlist;
  });
  useEffect(() => {
    dispatch(getDiscounts())
  }, [])

  return (
    <>
      <div>
        <div className="d-flex">
          <SalonSidebar />
          {/* <SalonSubMenu /> */}

          <Container fluid className="p-0 salon_pc_container">
            <SalonAuthHeader />
            <div className="card-body ">
              <Row className="align-items-center mb15">
                <Col lg={6}>
                  <h2 className="fs24 lb mb0">{t("SalonDiscounts")}</h2>
                </Col>
                <Col lg={6} className="text-end">
                  <GButton
                    onClick={() =>
                      AlertModal02.show(<DiscountModal />, "", () => {}, "xl")
                    }
                  >
                    <span className="mr5">{Svg.whiteplus}</span>
                    {t("SalonAdddiscount")}
                  </GButton>
                </Col>
              </Row>

              <Row>
                <Table className="salon_membership" responsive>
                  <thead>
                    <tr>
                      <th>Discount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    { Array.isArray(discounts) && discounts.map((items, key) => {
                      return (<>
                      <tr key={key}>
                      <td>
                        <div>
                          <p className="mb-0">{items.name}</p>
                          <p className="mb-0">
                            <span>Up to 20% off-peak discount ·</span>
                            <span className="text-danger">
                              Applied to {items.services} active services
                            </span>{" "}
                          </p>
                        </div>
                      </td>
                      <td>
                        <GButton
                          onClick={() =>
                            AlertModal02.show(
                              <DiscountModal key={'discount'+key} discountid={items._id} />,
                              "",
                              () => {},
                              "xl"
                            )
                          }
                          borderRadius="30px"
                          pt="3px"
                          pb="3px"
                          transform="uppercase"
                          backgroundColor="#5CB84B"
                        >
                          ACTIVE
                        </GButton>
                      </td>
                    </tr>
                      </>)
                    }) }
                  </tbody>
                </Table>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Discounts;
