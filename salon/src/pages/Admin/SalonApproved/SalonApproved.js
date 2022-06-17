import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Container,
  Row,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Table,
  Label,
} from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import { postApprovedSalonList } from "../../../store/admin/salonapproved/action";
import { connect, useDispatch, useSelector } from "react-redux";
import BreadCrum from "../BreadCrum/BreadCrum";
import Svg from "../../../assets/svg/Svg";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import GCheckbox from "../../../components/Layout/GCheckbox";
import GAlign from "../../../components/Layout/GAlign";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import GIconInput from "../../../components/Layout/GIconInput";
import CmnRadioBorder from "../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import { Link } from "react-router-dom";


const SalonApproved = (props) => {
  console.log(props);
  const { approvedsalon, onGetApprovedSalon } = props;
  const [approvedSalonList, setApprovedSalonList] = useState(approvedsalon);
  const [paginationData, setPaginationData] = useState({
    search: "",
    sort_by: { title: 1 },
    pagesize: "10",
    page: 1,
  });
  useEffect(() => {
    onGetApprovedSalon(paginationData);
    setApprovedSalonList(approvedsalon);
  }, [onGetApprovedSalon]);

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const dateFormat = (val) => {
    let date = new Date(val);
    let dateMDY = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    return dateMDY;
  };
  return (
    <>
      <div className="row">
        <div className="card_tr">
          <Row className="align-items-center">
            <Col md={8}>
            <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>

  
      <Link to="#" className="colorLightGrey fs14 ml10 mr10">
        {t("Salonapprovedlist")}
      </Link>
            </Col>
            <Col className="text-end" md={4}></Col>
          </Row>
        </div>

        <Col md={12}>
          <div className="card">
            {/* {/ <SalonActions filterData={getFitlerval} /> /} */}
          </div>
          <div className="card table_scroll_salon">
            <section className="bgWhite position-relative">
              <Table responsive className="align-middle  text-start destop_w">
                <thead className="fs14">
                  <tr>
                    <th>
                      <GCheckbox name="1" id="remember" />
                    </th>
                    <th>
                      {t("Salonid")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Salonname")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Representative")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Onlysalontype")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Source")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Employeecount")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Bookingcount")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Clientcount")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Marketing")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Onlylocation")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Mobile")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Onlymembershipplan")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Membershipexpirydate")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Requestat")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>
                      {t("Approvedat")} <span>{Svg.greyfilter}</span>
                    </th>
                    <th>{t("Salonstatus")}</th>
                    <th>{t("Action")}</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedsalon !== undefined &&
                    approvedsalon.data && approvedsalon.data.map((elem, ind) => {
                      console.log("Element", elem);
                      return (
                        <tr
                          className="fs14 colorLightGrey"
                          key={ind.toString()}
                        >
                          <td>
                            <GCheckbox name="1" id="Intro" />
                          </td>
                          <td>{elem.userUniqueId}</td>
                          <td>
                            <span className="text-capitalize">
                              {elem.salonName}
                            </span>
                          </td>
                          <td className="text-capitalize">{elem.ownerName}</td>
                          <td>{elem.businessType}</td>
                          <td>{elem.source}</td>
                          <td>{elem.employees}</td>
                          <td>{elem.bookingcount}</td>
                          <td>{elem.clientcount}</td>
                          <td>{elem.marketing}</td>
                          <td>{elem.location}</td>
                          {/* <td>
                          {elem.location &&
                            elem.location.address &&
                            elem.location.address +
                              ", " +
                              elem.location.city +
                              ", " +
                              elem.location.state +
                              ", " +
                              elem.location.country}
                        </td> */}
                          <td> {elem.mobile && elem.mobile}</td>
                          <td>{elem.membershipplan}</td>
                          <td>{elem.membershipexpirydate}</td>
                          <td>{elem.requestedAt}</td>
                          <td>{elem.approvedAt}</td>
                          <td>{elem.status}</td>
                          <td></td>
                          {/* <td>{elem.email && elem.email}</td>
                        <td>{elem.createdAt && dateFormat(elem.createdAt)}</td>
                        <td>{elem.updatedAt && dateFormat(elem.updatedAt)}</td> */}
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
              <Pagination data={props.data} />
            </section>
          </div>
        </Col>
      </div>
    </>
  );
};
SalonApproved.propTypes = {
  approvedsalon: PropTypes.object,
  onGetApprovedSalon: PropTypes.func,
};
const mapStateToProps = ({ approvedSalonList }) => ({
  approvedsalon: approvedSalonList.salonlist && approvedSalonList.salonlist,
});

const mapDispatchToProps = (dispatch) => ({
  onGetApprovedSalon: (paginationData) =>
    dispatch(postApprovedSalonList(paginationData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalonApproved);

// Pagination Section
const Pagination = (props) => {
  console.log("pagi", props);
  return (
    <>
      <section className="pt10 pb10">
        <Container fluid>
          <Row>
            <Col>
              <span className="fs14 mr10">
                Total {props.data && props.data.totalDocs} Approved salons
              </span>
              <GButton
                onClick={() =>
                  AlertModal02.show(<SendmailModal />, "", () => {}, "lg")
                }
              >
                <span className="mr10">{Svg.Sendmail}</span>
                Send an email
              </GButton>
            </Col>
            <Col className="text-end">
              <div>
                <span className="fs14 mr10">Rows per page :</span>
                <select className="width8 bBottom bBlackBottom">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                <span className="fs14 mr15 ml15">
                  1-{props.data && props.data.totalPages} of{" "}
                  {props.data && props.data.totalDocs}
                </span>
                <span className="mr20">{Svg.leftblackarrow}</span>
                <span>{Svg.rightblackarrow}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

// Send Mail Modal
const SendmailModal = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="box_s border_radius8">
        <div className="border-bottom card_thank">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("FillSalondetailsforsendanemail")}
          </CardTitle>
        </div>
        <div className="card_thank">
          <Row className="align-items-center">
            <Col md={12}>
              <label>{t("Emailsubject")}</label>
              <input type="text" className="form_custom" placeholder="" />
            </Col>

            <Col md={12} className="d-flex mb15">
              <GCheckbox
                name="remember1"
                id="remember9"
                label={t("Showvenue")}
              />
            </Col>

            <Col md={12}>
              <label>{t("Titleheader")}</label>
              <input type="text" className="form_custom" placeholder="" />
            </Col>

            <Col md={12}>
              <label>{t("Messagetext")}</label>
              <textarea
                className="form_custom"
                rows={2}
                cols={2}
                placeholder=""
              ></textarea>
            </Col>

            <Col md={3}>
              <label>{t("Bookingbutton")}</label>
            </Col>

            <Col md={9}>
              <div className="d-flex">
                <CmnRadioBorder
                  id="ert"
                  value="Venue"
                  name="Venue"
                  label={t("Venuepage")}
                  checked
                />
                <CmnRadioBorder
                  id="Bakim"
                  value="Bakim"
                  name="Venue"
                  label={t("Bakimwidge")}
                />
              </div>
            </Col>
            <Col md={12}>
              <label>{t("Footersignature")}</label>
              <input type="text" className="form_custom" placeholder="" />
            </Col>
          </Row>
        </div>
        <div className="border-top card_thank m_bg_footer">
          <div className="d-flex align-items-center justify-content-end">
            <GButton
              mr="15px"
              backgroundColor="#fff"
              color="#000"
              border="1px solid #707070"
              hoverBg="#fff"
              hoveColor="#000"
              hoverBorder="1px solid #000"
            >
              {t("Close")}
            </GButton>
            <GButton>{t("Previewsend")}</GButton>
          </div>
        </div>
      </div>
    </>
  );
};
