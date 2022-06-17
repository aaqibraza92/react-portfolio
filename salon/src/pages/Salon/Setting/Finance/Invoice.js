import React, { useState } from "react";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";
import { Col, Container, Row, Tooltip } from "reactstrap";
import { useTranslation } from "react-i18next";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import GButton from "../../../../components/Layout/GButton";
import FinanceTabMenu from "./FinanceTabMenu";
import Svg from "../../../../assets/svg/Svg";
import SalonDataTable from "../../SalonDataTable/SalonDataTable";
import "../SalonTables.css";
import { Link } from "react-router-dom";
import { t } from "i18next";
const Invoice = () => {
  const [tooltipReceivePayment, setTooltipReceivePayment] = useState(false);
  const [tooltipOutstandingPayment, setTooltipOutstandingPayment] =
    useState(false);

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Data table columns
  const columns = [
    { label: t("InvoiceID"), field: "invoiceID" },
    { label: t("Invoiceperiod"), field: "invoicePeriod" },
    { label: t("Amount"), field: "amount" },
    { label: t("Items"), field: "items" },
    { label: t("Status"), field: "status" },
    { label: t("Detailedreport"), field: "detailedReport" },
  ];

  // Dummy Row
  let rows = [
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        <div>
          <GButton
            backgroundColor="#E7F5E4"
            borderRadius="20px"
            border="1px solid #D3EDCD"
            color="#5CB84B"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipReceivePayment"
          >
            <span className="mr5">{Svg.greenwatch}</span>
            Receive payment
          </GButton>
          <Tooltip
            isOpen={tooltipReceivePayment}
            placement="right"
            target="tooltipReceivePayment"
            className="bgWhite"
            toggle={() => {
              setTooltipReceivePayment(!tooltipReceivePayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        // Alreadytransferring
        <div>
          <GButton
            backgroundColor="#FFE1E7"
            borderRadius="20px"
            border="1px solid #FFC8D3"
            color="#FF385C"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipOutstandingPayment"
          >
            <span className="mr5">{Svg.redwatch}</span>
            Outstanding payment
          </GButton>
          <Tooltip
            isOpen={tooltipOutstandingPayment}
            placement="right"
            target="tooltipOutstandingPayment"
            className="bgWhite"
            toggle={() => {
              setTooltipOutstandingPayment(!tooltipOutstandingPayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
          {/* <a href="/Invoice.txt" download className="colorGrey">{t("Pdf")}</a> */}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        <div>
          <GButton
            backgroundColor="#E7F5E4"
            borderRadius="20px"
            border="1px solid #D3EDCD"
            color="#5CB84B"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipReceivePayment"
          >
            <span className="mr5">{Svg.greenwatch}</span>
            Receive payment
          </GButton>
          <Tooltip
            isOpen={tooltipReceivePayment}
            placement="right"
            target="tooltipReceivePayment"
            className="bgWhite"
            toggle={() => {
              setTooltipReceivePayment(!tooltipReceivePayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        // Alreadytransferring
        <div>
          <GButton
            backgroundColor="#FFE1E7"
            borderRadius="20px"
            border="1px solid #FFC8D3"
            color="#FF385C"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipOutstandingPayment"
          >
            <span className="mr5">{Svg.redwatch}</span>
            Outstanding payment
          </GButton>
          <Tooltip
            isOpen={tooltipOutstandingPayment}
            placement="right"
            target="tooltipOutstandingPayment"
            className="bgWhite"
            toggle={() => {
              setTooltipOutstandingPayment(!tooltipOutstandingPayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
          {/* <a href="/Invoice.txt" download className="colorGrey">{t("Pdf")}</a> */}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        <div>
          <GButton
            backgroundColor="#E7F5E4"
            borderRadius="20px"
            border="1px solid #D3EDCD"
            color="#5CB84B"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipReceivePayment"
          >
            <span className="mr5">{Svg.greenwatch}</span>
            Receive payment
          </GButton>
          <Tooltip
            isOpen={tooltipReceivePayment}
            placement="right"
            target="tooltipReceivePayment"
            className="bgWhite"
            toggle={() => {
              setTooltipReceivePayment(!tooltipReceivePayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        // Alreadytransferring
        <div>
          <GButton
            backgroundColor="#FFE1E7"
            borderRadius="20px"
            border="1px solid #FFC8D3"
            color="#FF385C"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipOutstandingPayment"
          >
            <span className="mr5">{Svg.redwatch}</span>
            Outstanding payment
          </GButton>
          <Tooltip
            isOpen={tooltipOutstandingPayment}
            placement="right"
            target="tooltipOutstandingPayment"
            className="bgWhite"
            toggle={() => {
              setTooltipOutstandingPayment(!tooltipOutstandingPayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
          {/* <a href="/Invoice.txt" download className="colorGrey">{t("Pdf")}</a> */}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        <div>
          <GButton
            backgroundColor="#E7F5E4"
            borderRadius="20px"
            border="1px solid #D3EDCD"
            color="#5CB84B"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipReceivePayment"
          >
            <span className="mr5">{Svg.greenwatch}</span>
            Receive payment
          </GButton>
          <Tooltip
            isOpen={tooltipReceivePayment}
            placement="right"
            target="tooltipReceivePayment"
            className="bgWhite"
            toggle={() => {
              setTooltipReceivePayment(!tooltipReceivePayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        // Alreadytransferring
        <div>
          <GButton
            backgroundColor="#FFE1E7"
            borderRadius="20px"
            border="1px solid #FFC8D3"
            color="#FF385C"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipOutstandingPayment"
          >
            <span className="mr5">{Svg.redwatch}</span>
            Outstanding payment
          </GButton>
          <Tooltip
            isOpen={tooltipOutstandingPayment}
            placement="right"
            target="tooltipOutstandingPayment"
            className="bgWhite"
            toggle={() => {
              setTooltipOutstandingPayment(!tooltipOutstandingPayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
          {/* <a href="/Invoice.txt" download className="colorGrey">{t("Pdf")}</a> */}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        <div>
          <GButton
            backgroundColor="#E7F5E4"
            borderRadius="20px"
            border="1px solid #D3EDCD"
            color="#5CB84B"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipReceivePayment"
          >
            <span className="mr5">{Svg.greenwatch}</span>
            Receive payment
          </GButton>
          <Tooltip
            isOpen={tooltipReceivePayment}
            placement="right"
            target="tooltipReceivePayment"
            className="bgWhite"
            toggle={() => {
              setTooltipReceivePayment(!tooltipReceivePayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        // Alreadytransferring
        <div>
          <GButton
            backgroundColor="#FFE1E7"
            borderRadius="20px"
            border="1px solid #FFC8D3"
            color="#FF385C"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipOutstandingPayment"
          >
            <span className="mr5">{Svg.redwatch}</span>
            Outstanding payment
          </GButton>
          <Tooltip
            isOpen={tooltipOutstandingPayment}
            placement="right"
            target="tooltipOutstandingPayment"
            className="bgWhite"
            toggle={() => {
              setTooltipOutstandingPayment(!tooltipOutstandingPayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
          {/* <a href="/Invoice.txt" download className="colorGrey">{t("Pdf")}</a> */}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        <div>
          <GButton
            backgroundColor="#E7F5E4"
            borderRadius="20px"
            border="1px solid #D3EDCD"
            color="#5CB84B"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipReceivePayment"
          >
            <span className="mr5">{Svg.greenwatch}</span>
            Receive payment
          </GButton>
          <Tooltip
            isOpen={tooltipReceivePayment}
            placement="right"
            target="tooltipReceivePayment"
            className="bgWhite"
            toggle={() => {
              setTooltipReceivePayment(!tooltipReceivePayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        // Alreadytransferring
        <div>
          <GButton
            backgroundColor="#FFE1E7"
            borderRadius="20px"
            border="1px solid #FFC8D3"
            color="#FF385C"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipOutstandingPayment"
          >
            <span className="mr5">{Svg.redwatch}</span>
            Outstanding payment
          </GButton>
          <Tooltip
            isOpen={tooltipOutstandingPayment}
            placement="right"
            target="tooltipOutstandingPayment"
            className="bgWhite"
            toggle={() => {
              setTooltipOutstandingPayment(!tooltipOutstandingPayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
          {/* <a href="/Invoice.txt" download className="colorGrey">{t("Pdf")}</a> */}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        <div>
          <GButton
            backgroundColor="#E7F5E4"
            borderRadius="20px"
            border="1px solid #D3EDCD"
            color="#5CB84B"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipReceivePayment"
          >
            <span className="mr5">{Svg.greenwatch}</span>
            Receive payment
          </GButton>
          <Tooltip
            isOpen={tooltipReceivePayment}
            placement="right"
            target="tooltipReceivePayment"
            className="bgWhite"
            toggle={() => {
              setTooltipReceivePayment(!tooltipReceivePayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        // Alreadytransferring
        <div>
          <GButton
            backgroundColor="#FFE1E7"
            borderRadius="20px"
            border="1px solid #FFC8D3"
            color="#FF385C"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipOutstandingPayment"
          >
            <span className="mr5">{Svg.redwatch}</span>
            Outstanding payment
          </GButton>
          <Tooltip
            isOpen={tooltipOutstandingPayment}
            placement="right"
            target="tooltipOutstandingPayment"
            className="bgWhite"
            toggle={() => {
              setTooltipOutstandingPayment(!tooltipOutstandingPayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
          {/* <a href="/Invoice.txt" download className="colorGrey">{t("Pdf")}</a> */}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        <div>
          <GButton
            backgroundColor="#E7F5E4"
            borderRadius="20px"
            border="1px solid #D3EDCD"
            color="#5CB84B"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipReceivePayment"
          >
            <span className="mr5">{Svg.greenwatch}</span>
            Receive payment
          </GButton>
          <Tooltip
            isOpen={tooltipReceivePayment}
            placement="right"
            target="tooltipReceivePayment"
            className="bgWhite"
            toggle={() => {
              setTooltipReceivePayment(!tooltipReceivePayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
        </div>
      ),
    },
    {
      invoiceID: "DE97358-18",
      invoicePeriod: "02/01/2022 - 02/15/2022",
      amount: "€72.36",
      items: "29",
      status: (
        // Alreadytransferring
        <div>
          <GButton
            backgroundColor="#FFE1E7"
            borderRadius="20px"
            border="1px solid #FFC8D3"
            color="#FF385C"
            pb="5px"
            pt="5px"
            pl="15px"
            pr="15px"
            fs="14px"
            id="tooltipOutstandingPayment"
          >
            <span className="mr5">{Svg.redwatch}</span>
            Outstanding payment
          </GButton>
          <Tooltip
            isOpen={tooltipOutstandingPayment}
            placement="right"
            target="tooltipOutstandingPayment"
            className="bgWhite"
            toggle={() => {
              setTooltipOutstandingPayment(!tooltipOutstandingPayment);
            }}
          >
            <p className="colorPara mb5 fLight">{t("Notice")}</p>
            <p className="colorPara mb5 fLight">{t("Pleasetransfer")}</p>
          </Tooltip>
        </div>
      ),
      detailedReport: (
        <div>
          <span className="mr5">{Svg.downloadpdf}</span> {t("Pdf")}
          {/* <a href="/Invoice.txt" download className="colorGrey">{t("Pdf")}</a> */}
        </div>
      ),
    },
  ];

  return (
    <div className="d-flex">
      <SalonSidebar />
      {/* <EmptyInvoices /> */}
      <Container fluid className="p-0  salon_pc_container">
        <SalonAuthHeader />
        <div className="sticy_46"><FinanceTabMenu /></div>
        <div className="card-body invoice-table">
          <h1 className="fs24 lb mb20">{t("Invoicing")}</h1>
          <SalonDataTable
            key="InvoiceDataTable"
            columns={columns}
            rows={rows}
          />
        </div>
      </Container>
    </div>
  );
};

export default Invoice;

// When no invoice is available show this function
const EmptyInvoices = () => {
  return (
    <>
      <Container fluid className="p-0 salon_pc_container">
        <SalonAuthHeader />
        <FinanceTabMenu />
        <Row className="justify-content-center">
          <Col lg={5}>
            <div className="card-body heightVh80 d-flex align-items-center justify-content-center text-center">
              <div>
                <div className="w-200 mx-auto mb20 bgRed radius100"></div>
                <h3 className="fs18 mb10">{t("Looklike")}</h3>
                <h3 className="fs15 colorGrey">{t("Readable")}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
