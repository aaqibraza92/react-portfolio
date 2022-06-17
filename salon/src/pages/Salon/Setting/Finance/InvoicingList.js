import React from "react";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";
import FinanceTabMenu from "./FinanceTabMenu";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import GHorizontalInput from "../../../../components/Layout/GHorizontalInput";
import GSpacing from "../../../../components/Layout/GSpacing";
import GButton from "../../../../components/Layout/GButton";
import GHorizontalTextarea from "../../../../components/Layout/GHorizontalTextarea";
import Select from "react-select";

const countrylist = [
  { value: "Shop", label: "Shop" },
  { value: "Mobile", label: "Mobile" },
  { value: "Home", label: "Home" },
];

const InvoicingList = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 position-relative salon_pc_container">
          <SalonAuthHeader />
          <FinanceTabMenu />
          <form>
            <div className="card-body height_70_vh">
              <h1 className="fs24 lb mb20">{t("Invoicedetails")}</h1>
              <Row className="bBottom pb15 mb20">
                <Col md={6}>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput label={t("Companyname")} type="text" />
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput
                      label={t("Companynumber")}
                      type="number"
                    />
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalTextarea label={t("Addresscolon")} pointerEvent="visible"/>
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput label={t("Citycolon")} type="text" />
                  </GSpacing>
                </Col>
                <Col md={6}>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput
                      label={t("Postalcodecolon")}
                      type="number"
                    />
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    {/* <GHorizontalInput label={t("Countrycolon")} type="text" /> */}
                
                    
                    <Row className="align-items-center mb-3">
                    <Col md={4} className="text-end">
                    {t("Country")}
                    </Col>
                    <Col md={8}>
                      <div className="select_border select_single">
                        <Select
                          label="Account type *"
                          className="themeSelect"
                          classNamePrefix="themeSelect"
                          placeholder={t("Country")}
                          options={countrylist}
                        />
                      </div>
                    </Col>
                  </Row>
                  </GSpacing>

                  

                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput label={t("Vatidnumber")} type="number" />
                  </GSpacing>
                </Col>
              </Row>
              <h6 className="fs15 lb mb20">{t("Contactperson")}</h6>
              <Row>
                <Col md={6}>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput label={t("Contactname")} type="text" />
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput label={t("Emailcolon")} type="email" />
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput label={t("Phonecolon")} type="number" />
                  </GSpacing>
                </Col>
              </Row>
            </div>
            <div className="bTop pt15 pb15 w-100 position-absolute bottom_0 pr25 text-end">
              <GButton>{t("Save")}</GButton>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default InvoicingList;
