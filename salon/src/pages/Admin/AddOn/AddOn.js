import React, { useState,useEffect } from "react";
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
  Button,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import BreadCrum from "../BreadCrum/BreadCrum";
import Select from "react-select";
import GIconInput from "../../../components/Layout/GIconInput";
import GCheckbox from "../../../components/Layout/GCheckbox";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
// import AlertModal from "../../../components/AlertModal/AlertModal";
import { connect, useDispatch, useSelector } from "react-redux";
import { postMembershipAddonsList } from "../../../store/admin/membershipAddon/action";
import AdminDataTable from '../../../components/DataTable/AdminDataTable'
import { useTranslation } from "react-i18next";
import AddonPlan from './CreateAddOn'
import EditAddOn from './EditAddOn'
import ReactDatatable from '@ashvin27/react-datatable'
import { Link } from "react-router-dom";

// For Columns Object
const Columns = [
  { value: "plan", label: "Plan name" },
  { value: "booking", label: "Booking widget" },
  { value: "subdomain", label: "Subdomain" },
  { value: "unique", label: "Unique domain" },
  { value: "staff", label: "Staff Limit" },
  { value: "commision", label: "Commision percentage" },
  { value: "type", label: "Plan type" },
  { value: "price", label: "Price" },
  { value: "renewal", label: "Auto Renewal" },
];

// For Number Object
const Number = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];

const AddOn = () => {

  const dispatch = useDispatch()
  const membershipaddon = useSelector(state => state.membershipAddon.data)
  console.log("addon",membershipaddon);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  // const [paginationData, setPaginationData] = useState({
  //   planType : "Both",
  //   sort_by:{ "planType" : 1 },
  //   pagesize:"20",
  //   page:1,
  //   totalDocs : membershipaddon.totalDocs,
  //   totalPages : membershipaddon.totalPages,
  //   prevPage : membershipaddon.prevPage,
  //   nextPage : membershipaddon.nextPage
  // })

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(postMembershipAddonsList());
    }
    fetchData()
  }, [])

  const editcreateMembershipForm = (items) => {
    // setSelectedMembership(items)
    // setCreateMembershipForm(true)
	}

  const deleteMembership = (membershipid) => {
 
	}

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
     key: "planAddonName",
     text: t("Plan Name"),
     sortable: true,
     cell: (items) => {
       return (
         <span>{items.planAddonName}</span>
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
key: "subDomain",
text: t("Subdomain") ,
sortable: true,
cell: (items) => {
 return (
     <span>{items?.subDomain === true ? 'Enable' : items?.subDomain === false ? 'Disable': ''}</span>
 );
}
},
{
 key: "uniqueDomain",
 text: t("Unique") ,
 sortable: true,
 cell: (items) => {
   return (
       <span>{items.uniqueDomain === true ? 'Yes' : items.uniqueDomain === false ?'No' : ''}</span>
   );
 }
 },

     {
       key: "price",
       text: t("Price"),
       sortable: true,
       cell: (items) => {
         return (
             <span>{items.price}</span>
         );
       }
       },
     
     {
key: "",
text: t("Action") ,
cell: (editmembershipaddon,items) => {
return (
 <>
<UncontrolledDropdown>
    <DropdownToggle className="btn btn-danger">
       <span>{Svg.horizontalellipsis}</span>
     </DropdownToggle>
     <DropdownMenu className="radius4 shadow noBorder">
       <DropdownItem>
         <ul className="noBg noUl mb0 pt10 pb10">
           <li className="mb10" onClick={() => { AlertModal02.show(<EditAddOn  editmembershipaddon={editmembershipaddon} closeForm={editcreateMembershipForm}/>, "", () => {}, "md")}}  >
           <span className="mr8">{Svg.pencil}</span> Edit
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
  //   { field: "planAddonName", label: t("Plan") },
  //   { field: "staffLimit", label: t("Staff") },
  //   { field: "subDomainlist", label: t("Subdomain") },
  //   { field: "uniqueDomainlist", label: t("Unique") },
  //   { field: "price", label: t("Price") },
  //   { field: "actions", label: t("Action") },
  // ]
  // let rows = membershipaddon.data && membershipaddon.data.map((items) => {
  //   var editmembershipaddon = items
  //   items.actions = <UncontrolledDropdown>
  //   <DropdownToggle className="btn btn-danger">
  //     <span>{Svg.horizontalellipsis}</span>
  //   </DropdownToggle>
  //   <DropdownMenu className="radius4 shadow noBorder">
  //     <DropdownItem>
  //       <ul className="noBg noUl mb0 pt10 pb10">
  //         <li className="mb10" onClick={() => { AlertModal02.show(<EditAddOn  editmembershipaddon={editmembershipaddon} closeForm={editcreateMembershipForm}/>, "", () => {}, "md")}}  >
  //         <span className="mr8">{Svg.pencil}</span> Edit
  //               </li>
      
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
  //     items.subDomainlist = items?.subDomain === true ? 'Enable' : items?.subDomain === false ? 'Disable': ''
  //     items.uniqueDomainlist = items.uniqueDomain === true ? 'Yes' : items.uniqueDomain === false ?'No' : ''
  //   return items
  // })

  return (
    <div className="row">
      <div className="card_tr">
        <Row className="align-items-center">
          <Col md={8}>
          <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>
      <Link to="#" className="colorLightGrey fs14 ml10 mr10"  >
        {t("Add-On Plan List")}
      </Link>
          </Col>
          <Col className="text-end" md={4}>
          <UncontrolledDropdown>
          <DropdownToggle>
            <GButton   onClick={() =>
                    AlertModal02.show(<AddonPlan />, "", () => {}, "lg")
                  }>
              <span className="mr5">{Svg.whiteplus}</span> Add
            </GButton>
          </DropdownToggle>
            </UncontrolledDropdown>
          </Col>
        </Row>
      </div>


      <Col md="12">
        <div className="card">
          <MembershipActions />
        </div>

        <div className="card table_scroll_salon">  <ReactDatatable
                            config={config1}
                            records={membershipaddon}
                            columns={columns}
                              />
        </div>
      </Col>

    </div>
  );
};

export default AddOn;

// Action Part which is below breadcrum part
const MembershipActions = () => {

  const [columns, setcolumns] = useState({ value: "", label: "Columns" });
  const [num, setnum] = useState({ value: "", label: "10" });




  return (
    <>
      {/* <section className="pt15 pb15">
        <Container fluid>
        <Row className="align-items-center">
            <Col lg={2} md={3} className="mobMb15">
              <span className="fs15 colorLightGrey">All membership</span>
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
                    Action{" "}
                    <span className="ml5">{Svg.downblackarrowsmall}</span>
                  </GButton>
                </DropdownToggle>
                <DropdownMenu className="radius4 shadow noBorder">
                  <DropdownItem>
                    <ul className="noBg noUl mb0">
                      <li className="pt10 pb10">
                        <span className="fs15 d-block w-100 colorBlack">
                          <span className="mr10">{Svg.delete}</span> Delete
                        </span>
                      </li>
                    </ul>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

// Data Table Section
const DataTable = () => {
  return (
    <>
      <section className="heightVh50">
        <Table responsive className="align-middle  text-start">
          <thead className="fs15">
            <tr>
              <th>
                <GCheckbox name="1" id="remember" />
              </th>
              <th>Plan Name</th>
              <th>Staff count</th>
              <th>Subdomain</th>
              <th>Unique domain</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="fs15 colorLightGrey">
              <td>
                <GCheckbox name="1" id="Intro" />
              </td>
              <td>Intro plan</td>
              <td>15</td>
              <td>Enable</td>
              <td>₺999</td>
              <td>Yes</td>
              <td>
                <UncontrolledDropdown>
                  <DropdownToggle className="btn btn-danger">
                    <span>{Svg.horizontalellipsis}</span>
                  </DropdownToggle>
                  <DropdownMenu className="radius4 shadow noBorder">
                    <DropdownItem>
                      <ul className="noBg noUl mb0">
                        <li className="pt10 pb10"  onClick={() =>
                    AlertModal02.show(<EditAddOn  />, "", () => {}, "lg")
                  }>
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.pencil}</span> Edit
                          </span>
                        </li>
                        <li className="pt10 pb10">
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.delete}</span> Delete
                          </span>
                        </li>
                      </ul>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr className="fs15 colorLightGrey">
              <td>
                <GCheckbox name="2" id="basic" />
              </td>
              <td>Intro plan</td>
              <td>15</td>
              <td>Enable</td>
              <td>₺999</td>
              <td>Yes</td>
              <td>
                <UncontrolledDropdown>
                  <DropdownToggle className="btn btn-danger">
                    <span>{Svg.horizontalellipsis}</span>
                  </DropdownToggle>
                  <DropdownMenu className="radius4 shadow noBorder">
                    <DropdownItem>
                      <ul className="noBg noUl mb0">
                        <li className="pt10 pb10">
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.pencil}</span> Edit
                          </span>
                        </li>
                        <li className="pt10 pb10">
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.delete}</span> Delete
                          </span>
                        </li>
                      </ul>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr className="fs15 colorLightGrey">
              <td>
                <GCheckbox name="3" id="popular" />
              </td>
              <td>Intro plan</td>
              <td>15</td>
              <td>Enable</td>
              <td>₺999</td>
              <td>Yes</td>
              <td>
                <UncontrolledDropdown>
                  <DropdownToggle className="btn btn-danger">
                    <span>{Svg.horizontalellipsis}</span>
                  </DropdownToggle>
                  <DropdownMenu className="radius4 shadow noBorder">
                    <DropdownItem>
                      <ul className="noBg noUl mb0">
                        <li className="pt10 pb10">
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.pencil}</span> Edit
                          </span>
                        </li>
                        <li className="pt10 pb10">
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.delete}</span> Delete
                          </span>
                        </li>
                      </ul>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr className="fs15 colorLightGrey">
              <td>
                <GCheckbox name="1" id="Intro" />
              </td>
              <td>Intro plan</td>
              <td>15</td>
              <td>Enable</td>
              <td>₺999</td>
              <td>Yes</td>
              <td>
                <UncontrolledDropdown>
                  <DropdownToggle className="btn btn-danger">
                    <span>{Svg.horizontalellipsis}</span>
                  </DropdownToggle>
                  <DropdownMenu className="radius4 shadow noBorder">
                    <DropdownItem>
                      <ul className="noBg noUl mb0">
                        <li className="pt10 pb10">
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.pencil}</span> Edit
                          </span>
                        </li>
                        <li className="pt10 pb10">
                          <span className="fs15 d-block w-100 colorBlack">
                            <span className="mr10">{Svg.delete}</span> Delete
                          </span>
                        </li>
                      </ul>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <Pagination /> */}
      </section>
    </>
  );
};

// Pagination Section
const Pagination = () => {
  return (
    <>
      <section className="pl15">
        <GAlign alignV="center">
          <span className="fs15">Total 7 Membership plans</span>
          <div>
            <span className="fs15 mr10">Rows per page :</span>
            <span className="fs15 mr10">
              <u className="mr10">10</u>
              {Svg.downblackarrowsmall}
            </span>
            <span className="fs15 mr10">1-10 of 556</span>
            <span className="mr10">{Svg.leftblackarrow}</span>
            <span className="mr10">{Svg.rightblackarrow}</span>
          </div>
        </GAlign>
      </section>
    </>
  );
};

// Create Add-on plan Modal

// Edit Add-on plan Modal

