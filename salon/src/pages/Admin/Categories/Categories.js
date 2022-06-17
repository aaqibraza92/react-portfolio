import React, { useState , useEffect} from "react";
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
import GCheckbox from "../../../components/Layout/GCheckbox";
import AddNewCategories from "./AddNewCategories";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import ImageModalView from "../../../components/ImageModalView/ImageModalView";
import EditCategories from "./EditCategories";
import ViewImage from "./ViewImage";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import GIconInput from "../../../components/Layout/GIconInput";
import { connect, useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
// import { notify } from "react-notify-toast";
import { AdminCategoryLists } from "../../../store/admin/category/action";
import {API_URL2} from '../../../helpers/apiurls';
import { IMAGE_URL } from "../../../helpers/apiurls";
import Auth from "../../../helpers/Auth/Auth";
import axios from 'axios';
import ReactDatatable from '@ashvin27/react-datatable'
import { Link } from "react-router-dom";


const Categories = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const dispatch = useDispatch()
  const categories = useSelector(state => state.category?.data)
  console.log("ABC",categories)
  const [createCategoriesForm, setCreateCategoriesForm] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState({})
  const [ categoriesID, setCategoriesID] = useState('')
 
  // const [paginationData, setPaginationData] = useState({

  //   planType : "Both",
  //   sort_by:{ "planType" : 1 },
  //   pagesize:"10",
  //   page:1,
  //   totalDocs : categories && categories.totalDocs ? categories.totalDocs :0,
  //   totalPages : categories && categories.totalPages ? categories.totalDocs :0,
  //   prevPage : categories && categories.prevPage ? categories.totalDocs :0,
  //   nextPage : categories && categories.nextPage ? categories.totalDocs :0,
  // })

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(AdminCategoryLists());
    }
    fetchData()
  }, [createCategoriesForm, categoriesID])

  const closecreateCategoriesForm = () => {
    setCreateCategoriesForm(false)
	}
  
  const showcreateCategoriesForm = () => {
    setCreateCategoriesForm(true)
	}
  const editcreateCategoriesForm = (items) => {
    setSelectedCategories(items)
    setCreateCategoriesForm(true)
	}

  // const handlePaginateChange = (event) => {
  //   setPaginationData({ ...paginationData, [event.name]: event.value })
  // }

  // const deleteCategories = (categoriesid) => {
        
	// }

  
  
  const columns = [

    {
        key: '#',
        text: '#',
        sortable: true,
        cell: (row, index) => index + 1
    },
 
    {
      key: "image",
      text: "Category Icon",
      sortable: true,
      cell: (items) => {
        return (
          items.image === ""  ?  Svg.greynails :<img src={IMAGE_URL + items.image} style={{height:'40px',width:'40px'}}/>
        );
      }
      },

{
key: "name",
text: "Category Name",
sortable: true,
cell: (items) => {
  return (
      <span>{items.name}</span>
  );
}
},
{
  key: "servicecount",
  text: "Services",
  sortable: true,
  cell: (items) => {
    return (
        <span>{items.servicecount}</span>
    );
  }
  },
  {
    key: "servicecount",
    text: "Banner Image",
    sortable: true,
    cell: (category) => {
      return (
        <div
                  className="text-underline pointer"
                  onClick={() =>
                    ImageModalView.show(<ViewImage 
                      category={category}
                    />, "", () => {}, "md")
                  }
                >
                   {t("Viewimage")}
                </div>
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
                        // value={availability}
                        checked={items.active ? true : false}
                        // onChange={(e) => setAvailability(e.target.checked)}
                        onClick={(e) =>updateavailabilty(items._id, items.active)}
                    />
                     <span className="slidergreen roundgreen"></span>
            </label>
        );
      }
      },


{
key: "",
text: "Action",
cell: (category,items) => {
  return (
    <>
       <UncontrolledDropdown>
      <DropdownToggle className="btn btn-danger">
        <span>{Svg.horizontalellipsis}</span>
      </DropdownToggle>
      <DropdownMenu className="radius4 shadow noBorder">
        <DropdownItem>
          <ul className="noBg noUl mb0 pt10 pb10">
            <li
              className="mb10"    onClick={() =>
                AlertModal02.show(<EditCategories category={category} closeForm={closecreateCategoriesForm}/>, "", () => {}, "md")
              }
            >
              <span className="mr10" >{Svg.pencil}</span>
              {t("Edit")}
            </li>
            <li>
              <span className="fs14 d-block w-100 colorBlack" onClick={(e) => deleteCategories(category._id)}>
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
// print: true,
}
}

  const deleteCategories = async (_id) => {
                     axios({
                      method: 'post',
                      url: `${API_URL2}admin/categoryDelete`,
                      headers: {
                        // "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                        Authorization: "Bearer " + Auth.getToken(),
                      },
                      data: {"categoryid":_id}
                        })
                  .then((res) => {
                    console.log("deled ca",res.data.message);
                    toast.success(res.data.message, {
          
                    });
                    setTimeout(() => {
                      ImageModalView.hide()
                      closecreateCategoriesForm()
                     
                        }, 1000);  
                       }).catch((error) => {
                        toast.error('Something Went Wrong!',
                      );
                  })
              }

const updateavailabilty =(_id, active) => {

  axios({
      method: 'post',
      url: `${API_URL2}admin/activeDeactiveCategory`,
      headers: {
        
        Accept: "application/json",
        Authorization: "Bearer " + Auth.getToken(),
      },
      data: { categoryid: _id, active: active ? true: false}
  })
      .then(result => {
          if (result.data.status === 200){
             toast.success('Update Successfully!!', {
                    style: {
                      border: '1px solid #713200',
                      padding: '10px',
                      color: 'green',
                    },
                    iconTheme: {
                      primary: 'green',
                      secondary: '#FFF',
                    },
                  });
                }
                else{
             toast.error(' Not Available!!', {
                      
                  });
                }          
      }).catch(err => {
      })
}



  

  // For Checkbox ( Green )
  const [availability, setAvailability] = useState(false);


   
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
        {t("Categories")}
      </Link>
            </Col>
            <Col className="text-end" md={4}>
              <GButton
                onClick={() =>
                  ImageModalView.show(<AddNewCategories  closeForm={closecreateCategoriesForm}/>, "", () => {}, "md")
                }
              >
                <span className="mr5">{Svg.whiteplus}</span>
                {t("Addnewcatagory")}
              </GButton>
            </Col>
          </Row>
        </div>

        <Col md={12}>
          {/* <div className="card">
            <CategoriesActions />
          </div> */}
          <div className="card table_scroll_salon">
            <div className="table_amenities"> <ReactDatatable
                            config={config1}
                            records={categories}
                            columns={columns}
                              />
           
            </div>
            {/* <DataTable /> */}
          </div>
        </Col>
      </div>
    </>
  );
};

export default Categories;

// Categories Part which is below breadcrum part
const CategoriesActions = (props) => {
  const [searchFilter, setsearchFilter] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Toaster/>
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={2} md={3} xl={2} xxl={1} className="mobMb15">
              <span className="fs14 colorLightGrey">{t("Allcategories")}</span>
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
                pl="12px"
                pr="12px"
              >
                {Svg.filter}
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

// // Data Table Section
// const DataTable = (props) => {
//   const [availability, setAvailability] = useState(false);
//   const { t, i18n } = useTranslation();
//   document.body.dir = i18n.dir();
//   return (
//     <>
//       <section className="bgWhite position-relative">
//         <Table responsive className="align-middle text-start">
//           <thead className="fs14">
//             <tr>
//               <th>
//                 <GCheckbox name="1" id="remember" />
//               </th>
//               <th>
//                 {t("Categoryicon")} <br></br>
//               </th>
//               <th>{t("Catagoryname")}</th>
//               <th>{t("Services")}</th>
//               <th>{t("Bannerimage")}</th>
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
//               <td>{Svg.greyscissors}</td>
//               <td> Hair</td>
//               <td>4</td>
//               <td
//                 className="text-underline pointer"
//                 onClick={() =>
//                   AlertModal02.show(<EditCategories />, "", () => {}, "md")
//                 }
//               >
//                 {t("Viewimage")}
//               </td>
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
//                               <EditCategories />,
//                               "",
//                               () => {},
//                               "md"
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
//               <td>{Svg.greyspa}</td>
//               <td> Hair</td>
//               <td>4</td>
//               <td
//                 className="text-underline pointer"
//                 onClick={() =>
//                   AlertModal02.show(<EditCategories />, "", () => {}, "md")
//                 }
//               >
//                 {t("Viewimage")}
//               </td>
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
//                               <EditCategories />,
//                               "",
//                               () => {},
//                               "md"
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
//               <td>{Svg.facegrey}</td>
//               <td> Hair</td>
//               <td>4</td>
//               <td
//                 className="text-underline pointer"
//                 onClick={() =>
//                   AlertModal02.show(<EditCategories />, "", () => {}, "md")
//                 }
//               >
//                 {t("Viewimage")}
//               </td>
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
//                               <EditCategories />,
//                               "",
//                               () => {},
//                               "md"
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
//               <td>{Svg.greyhairremoval}</td>
//               <td> Hair</td>
//               <td>4</td>
//               <td
//                 className="text-underline pointer"
//                 onClick={() =>
//                   AlertModal02.show(<EditCategories />, "", () => {}, "md")
//                 }
//               >
//                 {t("Viewimage")}
//               </td>
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
//                               <EditCategories />,
//                               "",
//                               () => {},
//                               "md"
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
//               <td>{Svg.greynails}</td>
//               <td> Hair</td>
//               <td>4</td>
//               <td
//                 className="text-underline pointer"
//                 onClick={() =>
//                   AlertModal02.show(<EditCategories />, "", () => {}, "md")
//                 }
//               >
//                 {t("Viewimage")}
//               </td>
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
//                               <EditCategories />,
//                               "",
//                               () => {},
//                               "md"
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
//           </tbody>
//         </Table>
//         <Pagination />
//       </section>
//     </>
//   );
// };
