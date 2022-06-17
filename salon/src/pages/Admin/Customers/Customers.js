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
import CreateCustomer from "./CreateCustomer";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import GIconInput from "../../../components/Layout/GIconInput";
import Select from "react-select";
import GCheckbox from "../../../components/Layout/GCheckbox";
import EditCustomer from "./EditCustomer";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { postCustomerList } from "../../../store/admin/customers/action";

const Customers = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const customers = useSelector(state => state.customers)
  const [createCustomerForm, setCreateCustomerForm] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState({})
  const [ customersID, setCustomerID] = useState('')
  const [paginationData, setPaginationData] = useState({
    sort_by:{ "planType" : 1 },
    pagesize:"10",
    page:1,
    totalDocs : customers.totalDocs ? customers.totalDocs :0,
    totalPages : customers.totalPages ? customers.totalDocs :0,
    prevPage : customers.prevPage ? customers.totalDocs :0,
    nextPage : customers.nextPage ? customers.totalDocs :0,
  })


  useEffect(() => {
    const fetchData = async () => {
       await dispatch(postCustomerList(paginationData));
    }
    fetchData()
  }, [paginationData, createCustomerForm, customersID])
  const closecreateCustomerForm = () => {
    setCreateCustomerForm(false)
	}
  const showcreateCustomerForm = () => {
    setCreateCustomerForm(true)
	}
  const editcreateCustomerForm = (items) => {
    setSelectedCustomer(items)
    setCreateCustomerForm(true)
	}
  const handlePaginateChange = (event) => {
    setPaginationData({ ...paginationData, [event.name]: event.value })
  }
  const deleteCustomer = (customersid) => {
      // adminDeleteCustomer({customersid :customersid }).then((resp) => {
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
      // setCustomerID(customersid)
	}

  // For Data table columns
  const columns = [
    { label: <GCheckbox name="1" id="remember" />, field: "checkbox" },
    { label: t("Customername"), field: "customerName" },
    { label: t("Phonenumber"), field: "mobile" },
    { label: t("Email"), field: "email" },
    { label: t("Marketing"), field: "acceptMarketingEmail" },
    { label: t("Bookings"), field: "booking" },
    { label: t("Revenue"), field: "revenue" },
    { label: t("Lastvisit"), field: "lastVisit" },
    { label: t("Action"), field: "actions" },
  ];
  let rows = customers.data && customers.data.map((items) => {
    var editcustomer = items
    items.actions = <>
                  <UncontrolledDropdown>
                    <DropdownToggle className="btn btn-danger">
                      <span>{Svg.horizontalellipsis}</span>
                    </DropdownToggle>
                    <DropdownMenu className="radius4 shadow noBorder">
                      <DropdownItem>
                        <ul className="noBg noUl mb0 pt10 pb10">
                          <li className="mb10" onClick={() =>
                AlertModal02.show(<EditCustomer editcustomer={editcustomer} closeForm={closecreateCustomerForm} />, "", () => {}, "lg")
              } >
                          <span className="mr10">{Svg.pencil}</span>
                              {t("Edit")}
                          </li>
                          <li>
                            <span className="fs14 d-block w-100 colorBlack" onClick={() => deleteCustomer(items._id)} >
                              <span className="mr10">{Svg.delete}</span>
                              {t("Delete")}
                            </span>
                          </li>
                        </ul>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
    
      items.checkbox = <div><GCheckbox name={items._id} id={items._id} /></div>
      items.acceptMarketingEmailComm = <div>
      <span className="mr10">{Svg.tickwithroundbggreen}</span>
      <span>{Svg.redcardwithibtn}</span>
    </div>

    return items
  })
  return (
    <>
      <div className="row">
        <div className="card_tr">
          <Row className="align-items-center">
            <Col md={8}>
            <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>
      <Link to="#" className="colorLightGrey fs14 ml10 mr10"  >
        {t("Customer")}
      </Link>
            </Col>
            <Col className="text-end" md={4}>
              <UncontrolledDropdown>
                <DropdownToggle>
                  <GButton  onClick={() =>
                  AlertModal02.show(<CreateCustomer />, "", () => {}, "lg")
                }>
                    <span className="mr5">{Svg.whiteplus}</span> {t("Addto")}
                  </GButton>
                </DropdownToggle>
            
              </UncontrolledDropdown>
            </Col>
          </Row>
        </div>

        <Col md={12}>
          <div className="card">
            <CustomersActions />
          </div>
          <div className="card table_scroll_salon">
            <div className="table_amenities">
            <AdminDataTable key='CustomersTable' columns={columns} rows={rows} paginate={paginationData} changeTableData={handlePaginateChange}/>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Customers;

// Action Part which is below breadcrum part
const CustomersActions = () => {
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
              <span className="fs14 colorLightGrey">{t("Allcustomers")}</span>
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
