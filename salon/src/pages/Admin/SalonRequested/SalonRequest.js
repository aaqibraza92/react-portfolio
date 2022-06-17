import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Table,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import BreadCrum from "../BreadCrum/BreadCrum";
import Select from "react-select";
import GIconInput from "../../../components/Layout/GIconInput";
import GCheckbox from "../../../components/Layout/GCheckbox";
import Img from "../../../assets/Img/Img";
import GTextarea from "../../../components/Layout/GTextarea";
import GLink from "../../../components/Layout/GLink";
import { Link } from "react-router-dom";
import GImage from "../../../components/Layout/GImage/GImage";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "react-notify-toast";
import { SalonRequestLists } from "../../../store/admin/salonrequested/action";
import { adminSalonUpdateStatus,adminGetSalonProfileInfo,adminGetSalonUserInfo } from "../../../helpers/backend/admin";
import { HOME_URL } from "../../../helpers/apiurls";
import { IMAGE_URL } from "../../../helpers/apiurls";
import { salonUpdateStatus } from "../../../helpers/backend";
import GoogleMapForm from "../../../components/AddressForm/GoogleMapForm";
import AddressForm from "../../../components/AddressForm/AddressForm";
import GoogleLocationModal from "../../../components/AddressForm/GoogleLocationModal";
import {useLocation} from 'react-router-dom';
import Cookies from 'js-cookie';
import ReactDatatable from '@ashvin27/react-datatable'

// For Columns Object
const Columns = [
  { value: "salonname", label: t("Salonname") },
  { value: "representative", label: t("Representative") },
  { value: "employeecount", label: t("Employeecount") },
  { value: "onlylocation", label: t("Onlylocation") },
  { value: "onlysalontype", label: t("Onlysalontype") },
  { value: "googlemap", label: t("Googlemap") },
  { value: "status", label: t("Status") },
  { value: "mobile", label: t("Mobile") },
  { value: "emailaddress", label: t("Emailaddress") },
  { value: "requestat", label: t("Requestat") },
  { value: "updateat", label: t("Updateat") },
  { value: "notes", label: t("Notes") },
  { value: "action", label: t("Action") },
];



const UserContext = createContext();

const SalonRequest = (props) => {
  const getPagi = useContext(UserContext);
  const loc= useLocation();
  const saloniD = loc.hash.replace("#", '');
  // const dispatch = useDispatch();
  const salonid = props.location && props.location.state;

  const [salonInfo,setSalonInfo]= useState({})
  const [dataState,setDataState]= useState({})

  if (Cookies.get('loginSuccess')) {
    const loginData = JSON.parse(Cookies.get('loginSuccess'))
     
   } else {
     window.location.href = '/admin/login'
   }

  useEffect(() => {
    console.log("getPagi", getPagi);
  }, []);
  useEffect(() => {
    getsalonRequestedLists(saloniD)
    adminGetSalonProfileInfo().then((res) => {
      setSalonInfo(res.data);

    });
  }, []);

  const getsalonRequestedLists = async (salonid) => {
      
    adminGetSalonUserInfo({salonid : salonid}).then(result => {
  
     if (result.status === 200) {
      setDataState(result.data)
    }
 }).catch(err => {

 });
}

  const salonReq = useSelector((state) => state.salonRequestedLists && state.salonRequestedLists.salonRequested);
  const [salonRequestedLists, setsalonRequestedLists] = useState(salonReq);
  const dispatch = useDispatch();

  const [updateStatus, setUpdateStatus] = useState({ salonid: "", status: "" });
 

  // const successMsg = (resp) => {
  //   if (resp.status === 200) {
  //     let myColor = { background: "#4bb543", text: "#FFFFFF" };
  //     notify.show(resp.message, "custom", 5000, myColor);
  //   }
  // };

 const getFitlerval = (val) => {
    setfilterData({
      ...filterData,
      search: val,
    });
  };
  const [filterData, setfilterData] = useState({
    search: "",
    sort_by: { title: 1 },
    pagesize: 200,
    currentPage: 1,
    page: 1,
  });

  const iData = {
    search: filterData.search,
    sort_by: { title: 1 },
    pagesize: "200",
    page: 1,
  };

  useEffect(() => {
    dispatch(SalonRequestLists(iData));
  }, [dispatch, filterData]);

  useEffect(() => {
    setsalonRequestedLists(salonReq);
  }, [salonReq]);

 


  const getPagiData = (val) => {
    console.log("getPagiData", val);
  };

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className="row">
      <div className="card_tr">
        <Row className="align-items-center">
          <Col md={8}>
          <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>

      {/* Salon Request  */}
      <Link to="#" className="colorLightGrey fs14 ml10 mr10" name={t("Salonrequestlist")} >
        {t("Salonrequestlist")}
      </Link>
          </Col>
          <Col className="text-end" md={4}>
            <GLink
              to="/admin/create-salon-request"
              text={t("Createnewrequest")}
              bg="#ff385c"
              paddingBottom="5px"
              paddingTop="5px"
              paddingLeft="10px"
              paddingRight="10px"
              color="#fff"
              hoverColor="#fff"
            >
              {/* <span className="mr5">{Svg.whiteplus}</span> */}
            </GLink>
            {/* <GButton>
              <span className="mr5">{Svg.whiteplus}</span>
              {t("Createnewrequest")}
            </GButton> */}
          </Col>
        </Row>
      </div>

      <Col md={12}>
        <div className="card">
          <SalonActions filterData={getFitlerval} />
        </div>
        <div className="card table_scroll">
          <DataTable data={salonRequestedLists} />
       
        </div>
      </Col>
    </div>
  );
};

export default SalonRequest;

// Action Part which is below breadcrum part
const SalonActions = (props) => {
  const [searchFilter, setsearchFilter] = useState("");

  const callBackFilters = (data) => {
    props.filterData(data);
    setsearchFilter(data);
  };

  const [columns, setcolumns] = useState({ value: "", label: "Columns" });
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={1} md={3} className="mobMb15">
              <span className="fs14 colorLightGrey">{t("Allrequest")}</span>
            </Col>
            <Col lg={2} md={3} className="mobMb15">
              <div className="select_border">
                <Select
                  label="Account type *"
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  options={Columns}
                  value={columns}
                  onChange={(e) => setcolumns(e)}
                />
              </div>
            </Col>

            <Col lg={3} md={3} className="mobMb15">
              <GIconInput
                value={searchFilter}
                name="searchfilter"
                placeholder="Search here..."
                iconRight={Svg.search}
                paddingBottom="0px"
                onChange={(e) => callBackFilters(e.target.value)}
              />
            </Col>

            <Col
              lg={6}
              md={12}
              className="text-end d-flex justify-content-end button_mr align-items-center mobile_b"
            >
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #000"
                hoverBg="#fff"
                hoveColor="#000"
                hoverBorder="1px solid #000"
              >
                <span className="mr5"> {Svg.filter}</span> {t("Filter")}
              </GButton>
              <GButton
                backgroundColor="#fff"
                color="#000"
                border="1px solid #000"
                hoverBg="#fff"
                hoveColor="#000"
                hoverBorder="1px solid #000"
              >
                <span className="mr5">{Svg.export}</span>
                {t("Export")}
              </GButton>
              <UncontrolledDropdown>
                <DropdownToggle className="p-0">
                  <GButton
                    backgroundColor="#fff"
                    color="#000"
                    border="1px solid #000"
                    hoverBg="#fff"
                    hoveColor="#000"
                    hoverBorder="1px solid #000"
                  >
                    {t("Action")}
                    <span className="ml5">{Svg.downblackarrowsmall}</span>
                  </GButton>
                </DropdownToggle>
                <DropdownMenu className="radius4 shadow noBorder">
                  <DropdownItem>
                    <ul className="noBg noUl mb0">
                      <li className="pt10 pb10">
                        <span className="fs14 d-block w-100 colorBlack">
                          <span className="mr10">{Svg.delete}</span>
                          {t("Delete")}
                        </span>
                      </li>
                    </ul>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

// Data Table Section
const DataTable = (props) => {
  const statusData = [
    { value: "Registered", label: "Registered" },
    { value: "Had first call", label: "Had first call" },
    { value: "Scheduled photoshoot", label: "Scheduled photoshoot" },
    { value: "Verified", label: "Verified" },
    { value: "Rejected", label: "Rejected" },
    { value: "Final review Approved", label: "Final review & approved" },
  ];










  const noteSubmit = (salonid, val) => {
    console.log("val", val, "salonID: ", salonid);
    const iData = {
      salonid: salonid,
      notes: val,
    };

     // salonUpdateStatus(iData).then((res) => {
    //   console.log("post", res);
    //   if (res.status === 200) {
    //     let myColor = { background: "#4bb543", text: "#FFFFFF" };
    //     notify.show(res.message, "custom", 5000, myColor);
    //   }
    // });

  };
  

  const columns = [

 
    {
      key: "image",
      text: <GCheckbox  />,
      sortable: true,
      cell: (items) => {
        return (
          <GCheckbox   name={items._id} id={items._id} />
        );
      }
      },
  
    {
      key: "image",
      text: "Salon Id",
      sortable: true,
      cell: (items) => {
        return (
          <>
          {items.userUniqueId}
          </>
        );
      }
      },
  
  {
  key: "salonName",
  text: "Salon Name",
  sortable: true,
  cell: (items) => {
  return (
    <>
    <img
    // src={
    //   items.profileImage
    //     ? HOME_URL + items.profileImage
    //     : Img.salon
    // }

    src={!items.profileImage ?  Img.salon : IMAGE_URL + items.profileImage }
    alt=""
    className="h35 img-fluid radius4 mr10"
  />

  <span className="text-capitalize">{items.salonName}</span>
  </>
  );
  }
  },
  
  {
    key: "ownerName",
    text: t("Representative"),
    sortable: true,
    cell: (items) => {
      return (
     <>
     <span className="text-capitalize">{items.ownerName}</span>
     </>
      );
    }
    },
    {
      key: "businessType",
      text: t("Onlysalontype"),
      sortable: true,
      cell: (items) => {
        return (
           <>
           <span>{items.businessType}</span>
           </>
        );
      }
      },
      {
        key: "businessType",
        text: t("Notes"),
        sortable: true,
        cell: (items) => {
          return (
             <>
              <Link
                                  to={{
                                    hash: items._id ,
                                    pathname: "/admin/create-salon-request/",
                            
                                  }}
                                  className="fs14 d-block w-100 colorBlack"
                                >
                      <GTextarea
                              onBlur={(e) => {
                          noteSubmit(items._id, e.target.value);
                        }}
                        height="50px"
                        className="pointerNone"
                        placeholder="..."
                        icon={Svg.book}
                        resize={true}
                        focusBgColor="#FCB503"
                        focusBorderColor="1px solid #FCB503"
                        backgroundColor="#FCB50321"
                        borderRadius="4px"
                        color="#4D3701"
                        padding="11px"
                        value={items && items.notes}
                        pointerEvent={true}
                                        >
                        </GTextarea>
                           </Link>
             </>
          );
        }
        },
        {
          key: "businessType",
          text: t("Status"),
          sortable: true,
          cell: (items) => {
            return (
               <>
                <div className="salon-request-select-box">
                        <Select
                          className={`w-100 bgyellow_colorwhite ${spaceRemove(
                            items.status
                          )}`}
                          classNamePrefix="themeSelect"
                          value={statusData.filter(
                            (option) => option.value === items.status
                          )}
                          // placeholder={<div>{t("SalonType")}</div>}
                          options={statusData}
                          onChange={(e) => {
                            handleSalonStatusChange(e, items._id);
                          }}
                        />
                      </div>
               </>
            );
          }
          },
          {
            key: "businessType",
            text: t("Employeecount"),
            sortable: true,
            cell: (items) => {
              return (
                 <>
               <td> {items.employees}</td>
                 </>
              );
            }
            },
            {
              key: "businessType",
              text: t("Interestedmembership"),
              sortable: true,
              cell: (items) => {
                return (
                   <>
                 <td> {items.interestedMembershipid}</td>
                   </>
                );
              }
              },
              {
                key: "",
                text: t("Interestedmembership"),
                sortable: true,
                cell: (items) => {
                  return (
                     <>
                   <td> {items.interestedMembershipid}</td>
                     </>
                  );
                }
                },
                {
                  key: "",
                  text: t("Googlemap"),
                  sortable: true,
                  cell: (items) => {
                    return (
                       <>
                 <td className="position-relative map_box">
                      
                      <p
                       onClick={() =>
                          AlertModal02.show(
                          <GoogleLocationModal
                          data={items}
                          // salondata={salondata}
                           />
                
                          , "", () => {}, "md")
                        }
                        >
                          <GImage src={Img.location} />
  
                          </p>

                      {/* <iframe
                        key={ind + "map"}
                        title="542313431asd45"
                       
                         src={items.location ?  Img.location :`https://maps.google.com/maps?q=${
                          items.location && items.location.coordinates
                        }&z=15&output=embed`}
                        width="100px"
                        height="80px"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe> */}
                    </td>
                       </>
                    );
                  }
                  },
                  {
                    key: "location",
                    text: t("Onlylocation"),
                    sortable: true,
                    cell: (items) => {
                      return (
                         <>
                {items.location}
                         </>
                      );
                    }
                    },
                    {
                      key: "mobile",
                      text: t("Mobile"),
                      sortable: true,
                      cell: (items) => {
                        return (
                           <>
                 {items.mobile && items.mobile}
                           </>
                        );
                      }
                      },
                      {
                        key: "email",
                        text: t("Emailaddress"),
                        sortable: true,
                        cell: (items) => {
                          return (
                             <>
                {items.email && items.email}
                             </>
                          );
                        }
                        },

                        {
                          key: "source",
                          text: t("Source"),
                          sortable: true,
                          cell: (items) => {
                            return (
                               <>
                 {items.source && items.source}
                               </>
                            );
                          }
                          },
                          {
                            key: "createdAt",
                            text: t("Requestat"),
                            sortable: true,
                            cell: (items) => {
                              return (
                                 <>
                   {items.createdAt && dateFormat(items.createdAt)}
                                 </>
                              );
                            }
                            },
                            {
                              key: "updatedAt",
                              text: t("Updateat"),
                              sortable: true,
                              cell: (items) => {
                                return (
                                   <>
              {items.updatedAt && dateFormat(items.updatedAt)}
                                   </>
                                );
                              }
                              },

  
  {
  key: "",
  text: "Action",
  cell: (editservice,items) => {
  return (
    <>
   
   <span className="table_sticy_last text-center bg-white">
                      <UncontrolledDropdown>
                        <DropdownToggle className="btn btn-danger">
                          <span>{Svg.horizontalellipsis}</span>
                        </DropdownToggle>
                        <DropdownMenu className="radius4 shadow noBorder">
                          <DropdownItem>
                            <ul className="noBg noUl mb0 pt10 pb10">
                              <li className="mb10">
                                <Link
                                  to={{
                                    hash: items._id && items._id,
                                    pathname: "/admin/create-salon-request/",
                                    state: { fromDashboard: true },
                                  }}
                                  className="fs14 d-block w-100 colorBlack"
                                >
                                  <span className="mr10">{Svg.pencil}</span>
                                  Edit
                                </Link>
                              </li>
                              <li className="mb10">
                                <Link
                                  to={{
                                    hash: items._id && items._id,
                                    pathname: "/admin/salon-images",
                                    state: { fromDashboard: true },
                                  }}
                                  className="fs14 d-block w-100 colorBlack"
                                >
                                  <span className="mr10">{Svg.gallery}</span>
                                  Add photo
                                </Link>
                              </li>
                              <li>
                                <span className="fs14 d-block w-100 colorBlack">
                                  <span className="mr10">{Svg.delete}</span>
                                  Delete
                                </span>
                              </li>
                            </ul>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </span>
   
  </>
  );
  }
  },
  ]
  
  const config1 = {
  page_size: 10,
  length_menu: [10, 20, 50],
  show_filter: true,
  show_pagination: true,
  pagination: 'advance',
  button: {
  excel: true,
  
  }
  }
  

  const handleSalonStatusChange = (e, salonid) => {
    if (salonid && e.value) {
      var iData = {
        salonid: salonid,
        status: e.value,
      };
      adminSalonUpdateStatus(iData).then((resp) => {
        console.log("eeee", resp);
        if (resp.status === 200) {
          // console.log("gett",resp);
          let myColor = { background: "#4bb543", text: "#FFFFFF" };
          notify.show(resp.message, "custom", 5000, myColor);
       
          setTimeout(() => {
            window.location.reload()
           }, 1000);  

        } else {
          let myColor = { background: "#FF385C", text: "#FFFFFF" };
          notify.show(resp.message, "custom", 5000, myColor);
        }
      });
    }
  };

  const dateFormat = (val) => {
    let date = new Date(val);
    let dateMDY = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    return dateMDY;
  };

  const spaceRemove = (val) => {
    return val.replace(/ /g, "");
  };

  return (
    <>
      <section className=" bgWhite position-relative">

        <Table responsive className="align-middle  text-start destop_w">
          <thead className="fs14">
            <tr>
              <th className="table_sticy_first text-center">
                <GCheckbox name="1" id="remember" />
                {/* <input
          type="checkbox"
          onChange={(event) => selectAll(event.target.checked)}
          checked={checkedAll}
        /> */}
              </th>
              <th>
                {t("Salonid")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Salonname")}
                <br></br> <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Representative")} <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Onlysalontype")} <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Notes")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Status")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Employeecount")} <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Interestedmembership")} <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Googlemap")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Onlylocation")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Mobile")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Emailaddress")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Source")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Requestat")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th>
                {t("Updateat")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
              <th className="table_sticy_last text-center bg-white">
                {t("Action")} <br></br>
                <span>{Svg.greyfilter}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data !== null &&
              props.data.data.map((items, ind) => {
                return (
                  <tr className="fs14 colorLightGrey" key={ind.toString()}>
                    <td className="table_sticy_first text-center">
                  
                      <GCheckbox name="" id="Intro" />
                    </td>
                    <td>{items.userUniqueId}</td>
                    <td>
                      <img
                        // src={
                        //   items.profileImage
                        //     ? HOME_URL + items.profileImage
                        //     : Img.salon
                        // }

                        src={!items.profileImage ?  Img.salon : IMAGE_URL + items.profileImage }
                        alt=""
                        className="h35 img-fluid radius4 mr10"
                      />

                      
                      <span className="text-capitalize">{items.salonName}</span>
                    </td>
                    <td className="text-capitalize">{items.ownerName}</td>
                    <td>{items.businessType}</td>
                    <td>

                    <Link
                                  to={{
                                    hash: items._id ,
                                    pathname: "/admin/create-salon-request/",
                            
                                  }}
                                  className="fs14 d-block w-100 colorBlack"
                                >
                      <GTextarea
                              onBlur={(e) => {
                          noteSubmit(items._id, e.target.value);
                        }}
                        height="50px"
                        className="pointerNone"
                        placeholder="..."
                        icon={Svg.book}
                        resize={true}
                        focusBgColor="#FCB503"
                        focusBorderColor="1px solid #FCB503"
                        backgroundColor="#FCB50321"
                        borderRadius="4px"
                        color="#4D3701"
                        padding="11px"
                        value={items && items.notes}
                        pointerEvent={true}
                                        >
                        </GTextarea>
                           </Link>
                    </td>
                    <td>
                      {/* {/ Red - ff385c  Yellow - #FCB503, Blue - #37A3D2, Green - #5cb84b /} */}
                      <div className="salon-request-select-box">
                        <Select
                          className={`w-100 bgyellow_colorwhite ${spaceRemove(
                            items.status
                          )}`}
                          classNamePrefix="themeSelect"
                          value={statusData.filter(
                            (option) => option.value === items.status
                          )}
                          // placeholder={<div>{t("SalonType")}</div>}
                          options={statusData}
                          onChange={(e) => {
                            handleSalonStatusChange(e, items._id);
                          }}
                        />
                      </div>
                    </td>
                    <td> {items.employees}</td>
                    <td> {items.interestedMembershipid}</td>

                    <td className="position-relative map_box">
                      
                      <p
                       onClick={() =>
                          AlertModal02.show(
                          <GoogleLocationModal
                          data={items}
                          // salondata={salondata}
                           />
                
                          , "", () => {}, "md")
                        }
                        >
                          <GImage src={Img.location} />
  
                          </p>

                      {/* <iframe
                        key={ind + "map"}
                        title="542313431asd45"
                       
                         src={items.location ?  Img.location :`https://maps.google.com/maps?q=${
                          items.location && items.location.coordinates
                        }&z=15&output=embed`}
                        width="100px"
                        height="80px"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe> */}
                    </td>
                    <td>
                      {items.location}
                    </td>
                    <td> {items.mobile && items.mobile}</td>
                    <td>{items.email && items.email}</td>
                    <td>{items.source && items.source}</td>
                    <td>{items.createdAt && dateFormat(items.createdAt)}</td>
                    <td>{items.updatedAt && dateFormat(items.updatedAt)}</td>

                    <td className="table_sticy_last text-center bg-white">
                      <UncontrolledDropdown>
                        <DropdownToggle className="btn btn-danger">
                          <span>{Svg.horizontalellipsis}</span>
                        </DropdownToggle>
                        <DropdownMenu className="radius4 shadow noBorder">
                          <DropdownItem>
                            <ul className="noBg noUl mb0 pt10 pb10">
                              <li className="mb10">
                                <Link
                                  to={{
                                    hash: items._id && items._id,
                                    pathname: "/admin/create-salon-request/",
                                    state: { fromDashboard: true },
                                  }}
                                  className="fs14 d-block w-100 colorBlack"
                                >
                                  <span className="mr10">{Svg.pencil}</span>
                                  Edit
                                </Link>
                              </li>
                              <li className="mb10">
                                <Link
                                  to={{
                                    hash: items._id && items._id,
                                    pathname: "/admin/salon-images",
                                    state: { fromDashboard: true },
                                  }}
                                  className="fs14 d-block w-100 colorBlack"
                                >
                                  <span className="mr10">{Svg.gallery}</span>
                                  Add photo
                                </Link>
                              </li>
                              <li>
                                <span className="fs14 d-block w-100 colorBlack">
                                  <span className="mr10">{Svg.delete}</span>
                                  Delete
                                </span>
                              </li>
                            </ul>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>

        {/* <Pagination data={props.data} /> */}
        <div className="table_scroll table_s_x">
            <ReactDatatable
                              config={config1}
                              records={props.data?.data}
                              columns={columns}
                                />
                              </div>
      </section>
    </>
  );
};

// Pagination Section


