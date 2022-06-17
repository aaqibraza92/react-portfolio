import React, { useEffect, useState } from "react";
import { Col, Label } from "reactstrap";
import GSpacing from "../Layout/GSpacing";
import GIconInput from "../Layout/GIconInput";
import Select from "react-select";
import Auth from "../../helpers/Auth/Auth";
import {
  getCountryListApi,
  getStateListApi,
  getCityListApi,
} from "../../helpers/backend/index";
import axios from "axios";
import { API_URL2 } from "../../helpers/apiurls";

const AddressForm = (props) => {
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);



  useEffect(() => {
    getCountryAPI();
  }, []);

  useEffect(() => {
    getStateListAPI(props.dataState.country);
    getCityListAPI();
  }, [props.dataState.country]);

  useEffect(() => {
    getCityListAPI(props.dataState.state);
  }, [props.dataState.state]);

  const getCountryAPI = async (type) => {
    await axios({
      method: "get",
      url: `${API_URL2}getCountryList`,
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
    }).then((response) => {
      let data1 = response.data.data;
      let result = data1?.map((o) => ({ value: o.country_id, label: o.name }));
      setCountryList(result);
    });
  };

  const getStateListAPI = async (selectedCountryName) => {
    await axios({
      method: "post",
      url: `${API_URL2}getStateList`,
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
      data: { country: props.dataState.country },
    }).then((response) => {
      let data2 = response.data.data;

      let result = data2.map((o) => ({
        value: o.country_id,
        label: o.name,
      }));

      setStateList(result);
    });
  };
  const getCityListAPI = async (type) => {
    await axios({
      method: "post",
      url: `${API_URL2}getCityList`,
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
      data: { state: props.dataState.state },
    }).then((response) => {
      let data2 = response.data.data;

      let result = data2.map((o) => ({
        value: o.country_id,
        label: o.name,
      }));

      setCityList(result);
    });
  };

  return (
    <>
      <Col md={props.col===6 ? 6 : 3} >
        <div className="mb-3 select_border">
          <Label className="labelInput">
            {" "}
            Country/Region <span className="text-danger">*</span>
          </Label>
          <br />
          <select
            className="themeSelect selectbox"
            name="country"
            onChange={(e) => {
              props.handleInputChange(e);
            }}
            value={props.dataState.country}
            required
          >
            <option value="">Select Country</option>
            {countryList &&
              countryList.map((item, i) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            ;
          </select>
          <div style={{ color: "#FF385C" }}> {props.errors.country}</div>
        </div>
      </Col>
      <Col md={props.col===6 ? 6 : 3}>
        <div className="mb-3 select_border">
          <Label className="labelInput">
            {" "}
            State/Provinces <span className="text-danger">*</span>
          </Label>
          <br />
          <select
            className="themeSelect selectbox"
            name="state"
            onChange={(e) => props.handleInputChange(e)}
            value={props.dataState.state}
            required
          >
            <option value="">Select State</option>
            {stateList &&
              stateList.map((item, i) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            ;
          </select>
          <div style={{ color: "#FF385C" }}> {props.errors.state}</div>
        </div>
      </Col>
      <Col md={props.col===6 ? 6 : 3}>
        <div className="mb-3 select_border">
          <Label className="labelInput">
            {" "}
            City <span className="text-danger">*</span>
          </Label>
          <br />
          <select
            className="themeSelect selectbox"
            name="city"
            onChange={(e) => props.handleInputChange(e)}
            value={props.dataState.city}
            required
          >
            <option value="">Select City</option>
            {cityList &&
              cityList.map((item, i) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            ;
          </select>
          <div style={{ color: "#FF385C" }}> {props.errors.city}</div>
        </div>
      </Col>

      <Col md={props.col===6 ? 6 : 3}>
        <GIconInput
          label="Zip/Postal Code"
          placeholder="Enter code"
          type="number"
          name="postalCode"
          value={props.dataState.postalCode}
          // validationMsg={props.errors.postalCode}
          // showvalidationMsg={props.errors.postalCode && true}
          onChange={(e) => props.handleInputChange(e)}
        />
        <div style={{ color: "#FF385C" }}> {props.errors.postalCode}</div>
      </Col>
    </>
  );
};

export default AddressForm;
