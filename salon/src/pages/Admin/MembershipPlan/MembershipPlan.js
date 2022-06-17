import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  CardTitle,
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
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import { useTranslation } from "react-i18next";
import AdminDataTable from '../../../components/DataTable/AdminDataTable'
import { connect, useDispatch, useSelector } from "react-redux";
import { postMembershipList } from "../../../store/admin/membership/action";
import { Link } from "react-router-dom";
import CreateMembership from './CreateMembership'
import EditMembership from './EditMembership'
import { adminDeleteMembership } from '../../../helpers/backend/admin'
import toast, { Toaster } from 'react-hot-toast';
import ReactDatatable from '@ashvin27/react-datatable'

const MembershipPlan = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const membership = useSelector(state => state.membership.data)
  console.log("member",membership);
  const [createMembershipForm, setCreateMembershipForm] = useState(false)
  const [selectedMembership, setSelectedMembership] = useState({})
  const [ membershipID, setMembershipID] = useState('')
  

  const closecreateMembershipForm = () => {
    setCreateMembershipForm(false)
	}

  const showcreateMembershipForm = () => {
    setCreateMembershipForm(true)
	}
  const editcreateMembershipForm = (items) => {
    setSelectedMembership(items)
    setCreateMembershipForm(true)
	}

  const deleteMembership = (membershipid) => {
      adminDeleteMembership({membershipid :membershipid }).then((resp) => {
        if (resp.status === 200) {
          toast.success('Deleted Successfully.', {
            style: {
              border: '1px solid #4bb543',
              padding: '10px',
              color: 'green',
            },
            iconTheme: {
              primary: 'green',
              secondary: '#FFF',
            },
          });
        }
        else {
          if (resp.status === 202) {
            toast.error(resp.data.message[0].param + ' ' + resp.data.message[0].msg, {
            });
          }
        }
      }).catch(err => {
        toast.error('Something Went Wrong!',
        );
      })
      setMembershipID(membershipid)
	}


  // const [paginationData, setPaginationData] = useState({
  //   planType : "Both",
  //   sort_by:{ "planType" : 1 },
  //   pagesize:"10",
  //   page:1,
  //   totalDocs : membership.totalDocs,
  //   totalPages : membership.totalPages,
  //   prevPage : membership.prevPage,
  //   nextPage : membership.nextPage
  // })

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(postMembershipList());
    }
    fetchData()
  }, [ createMembershipForm, membershipID])

    // const handlePaginateChange = (event) => {
    //   setPaginationData({ ...paginationData, [event.name]: event.value })
    // }

    const columns = [
         {
        key: "",
        text:  <GCheckbox name="1" id="remember" />,
        sortable: true,
        cell: (items) => {
          return (
            <GCheckbox name="1" id="remember" />
          );
        }
        },
        {
          key: "planName",
          text: t("Plan Name"),
          sortable: true,
          cell: (items) => {
            return (
              <span>{items.planName}</span>
            );
          }
          },
  
  {
  key: "bookingWidget",
  text: t("Booking Widget"),
  sortable: true,
  cell: (items) => {
    return (
        <span>{items.bookingWidget ? 'Yes' : 'No'}</span>
    );
  }
  },
  {
    key: "subDomain",
    text: t("Subdomain") ,
    sortable: true,
    cell: (items) => {
      return (
          <span>{items.subDomain ? 'Enable' : 'Disable'}</span>
      );
    }
    },
    {
      key: "uniqueDomain",
      text: t("Unique") ,
      sortable: true,
      cell: (items) => {
        return (
            <span>{items.uniqueDomain ? 'Yes' : 'No'}</span>
        );
      }
      },
    {
      key: "staffLimit",
      text: t("Staff"),
      sortable: true,
      cell: (items) => {
        return (
            <span>{items.staffLimit}</span>
        );
      }
      },
      {
        key: "commisionPercent",
        text: t("Commision"),
        sortable: true,
        cell: (items) => {
          return (
              <span>{items.commisionPercent}</span>
          );
        }
        },
        {
          key: "planType",
          text: t("Type"),
          sortable: true,
          cell: (items) => {
            return (
                <span>{items.planType}</span>
            );
          }
          },
          {
            key: "monthlyPrice",
            text: t("Price"),
            sortable: true,
            cell: (items) => {
              return (
                  <span>{items.monthlyPrice}</span>
              );
            }
            },
            {
              key: "discount",
              text: t("Renewal"),
              sortable: true,
              cell: (items) => {
                return (
                    <span>{items.discount}</span>
                );
              }
              },
          {
  key: "",
  text: t("Action") ,
  cell: (editmembership,items) => {
    return (
      <>
       <UncontrolledDropdown>
    <DropdownToggle className="btn btn-danger">
     <span>{Svg.horizontalellipsis}</span>
     </DropdownToggle>
     <DropdownMenu className="radius4 shadow noBorder">
       <DropdownItem>
       <ul className="noBg noUl mb0 pt10 pb10">
          <li className="mb10" onClick={() => { AlertModal02.show(<EditMembership  editmembership={editmembership} closeForm={editcreateMembershipForm}/>, "", () => {}, "md")}} >
           <span className="mr8">{Svg.pencil}</span> Edit
           {/* <Link to={{ pathname: '/admin/create-salon-request', state: { salonid: items._id } }} className="mb10" >
               <span className="mr8">{Svg.pencil}</span>
               Edit
             </Link> */}
             {/* onClick={() =>
                        
                       } */}
           </li>
      
          <li>
             <span className="fs15 d-block w-100 colorBlack" onClick={() => deleteMembership(items._id)} >
            <span className="mr10">{Svg.delete}</span>
              Delete
            </span>
         </li>
         </ul>
       </DropdownItem>
     </DropdownMenu>
  </UncontrolledDropdown>
     
     
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
  // excel: true,
  // print: true,
  }
  }



  // const columns = [
  //   { field : "checkbox" , label :  <GCheckbox name="1" id="remember" />},
  //   { field: "planName", label: t("Plan") },
  //   { field: "bookingWidget", label: t("Booking") },
  //   { field: "subDomain", label: t("Subdomain") },
  //   { field: "uniqueDomain", label: t("Unique") },
  //   { field: "staffLimit", label: t("Staff") },
  //   { field: "commisionPercent", label: t("Commision") },
  //   { field: "planType", label: t("Type") },
  //   { field: "monthlyPrice", label: t("Price") },
  //   { field: "discount", label: t("Renewal") },
  //   { field: "actions", label: t("Action") },
  // ]
  // let rows = membership.data && membership.data.map((items) => {
  //   var editmembership = items
  //   items.actions = <UncontrolledDropdown>
  //   <DropdownToggle className="btn btn-danger">
  //     <span>{Svg.horizontalellipsis}</span>
  //   </DropdownToggle>
  //   <DropdownMenu className="radius4 shadow noBorder">
  //     <DropdownItem>
  //       <ul className="noBg noUl mb0 pt10 pb10">
  //         <li className="mb10" onClick={() => { AlertModal02.show(<EditMembership  editmembership={editmembership} closeForm={editcreateMembershipForm}/>, "", () => {}, "md")}} >
  //         <span className="mr8">{Svg.pencil}</span> Edit
  //         {/* <Link to={{ pathname: '/admin/create-salon-request', state: { salonid: items._id } }} className="mb10" >
  //             <span className="mr8">{Svg.pencil}</span>
  //             Edit
  //           </Link> */}
  //           {/* onClick={() =>
                        
  //                     } */}
  //         </li>
      
  //         <li>
  //           <span className="fs15 d-block w-100 colorBlack" onClick={() => deleteMembership(items._id)} >
  //             <span className="mr10">{Svg.delete}</span>
  //             Delete
  //           </span>
  //         </li>
  //       </ul>
  //     </DropdownItem>
  //   </DropdownMenu>
  // </UncontrolledDropdown>
  //     items.checkbox = <GCheckbox name={items._id} id={items._id} />
  //     items.bookingWidget = items.bookingWidget ? 'Yes' : 'No'
  //     items.subDomain = items.subDomain ? 'Enable' : 'Disable'
  //     items.uniqueDomain = items.uniqueDomain ? 'Yes' : 'No'
  //   return items
  // })
  
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
        {t("Membership Plan List")}
      </Link>
          </Col>
          <Col className="text-end" md={4}>
          <GButton onClick={() =>
                        AlertModal02.show(<CreateMembership toggle={closecreateMembershipForm}/>, "", () => {}, "md")
                      }>
                  <span className="mr5">{Svg.whiteplus}</span> {t("Addto")}
                </GButton>
           
          </Col>
        </Row>
      </div>
      {createMembershipForm ? (<CreateMembership membership={selectedMembership} toggle={closecreateMembershipForm}/>) : ""}
      
      <Col md="12">
        {/* <div className="card">
          <section className="pt15 pb15">
          <Container fluid>
            <Row className="align-items-center">
              <Col lg={2} md={3} className="mobMb15">
                <span className="fs15 colorLightGrey">{t("Allmembership")}</span>
              </Col>
              <Col lg={2} md={3} className="mobMb15">
                <div className="select_border">
          
                </div>
              </Col>
              <Col lg={2} md={3} className="mobMb15">
                <div className="select_border">
               
                </div>
              </Col>
              <Col lg={3} md={3} className="mobMb15">
                <GIconInput
                  placeholder="Search here..."
                  iconRight={Svg.search}
                  paddingBottom="0px"
                />
              </Col>
              <Col lg={3} md={12} className="text-end p-0">
                <UncontrolledDropdown>
                  <DropdownToggle>
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
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.delete}</span>{" "}
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
        </div> */}

        <div className="card table_scroll_salon"> <ReactDatatable
                            config={config1}
                            records={membership}
                            columns={columns}
                              />
        </div>
      </Col>
    </div>
    </>
  );
};
export default MembershipPlan
// MembershipPlan.propTypes = {
//   membership: PropTypes.object,
//   onGetMembership: PropTypes.func,
// }
// const mapStateToProps = ({ membership }) => ({
//   membership: membership && membership,
// })

// const mapDispatchToProps = (dispatch) => ({
//   onGetMembership: (paginationData) => dispatch(postMembershipList(paginationData)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(MembershipPlan);



// Action Part which is below breadcrum part
const MembershipActions = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // For Columns Object
  const Columns = [
    { value: "plan", label: t("Plan") },
    { value: "booking", label: t("Booking") },
    { value: "subdomain", label: t("Subdomain") },
    { value: "unique", label: t("Unique") },
    { value: "staff", label: t("Staff") },
    { value: "commision", label: t("Commision") },
    { value: "type", label: t("Type") },
    { value: "price", label: t("Price") },
    { value: "renewal", label: t("Renewal") },
  ];

  // For Number Object
  const Number = [
    { value: "1", label: t("1") },
    { value: "2", label: t("2") },
    { value: "3", label: t("3") },
    { value: "4", label: t("4") },
    { value: "5", label: t("5") },
    { value: "6", label: t("6") },
    { value: "7", label: t("7") },
    { value: "8", label: t("8") },
    { value: "9", label: t("9") },
    { value: "10", label: t("10") },
  ];

  const [columns, setcolumns] = useState({ value: "", label: t("Plan") });
  const [num, setnum] = useState({ value: "", label: t("1") });

  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={2} md={3} className="mobMb15">
              <span className="fs15 colorLightGrey">{t("Allmembership")}</span>
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
            <Col lg={2} md={3} className="mobMb15">
              <div className="select_border">
                <Select
                  label="Account type *"
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  options={Number}
                  value={num}
                  onChange={(e) => setnum(e)}
                />
              </div>
            </Col>
            <Col lg={3} md={3} className="mobMb15">
              <GIconInput
                placeholder="Search here..."
                iconRight={Svg.search}
                paddingBottom="0px"
              />
            </Col>
            <Col lg={3} md={12} className="text-end p-0">
              <UncontrolledDropdown>
                <DropdownToggle>
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
                        <span className="fs15 d-block w-100 colorBlack">
                          <span className="mr10">{Svg.delete}</span>{" "}
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

