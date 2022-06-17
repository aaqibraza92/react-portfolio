import React, { useEffect, useState } from "react"
import { CardTitle, Col, Container, Row } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import Svg from "../../../assets/svg/Svg";
import EditMemberShipModal from './EditMemberShipModal'
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import ServicesModal from "./ServicesModal";
import { useTranslation } from "react-i18next";
const ShowServicesItem = (props) => {
    const [show, setshow] = useState(0);
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
    const { service } = props ;

  return (
    <>
        <Row>
        <Col md={12}>
        <div
            className={`${
                show === 1 ? "d-none" : ""
            } border-bottom pt10 pb10 pointer all_services_tab_active mb8`}
            onClick={() => setshow(1)}
        >
            <span className="mr10">{Svg.ServicesHumber}</span>{" "}
            <span>{service.name}</span>
        </div>
        {show === 1 && (
            <div>
                <Row className="align-items-center pt10 pb10 pointer all_services_tab_active">
                    <Col md={8}>
                    <span className="mr10">{Svg.ServicesHumber}</span>
                    <span>
                        <u>{service.name}</u>{" "}
                        <span
                        onClick={() =>
                            AlertModal02.show(
                            <EditMemberShipModal groups={service}  />,
                            "",
                            () => {},
                            "xs"
                            )
                        }
                        >
                        {Svg.ServicesEdits}
                        </span>{" "}
                    </span>
                    </Col>
                    <Col md={4} className="text-end">
                    {/* <GButton
                        border="1px solid #37A3D2"
                        color="#37A3D2"
                        backgroundColor="transparent"
                        hoverBg="#37A3D2"
                        hoverBorder="#37A3D2"
                        onClick={() =>
                        AlertModal02.show(<EditMemberShipModal />, "", () => {}, "xs")
                        }
                    >
                        {t("Addtogroup")}
                    </GButton> */}
                    </Col>
                </Row>
                { service.services && service.services.map((servicerow, index) => {
                return (<>
                        <section
                        onClick={() =>
                        AlertModal02.show(<ServicesModal key={index} serviceid={servicerow.serviceid} />, "", () => {}, "xl")
                        }
                        className="pointer"
                    >
                        <div className="services_border_box mb10">
                        <Row className="align-items-center pt10 pb10  all_services_tab_active">
                            <Col md={12} className="pointer">
                            <span className="mr10">{Svg.ServicesCutingIcon}</span>
                            <span className="mr15">{servicerow.name}</span>
                            <GButton
                                backgroundColor="#5CB84B"
                                borderRadius="30px"
                                transform="uppercase"
                                hoverBg="#5CB84B"
                                pt="3px"
                                pb="3px"
                                mr="15px"
                            >
                                Featured
                            </GButton>
                            <GButton
                                backgroundColor="#37A3D23D"
                                border="1px solid #37A3D2"
                                borderRadius="30px"
                                color="#37A3D2"
                                hoveColor="#37A3D2"
                                transform="uppercase"
                                hoverBorder="#37A3D2"
                                hoverBg="#37A3D23D"
                                pt="3px"
                                pb="3px"
                                mr="15px"
                            >
                                <span className="mr5">{Svg.ServicesDiscountDivision}</span>
                                discount
                            </GButton>
                            </Col>
                            <div>
                            { servicerow.pricingOption && servicerow.pricingOption.map((pricingrow, priceindex) => {
                            return (<> <Row className="pl35">
                                        <Col md={6}>{pricingrow.name}</Col>
                                        <Col className="text-left">{pricingrow.duration} Min</Col>
                                        <Col className="text-center">
                                        <span className="mr10">£ {pricingrow.price}</span>{" "}
                                        <span className="color_span">£ {pricingrow.saleprice}</span>
                                        </Col>
                                    </Row>
                            </>)
                            }) }
                            </div>
                        </Row>
                        </div>
                    </section>
                </>)
                }) }
            </div>
        )}

        {/* {show === 1 && (
            <div>
                { props.service.services && props.service.services.map((service, index) => {
                return (<>
                <Row className="align-items-center pt10 pb10 pointer all_services_tab_active">
                    <Col md={8}>
                    <span className="mr10">{Svg.ServicesHumber}</span>
                    <span>
                        <u>{service.name}</u>{" "}
                        <span
                        onClick={() =>
                            AlertModal02.show(
                            <EditMemberShipModal />,
                            "",
                            () => {},
                            "xs"
                            )
                        }
                        >
                        {Svg.ServicesEdits}
                        </span>{" "}
                    </span>
                    </Col>
                    <Col md={4} className="text-end">
                    <GButton
                        border="1px solid #37A3D2"
                        color="#37A3D2"
                        backgroundColor="transparent"
                        hoverBg="#37A3D2"
                        hoverBorder="#37A3D2"
                        onClick={() =>
                        AlertModal02.show(<EditMemberShipModal />, "", () => {}, "xs")
                        }
                    >
                        {t("Addtogroup")}
                    </GButton>
                    </Col>
                </Row>
                </>)
                }) }
            

            <section
                onClick={() =>
                AlertModal02.show(<ServicesModal />, "", () => {}, "xl")
                }
                className="pointer"
            >
                <div className="services_border_box mb10">
                <Row className="align-items-center pt10 pb10  all_services_tab_active">
                    <Col md={12} className="pointer">
                    <span className="mr10">{Svg.ServicesCutingIcon}</span>
                    <span className="mr15">Ladies - Haircut & Blow Dry</span>
                    <GButton
                        backgroundColor="#5CB84B"
                        borderRadius="30px"
                        transform="uppercase"
                        hoverBg="#5CB84B"
                        pt="3px"
                        pb="3px"
                        mr="15px"
                    >
                        Featured
                    </GButton>
                    <GButton
                        backgroundColor="#37A3D23D"
                        border="1px solid #37A3D2"
                        borderRadius="30px"
                        color="#37A3D2"
                        hoveColor="#37A3D2"
                        transform="uppercase"
                        hoverBorder="#37A3D2"
                        hoverBg="#37A3D23D"
                        pt="3px"
                        pb="3px"
                        mr="15px"
                    >
                        <span className="mr5">{Svg.ServicesDiscountDivision}</span>
                        discount
                    </GButton>
                    </Col>
                    <div>
                    <Row className="pl35">
                        <Col md={6}>Small</Col>
                        <Col className="text-left">1 hr</Col>
                        <Col className="text-center">
                        <span className="mr10">£ 50</span>{" "}
                        <span className="color_span">£ 50</span>
                        </Col>
                    </Row>

                    <Row className="pl35">
                        <Col md={6} className="services_border">
                        Medium
                        </Col>
                        <Col className="text-left">45 min</Col>
                        <Col className="text-center">
                        <span className="mr10">£ 50</span>{" "}
                        <span className="color_span">£ 60</span>
                        </Col>
                    </Row>

                    <Row className="pl35">
                        <Col md={6}>Large</Col>
                        <Col className="text-left">1 hr 20 min</Col>
                        <Col className="text-center">
                        <span className="mr10">£ 50</span>{" "}
                        <span className="color_span">£ 50</span>
                        </Col>
                    </Row>
                    </div>
                </Row>
                </div>

                <div className="services_border_box mb10">
                <Row className="align-items-center pt10 pb10  all_services_tab_active">
                    <Col md={12} className="pointer">
                    <span className="mr10">{Svg.ServicesCutingIcon}</span>
                    <span className="mr15">Ladies - Haircut & Blow Dry</span>
                    <GButton
                        backgroundColor="#5CB84B"
                        borderRadius="30px"
                        transform="uppercase"
                        hoverBg="#5CB84B"
                        pt="3px"
                        pb="3px"
                        mr="15px"
                    >
                        Featured
                    </GButton>
                    <GButton
                        backgroundColor="#37A3D23D"
                        border="1px solid #37A3D2"
                        borderRadius="30px"
                        color="#37A3D2"
                        hoveColor="#37A3D2"
                        transform="uppercase"
                        hoverBorder="#37A3D2"
                        hoverBg="#37A3D23D"
                        pt="3px"
                        pb="3px"
                        mr="15px"
                    >
                        <span className="mr5">{Svg.ServicesDiscountDivision}</span>
                        discount
                    </GButton>
                    </Col>
                    <div>
                    <Row className="pl35">
                        <Col md={6}>Small</Col>
                        <Col className="text-left">1 hr</Col>
                        <Col className="text-center">
                        <span className="mr10">£ 50</span>{" "}
                        <span className="color_span">£ 50</span>
                        </Col>
                    </Row>
                    </div>
                </Row>
                </div>
            </section>
            </div>
        )} */}
        </Col>
    </Row>
    </>
  )
}

export default ShowServicesItem