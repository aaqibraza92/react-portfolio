import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { notify } from "react-notify-toast";
import GButton from "../Layout/GButton";
import { useTranslation } from "react-i18next";
import Svg from "../../assets/svg/Svg";

const duration = [
  {
    value: "5",
    label: "5 min",
  },
  {
    value: "10",
    label: "10 min",
  },
  {
    value: "15",
    label: "15 min",
  },
];

const InputAddRemove = (props) => {
  const [serviceID, setserviceID] = useState(
    props.data && props.data.serviceid
  );

  const [quoteData, setquoteData] = useState({
    name: props.data && props.data && props.data.name,
    quotesItems: [],
    serviceID: props.data && props.data && props.data.serviceid,
  });

  useEffect(() => {
    props.callback(quoteData);
    // console.log("quoteData.quotesItems66",quoteData.quotesItems);
  }, [quoteData]);

  const UpdatedPriceOptions = (val) => {};

  const deleteItem = (e) => {
    let initData = [];
    initData = [...quoteData.quotesItems];
    var _subtotal = 0;
    var _grandtotal = 0;
    initData.splice(e, 1);

    var items = initData;
    if (items.length > 0) {
      items.forEach((elem, ind) => {
        _subtotal = _subtotal + elem.amount;
      });
    }

    _grandtotal = _subtotal - quoteData.discountinput;

    setquoteData({
      ...quoteData,
      quotesItems: initData,
      subtotal: _subtotal,
      grandtotal: _grandtotal,
    });
  };
  const addItemsInState = (data) => {
    var items = [...quoteData.quotesItems];
    var isExists = false;
    var _subtotal = 0;
    if (items.length > 0) {
      items.forEach((element, index) => {
        if (element.name === data.name) {
          //isExists = true;
          //return alert("Item already exists in list.", "Oops!");
        }
      });
      if (!isExists) {
        items.push(data);
        if (items.length > 0) {
          items.forEach((elem, ind) => {
            _subtotal = _subtotal + elem.amount;
          });
        }
      }
    } else {
      items.push(data);

      _subtotal = data.amount;
    }
    var discountTotal = _subtotal - quoteData.discountinput;
    setquoteData({
      ...quoteData,
      serviceID: props.data && props.data.serviceid,
      quotesItems: items,
      subtotal: _subtotal,
      grandtotal: discountTotal,
    });
  };

  const QuoteItemInsert = (props) => {
    const [sortby, setsortby] = useState("");

    const [itemdata, setitemdata] = useState({
      name: "",
      duration: "",
      price: "",
    });

    const handleChange = (e) => {
      console.log("test", e.target.name);
      try {
        var duration = itemdata.duration;
        var price = itemdata.price;

        if (e.target.value) {
          if (e.target.value.trim() !== "" && e.target.name === "duration") {
            duration = e.target.value;
          }

          if (e.target.value.trim() !== "" && e.target.name === "price") {
            price = e.target.value;
          }
        } else {
          if (e.target.name === "duration") duration = "";
          if (e.target.name === "price") price = "";
        }

        setitemdata({
          ...itemdata,

          [e.target.name]: e.target.value,
        });
      } catch (e) {
        console.log(e);
      }
    };

    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();

    return (
      <>
        <tr className="">
          {
            //console.log("itemdata", itemdata)
          }

          <td>
            <input
              id="quoteitemdescription"
              type="text"
              className="inputStyleLine text-capitalize"
              name="name"
              placeholder="Name"
              value={itemdata.name}
              onChange={handleChange}
            />
          </td>

          <td>
            <input
              type="number"
              name="duration"
              className="inputStyleLine text-capitalize"
              placeholder="Duration"
              value={itemdata.duration}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="price"
              className="inputStyleLine text-capitalize"
              placeholder="Price"
              value={itemdata.price}
              onChange={handleChange}
            />
          </td>
        </tr>
        <tr className="noBorder">
          <td className="noBorder w-100">
            <button
              style={{
                background: "transparent",
                border: "2px solid #37A3D2",
                color: "#37A3D2",
                borderRadius: "7px",
                padding: "8px 20px",
              }}
              onClick={(e) => props.onAddClick(itemdata)}
            >
              <span>
                <svg
                  id="Group_63"
                  data-name="Group 63"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <path
                    id="Line_4"
                    data-name="Line 4"
                    d="M.563,14H-.75V0H.563Z"
                    transform="translate(7.094)"
                    fill="#37a3d2"
                  />
                  <path
                    id="Line_5"
                    data-name="Line 5"
                    d="M1.313,14H0V0H1.313Z"
                    transform="translate(14 6.344) rotate(90)"
                    fill="#37a3d2"
                  />
                </svg>
              </span>
              <span style={{ marginLeft: "10px" }}>Add pricing option</span>
            </button>
          </td>
          <td className="noBorder w-100">
            <GButton className="text-capitalize">{t("Save")}</GButton>
          </td>
        </tr>
      </>
    );
  };

  const QuoteItem = (props) => {
    let index = props.index;
    const { data, type } = props;
    return (
      <>
        {props.type === "selectedService" ? (
          <tr className="">
            <td>
              <input
                className="inputStyleLine text-capitalize"
                type="text"
                name={"name" + props.data && props.data._id}
                defaultValue={props.data && props.data.name}
                onChange={() => {}}
              />
            </td>
            <td>
              <input
                className="inputStyleLine text-capitalize"
                type="number"
                name={"duration" + props.data && props.data._id}
                defaultValue={props.data && props.data.duration}
                onChange={() => {}}
              />
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="colorBlack mr10">£</span>{" "}
                <input
                  className="inputStyleLine text-capitalize"
                  type="number"
                  name={"price" + props.data && props.data._id}
                  defaultValue={props.data && props.data.price}
                  onChange={() => {}}
                />
              </div>
            </td>
            <td>
              <button
                className="noBtn"
                onClick={(e) => props.onRemoveItem(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g
                    id="Group_58515"
                    data-name="Group 58515"
                    transform="translate(315 1705)"
                  >
                    <g
                      id="Group_58295"
                      data-name="Group 58295"
                      transform="translate(-315 -1705)"
                    >
                      <circle
                        id="Ellipse_6"
                        data-name="Ellipse 6"
                        cx="10"
                        cy="10"
                        r="10"
                        fill="#282a3a"
                      />
                      <g
                        id="Group_58294"
                        data-name="Group 58294"
                        transform="translate(7.266 7.266)"
                      >
                        <line
                          id="Line_248"
                          data-name="Line 248"
                          x2="6"
                          y2="6"
                          transform="translate(-0.266 -0.266)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                        <line
                          id="Line_249"
                          data-name="Line 249"
                          x1="6"
                          y2="6"
                          transform="translate(-0.266 -0.266)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </td>
          </tr>
        ) : (
          <tr className="bBottom">
            <td>
              <input
                className="inputStyleLine text-capitalize"
                type="text"
                name={`name${index}`}
                defaultValue={data.name}
              />
            </td>
            <td>
              <input
                className="inputStyleLine text-capitalize"
                type="number"
                name={`duration${index}`}
                defaultValue={data.duration}
              />
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="colorBlack mr10">£</span>{" "}
                <input
                  className="inputStyleLine text-capitalize"
                  type="number"
                  name={`price${index}`}
                  defaultValue={data.price}
                />
              </div>
            </td>
            <td className="tfFull">
              <button
                className="noBtn"
                onClick={(e) => props.onRemoveItem(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g
                    id="Group_58515"
                    data-name="Group 58515"
                    transform="translate(315 1705)"
                  >
                    <g
                      id="Group_58295"
                      data-name="Group 58295"
                      transform="translate(-315 -1705)"
                    >
                      <circle
                        id="Ellipse_6"
                        data-name="Ellipse 6"
                        cx="10"
                        cy="10"
                        r="10"
                        fill="#282a3a"
                      />
                      <g
                        id="Group_58294"
                        data-name="Group 58294"
                        transform="translate(7.266 7.266)"
                      >
                        <line
                          id="Line_248"
                          data-name="Line 248"
                          x2="6"
                          y2="6"
                          transform="translate(-0.266 -0.266)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                        <line
                          id="Line_249"
                          data-name="Line 249"
                          x1="6"
                          y2="6"
                          transform="translate(-0.266 -0.266)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </td>
          </tr>
        )}
      </>
    );
  };

  const changeHandler = (e, target = null) => {
    if (target !== null) {
      switch (target) {
        case "fromDate":
          setquoteData({ ...quoteData, quoteDate: e });
          break;
        case "validTo":
          setquoteData({
            ...quoteData,
            validTo: e,
            serviceID: props.data && props.data.serviceid,
          });
          break;
        case "discountinput":
          var applyDiscount = quoteData.subtotal - e.target.value;
          setquoteData({
            ...quoteData,
            discountinput: e.target.value,
            grandtotal: applyDiscount,
            serviceID: props.data && props.data.serviceid,
          });
          break;
        default:
          setquoteData({
            ...quoteData,
            serviceID: props.data && props.data.serviceid,
          });
          break;
      }
    } else {
      setquoteData({
        ...quoteData,
        [e.target.name]: e.target.value,
        serviceID: props.data && props.data.serviceid,
      });
    }
  };

  return (
    <div
      className="table-responsive border radius7"
      data-service-id={props.data && props.data.serviceid}
    >
      <div className="d-flex pl12 pr12">
        <div className="pt10">
          <span>{Svg.scissor}</span>
        </div>
        <div>
          <table className="table notablePadding quoteTable noTrBorder">
            <thead>
              <tr className="noBorderTh">
                <th className="text-capitalize">
                  <input
                    id="quoteitemdescription"
                    type="text"
                    className="inputStyleLine text-capitalize"
                    name="name"
                    placeholder="Name"
                    defaultValue={
                      props.data && props.data && props.data.data[0].name
                    }
                    onChange={() => {}}
                  />
                </th>
                <th>

                <input
                    id="quoteitemdescription"
                    type="text"
                    className="inputStyleLine text-capitalize"
                    name="name"
                    placeholder=""
                    defaultValue=""
                    onChange={() => {}}
                  />
                </th>
                <th>
                <input
                    id="quoteitemdescription"
                    type="text"
                    className="inputStyleLine text-capitalize"
                    name="name"
                    placeholder=""
                    defaultValue=""
                    onChange={() => {}}
                  />
                </th>
                <th>
                  <td>
                    <button className="noBtn" onClick={(e) => () => {}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <g
                          id="Group_58515"
                          data-name="Group 58515"
                          transform="translate(315 1705)"
                        >
                          <g
                            id="Group_58295"
                            data-name="Group 58295"
                            transform="translate(-315 -1705)"
                          >
                            <circle
                              id="Ellipse_6"
                              data-name="Ellipse 6"
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#282a3a"
                            />
                            <g
                              id="Group_58294"
                              data-name="Group 58294"
                              transform="translate(7.266 7.266)"
                            >
                              <line
                                id="Line_248"
                                data-name="Line 248"
                                x2="6"
                                y2="6"
                                transform="translate(-0.266 -0.266)"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="1.5"
                              />
                              <line
                                id="Line_249"
                                data-name="Line 249"
                                x1="6"
                                y2="6"
                                transform="translate(-0.266 -0.266)"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="1.5"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </td>
                </th>
              </tr>
            </thead>

            <tbody className="colorPara bNone">
              {props.data &&
                props.data &&
                props.data.data[0].pricingOption &&
                props.data.data[0].pricingOption.map((elem, index) => {
                  return (
                    <QuoteItem
                      type="selectedService"
                      key={index}
                      data={elem}
                      index={index}
                      onRemoveItem={deleteItem}
                    />
                  );
                })}

              {quoteData.quotesItems.length > 0 &&
                quoteData.quotesItems.map((element, index) => {
                  return (
                    <QuoteItem
                      key={index}
                      data={element}
                      index={index}
                      onRemoveItem={deleteItem}
                    />
                  );
                })}
              <QuoteItemInsert
                onAddClick={(data) => {
                  if (
                    data.duration === "" ||
                    data.price === "" ||
                    data.name === ""
                  ) {
                    let myColor = { background: "#ff385c", text: "#FFFFFF" };
                    return notify.show(
                      "Please Insert Name, Duration and Price",
                      "custom",
                      5000,
                      myColor
                    );
                  }
                  addItemsInState(data);
                }}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InputAddRemove;
