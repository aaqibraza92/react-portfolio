import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { useTranslation } from "react-i18next";
import SalonProfileNavigation from "./SalonProfileNavigation";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../../components/Layout/GAlign";
import GLink from "../../../../components/Layout/GLink";
import GButton from "../../../../components/Layout/GButton";
import GImageSquareUpload from "../../../../components/Layout/GImageSquareUpload/GImageSquareUpload";
import { useSelector, useDispatch } from "react-redux";
import { AuthGetServiceItems } from "../../../../store/auth/salon/getSalonServiceDropDown/actions";
import { AuthPostPortfolio } from "../../../../store/auth/salon/addPortfolio/actions";
import {
  addWorkPortfolio,
  getServiceDropdown,
} from "../../../../helpers/backend";
import axios from "axios";
import { HOME_URL } from "../../../../helpers/apiurls";
import { notify } from "react-notify-toast";
import Auth from "../../../../helpers/Auth/Auth";
import AlertModal02 from "../../../../components/AlertModal02/AlertModal02";
import Select from "react-select";

const AddPortfolio = (props) => {
  const [addedSuccess, setaddedSuccess] = useState(false);
  const sendSuccessStatus = (val) => {
    props.callback(addedSuccess);
  };
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [dataState, setDataState] = useState({
    service: { value: "", label: "" },
    description: "",
  });
  const [errors, seterrors] = useState({});

  const getServicesItems = useSelector((state) => {
    return (
      state &&
      state.getServiceItems &&
      state.getServiceItems.salonServiceallList
    );
  });
  const [serviceOptions, setserviceOptions] = useState();

  const [data, setData] = useState(getServicesItems && getServicesItems);
  useEffect(() => {
    setData(getServicesItems && getServicesItems);
    //console.log("getServicesItems",getServicesItems);
    let tempServiceOption = [];
    getServicesItems &&
      getServicesItems.forEach((e, i) => {
        tempServiceOption.push({
          value: e.serviceid,
          label: e.name,
        });
      });

    setserviceOptions(tempServiceOption);
  }, [getServicesItems]);

  useEffect(() => {
    dispatch(AuthGetServiceItems());
  }, [dispatch]);

  const validate = () => {
    const errors = {};

    if (
      dataState.service.trim() === "" ||
      dataState.service === "" ||
      dataState.service === null ||
      dataState.service === undefined
    ) {
      errors.service = t("Please Choose Services");
    }
    if (dataState.service.value.length <= 0) {
      errors.service = t("Please Describe your work");
    }
    seterrors(errors);
  };

  const callbackgetImage = (val) => {
    setAddPortfolio({
      ...addPortfolio,
      image: val,
    });
  };

  const [addPortfolio, setAddPortfolio] = useState({
    serviceid: "",
    description: "",
    image: null,
    selectedService: "",
  });

  const successMsg = (resp) => {
    console.log("what res", resp);
  };

  console.log("service",addPortfolio.serviceid);

  const onSubmit = () => {
    if (addPortfolio.serviceid === "") {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show("Please select services", "custom", 5000, myColor);
    }
    if (addPortfolio.image === null) {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show("Please Upload Image", "custom", 5000, myColor);
    }
    if (addPortfolio.description === "") {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show("Please fill description", "custom", 5000, myColor);
    }
    const getemployeeID=localStorage.getItem("employeeid");
    const iData = new FormData();
    iData.append("serviceid", addPortfolio.serviceid.value);
    iData.append("description", addPortfolio.description);
    iData.append("image", addPortfolio.image.file);
    iData.append("employeeid", getemployeeID);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + Auth.getToken(),
      },
    };

    axios
      .post(HOME_URL + "/salon/addWorkPortfolio", iData, options)
      .then((res) => {
        if (res && res.data.status && res.data.status === 200) {
          let myColor = { background: "#4bb543", text: "#FFFFFF" };
          notify.show(res.data.message, "custom", 5000, myColor);
          AlertModal02.hide();
          setaddedSuccess(true);
          props.callback(true);
        }
      });
  };
  return (
    <>
      <style jsx="true">
        {`
          .custome_textarea:focus {
            -moz-appearance: none;
            outline: 0px none transparent;
            outline: 0;
          }
          .describe-para {
            position: relative;
            top: -15px;
          }
        `}
      </style>
      <h4 className="fs14 lb bBottom pt20 pb20 pl20 text-uppercase  mb20">
        {t("Addwork")}
      </h4>

      <Container>
        <Row>
          {console.log("serviceOptions", serviceOptions)}
          <Col md={4}>
            <div>
              <GImageSquareUpload getImage={callbackgetImage} />
            </div>
          </Col>
          <Col md={8}>
            <div className="pl20 pb20 pr20">
              <div>
                {console.log("addPortfolio.serviceid", addPortfolio.serviceid)}
                <label htmlFor="service" className="fs13 colorGrey">
                  -- {t("Services")}
                </label>
                <div className="form_custom select_border_edit">
                  {console.log(
                    "addPortfolio.serviceid.value",
                    addPortfolio.serviceid.value
                  )}
                  <Select
                    classNamePrefix="themeSelect"
                    className="themeSelect "
                    options={serviceOptions}
                    value={addPortfolio.selectedService}
                    placeholder={<div>Select Services</div>}
                    onChange={(e) =>
                      setAddPortfolio({
                        ...addPortfolio,
                        serviceid: e,
                        selectedService: e,
                      })
                    }
                  />

                  {/* <select
                    onChange={(e) =>
                      setAddPortfolio({
                        ...addPortfolio,
                        serviceid: e.target.value,
                      })
                    }
                    id="service "
                    className="w-100"
                  >
                    <option value="" disabled selected>
                      Select Services
                    </option>
                    {data &&
                      data.map((elem, ind) => {
                        return (
                          <>
                            <option
                              className="text-capitalize"
                              key={ind}
                              value={elem.serviceid && elem.serviceid}
                            >
                              {elem.name && elem.name}
                            </option>
                          </>
                        );
                      })}
                  </select> */}
                </div>
              </div>
              {errors.service && (
                <span className="text-red fs14">{errors.service}</span>
              )}
              <div>
                <label htmlFor="description" className="fs13 colorGrey">
                  {t("Description")}
                </label>
              </div>

              <textarea
                id="Description"
                value={addPortfolio.description}
                placeholder={t("Aboutwork")}
                onChange={(e) =>
                  setAddPortfolio({
                    ...addPortfolio,
                    description: e.target.value,
                  })
                }
                className="form_custom custome_textarea colorGrey heightVh10"
              ></textarea>
              <p className="fs13 colorGrey mb0 text-end describe-para">
                {t("Describewords")}
              </p>
            </div>
          </Col>

          <div className="border-top pt15 pb15 m_bg_footer d-flex">
            <div></div>
            <GAlign align="right" className="pr20">
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
              <GButton onClick={onSubmit}>{t("Save")}</GButton>
            </GAlign>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddPortfolio;
