import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col,Container, Row,DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import BreadCrum from "../BreadCrum/BreadCrum";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import Svg from "../../../assets/svg/Svg";
import GCheckbox from "../../../components/Layout/GCheckbox";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import Addnewservice from "./Addnewservice";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import GIconInput from "../../../components/Layout/GIconInput";
import { connect, useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { AdminServiceLists } from "../../../store/admin/service/action";
import { IMAGE_URL } from "../../../helpers/apiurls";
import { adminDeleteService } from "../../../helpers/backend/admin";
import {API_URL2} from '../../../helpers/apiurls';
import EditService from './EditService'
import Auth from "../../../helpers/Auth/Auth";
import axios, { Axios } from "axios";
import ReactDatatable from '@ashvin27/react-datatable'



const Services = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const service = useSelector(state => state.service?.service.data  )
  console.log("service",service)
  const [createserviceForm, setCreateserviceForm] = useState(false)
  const [selectedservice, setSelectedservice] = useState({})
  const [ serviceID, setserviceID] = useState('')

  // const [paginationData, setPaginationData] = useState({

  //   planType : "Both",
  //   sort_by:{ "planType" : 1 },
  //   pagesize:"100",
  //   page:1,
  //   orderby:1,
  //   totalDocs :service && service.totalDocs ? service.totalDocs :0,
  //   totalPages :service && service.totalPages ? service.totalDocs :0,
  //   prevPage : service && service.prevPage ? service.totalDocs :0,
  //   nextPage : service && service.nextPage ? service.totalDocs :0,
  // })

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(AdminServiceLists());
    }
    fetchData()
  }, [createserviceForm, serviceID])
  
  const closecreateserviceForm = () => {
    setCreateserviceForm(false)
	}
  const showcreateserviceForm = () => {
    setCreateserviceForm(true)
	}
  const editcreateserviceForm = (items) => {
    setSelectedservice(items)
    setCreateserviceForm(true)
	}

  // const handlePaginateChange = (event) => {
  //   setPaginationData({ ...paginationData, [event.name]: event.value })
  // }

  

  
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
    text: "Service Icon",
    sortable: true,
    cell: (items) => {
      return (
        !items.image? Svg.pencil :<img src={IMAGE_URL + items.image} style={{height:'40px',width:'40px'}}/>
      );
    }
    },

{
key: "name",
text: "Service Name",
sortable: true,
cell: (items) => {
return (
    <span>{items.name}</span>
);
}
},

{
  key: "categoryName",
  text: "Category Name",
  sortable: true,
  cell: (items) => {
    return (
      <span>{items.categoryName}</span>
    );
  }
  },
  {
    key: "active",
    text: "Availability",
    sortable: true,
    cell: (items) => {
      return (
        <label className="switchgreen">
        <input
           type="checkbox"
           id="availability"
           name="availability"
           checked={items.active === true ? 'unchecked' : 'checked'}
           onChange={(e) => setAvailability(e.target.checked)}
      />
       <span className="slidergreen roundgreen"></span>
</label>
      );
    }
    },


{
key: "",
text: "Action",
cell: (editservice,items) => {
return (
  <>
  <UncontrolledDropdown>
      <DropdownToggle className="btn btn-danger">
        <span style={{paddingLeft:'20px'}}>{Svg.horizontalellipsis}</span>
      </DropdownToggle>
      <DropdownMenu className="radius4 shadow noBorder">
        <DropdownItem>
          <ul className="noBg noUl mb0 pt10 pb10">
            <li
              className="mb10" onClick={() => { AlertModal02.show(<EditService  editservice={editservice} closeForm={editcreateserviceForm}/>, "", () => {}, "lg")}} >
              <span className="mr10" >{Svg.pencil}</span>
              {t("Edit")}
            </li>
            <li>
              <span className="fs14 d-block w-100 colorBlack" onClick={(e) => deleteservice(editservice._id)}>
                <span className="mr10">{Svg.delete}</span>
                {t("Delete")}
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
excel: true,

}
}


const deleteservice = async (_id) => {
   

  
                axios({
                    method: 'post',
                    url: `${API_URL2}admin/deleteService`,
                    headers: {
                      // "Content-Type": "multipart/form-data",
                      Accept: "application/json",
                      Authorization: "Bearer " + Auth.getToken(),
                    },
                    data: {"serviceid":_id}
                      })
                .then((res) => {
                     toast.success(res.data.message, {    
                  });
                  setTimeout(() => {
                    // AlertModal02.hide()
                    // closecreateserviceForm()
                    navigate('/admin/services')
                    window.location.reload()
                      }, 1000);  
                     }).catch((error) => {
                      toast.error('Something Went Wrong!',
                     );
                    })
       
                        }







  // For Checkbox ( Green )
  const [availability, setAvailability] = useState(false);


  // let rows = service && service.data.map((items) => {
  //   var editservice = items

  //   items.action = <>
  //   <UncontrolledDropdown>
  //     <DropdownToggle className="btn btn-danger">
  //       <span>{Svg.horizontalellipsis}</span>
  //     </DropdownToggle>
  //     <DropdownMenu className="radius4 shadow noBorder">
  //       <DropdownItem>
  //         <ul className="noBg noUl mb0 pt10 pb10">
  //           <li
  //             className="mb10" onClick={() => { AlertModal02.show(<EditService  editservice={editservice} closeForm={editcreateserviceForm}/>, "", () => {}, "lg")}} >
  //             <span className="mr10" >{Svg.pencil}</span>
  //             {t("Edit")}
  //           </li>
  //           <li>
  //             <span className="fs14 d-block w-100 colorBlack" onClick={(e) => deleteservice(items._id)}>
  //               <span className="mr10">{Svg.delete}</span>
  //               {t("Delete")}
  //             </span>
  //           </li>
  //         </ul>
  //       </DropdownItem>
  //     </DropdownMenu>
  //   </UncontrolledDropdown>
  // </>
  //   items.checkbox = <GCheckbox   name={items._id} id={items._id} />
  //   items.imageservice = !items.image? Svg.pencil :<img src={IMAGE_URL + items.image} style={{height:'40px',width:'40px'}}/>
  //   items.thumbnailimg =     <div className="text-underline pointer">
  //            {t("Viewimage")}
  //         </div>
  //   items.activestatus =  <label className="switchgreen">
  //             <input
  //                type="checkbox"
  //                id="availability"
  //                name="availability"
  //                checked={items.active === true ? 'unchecked' : 'checked'}
  //                onChange={(e) => setAvailability(e.target.checked)}
  //           />
  //            <span className="slidergreen roundgreen"></span>
  //   </label>
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
        {t("Services")}
      </Link>
            </Col>
            <Col className="text-end" md={4}>
              <GButton
                onClick={() =>
                  AlertModal02.show(<Addnewservice />, "", () => {}, "lg")
                }
              >
                <span className="mr5">{Svg.whiteplus}</span>
                {t("Addnewservice")}
              </GButton>
            </Col>
          </Row>
        </div>

        <Col md={12}>
          {/* <div className="card">
            <ServicesActions />
          </div> */}
          <div className="card table_scroll_salon">
            <div className="table_service">
              <ReactDatatable
                            config={config1}
                            records={service}
                            columns={columns}
                              />

            </div>
            {/* <DataTable  /> */}
          </div>
        </Col>
      </div>
    </>
  );
};

export default Services;

// Services Part which is below breadcrum part
const ServicesActions = (props) => {
  const [searchFilter, setsearchFilter] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Toaster/>
          <Row className="align-items-center">
            <Col lg={2} md={3} xl={2} xxl={1} className="mobMb15">
              <span className="fs14 colorLightGrey">{t("Allcustomers")}</span>
            </Col>
            <Col lg={3} md={4} xl={3} xxl={3} className="mobMb15 ">
              <GIconInput
                value={searchFilter}
                name="searchfilter"
                placeholder="Search here..."
                iconRight={Svg.search}
                paddingBottom="0px"
                onChange={(e) => setsearchFilter(e.target.value)}
              />
            </Col>
            <Col lg={2} md={2} xl={2} xxl={2}>
              <h3 className="fs14 colorGrey text-underline mb0 mobMb10">
                {t("Resetall")}
              </h3>
            </Col>

            <Col
              xxl={6}
              xl={5}
              lg={5}
              md={12}
              className="text-end d-flex justify-content-end button_mr align-items-center mobile_b mobJustifyContentStart"
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
                        <span className="fs14 d-block w-100 colorBlack" >
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

// // Data Table Section
// const DataTable = (props) => {
//   const [availability, setAvailability] = useState(false);
//   const { t, i18n } = useTranslation();
//   document.body.dir = i18n.dir();
//   return (
//     <>
//       <section className=" bgWhite position-relative">
//         <Table responsive className="align-middle text-start">
//           <thead className="fs14">
//             <tr>
//               <th>
//                 <GCheckbox name="1" id="remember" />
//               </th>
//               <th>
//                 {t("Serviceicon")} <br></br>
//               </th>
//               <th>{t("Servicename")}</th>
//               <th>{t("Categoryname")}</th>
//               <th>
//                 {t("Availability")} <br></br>
//               </th>

//               <th>
//                 {t("Action")} <br></br>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="fs14 colorLightGrey">
//               <td>
//                 <GCheckbox id="Intro" name="" />
//               </td>
//               <td>{Svg.redscissors}</td>
//               <td> Ladies - wash, cut & blow dry</td>
//               <td>Hair</td>
//               <td>
//                 <label className="switchgreen">
//                   <input
//                     type="checkbox"
//                     id="availability"
//                     name="availability"
//                     value={availability}
//                     onChange={(e) => setAvailability(e.target.checked)}
//                   />
//                   <span className="slidergreen roundgreen"></span>
//                 </label>
//               </td>

//               <td>
//                 <UncontrolledDropdown>
//                   <DropdownToggle className="btn btn-danger">
//                     <span>{Svg.horizontalellipsis}</span>
//                   </DropdownToggle>
//                   <DropdownMenu className="radius4 shadow noBorder">
//                     <DropdownItem>
//                       <ul className="noBg noUl mb0 pt10 pb10">
//                         <li
//                           className="mb10"
//                           onClick={() =>
//                             AlertModal02.show(
//                               <Addnewservice />,
//                               "",
//                               () => {},
//                               "lg"
//                             )
//                           }
//                         >
//                           <span className="mr10">{Svg.pencil}</span>
//                           {t("Edit")}
//                         </li>
//                         <li>
//                           <span className="fs14 d-block w-100 colorBlack">
//                             <span className="mr10">{Svg.delete}</span>
//                             {t("Delete")}
//                           </span>
//                         </li>
//                       </ul>
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               </td>
//             </tr>

//             <tr className="fs14 colorLightGrey">
//               <td>
//                 <GCheckbox id="Intro" name="" />
//               </td>
//               <td>{Svg.steambath}</td>
//               <td> Ladies - wash, cut & blow dry</td>
//               <td>Hair</td>
//               <td>
//                 <label className="switchgreen">
//                   <input
//                     type="checkbox"
//                     id="availability"
//                     name="availability"
//                     value={availability}
//                     onChange={(e) => setAvailability(e.target.checked)}
//                   />
//                   <span className="slidergreen roundgreen"></span>
//                 </label>
//               </td>

//               <td>
//                 <UncontrolledDropdown>
//                   <DropdownToggle className="btn btn-danger">
//                     <span>{Svg.horizontalellipsis}</span>
//                   </DropdownToggle>
//                   <DropdownMenu className="radius4 shadow noBorder">
//                     <DropdownItem>
//                       <ul className="noBg noUl mb0 pt10 pb10">
//                         <li
//                           className="mb10"
//                           onClick={() =>
//                             AlertModal02.show(
//                               <Addnewservice />,
//                               "",
//                               () => {},
//                               "lg"
//                             )
//                           }
//                         >
//                           <span className="mr10">{Svg.pencil}</span>
//                           {t("Edit")}
//                         </li>
//                         <li>
//                           <span className="fs14 d-block w-100 colorBlack">
//                             <span className="mr10">{Svg.delete}</span>
//                             {t("Delete")}
//                           </span>
//                         </li>
//                       </ul>
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               </td>
//             </tr>
//             <tr className="fs14 colorLightGrey">
//               <td>
//                 <GCheckbox id="Intro" name="" />
//               </td>
//               <td>{Svg.rednail}</td>
//               <td> Ladies - wash, cut & blow dry</td>
//               <td>Hair</td>
//               <td>
//                 <label className="switchgreen">
//                   <input
//                     type="checkbox"
//                     id="availability"
//                     name="availability"
//                     value={availability}
//                     onChange={(e) => setAvailability(e.target.checked)}
//                   />
//                   <span className="slidergreen roundgreen"></span>
//                 </label>
//               </td>

//               <td>
//                 <UncontrolledDropdown>
//                   <DropdownToggle className="btn btn-danger">
//                     <span>{Svg.horizontalellipsis}</span>
//                   </DropdownToggle>
//                   <DropdownMenu className="radius4 shadow noBorder">
//                     <DropdownItem>
//                       <ul className="noBg noUl mb0 pt10 pb10">
//                         <li
//                           className="mb10"
//                           onClick={() =>
//                             AlertModal02.show(
//                               <Addnewservice />,
//                               "",
//                               () => {},
//                               "lg"
//                             )
//                           }
//                         >
//                           <span className="mr10">{Svg.pencil}</span>
//                           {t("Edit")}
//                         </li>
//                         <li>
//                           <span className="fs14 d-block w-100 colorBlack">
//                             <span className="mr10">{Svg.delete}</span>
//                             {t("Delete")}
//                           </span>
//                         </li>
//                       </ul>
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               </td>
//             </tr>
//             <tr className="fs14 colorLightGrey">
//               <td>
//                 <GCheckbox id="Intro" name="" />
//               </td>
//               <td>{Svg.permcut}</td>
//               <td> Ladies - wash, cut & blow dry</td>
//               <td>Hair</td>
//               <td>
//                 <label className="switchgreen">
//                   <input
//                     type="checkbox"
//                     id="availability"
//                     name="availability"
//                     value={availability}
//                     onChange={(e) => setAvailability(e.target.checked)}
//                   />
//                   <span className="slidergreen roundgreen"></span>
//                 </label>
//               </td>

//               <td>
//                 <UncontrolledDropdown>
//                   <DropdownToggle className="btn btn-danger">
//                     <span>{Svg.horizontalellipsis}</span>
//                   </DropdownToggle>
//                   <DropdownMenu className="radius4 shadow noBorder">
//                     <DropdownItem>
//                       <ul className="noBg noUl mb0 pt10 pb10">
//                         <li
//                           className="mb10"
//                           onClick={() =>
//                             AlertModal02.show(
//                               <Addnewservice />,
//                               "",
//                               () => {},
//                               "lg"
//                             )
//                           }
//                         >
//                           <span className="mr10">{Svg.pencil}</span>
//                           {t("Edit")}
//                         </li>
//                         <li>
//                           <span className="fs14 d-block w-100 colorBlack">
//                             <span className="mr10">{Svg.delete}</span>
//                             {t("Delete")}
//                           </span>
//                         </li>
//                       </ul>
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               </td>
//             </tr>
//             <tr className="fs14 colorLightGrey">
//               <td>
//                 <GCheckbox id="Intro" name="" />
//               </td>
//               <td>{Svg.spraytan}</td>
//               <td> Ladies - wash, cut & blow dry</td>
//               <td>Hair</td>
//               <td>
//                 <label className="switchgreen">
//                   <input
//                     type="checkbox"
//                     id="availability"
//                     name="availability"
//                     value={availability}
//                     onChange={(e) => setAvailability(e.target.checked)}
//                   />
//                   <span className="slidergreen roundgreen"></span>
//                 </label>
//               </td>

//               <td>
//                 <UncontrolledDropdown>
//                   <DropdownToggle className="btn btn-danger">
//                     <span>{Svg.horizontalellipsis}</span>
//                   </DropdownToggle>
//                   <DropdownMenu className="radius4 shadow noBorder">
//                     <DropdownItem>
//                       <ul className="noBg noUl mb0 pt10 pb10">
//                         <li
//                           className="mb10"
//                           onClick={() =>
//                             AlertModal02.show(
//                               <Addnewservice />,
//                               "",
//                               () => {},
//                               "lg"
//                             )
//                           }
//                         >
//                           <span className="mr10">{Svg.pencil}</span>
//                           {t("Edit")}
//                         </li>
//                         <li>
//                           <span className="fs14 d-block w-100 colorBlack">
//                             <span className="mr10">{Svg.delete}</span>
//                             {t("Delete")}
//                           </span>
//                         </li>
//                       </ul>
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//             </tr>
//           </tbody>
//         </Table>
//                </td>
//        <Pagination />
//       </section>
//     </>
//   );
// };
