import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import SalonProfileNavigation from "./SalonProfileNavigation";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Svg from "../../../../assets/svg/Svg";
import GIconInput from "../../../../components/Layout/GIconInput";
import GCheckbox from "../../../../components/Layout/GCheckbox";
import GSpacing from "../../../../components/Layout/GSpacing";
import GButton from "../../../../components/Layout/GButton";
import GAlign from "../../../../components/Layout/GAlign";
import "./VenueDetails.css";
import GLink from "../../../../components/Layout/GLink";
import InputAddRemove from "../../../../components/InputAddRemove/InputAddRemove";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  addSalonServices,
  salonServiceList,
} from "../../../../helpers/backend";
import { AuthSalonServiceList } from "../../../../store/auth/salon/salonServiceList/actions";
import { notify } from "react-notify-toast";
import TitleAddRemove from "../../../../components/InputAddRemove/TitleAddRemove";
import CreateSalonServiceList from "./CreateSalonServiceList";
import { map } from "jquery";
import VenueProfileNavigation from "./Venue/VenueProfileNavigation";

const ServiceSetting = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    salonServiceList().then((res) => {
      setServiceList(res.data);
    });
  }, []);
  const [selectedService, setSelectedService] = useState([]);
  const [groupService, setGroupService] = useState([]);
  const handleInputChange = (event, group, service) => {
    const { type, checked } = event.target;
    if (checked) {
      let groupExists = groupService.some(
        (groupdata) => groupdata.id === group._id
      );
      var { services } = service;
      var newservices = {
        serviceid: service ? service.serviceid : "",
        name: service ? service.name : "",
        minprice: 0,
        minduration: 0,
        pricingOption: services.length !== 0 ? services[0].pricingOption : [],
      };
      if (groupService.length === 0) {
        var groupdata = [
          {
            id: group._id,
            name: group.name,
            services: [newservices],
          },
        ];
        setGroupService(groupdata);
      } else if (groupExists) {
        const updatedRowsState = groupService.map((row) => {
          if (row.id === group._id) {
            row.services.push(newservices);
          }
          return row;
        });
        setGroupService(updatedRowsState);
      } else {
        var groupdata = {
          id: group._id,
          name: group.name,
          services: [newservices],
        };
        setGroupService((groupService) => [...groupService, groupdata]);
      }
    } else {
      const updatedRowsState = groupService.map((row) => {
        const filteredSeries = row.services.filter(
          (s) => s.serviceid !== service.serviceid
        );
        return {
          ...row,
          services: filteredSeries,
        };
      });
      setGroupService(updatedRowsState);
    }
  };
  return (
    <section className="pt40 pb40 bgLightBlue">
      <Container>
        {props.venue ? (
          ""
        ) : (
          <h2 className="fs24 mobFs18 lb mb20 mobMb10">
            <Link to="/salon/profile/opening-hours" className="mr15">
              {Svg.backarrow}
            </Link>
            {t("Setup")}
          </h2>
        )}

        {props.venue ? <VenueProfileNavigation /> : <SalonProfileNavigation />}
        <section className="bgWhite">
          <h4 className="fs14 lb mb20 mobMb10 pt20 pb20 pl30 pr30 bBottom ">
            {t("Addservice")}
          </h4>
          <section className="pl30 pr30">
            <Row className="mb20">
              <Col md={12} lg={5}>
                <GSpacing paddingBottom="20px"></GSpacing>
                <Accordion>
                  {serviceList &&
                    serviceList.map((element, ind) => {
                      return (
                        <AccordionItem key={ind}>
                          <AccordionItemHeading className="sidebar_sub">
                            <AccordionItemButton>
                              <h3
                                className="fs16 pb10 bBottom lm text-capitalize"
                                style={{ fontSize: "16px" }}
                              >
                                {element.name && element.name}
                              </h3>
                            </AccordionItemButton>
                          </AccordionItemHeading>

                          <AccordionItemPanel>
                            {element.data &&
                              element.data.map((elem, index) => {
                                return (
                                  <div className="mb10" key={index}>
                                    <label
                                      className="d-flex align-items-center themeCheckbox"
                                      htmlFor={`serviceLists${
                                        elem.name + index
                                      }`}
                                    >
                                      <input
                                        id={`serviceLists${elem.name + index}`}
                                        onChange={(e) =>
                                          handleInputChange(e, element, elem)
                                        }
                                        type="checkbox"
                                        defaultChecked={
                                          elem.has_service && true
                                        }
                                      />

                                      <label
                                        className="f16 text-capitalize z-index_v ml5"
                                        htmlFor={`serviceLists${
                                          elem.name + index
                                        }`}
                                      >
                                        {elem.name && elem.name}
                                      </label>
                                    </label>
                                  </div>
                                );
                              })}
                          </AccordionItemPanel>
                        </AccordionItem>
                      );
                    })}
                </Accordion>
              </Col>

              <Col md={12} lg={7}>
                <div className="heightVh80 overflow-auto">
                  <CreateSalonServiceList services={groupService} />
                </div>
              </Col>
            </Row>

            <GAlign align="right" className="bTop mt50 pt20 pb20 pr30">
              <GButton className="text-capitalize">{t("Next")}</GButton>
            </GAlign>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default ServiceSetting;
