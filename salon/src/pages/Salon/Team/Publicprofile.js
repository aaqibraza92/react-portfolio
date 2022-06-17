import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { notify } from "react-notify-toast";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../../../components/AlertModal/AlertModal";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import { updateTeamMemberDetail } from "../../../helpers/backend";
import { AuthGetEmpList } from "../../../store/auth/salon/getEmployeeList/actions";

let greenColor = { background: "#4bb543", text: "#FFFFFF" };
const Publicprofile = (props) => {
const getEmployeeID= localStorage.getItem("employeeid");
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [data, setData] = useState({
    employeeid: "",
    aboutUs: props.data && props.data.aboutUs !== "" ? props.data.aboutUs : "",
    jobTitle:
      props.data && props.data.jobTitle !== "" ? props.data.jobTitle : "",
  });

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthGetEmpList());
  }, [dispatch]);

  const selEmpList = useSelector((state) => {
    return (
      state &&
      state.RedGetEmployeeList.getEmployeeLIst &&
      state.RedGetEmployeeList.getEmployeeLIst
    );
  });

  
  useEffect(() => {
    selEmpList && selEmpList.forEach((elem,ind)=>{
      if(elem._id===getEmployeeID){
        setData({
          ...data,
          aboutUs: elem.aboutUs,
          jobTitle: elem.jobTitle,
        });
      }
    })
  }, [selEmpList]);






  const clearState = () => {
    setData({
      ...data,
      aboutUs: "",
      jobTitle: "",
    });
  };

  // Error msg
  const [joberr, setjoberr] = useState("");
  const [abouterr, setabouterr] = useState("");

  //validation
  const validate = () => {
    let isValid = true;
    if (
      data.jobTitle.trim() === "" ||
      data.jobTitle === "" ||
      data.jobTitle === undefined ||
      data.jobTitle === null
    ) {
      setjoberr("Please enter job title");
      isValid = false;
    } else {
      setjoberr("");
      isValid = true;
    }

    if (
      data.aboutUs.trim() === "" ||
      data.aboutUs === "" ||
      data.aboutUs === undefined ||
      data.aboutUs === null
    ) {
      setabouterr("Please enter bio");
      isValid = false;
    } else {
      setabouterr("");
      isValid = true;
    }
    return isValid;
  };

  //state handling
  const stateHandler = (val) => {
    const { name, value } = val.target;
    validate();
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (!validate()) {
      return;
    } else {
    }
    let getEmployeeId = localStorage.getItem("employeeid");
    const iData = {
      employeeid:
        props.data && props.data._id !== "" ? props.data._id : getEmployeeId,
      aboutUs: data.aboutUs,
      jobTitle: data.jobTitle,
    };

    updateTeamMemberDetail(iData).then((res) => {
      if (res && res.status === 200) {
        notify.show(res.message, "custom", 5000, greenColor);
        props.success(true);
        AlertModal.hide();
      }
    });
  };

  return (
    <>
      <div className={`${props.data ? "pt40" : "mb30"} pl20 pr20 `}>
        {console.log("data", data)}
        <h3 className="fs14 mb10">{t("Yourprofile")}</h3>
        <label htmlFor="job" className="fs13">
          {t("Jobtitle")}
        </label>
        <input
          type="text"
          placeholder={t("Jobtitle")}
          className="form_custom"
          name="jobTitle"
          value={data.jobTitle}
          // defaultValue={props.data && props.data.jobTitle}
          onChange={stateHandler}
        />
        <div className="colorRed fs14 mb10">{joberr}</div>

        <label htmlFor="bio" className="fs13">
          {t("Shortbio")}
        </label>
        <textarea
          name="aboutUs"
          value={data.aboutUs}
          onChange={stateHandler}
          placeholder={t("Entershortbio")}
          className="form_custom"
          //defaultValue={props.data && props.data.aboutUs}
        ></textarea>
        <div className="colorRed fs14 mb10">{abouterr}</div>

        <div className="pt20 pr20 mt10">
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
            <GButton onClick={onSubmit} transform="capitalize">
              {t("Save")}
            </GButton>
          </GAlign>
        </div>
      </div>
    </>
  );
};

export default Publicprofile;
