import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { notify } from "react-notify-toast";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import {
  addTeamMemberService,
  getTeamMemberService,
} from "../../../helpers/backend";
import { AuthGetTeamMemberService } from "../../../store/auth/salon/getTeamMemberService/actions";
import $ from 'jquery';

let successColor = { background: "#4bb543", text: "#FFFFFF" };

const PricingService = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthGetTeamMemberService());
  }, [dispatch]);

  const [allservices, setallservices] = useState([]);
  useEffect(() => {
    getTeamMemberService().then((res) => {
      if (res && res.status && res.status === 200) {
        //console.log("getty",res);
        setallservices(res && res.data && res.data && res.data.groupservice);
      }
    });
  }, []);

  // useEffect(() => {
  //   $(function($) {
  //     $('#allservices').click(function () {
  //       alert("aa");
  //       $('.allservices input').prop('checked', this.checked);
  //   });

  //   $('#allservices').change(function () {
  //       var check = ($('.allservices input').filter(":checked").length == $('.allservices input').length);
  //       $('#allservices').prop("checked", check);
  //   });
  //   });
  // },[]);

  const [selectedServices, setselectedServices] = useState([]);

  const CheckboxWrapper = styled.div`
    .label_box {
      /* display: block; */
      position: relative;
      padding-left: 30px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 16px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin-right: 14px;
    }

    .label_box input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 3px;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: transparent;
      border: 2px solid #ff385c;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      -webkit-transition: all 0.3s linear 0s;
      -moz-transition: all 0.3s linear 0s;
      transition: all 0.3s linear 0s;
    }

    .label_box input:checked ~ .checkmark {
      background-color: #ff385c;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .label_box input:checked ~ .checkmark:after {
      display: block;
    }

    .label_box .checkmark:after {
      top: 1px;
      left: 6px;
      width: 5px;
      height: 11px;
      border: solid #fff;
      border-top-width: medium;
      border-right-width: medium;
      border-bottom-width: medium;
      border-left-width: medium;
      border-top-width: medium;
      border-right-width: medium;
      border-bottom-width: medium;
      border-left-width: medium;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .list-container {
      overflow-y: auto;
      max-height: 350px;
      overflow-x: hidden;
    }

    .themeCheckbox {
      display: block;
    }
    .themeCheckbox input {
      padding: 0;
      height: initial;
      width: initial;
      margin-bottom: 0;
      display: none;
      cursor: pointer;
      -webkit-transition: all 0.3s linear 0s;
      -moz-transition: all 0.3s linear 0s;
      transition: all 0.3s linear 0s;
    }

    .themeCheckbox input:checked + label:after {
      -webkit-transition: all 0.3s linear 0s;
      -moz-transition: all 0.3s linear 0s;
      transition: all 0.3s linear 0s;
      content: "";
      display: block;
      position: absolute;
      top: 5px;
      left: 7px;
      width: 5px;
      height: 12px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
    .themeCheckbox input:checked + label::before {
      background: #ff385c;
    }
    .themeCheckbox label {
      position: relative;
      cursor: pointer;
    }
    .themeCheckbox label::before {
      content: "";
      -webkit-appearance: none;
      background-color: transparent;
      border: 2px solid #ff385c;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      padding: 7px;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      border-radius: 6px;
      -webkit-transition: all 0.3s linear 0s;
      -moz-transition: all 0.3s linear 0s;
      transition: all 0.3s linear 0s;
      top: -1px;
      margin-right: 10px;
    }
    .themeCheckbox .checkboxgreen + label::before {
      content: "";
      background-color: #e2e3e9;
      width: 38px;
      position: absolute;
      text-align: center;
      left: 0px;
      height: 38px;
      z-index: -1;
      border: 2px solid #e2e3e9;
      margin-right: 12px;
    }
    .themeCheckbox .z-index_v {
      z-index: 0;
    }

    input.checkboxgreen:checked + label::before {
      background-color: #5cb84b;
      border: 2px solid #5cb84b;
    }
    input.checkboxgreen:checked + label {
      color: #fff;
    }

    input.checkboxgreen:checked + label:after {
      -webkit-transition: all 0.3s linear 0s;
      -moz-transition: all 0.3s linear 0s;
      transition: all 0.3s linear 0s;
      content: "";
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 0px;
      height: 0px;
      border: solid #fff;
      border-width: 0 0px 0px 0;
      transform: rotate(45deg);
    }
  `;
  const spaceRemove = (val) => {
    return val.replace(/ /g, "");
  };

  useEffect(() => {
    var selectedServicesArr = [];
    allservices &&
      allservices.forEach((elem, ind) => {
        elem.servicelist &&
          elem.servicelist.map((el, indd) => {
            if (el.has_service === true) {
              selectedServicesArr.push({
                serviceid: elem._id,
              });
            }
          });
      });

    selectedServicesArr.forEach((elem, ind) => {
      setselectedServices((oldArray) => [...oldArray, elem]);
    });
  }, [allservices]);

  const serviceHandle = (e, val) => {
    if (e.target.checked) {
      setselectedServices((oldArray) =>
        oldArray.concat({
          serviceid: val,
        })
      );
    } else {
      const onChecked = val;
      setselectedServices(
        selectedServices.filter((item) => item.serviceid !== onChecked)
      );
    }
  };

  const onSave = () => {
    const getemployeeid = localStorage.getItem("employeeid");
    const iData = {
      employeeid: getemployeeid,
      employeeDetail: {
        assignedService: selectedServices,
      },
    };
    console.log("iData", iData);

    addTeamMemberService(iData).then((res) => {
      console.log("savee", res);
      if (res && res.status && res.status === 200) {
        notify.show(res.message, "custom", 5000, successColor);
      }
    });
  };

  const [selectAll,setselectAll]=useState(false);
  const selectAllFunc = (val) => {
    setselectAll(!selectAll);
  };



  return (
    <>
      <div className="pl20 pr20 mb30">
        {console.log("selectedServices", selectedServices)}
        {
          console.log("selectAll",selectAll)
        }
        <h3 className="fs14 mb10">
          Which services can be booked online for this employee?
        </h3>

    

        <div className="allservicesWrap">
          <div className="mb10">
            <label
              className="d-flex align-items-center themeCheckbox"
              htmlFor="allservices"
            >
              <input
                id="allservices"
                onChange={(e) => selectAllFunc()}
                type="checkbox"
                //defaultChecked={true}
              />
              <label
                className="f16 text-capitalize z-index_v ml5"
                htmlFor="allservices"
              >
                All services
              </label>
            </label>
          </div>

          {allservices &&
          allservices.map((elem, ind) => {
            return (
              <div className="wrapperServices ml18" key={ind}>
                  <div className="checkList">
                    <div className="list-container">
                      <div className="mb10">
                        <label
                          className="d-flex align-items-center themeCheckbox"
                          htmlFor={`serviceLists${elem._id && elem._id}`}
                        >
                          <input
                            id={`serviceLists${elem._id && elem._id}`}
                            onChange={(e) => () => {}}
                            type="checkbox"
                            checked={selectAll}
                          />
                          <label
                            className="f16 text-capitalize z-index_v ml5"
                            htmlFor={`serviceLists${elem._id && elem._id}`}
                          >
                            {elem.name && elem.name} 
                          </label>
                        </label>
                      </div>
                    </div>

                    {elem.servicelist &&
                      elem.servicelist.map((el, index) => {
                        return (
                          <div className="ml18 mb10" key={index}>
                            <label
                              className="d-flex align-items-center themeCheckbox"
                              htmlFor={`${index}serviceLists${spaceRemove(
                                el.name
                              )}`}
                            >
                              <input
                                id={`${index}serviceLists${spaceRemove(
                                  el.name
                                )}`}
                                name={`${index}serviceLists${spaceRemove(
                                  el.name
                                )}`}
                                onChange={(e) => serviceHandle(e, el.serviceid)}
                                type="checkbox"
                                defaultChecked={el.has_service && el.has_service}
                              />
                              <label
                                className="f16 text-capitalize z-index_v ml5"
                                htmlFor={`${index}serviceLists${spaceRemove(
                                  el.name
                                )}`}
                              >
                                {el.name && el.name}
                              </label>
                            </label>
                          </div>
                        );
                      })}
                  </div>
              </div>
            );
          })}
        </div>

       

        <div className="bTop pt20 pr20 mt10">
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
            <GButton onClick={onSave} transform="capitalize">
              {t("Save")}
            </GButton>
          </GAlign>
        </div>
      </div>
    </>
  );
};

export default PricingService;
