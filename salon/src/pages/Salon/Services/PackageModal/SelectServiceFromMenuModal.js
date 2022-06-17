import React, { useEffect, useState } from "react"
import GAlign from "../../../../components/Layout/GAlign";
import { useTranslation } from "react-i18next";
import CmnRadioBorder from "../../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GButton from "../../../../components/Layout/GButton";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../../../assets/svg/Svg";
import { getSalonPackageList } from '../../../../helpers/backend/salon'
import { useDispatch, useSelector } from "react-redux";
const SelectServiceFromMenuModal = ({onChange , servicesgroup}) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [servicesList, setServicesList] = useState([]);
  const [addServicesGroup, setAddServicesGroup] = useState(servicesgroup);
  useEffect(() => {
    async function fetchMyAPI() {
      let res = await getSalonPackageList()
      setServicesList(res.data)
    }
    fetchMyAPI()
  }, [])

  const handlePricingChange = (event, servicename, price) => {
    const { name, value } = event.target
    var serviceadded = {pricingOptionid : value, serviceid : name, servicename : servicename, price : price }
    setAddServicesGroup((addServicesGroup) => [...addServicesGroup, serviceadded]);

  }
  const closeServiceArrays = () => {
    onChange({target : {name : 'servicesgroup', value : addServicesGroup}})
  }


  return (
    <>
      <GAlign align="between" alignV="center" className="card-body bBottom">
        <h3 className="fs14 lb mb0 text-uppercase">{t("SalonAdddiscount")}</h3>
      </GAlign>

      <div className="box_s border_radius8">
        <div className="card_thank">
          <Container>
          {
            Array.isArray(servicesList) && servicesList.map((group) => {
              return (<>
              <Row>
              <Col md={12} className="radius bgLightBlue pt8 pl8 pb8 mb10">
                <span className="mr10">{Svg.HumbermenuModal}</span>
                <span>{group.groupName}</span>
              </Col>
              {
                Array.isArray(group.service) && group.service.map((service) => {
                  return (<>
                      <Col md={12} className="border-bottom pb10">
                        <span className="mr10">{Svg.ServicesCutingIcon}</span>
                        <span>{service.serviceName}</span>
                        {
                          Array.isArray(service.price) && service.price.map((price) => {
                            
                            return (<>
                              <div>
                                <Row className="align-items-center ml-3">
                                  <Col md={12} className="border-bottom">
                                    <CmnRadioBorder
                                      id={service.serviceid + price._id}
                                      name={service.serviceid}
                                      value={price._id}
                                      label={price.name}
                                      onChange={(e) => handlePricingChange(e, group.groupName+'-'+service.serviceName+' '+price.name, price.price)}
                                    />
                                  </Col>
                                </Row>
                              </div>
                            </>)
                          })
                        }
                      </Col>
                  </>)
                })
              }
            </Row>
              </>)
            })
          }
          </Container>
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
            <GButton onClick={closeServiceArrays}>{t("Addselected")}</GButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectServiceFromMenuModal;
