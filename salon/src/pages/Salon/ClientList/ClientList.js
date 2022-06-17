import React from "react";
import {
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Container,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GButton from "../../../components/Layout/GButton";
import GIconInput from "../../../components/Layout/GIconInput";
import { useTranslation } from "react-i18next";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import SalonDataTablePagination from "../SalonDataTable/SalonDataTablePagination";
import ConsentFilters from "./ConsentFilters";
import BookingsFilters from "./BookingsFilters";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import LastVisitFilters from "./LastVisitFilters";
import AddClientDetails from "./AddClientDetails";

const ClientList = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Data table columns
  const columns = [
    {
      label: (
        <div>
          <span className="mr5">{Svg.uparrowred}</span>
          <span className="mr5">{t("Firstname")}</span>
          <span>{t("Lastname")}</span>
        </div>
      ),
      field: "name",
    },
    {
      label: t("Phone"),
      field: "phone",
    },
    {
      label: t("Email"),
      field: "email",
    },
    {
      label: (
        <div
          onClick={() =>
            AlertModal02.show(<ConsentFilters />, "", () => {}, "md")
          }
          className="pointer"
        >
          {/* <div>
            <div>{Svg.uparrowsmallgrey}</div>
            <div>{Svg.downarrowsmallgrey}</div>
          </div> */}
          {t("Consent")} <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "consent",
    },
    {
      label: (
        <div
          onClick={() =>
            AlertModal02.show(<BookingsFilters />, "", () => {}, "md")
          }
          className="pointer"
        >
          {t("Bookings")} <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "bookings",
    },
    {
      label: t("Revenue"),
      field: "revenue",
    },
    {
      label: (
        <div
          onClick={() =>
            AlertModal02.show(<LastVisitFilters />, "", () => {}, "md")
          }
          className="pointer"
        >
          {t("Lastvisit")} <span>{Svg.greyfilter}</span>
        </div>
      ),
      field: "lastVisit",
    },
  ];

  // Dummy Row
  let rows = [
    {
      name: "Emma Watson",
      phone: "+44 (876)  543-2100",
      email: "emma@email.com",
      consent: Svg.right,
      bookings: "5",
      revenue: "₺200",
      lastVisit: "18/12/2022 (13 days ago)",
    },
    {
      name: "Emma Watson",
      phone: "+44 (876)  543-2100",
      email: "emma@email.com",
      consent: Svg.right,
      bookings: "5",
      revenue: "₺200",
      lastVisit: "18/12/2022 (13 days ago)",
    },
    {
      name: "Emma Watson",
      phone: "+44 (876)  543-2100",
      email: "emma@email.com",
      consent: Svg.right,
      bookings: "5",
      revenue: "₺200",
      lastVisit: "18/12/2022 (13 days ago)",
    },
    {
      name: "Emma Watson",
      phone: "+44 (876)  543-2100",
      email: "emma@email.com",
      consent: Svg.right,
      bookings: "5",
      revenue: "₺200",
      lastVisit: "18/12/2022 (13 days ago)",
    },
    {
      name: "Emma Watson",
      phone: "+44 (876)  543-2100",
      email: "emma@email.com",
      consent: Svg.right,
      bookings: "5",
      revenue: "₺200",
      lastVisit: "18/12/2022 (13 days ago)",
    },
    {
      name: "Emma Watson",
      phone: "+44 (876)  543-2100",
      email: "emma@email.com",
      consent: Svg.right,
      bookings: "5",
      revenue: "₺200",
      lastVisit: "18/12/2022 (13 days ago)",
    },
  ];

  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 bgCream salon_pc_container">
          <SalonAuthHeader />
          <div className="card-body ">
            <ClientListActions />
            <SalonDataTablePagination
              key="ClientListTable"
              columns={columns}
              rows={rows}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ClientList;

// Action Part which is below breadcrum part
const ClientListActions = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col xl={6} lg={3} md={6} className="mobMb15">
              <h1 className="fs24 lb mb0">{t("Clientlist")}</h1>
            </Col>
            <Col xl={3} lg={4} md={6} className="mobMb15">
              <GIconInput
                placeholder={t("Searchhere")}
                iconLeft={Svg.search}
                paddingBottom="0px"
              />
            </Col>
            <Col
              xl={3}
              lg={5}
              md={12}
              className="text-end p-0 d-flex justify-content-end"
            >
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #000"
                hoverBg="#fff"
                hoveColor="#000"
                hoverBorder="1px solid #000"
                mr="15px"
              >
                {t("Export")}
                <span className="ml5">{Svg.export}</span>
              </GButton>

              <UncontrolledDropdown>
                <DropdownToggle>
                  <GButton>
                    <span className="mr5">{Svg.whiteplus}</span> {t("Addto")}
                  </GButton>
                </DropdownToggle>
                <DropdownMenu className="radius4 shadow noBorder addto-dropdown">
                  <DropdownItem className="addto-dropdown-items">
                    <ul className="noBg noUl mb0">
                      <li
                        className="mb10 pl15 pr15 pb10 border-bottom"
                        onClick={() =>
                          AlertModal02.show(
                            <AddClientDetails />,
                            "",
                            () => {},
                            "lg"
                          )
                        }
                      >
                        <span className="fs14 d-block w-100 colorBlack">
                          <span className="mr10">{Svg.blackplus}</span>
                          {"Addnewcustomer"}
                        </span>
                      </li>

                      <li className="pl15 pr15">
                        <span className="fs14 d-block w-100 colorBlack">
                          <span className="mr10">{Svg.import}</span>{" "}
                          {t("Import")}
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
