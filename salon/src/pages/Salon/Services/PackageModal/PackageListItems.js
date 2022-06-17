import React, { useEffect, useState } from "react"
import { CardTitle, Col, Container, Row } from "reactstrap";
import GButton from "../../../../components/Layout/GButton";
import Svg from "../../../../assets/svg/Svg";
import AlertModal02 from "../../../../components/AlertModal02/AlertModal02";
import { useTranslation } from "react-i18next";
import PackageModal from "./PackageModal";

const PackageListItems = (props) => {
    const [show, setshow] = useState(0);
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
    const { packages } = props ;
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
            <span>{packages.serviceTitle}</span>
        </div>
        {show === 1 && (
            <div>
                { packages.services && packages.services.map((packagesrow, index) => {
                return (<>

                 <section
                        onClick={() =>
                        AlertModal02.show(<PackageModal packageid={packagesrow._id}  />, "", () => {}, "xl")
                        }
                        className="pointer"
                    >
                        <div className="services_border_box mb10">
                        <Row className="align-items-center pt10 pb10  all_services_tab_active">
                            <Col md={12} className="pointer">
                            <span className="mr10">{Svg.ServicesCutingIcon}</span>
                            <span className="mr15">{packagesrow.serviceName}</span>
                            </Col>
                        </Row>
                        </div>
                        </section>
                </>)
                }) }
            </div>
        )}
        </Col>
    </Row>
    </>
  )
}

export default PackageListItems