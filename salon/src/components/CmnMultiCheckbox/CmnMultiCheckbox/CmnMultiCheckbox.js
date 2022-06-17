import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

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

const CmnMultiCheckbox = (props) => {
  const { data } = props;

  const [getSelected, setgetSelected] = useState([]);

  useEffect(() => {
    props.callback(getSelected);
  }, [getSelected]);
  //callback selected checkbox's data
  const [checked, setChecked] = useState([]);
  const addInputs = (e, val) => {
    if (e.target.checked) {
      setgetSelected((oldArray) => [...oldArray, val]);
    } else {
      var index = getSelected.indexOf(val);
      setgetSelected(
        getSelected.filter((item, ind) => {
          return ind !== index;
        })
      );
    }
  };

  return (
    <>
      <CheckboxWrapper>
        {/* {console.log("getSelected", getSelected)} */}
        <div className="checkList">
          <div className="list-container">
          <Accordion>
            {props.data &&
              props.data.map((elem, ind) => {
                return (
                  <>
                
                <AccordionItem key={ind}>
                <AccordionItemHeading className="sidebar_sub">
                <AccordionItemButton>
                            <div
                              key={ind}
                              className="lm fw500 fs15 mb10 text-capitalize"
                            >
                              {elem.name && elem.name}
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          {elem.servicesinfo &&
                            elem.servicesinfo.map((item, i) => {
                              return (
                                <div className="mb10" key={i}>
                                  <label
                                    className="d-flex align-items-center themeCheckbox"
                                    htmlFor={`serviceLists${elem.name + i}`}
                                  >
                                    <input
                                      id={`serviceLists${item.name + i}`}
                                      onChange={(e) => addInputs(e, item, ind)}
                                      type="checkbox"
                                      // defaultChecked={true}
                                    />
                                    <label
                                      className="f16 text-capitalize z-index_v ml5"
                                      htmlFor={`serviceLists${item.name + i}`}
                                    >
                                      {item.name && item.name}
                                    </label>
                                  </label>
                                </div>
                              );
                            })}
                        </AccordionItemPanel>
                      </AccordionItem>
                 
                  </>
                );
              })}
                 </Accordion>
          </div>
        </div>
      </CheckboxWrapper>
    </>
  );
};

export default CmnMultiCheckbox;
