import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GImageCircleUpload from "../../../components/Layout/GImageCircleUpload/GImageCircleUpload";
import GCheckbox from "../../../components/Layout/GCheckbox";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import CmnRadioBorder from "../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GButton from "../../../components/Layout/GButton";
import GAlign from "../../../components/Layout/GAlign";
import {
  employeeRegistration,
  getEmployeeInfo,
} from "../../../helpers/backend";
import { useSelector, useDispatch } from "react-redux";
import { authUserProfile } from "../../../store/auth/profile/actions";
import { notify } from "react-notify-toast";
import axios from "axios";
import { HOME_URL, IMAGE_URL } from "../../../helpers/apiurls";
import Auth from "../../../helpers/Auth/Auth";
import { AuthgetEmployeeInfo } from "../../../store/auth/salon/getEmployeeInfo/actions";
import AlertModal from "../../../components/AlertModal/AlertModal";
import GImage from "../../../components/Layout/GImage/GImage";

let greenColor = { background: "#4bb543", text: "#FFFFFF" };

const Basicinformation = (props) => {
  console.log("fromAddNew", props.fromAddNew);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const getEmployeeid = localStorage.getItem("employeeid");
  const iData = {
    employeeid: getEmployeeid,
  };
  const [employeeInfo, setemployeeInfo] = useState(null);

  useEffect(() => {
    getEmployeeInfo(iData).then((res) => {
      console.log("geettt", res.data[0]);
      setemployeeInfo(res.data[0]);
      setDataState({
        ...dataState,
        email:
          props.register && props.register
            ? ""
            : res.data[0] && res.data[0].email,
        mobile:
          props.register && props.register
            ? ""
            : res.data[0] && res.data[0].mobile,
        name:
          props.register && props.register
            ? ""
            : res.data[0] && res.data[0].firstName,
        lastname:
          props.register && props.register
            ? ""
            : res.data[0] && res.data[0].lastName,
        profileImage:
          props.register && props.register
            ? ""
            : res.data[0] && res.data[0].profileImage,
      });
      setaccess(res.data[0] && res.data[0].access);
      setprovideService(res.data[0] && res.data[0].provideService);
      setownCalendar(
        res.data[0] &&
          res.data[0].permission &&
          res.data[0].permission[0].ownCalendar
      );
      setallCalendar(
        res.data[0] &&
          res.data[0].permission &&
          res.data[0].permission[0].allCalendar
      );
      setteam(
        res.data[0] && res.data[0].permission && res.data[0].permission[0].team
      );
      setmenu(
        res.data[0] && res.data[0].permission && res.data[0].permission[0].menu
      );
      setmarketingTool(
        res.data[0] &&
          res.data[0].permission &&
          res.data[0].permission[0].marketingTool
      );
      setsettings(
        res.data[0] &&
          res.data[0].permission &&
          res.data[0].permission[0].settings
      );
      setreports(
        res.data[0] &&
          res.data[0].permission &&
          res.data[0].permission[0].reports
      );
      setclient(
        res.data[0] &&
          res.data[0].permission &&
          res.data[0].permission[0].client
      );
    });
  }, []);

  const [dataState, setDataState] = useState({
    salonid: "",
    name: "",
    lastname: "",
    mobile: "",
    email: "",
    provide: false,
    control: "",
    profileImage: null,
  });

  const [access, setaccess] = useState("");
  const [provideService, setprovideService] = useState(false);
  const [ownCalendar, setownCalendar] = useState(false);
  const [allCalendar, setallCalendar] = useState(false);
  const [team, setteam] = useState(false);
  const [menu, setmenu] = useState(false);
  const [client, setclient] = useState(false);
  const [marketingTool, setmarketingTool] = useState(false);
  const [settings, setsettings] = useState(false);
  const [reports, setreports] = useState(false);

  // For Error Messages
  const [nameerr, setnameerr] = useState("");
  const [lastnameerr, setlastnameerr] = useState("");
  const [emailrr, setemailrr] = useState("");
  const [mobileerr, setmobileerr] = useState("");
  const [accesserr, setaccesserr] = useState("");
  const [profileImageerr, setprofileImageerr] = useState("");

  const clearState = () => {
    setDataState({
      ...dataState,
      salonid: "",
      name: "",
      lastname: "",
      mobile: "",
      email: "",
      provide: false,
      control: "",
    });
    setownCalendar(false);
    setallCalendar(false);
    setteam(false);
    setmenu(false);
    setmarketingTool(false);
    setsettings(false);
    setreports(false);
    setclient(false);
  };

  useEffect(() => {
    if (access === "BasicAccess") {
      setownCalendar(true);
    } else if (access === "OwnerAccess") {
      setownCalendar(true);
      setallCalendar(true);
      setteam(true);
      setmenu(true);
      setmarketingTool(true);
      setsettings(true);
      setreports(true);
      setclient(true);
    } else {
      setownCalendar(false);
      setallCalendar(false);
      setteam(false);
      setmenu(false);
      setmarketingTool(false);
      setsettings(false);
      setreports(false);
      setclient(false);
    }
  }, [access]);

  const [errors, seterrors] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUserProfile());

    dispatch(AuthgetEmployeeInfo(iData));
  }, [dispatch]);

  const salonID = useSelector((state) => {
    return (
      state &&
      state.authInfo.authInfo &&
      state.authInfo.authInfo &&
      state.authInfo.authInfo._id
    );
  });

  useEffect(() => {
    setDataState({
      ...dataState,
      salonid: salonID && salonID,
    });
  }, [salonID]);

  const validate = () => {
    const regex = new RegExp(
      "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$"
    );
    let isValid = true;

    if (
      dataState.name.trim() === "" ||
      dataState.name === "" ||
      dataState.name === undefined ||
      dataState.name === null
    ) {
      setnameerr("Please enter name");
      isValid = false;
    } else {
      setnameerr("");
      isValid = true;
    }

    if (
      dataState.lastname.trim() === "" ||
      dataState.lastname === "" ||
      dataState.lastname === undefined ||
      dataState.lastname === null
    ) {
      setlastnameerr("Please enter last name");
      isValid = false;
    } else {
      setlastnameerr("");
      isValid = true;
    }

    if (
      dataState.mobile.trim() === "" ||
      dataState.mobile === "" ||
      dataState.mobile === undefined ||
      dataState.mobile === null
    ) {
      setmobileerr("Please enter mobile number");
      isValid = false;
    } else {
      setmobileerr("");
      isValid = true;
    }

    if (
      dataState.email.trim() === "" ||
      dataState.email === "" ||
      dataState.email === null ||
      dataState.email === undefined
    ) {
      setemailrr("Please enter email");
      isValid = false;
    } else if (!dataState.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/)) {
      setemailrr("Please enter valid user email");
      isValid = false;
    } else {
      setemailrr("");
      isValid = true;
    }

    if (access === "") {
      setaccesserr("Please select access");
      isValid = false;
    } else {
      setaccesserr("");
      isValid = true;
    }

    if (dataState.profileImage === null) {
      setprofileImageerr("Please upload profile image");
      isValid = false;
    } else {
      setprofileImageerr("");
      isValid = true;
    }

    // if (dataState.mobile.trim() === "") {
    //   errors.mobile = t("Mobilemsg");
    // }
    // if (
    //   dataState.email.trim() === "" ||
    //   regex.test(dataState.email) === false
    // ) {
    //   errors.email = t("Emailmsg");
    // }

    //console.log("errors",errors);
    return isValid;
  };

  const callbackgetImage = (val) => {
    setDataState({
      ...dataState,
      profileImage: val.file,
    });
  };

  const onSubmitClick = () => {
    if (!validate()) {
      return;
    } else {
      const iData = new FormData();
      iData.append("salonid", dataState.salonid);
      iData.append("firstName", dataState.name);
      iData.append("lastName", dataState.lastname);
      iData.append("mobile", dataState.mobile);
      iData.append("email", dataState.email);
      iData.append("provideService", provideService);
      iData.append("access", access);
      iData.append("ownCalendar", ownCalendar);
      iData.append("allCalendar", allCalendar);
      iData.append("menu", menu);
      iData.append("team", team);
      iData.append("client", client);
      iData.append("marketingTool", marketingTool);
      iData.append("settings", settings);
      iData.append("reports", reports);
      iData.append("profileImage", dataState.profileImage);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: "Bearer " + Auth.getToken(),
        },
      };

      axios
        .post(HOME_URL + "salon/employeeRegistration", iData, options)
        .then((res) => {
          if (res && res.data.status && res.data.status === 200) {
            notify.show(res.data.message, "custom", 5000, greenColor);
            localStorage.setItem("employeeid", res.data && res.data.data._id);
            localStorage.setItem("tabsEnable", false);
            props.callbackTabs(false);
            localStorage.setItem("employemail",res.data.data.email);
          }
          if (res && res.data.status && res.data.status === 202) {
            notify.show(
              "Please check mobile aur email, That is already in use",
              "custom",
              5000,
              greenColor
            );
          }
        });
    }
  };

  const onUpdateClick = () => {
    if (!validate()) {
      return;
    } else {
      const iData = new FormData();
      iData.append("employeeid", getEmployeeid);
      iData.append("salonid", dataState.salonid);
      iData.append("firstName", dataState.name);
      iData.append("lastName", dataState.lastname);
      iData.append("mobile", dataState.mobile);
      iData.append("email", dataState.email);
      iData.append("provideService", provideService);
      iData.append("access", access);
      iData.append("ownCalendar", ownCalendar);
      iData.append("allCalendar", allCalendar);
      iData.append("menu", menu);
      iData.append("team", team);
      iData.append("client", client);
      iData.append("marketingTool", marketingTool);
      iData.append("settings", settings);
      iData.append("reports", reports);
      iData.append("profileImage", dataState.profileImage);

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: "Bearer " + Auth.getToken(),
        },
      };

      axios
        .put(HOME_URL + "salon/updateEmployee", iData, options)
        .then((res) => {
          console.log("update submit", res);
          if (res && res.data.status && res.data.status === 200) {
            notify.show(res.data.message, "custom", 5000, greenColor);
            localStorage.setItem("employeeid", res.data && res.data.data._id);
            localStorage.setItem("tabsEnable", false);
            props.callbackTabs(false);
            localStorage.setItem("successApi", true);
            localStorage.setItem("employemail",res.data.data.email);
          }
          if (res && res.data.status && res.data.status === 202) {
            notify.show(
              "Please check mobile aur email, That is already in use",
              "custom",
              5000,
              greenColor
            );
          }
        });
    }
  };

  return (
    <>
      <Container>
        {console.log(
          "ownCalendar",
          ownCalendar,
          "allCalendar",
          allCalendar,
          "team",
          team,
          "menu",
          menu,
          "marketingTool",
          marketingTool,
          "setting",
          settings,
          "reports",
          reports,
          "client",
          client
        )}
        <section className="pb30 pl30 pr30">
          <Row>
            <Col md={2} className="text-center">
              <GImageCircleUpload
                previewImage={dataState.profileImage}
                getImage={callbackgetImage}
              />
              <h4 className="fs13 colorGrey mt10">Upload a photo upto 5 MB</h4>
              {<span className="fs14 colorRed">{profileImageerr}</span>}
            </Col>
            <Col md={10}>
              <div>
                <Row>
                  <Col lg={6}>
                    <label>{t("Onlyname")}</label>
                    <input
                      type="text"
                      className="form_custom"
                      placeholder={t("Onlyname")}
                      value={dataState.name}
                      onChange={(e) =>
                        setDataState({ ...dataState, name: e.target.value })
                      }
                    />
                    {<span className="fs14 colorRed">{nameerr}</span>}
                  </Col>

                  <Col lg={6}>
                    <label>{t("Lastname")}</label>
                    <input
                      type="text"
                      className="form_custom"
                      placeholder={t("Lastname")}
                      value={dataState.lastname}
                      onChange={(e) =>
                        setDataState({ ...dataState, lastname: e.target.value })
                      }
                    />
                    {<span className="fs14 colorRed">{lastnameerr}</span>}
                  </Col>
                </Row>

                <Row>
                  <Col lg={6}>
                    <label>{t("Phone")}</label>
                    <input
                      type="number"
                      className="form_custom"
                      placeholder={t("Phone")}
                      value={dataState.mobile}
                      onChange={(e) =>
                        setDataState({ ...dataState, mobile: e.target.value })
                      }
                    />
                    {<span className="fs14 colorRed">{mobileerr}</span>}
                  </Col>
                  <Col lg={6}>
                    <label>{t("Email")}</label>
                    <input
                      type="email"
                      className="form_custom"
                      placeholder={t("Email")}
                      value={dataState.email}
                      onChange={(e) => {
                        setDataState({ ...dataState, email: e.target.value });
                      }}
                    />
                    {<span className="fs14 colorRed">{emailrr}</span>}
                  </Col>
                </Row>

                <div className="mb10">
                  <label
                    className="d-flex align-items-center themeCheckbox"
                    htmlFor={`serviceLists`}
                  >
                    <input
                      id={`serviceLists`}
                      onChange={(e) => setprovideService(!provideService)}
                      type="checkbox"
                      checked={provideService}
                    />
                    <label
                      className="f16 text-capitalize z-index_v ml5"
                      htmlFor={`serviceLists`}
                    >
                      {t("Providetreatment")}
                    </label>
                  </label>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" bBottom pb5 mb15">
            <h3 className="fs15">{t("Controlaccess")}</h3>

            <CmnRadioBorder
              id="Basicaccess"
              name="Basicaccess"
              label={t("Basicaccess")}
              value="BasicAccess"
              checked={access === "BasicAccess"}
              onChange={(e) => setaccess(e.target.value)}
            />
            <h3 className="fs13 colorGrey ml43">{t("Canonly")}</h3>
          </div>
          <div className=" bBottom pb5 mb15">
            <CmnRadioBorder
              id="Owneraccess"
              name="Basicaccess"
              label={t("Owneraccess")}
              value="OwnerAccess"
              checked={access === "OwnerAccess"}
              onChange={(e) => setaccess(e.target.value)}
            />
            <h3 className="fs13 colorGrey ml43">{t("Canhaveallaccess")}</h3>
          </div>
          <div className=" bBottom pb5 mb15">
            <CmnRadioBorder
              id="Customise"
              name="Basicaccess"
              label={t("Customise")}
              value="CustomAccess"
              checked={access === "CustomAccess"}
              onChange={(e) => setaccess(e.target.value)}
            />
            <h3 className="fs13 colorGrey ml43">{t("Customizeaccess")}</h3>
          </div>

          {<span className="fs14 colorRed">{accesserr}</span>}

          <Row>
            {console.log("access", access)}
            {access === "BasicAccess" && (
              <Col lg={6} className="mb8 pointerEvent">
                <GCheckbox
                  id="Owncalendar"
                  label={t("Owncalendar")}
                  defaultChecked={true}
                  onChange={(e) => setownCalendar(!ownCalendar)}
                />
              </Col>
            )}

            {access === "OwnerAccess" && (
              <>
                <Col lg={6} className="mb8 pointerEvent">
                  <GCheckbox
                    id="Owncalendar"
                    label={t("Owncalendar")}
                    defaultChecked={true}
                    onChange={(e) => setownCalendar(!ownCalendar)}
                  />
                </Col>
                <Col lg={6} className="mb8 pointerEvent">
                  <GCheckbox
                    id="Client"
                    label={t("Client")}
                    defaultChecked={true}
                    onChange={(e) => setclient(!client)}
                  />
                </Col>
                <Col lg={6} className="mb8 pointerEvent">
                  <GCheckbox
                    id="Allcalendar"
                    label={t("Allcalendar")}
                    defaultChecked={true}
                    onChange={(e) => setallCalendar(!allCalendar)}
                  />
                </Col>
                <Col lg={6} className="mb8 pointerEvent">
                  <GCheckbox
                    id="Marketingtool"
                    label={t("Marketingtool")}
                    defaultChecked={true}
                    onChange={(e) => setmarketingTool(!marketingTool)}
                  />
                </Col>
                <Col lg={6} className="mb8 pointerEvent">
                  <GCheckbox
                    id="Menuside"
                    label={t("Menuside")}
                    defaultChecked={true}
                    onChange={(e) => setmenu(!menu)}
                  />
                </Col>
                <Col lg={6} className="mb8 pointerEvent">
                  <GCheckbox
                    id="Settings"
                    label={t("Settings")}
                    defaultChecked={true}
                    onChange={(e) => setsettings(!settings)}
                  />
                </Col>
                <Col lg={6} className="mb8 pointerEvent">
                  <GCheckbox
                    id="Team"
                    label={t("Team")}
                    defaultChecked={true}
                    onChange={(e) => setteam(!team)}
                  />
                </Col>
                <Col lg={6} className="mb8 pointerEvent">
                  <GCheckbox
                    id="Reports"
                    label={t("Reports")}
                    defaultChecked={true}
                    onChange={(e) => setreports(!reports)}
                  />
                </Col>
              </>
            )}

            {access === "CustomAccess" && (
              <>
                <Col lg={6} className="mb8">
                  <GCheckbox
                    id="Owncalendar"
                    label={t("Owncalendar")}
                    checked={ownCalendar && true}
                    onChange={(e) => setownCalendar(!ownCalendar)}
                  />
                </Col>
                <Col lg={6} className="mb8">
                  {console.log("client", client)}
                  <GCheckbox
                    id="Client"
                    label={t("Client")}
                    checked={client && true}
                    onChange={(e) => setclient(!client)}
                  />
                </Col>
                <Col lg={6} className="mb8">
                  <GCheckbox
                    id="Allcalendar"
                    label={t("Allcalendar")}
                    checked={allCalendar && true}
                    onChange={(e) => setallCalendar(!allCalendar)}
                  />
                </Col>
                <Col lg={6} className="mb8">
                  <GCheckbox
                    id="Marketingtool"
                    label={t("Marketingtool")}
                    checked={marketingTool && true}
                    onChange={(e) => setmarketingTool(!marketingTool)}
                  />
                </Col>
                <Col lg={6} className="mb8">
                  <GCheckbox
                    id="Menuside"
                    label={t("Menuside")}
                    checked={menu && true}
                    onChange={(e) => setmenu(!menu)}
                  />
                </Col>
                <Col lg={6} className="mb8">
                  <GCheckbox
                    id="Settings"
                    label={t("Settings")}
                    checked={settings && true}
                    onChange={(e) => setsettings(!settings)}
                  />
                </Col>
                <Col lg={6} className="mb8">
                  <GCheckbox
                    id="Team"
                    label={t("Team")}
                    checked={team && true}
                    onChange={(e) => setteam(!team)}
                  />
                </Col>
                <Col lg={6} className="mb8">
                  <GCheckbox
                    id="Reports"
                    label={t("Reports")}
                    checked={reports && true}
                    onChange={(e) => setreports(!reports)}
                  />
                </Col>
              </>
            )}
          </Row>

          <div className="mt10">
            <GAlign align="right">
              <GButton
                mr="15px"
                backgroundColor="#fff"
                color="#000"
                border="1px solid #707070"
                hoverBg="#fff"
                hoveColor="#000"
                hoverBorder="1px solid #000"
                transform="capitalize"
              >
                {t("Close")}
              </GButton>
              <GButton
                transform="capitalize"
                onClick={
                  props.fromAddNew && props.fromAddNew
                    ? onSubmitClick
                    : onUpdateClick
                }
              >
                {t("Save")}
              </GButton>
            </GAlign>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Basicinformation;
