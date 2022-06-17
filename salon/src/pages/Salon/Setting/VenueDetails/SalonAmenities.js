import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import SalonProfileNavigation from "./SalonProfileNavigation";
import Svg from "../../../../assets/svg/Svg";
import GCheckbox from "../../../../components/Layout/GCheckbox";
import GAlign from "../../../../components/Layout/GAlign";
import GLink from "../../../../components/Layout/GLink";
import { useSelector, useDispatch } from "react-redux";
import { AuthGetSalonAmenities } from "../../../../store/auth/salon/getAmenities/actions";
import { AuthGetSalonLang } from "../../../../store/auth/salon/getSalonLang/actions";
import GButton from "../../../../components/Layout/GButton";
import {
  updateSalonAminity,
  updateSalonlang,
} from "../../../../helpers/backend";
import { notify } from "react-notify-toast";
import VenueProfileNavigation from "./Venue/VenueProfileNavigation";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let successColor = { background: "#4bb543", text: "#FFFFFF" };

const SalonAmenities = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthGetSalonAmenities());
    dispatch(AuthGetSalonLang());
  }, [dispatch]);

  const selectAmenities = useSelector((state) => {
    return (
      state.getSalonAmenitiesRedux &&
      state.getSalonAmenitiesRedux.getSalonAmenities
    );
  });

  const selectSalonLang = useSelector((state) => {
    return (
      state.redGetSalonLang &&
      state.redGetSalonLang.getSalonLang &&
      state.redGetSalonLang.getSalonLang.data
    );
  });

  const [getLang, setGetLang] = useState(selectSalonLang && selectSalonLang);
  useEffect(() => {
    setGetLang(selectSalonLang && selectSalonLang);
  }, [selectSalonLang]);

  const [getData, setgetData] = useState(selectAmenities && selectAmenities);
  useEffect(() => {
    setgetData(selectAmenities && selectAmenities);
  }, [selectAmenities]);

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [amenity, setamenity] = useState([]);
  const [selectedLang, setselectedLang] = useState([]);

  useEffect(() => {
    var selectedAmenities = [];
    selectAmenities &&
      selectAmenities.forEach((elem, ind) => {
        if (elem.has_amenity === true) {
          selectedAmenities.push({
            amenityid: elem._id,
          });
        }
      });
    selectedAmenities.forEach((elem, ind) => {
      setamenity((oldArray) => [...oldArray, elem]);
    });
  }, [selectAmenities]);

  const onChangeHandle = (e, val) => {
    if (e.target.checked) {
      setamenity((oldArray) =>
        oldArray.concat({
          amenityid: val,
        })
      );
    } else {
      const onChecked = val;
      setamenity(amenity.filter((item) => item.amenityid !== onChecked));
    }
  };

  useEffect(() => {
    var selectedLangTemp = [];
    selectSalonLang &&
      selectSalonLang.forEach((elem, ind) => {
        if (elem.has_service === true) {
          selectedLangTemp.push({
            languageid: elem._id,
          });
        }
      });
    selectedLangTemp.forEach((elem, ind) => {
      setselectedLang((oldArray) => [...oldArray, elem]);
    });
  }, [selectSalonLang]);

  const onChangeHandleLang = (e, val) => {
    if (e.target.checked) {
      setselectedLang((oldArray) =>
        oldArray.concat({
          languageid: val,
        })
      );
    } else {
      const onChecked = val;
      setselectedLang(
        selectedLang.filter((item) => item.languageid !== onChecked)
      );
    }
  };

  const onSubmitClick = () => {
    const iData = {
      amenities: amenity,
    };
    updateSalonAminity(iData).then((res) => {
      if (res.status === 200) {
        notify.show(res.message, "custom", 5000, successColor);
      }
    });

    const iDataLang = {
      languages: selectedLang,
    };
    updateSalonlang(iDataLang).then((res) => {
      if (res.status === 200) {
        notify.show(res.message, "custom", 5000, successColor);
        navigate("/salon/team/employees");
      }
    });
  };

  return (
    <section className="pt40 pb40 bgLightBlue">
      {console.log("selectedLang", selectedLang)}
      <Container>
        {props.venue ? (
          ""
        ) : (
          <h2 className="fs24 mobFs18 lb mb20 mobMb10">
            <span className="mr15">{Svg.backarrow}</span>
            {t("Setup")}
          </h2>
        )}
        {props.venue ? <VenueProfileNavigation /> : <SalonProfileNavigation />}
        <section className="bgWhite ">
          <section className="pt20 pb20 pl30 pr30">
            <h3 className="fs14 mb15 lm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <Row>
              <Col lg={6} xl={6} xxl={6}>
                <section className="border radius4 pt15 pb15 pl15 pr15 mb15">
                  <h3 className="fs15 lm mb15">{t("General")}</h3>
                  {getData &&
                    getData.map((elem, ind) => {
                      return (
                        <div className="mb10" key={ind}>
                          <label
                            className="d-flex align-items-center themeCheckbox"
                            htmlFor={`serviceLists${elem.name + ind}`}
                          >
                            <input
                              id={`serviceLists${elem.name + ind}`}
                              onChange={(e) => onChangeHandle(e, elem._id)}
                              type="checkbox"
                              defaultChecked={elem.has_amenity && true}
                            />
                            <label
                              className="f16 text-capitalize z-index_v ml5"
                              htmlFor={`serviceLists${elem.name + ind}`}
                            >
                              {elem.name && elem.name}
                            </label>
                          </label>
                        </div>
                      );
                    })}
                </section>
              </Col>
              <Col lg={6} xl={6} xxl={6}>
                <section className="border radius4 pt15 pb15 pl15 pr15 mb15">
                  <h3 className="fs15 lm mb15">{t("Languagepreference")}</h3>

                  {getLang &&
                    getLang.map((elem, ind) => {
                      console.log("has", elem.has_service);
                      return (
                        <div className="mb10 bBottom pb10" key={ind}>
                          <label
                            className="d-flex align-items-center themeCheckbox"
                            htmlFor={`serviceLists${elem.name + ind}`}
                          >
                            <input
                              id={`serviceLists${elem.name + ind}`}
                              onChange={(e) => onChangeHandleLang(e, elem._id)}
                              type="checkbox"
                              defaultChecked={elem.has_service && true}
                            />
                            <label
                              className="f16 text-capitalize z-index_v ml5"
                              htmlFor={`serviceLists${elem.name + ind}`}
                            >
                              {elem.name && elem.name}
                            </label>
                          </label>
                        </div>
                      );
                    })}
                </section>
              </Col>
            </Row>
          </section>
          <GAlign align="right" className="bTop mt50 pt20 pb20 pr30">
            <GButton className="text-capitalize" onClick={onSubmitClick}>
              {t("Next")}
            </GButton>
          </GAlign>
        </section>
      </Container>
    </section>
  );
};

export default SalonAmenities;
