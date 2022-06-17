import React, { useState } from "react";
import BreadCrum from "../BreadCrum/BreadCrum";
import {
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Container,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import Select from "react-select";
import GIconInput from "../../../components/Layout/GIconInput";
import Svg from "../../../assets/svg/Svg";
import GButton from "../../../components/Layout/GButton";
import GCheckbox from "../../../components/Layout/GCheckbox";
import { Link } from "react-router-dom";
import "./SalonReview.css";
import GAlign from "../../../components/Layout/GAlign";

const SalonReviews = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Data table columns
  const columns = [
    { label: <GCheckbox name="1" id="remember" />, field: "statuscheck" },
    {
      label: (
        <div>
          {t("Customername")}
          <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "customerName",
    },
    {
      label: (
        <div>
          {t("Overallrating")} <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "overallRating",
    },
    {
      label: (
        <div>
          {t("Reviewdescription")} <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "reviewDescription",
    },
    {
      label: (
        <div>
          {t("Salon")} <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "salonName",
    },
    {
      label: (
        <div>
          {t("Servicesandrating")} <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "servicesRating",
    },
    {
      label: (
        <div>
          {t("Date")} <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "dateTime",
    },
    {
      label: t("Action"),
      field: "action",
    },
  ];

  // Dummy Row
  let rows = [
    {
      statuscheck: (
        <div>
          <GCheckbox name="greyscissors" id="greyscissors" />
        </div>
      ),
      customerName: "John Doe",
      overallRating: (
        <div className="overall_ratings overall_ratings_green">4</div>
      ),
      reviewDescription: (
        <section>
          <Row>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
          </Row>

          <p className="fs14 mb10 colorGrey">
            I had my balayage done by Silvana,she listen to what I wanted done
            and did an amazing job ,definitely would recommend this place.
          </p>
          <GAlign>
            <div className="borderBlue mr15"></div>
            <div>
              <h3 className="fs14 colorBlue">Venue Reply</h3>
              <h3 className="fs14 colorBlack mb0">Thank you</h3>
            </div>
          </GAlign>
        </section>
      ),
      salonName: "Brows & Beauty Masters",
      servicesRating: (
        <GAlign>
          <span>4</span>
          <span className="ml5 mr5">{Svg.star}</span>
          <span> Ladies - wash, cut & blow dry</span>
        </GAlign>
      ),
      dateTime: "15-04-2022 23:25:50",
      action: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="btn btn-danger">
              <span>{Svg.horizontalellipsis}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="mb10">
                    <Link to="#" className="colorBlack">
                      <span className="mr5">{Svg.pencil}</span>
                      {t("Viewonlistingpage")}
                    </Link>
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.delete}</span>
                      {t("Delete")}
                    </span>
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
    {
      statuscheck: (
        <div>
          <GCheckbox name="greyscissors" id="greyscissors" />
        </div>
      ),
      customerName: "John Doe",
      overallRating: (
        <div className="overall_ratings overall_ratings_green">4</div>
      ),
      reviewDescription: (
        <section>
          <Row>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
          </Row>

          <p className="fs14 mb10 colorGrey">
            I had my balayage done by Silvana,she listen to what I wanted done
            and did an amazing job ,definitely would recommend this place.
          </p>
          <GAlign>
            <div className="borderBlue mr15"></div>
            <div>
              <h3 className="fs14 colorBlue">Venue Reply</h3>
              <h3 className="fs14 colorBlack mb0">Thank you</h3>
            </div>
          </GAlign>
        </section>
      ),
      salonName: "Brows & Beauty Masters",
      servicesRating: (
        <GAlign>
          <span>4</span>
          <span className="ml5 mr5">{Svg.star}</span>
          <span> Ladies - wash, cut & blow dry</span>
        </GAlign>
      ),
      dateTime: "15-04-2022 23:25:50",
      action: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="btn btn-danger">
              <span>{Svg.horizontalellipsis}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="mb10">
                    <Link to="#" className="colorBlack">
                      <span className="mr5">{Svg.pencil}</span>
                      {t("Viewonlistingpage")}
                    </Link>
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.delete}</span>
                      {t("Delete")}
                    </span>
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
    {
      statuscheck: (
        <div>
          <GCheckbox name="greyscissors" id="greyscissors" />
        </div>
      ),
      customerName: "John Doe",
      overallRating: (
        <div className="overall_ratings overall_ratings_green">4</div>
      ),
      reviewDescription: (
        <section>
          <Row>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
          </Row>

          <p className="fs14 mb10 colorGrey">
            I had my balayage done by Silvana,she listen to what I wanted done
            and did an amazing job ,definitely would recommend this place.
          </p>
          <GAlign>
            <div className="borderBlue mr15"></div>
            <div>
              <h3 className="fs14 colorBlue">Venue Reply</h3>
              <h3 className="fs14 colorBlack mb0">Thank you</h3>
            </div>
          </GAlign>
        </section>
      ),
      salonName: "Brows & Beauty Masters",
      servicesRating: (
        <GAlign>
          <span>4</span>
          <span className="ml5 mr5">{Svg.star}</span>
          <span> Ladies - wash, cut & blow dry</span>
        </GAlign>
      ),
      dateTime: "15-04-2022 23:25:50",
      action: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="btn btn-danger">
              <span>{Svg.horizontalellipsis}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="mb10">
                    <Link to="#" className="colorBlack">
                      <span className="mr5">{Svg.pencil}</span>
                      {t("Viewonlistingpage")}
                    </Link>
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.delete}</span>
                      {t("Delete")}
                    </span>
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
    {
      statuscheck: (
        <div>
          <GCheckbox name="greyscissors" id="greyscissors" />
        </div>
      ),
      customerName: "John Doe",
      overallRating: (
        <div className="overall_ratings overall_ratings_green">4</div>
      ),
      reviewDescription: (
        <section>
          <Row>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className="fs14 colorGrey">Ambiance</h4>
                <div className="d-flex align-items-center">
                  <h3 className="fs14 colorGrey mr5 mb0">4</h3>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.star}</span>
                  <span className="mr5">{Svg.bggreystar}</span>
                  <span>{Svg.bggreystar}</span>
                </div>
              </div>
            </Col>
          </Row>

          <p className="fs14 mb10 colorGrey">
            I had my balayage done by Silvana,she listen to what I wanted done
            and did an amazing job ,definitely would recommend this place.
          </p>
          <GAlign>
            <div className="borderBlue mr15"></div>
            <div>
              <h3 className="fs14 colorBlue">Venue Reply</h3>
              <h3 className="fs14 colorBlack mb0">Thank you</h3>
            </div>
          </GAlign>
        </section>
      ),
      salonName: "Brows & Beauty Masters",
      servicesRating: (
        <GAlign>
          <span>4</span>
          <span className="ml5 mr5">{Svg.star}</span>
          <span> Ladies - wash, cut & blow dry</span>
        </GAlign>
      ),
      dateTime: "15-04-2022 23:25:50",
      action: (
        <>
          <UncontrolledDropdown>
            <DropdownToggle className="btn btn-danger">
              <span>{Svg.horizontalellipsis}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="mb10">
                    <Link to="#" className="colorBlack">
                      <span className="mr5">{Svg.pencil}</span>
                      {t("Viewonlistingpage")}
                    </Link>
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack">
                      <span className="mr10">{Svg.delete}</span>
                      {t("Delete")}
                    </span>
                  </li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="row">
        <div className="card_tr">
          <Row className="align-items-center">
            <Col md={12}>
              <BreadCrum />
            </Col>
          </Row>
        </div>

        <Col md={12}>
          <div className="card">
            <SalonReviewActions />
          </div>
          <div className="card">
            <div className="table_scroll reviews_table reviews_tb sticky_td sticky_th review_table_td_top">
              <AdminDataTable
                key="ReviewsTable"
                columns={columns}
                rows={rows}
              />
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default SalonReviews;

// Action Part which is below breadcrum part
const SalonReviewActions = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  // For Columns Object
  const Columns = [
    { value: "salonname", label: t("Salonname") },
    { value: "representative", label: t("Representative") },
    { value: "employeecount", label: t("Employeecount") },
    { value: "onlylocation", label: t("Onlylocation") },
    { value: "onlysalontype", label: t("Onlysalontype") },
    { value: "googlemap", label: t("Googlemap") },
    { value: "status", label: t("Status") },
    { value: "mobile", label: t("Mobile") },
    { value: "emailaddress", label: t("Emailaddress") },
    { value: "requestat", label: t("Requestat") },
    { value: "updateat", label: t("Updateat") },
    { value: "notes", label: t("Notes") },
    { value: "action", label: t("Action") },
  ];

  const [searchFilter, setsearchFilter] = useState("");

  const [columns, setcolumns] = useState({ value: "", label: "Columns" });

  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={1} md={3} className="mobMb15">
              <span className="fs14 colorLightGrey">{t("Allrequest")}</span>
            </Col>
            <Col lg={2} md={3} className="mobMb15">
              <div className="select_border">
                <Select
                  label="Account type *"
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  options={Columns}
                  value={columns}
                  onChange={(e) => setcolumns(e)}
                />
              </div>
            </Col>

            <Col lg={3} md={3} className="mobMb15 d-flex align-items-center">
              <GIconInput
                value={searchFilter}
                name="searchfilter"
                placeholder="Search here..."
                iconRight={Svg.search}
                paddingBottom="0px"
                onChange={(e) => setsearchFilter(e.target.value)}
              />
              <span className="fs14 colorGrey ml20 text-underline">
                {t("Resetall")}
              </span>
            </Col>

            <Col
              lg={6}
              md={12}
              className="text-end d-flex justify-content-end button_mr align-items-center mobile_b"
            >
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #000"
                hoverBg="#fff"
                hoveColor="#000"
                hoverBorder="1px solid #000"
              >
                <span className="mr5">{Svg.export}</span>
                {t("Export")}
              </GButton>
              <UncontrolledDropdown>
                <DropdownToggle className="p-0">
                  <GButton
                    backgroundColor="#fff"
                    color="#000"
                    border="1px solid #000"
                    hoverBg="#fff"
                    hoveColor="#000"
                    hoverBorder="1px solid #000"
                  >
                    {t("Action")}
                    <span className="ml5">{Svg.downblackarrowsmall}</span>
                  </GButton>
                </DropdownToggle>
                <DropdownMenu className="radius4 shadow noBorder">
                  <DropdownItem>
                    <ul className="noBg noUl mb0">
                      <li className="pt10 pb10">
                        <span className="fs14 d-block w-100 colorBlack">
                          <span className="mr10">{Svg.delete}</span>
                          {t("Delete")}
                        </span>
                      </li>
                    </ul>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
