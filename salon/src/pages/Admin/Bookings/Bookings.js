import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Container,
} from "reactstrap";
import BreadCrum from "../BreadCrum/BreadCrum";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import Svg from "../../../assets/svg/Svg";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import GIconInput from "../../../components/Layout/GIconInput";
import Select from "react-select";
import GCheckbox from "../../../components/Layout/GCheckbox";
import "./Bookings.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GAlign from "../../../components/Layout/GAlign";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import { connect, useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { postLanguageList } from "../../../store/admin/language/action";

const Bookings = () => {

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)
  const [createLanguageForm, setCreateLanguageForm] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({})
  const [ languageID, setLanguageID] = useState('')
  const [paginationData, setPaginationData] = useState({
    sort_by:{ "planType" : 1 },
    pagesize:"10",
    page:1,
    totalDocs : language.totalDocs ? language.totalDocs :0,
    totalPages : language.totalPages ? language.totalDocs :0,
    prevPage : language.prevPage ? language.totalDocs :0,
    nextPage : language.nextPage ? language.totalDocs :0,
  })
  useEffect(() => {
    const fetchData = async () => {
       await dispatch(postLanguageList(paginationData));
    }
    fetchData()
  }, [paginationData, createLanguageForm, languageID])
  const closecreateLanguageForm = () => {
    setCreateLanguageForm(false)
	}
  const showcreateLanguageForm = () => {
    setCreateLanguageForm(true)
	}
  const editcreateLanguageForm = (items) => {
    setSelectedLanguage(items)
    setCreateLanguageForm(true)
	}
  const handlePaginateChange = (event) => {
    setPaginationData({ ...paginationData, [event.name]: event.value })
  }
  const deleteLanguage = (languageid) => {
      // adminDeleteLanguage({languageid :languageid }).then((resp) => {
      //   if (resp.status === 200) {
      //     toast.success('Deleted Successfully.', {
      //       style: {
      //         border: '1px solid #4bb543',
      //         padding: '10px',
      //         color: 'green',
      //       },
      //       iconTheme: {
      //         primary: 'green',
      //         secondary: '#FFF',
      //       },
      //     });
      //   }
      //   else {
      //     if (resp.status === 202) {
      //       toast.error(resp.data.message[0].param + ' ' + resp.data.message[0].msg, {
      //       });
      //     }
      //   }
      // }).catch(err => {
      //   toast.error('Something Went Wrong!',
      //   );
      // })
      // setLanguageID(languageid)
	}

  // For Data table columns


  let rows = language.data && language.data.map((items) => {
    items.actions = <>
                <UncontrolledDropdown>
                  <DropdownToggle className="btn btn-danger">
                    <span>{Svg.horizontalellipsis}</span>
                  </DropdownToggle>
                  <DropdownMenu className="radius4 shadow noBorder">
                    <DropdownItem>
                      <ul className="noBg noUl mb0 pt10 pb10">
                        <li
                          className="mb10"
                        >
                          <span className="fs14 d-block w-100 colorBlack" onClick={() => editcreateLanguageForm(items)}>
                            <span className="mr10">{Svg.pencil}</span>
                            {t("Edit")}
                          </span>
                        </li>
                        <li>
                          <span className="fs14 d-block w-100 colorBlack" onClick={() => deleteLanguage(items._id)} >
                            <span className="mr10">{Svg.delete}</span>
                            {t("Delete")}
                          </span>
                        </li>
                      </ul>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
      items.checkbox = <GCheckbox name={items._id} id={items._id} />
      items.status = <div>
      <button className="btn-red mr8">{t("Cancelled")}</button>
      <button className="btn-blue mr8">{t("Paid")}</button>
      {/* <button className="btn-blue mr8">{t("Unpaid")}</button>
      <button className="btn-green mr8">{t("Confirmed")}</button> */}
      {/* <button className="btn-darkBlue">{t("Requested")}</button> */}
    </div>
    return items
  })
  // For Data table columns
  const columns = [
    { label: <GCheckbox name="1" id="remember" />, field: "checkbox" },
    { label: t("Orderid"), field: "orderId" },
    { label: t("Customername"), field: "customerName" },
    { label: t("Appointmentdate"), field: "appointmentDate" },
    { label: t("Salonname"), field: "salonName" },
    { label: t("Servicename"), field: "serviceName" },
    { label: t("Status"), field: "status" },
    { label: t("Orderdate"), field: "orderDate" },
    { label: t("Value"), field: "value" },
    { label: t("Action"), field: "action" },
  ];
  return (
    <>
      <div className="row">
        <div className="card_tr">
          <Row className="align-items-center">
            <Col md={8}>
              <BreadCrum />
            </Col>
          </Row>
        </div>

        <Col md={12}>
          <div className="card">
            <BookingsActions />
          </div>
          <div className="card">
            <div className="sticky_td sticky_th table_booking table_scroll table_booking_th_width table_booking_w">
            <AdminDataTable key='BookingTable' columns={columns} rows={rows} paginate={paginationData} changeTableData={handlePaginateChange}/>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Bookings;

// Booking Actions Part which is below breadcrum part
const BookingsActions = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [searchFilter, setsearchFilter] = useState("");
  const [columns, setcolumns] = useState({ value: "", label: "Columns" });

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

  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={1} md={3} className="mobMb15">
              <span className="fs14 colorLightGrey">{t("Allbookings")}</span>
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

            <Col lg={3} md={3} className="mobMb15 d-flex align-items-center">
              <GIconInput
                value={searchFilter}
                name="searchfilter"
                placeholder="Search here..."
                iconRight={Svg.search}
                paddingBottom="0px"
                onChange={(e) => setsearchFilter(e.target.value)}
              />
              <h3 className="fs14 colorGrey mb0 text-underline ml10">
                {t("Resetall")}
              </h3>
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
                <span>{Svg.filter}</span>
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

// Booking Filter Modals

const BookingFilters = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <section>
        <div className="bgLightBlue">
          <h3 className="fs15 pl20 pt10 pb10 mb20">{t("Filterbookings")}</h3>
        </div>
        <div className="pl10 pr10">
          <Container>
            <div className="mb10">
              <GCheckbox id="status" name="status" label={t("Status")} />
            </div>
            <Row className="mb20">
              <Col md={4}>{t("Cancelled")}</Col>
              <Col md={4}>{t("Confirmed")}</Col>
              <Col md={4}>{t("Complete")}</Col>
              <Col md={4}>{t("Paid")}</Col>
              <Col md={4}>{t("Unpaid")}</Col>
            </Row>
            <Row className="mb20">
              <div className="mb10">
                <GCheckbox id="time" name="time" label={t("Time")} />
              </div>
              <Col md={3}>Day</Col>
              <Col md={3}>Month</Col>
              <Col md={6}>
                <section className="filter_by_date ">
                  <DatePicker
                    showYearDropdown
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-100"
                  />
                </section>
              </Col>
            </Row>

            <GAlign align="between" alignV="center" className="mb25">
              <span className="colorRed text-underline">
                {t("Resettodefault")}
              </span>
              <GButton>{t("Apply")}</GButton>
            </GAlign>
          </Container>
        </div>
      </section>
    </>
  );
};
