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
import GCheckbox from "../../../components/Layout/GCheckbox";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import GIconInput from "../../../components/Layout/GIconInput";
import Img from "../../../assets/Img/Img";
import AddAward from "./AddAward";
import EditAward from "./EditAward";
import { connect, useDispatch, useSelector } from "react-redux";
import { postAwardsList } from "../../../store/admin/awards/action";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import {API_URL2} from '../../../helpers/apiurls';
import ReactDatatable from '@ashvin27/react-datatable'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";



const Awards = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const awards = useSelector(state => state.awards.data)
  const [createAwardsForm, setCreateAwardsForm] = useState(true)
  const [selectedAwards, setSelectedAwards] = useState({})
  const [ AwardsID, setAwardsID] = useState('')
  

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(postAwardsList());
    }
    fetchData()
  }, [])

  const closecreateAwardsForm = () => {
    setCreateAwardsForm(false)
	}
  const showcreateAwardsForm = () => {
    setCreateAwardsForm(true)
	}
  const editcreateAwardsForm = (items) => {
    setSelectedAwards(items)
    setCreateAwardsForm(true)
	}


  // const handlePaginateChange = (event) => {
  //   setPaginationData({ ...paginationData, [event.name]: event.value })
  // }

  const columns = [

    {
        key: '#',
        text: '#',
        sortable: true,
        cell: (row, index) => index + 1
    },
 
    {
      key: "name",
      text: "Award Name",
      sortable: true,
      cell: (items) => {
        return (
          <span>{items.name}</span>
        );
      }
      },

{
key: "noOfSalon",
text: "Awards Badges",
sortable: true,
cell: (items) => {
  return (
      <span>{items.noOfSalon}</span>
  );
}
},

  {
    key: "noOfSalon",
    text: "Num of Salons",
    sortable: true,
    cell: (items) => {
      return (
          <span>{items.noOfSalon}</span>
      );
    }
    },
   
 
   {
key: "",
text: "Action",
cell: (editawards) => {
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
                    className="mb10"
                    onClick={() =>
                      AlertModal02.show(<EditAward editawards={editawards} closeForm={closecreateAwardsForm}/>, "", () => {}, "md")
                    }
                  >
                    <span className="mr10">{Svg.pencil}</span>
                    {t("Edit")}
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack" onClick={(e) => deleteaward(editawards._id)}>
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
// excel: true,
// print: true,
}
}


const deleteaward = async (_id) => {

                axios({
                    method: 'post',
                    url: `${API_URL2}admin/deleteAward`,
                    headers: {
                      // "Content-Type": "multipart/form-data",
                      Accept: "application/json",
                      Authorization: "Bearer " + Auth.getToken(),
                    },
                    data: {"awardid":_id}
                      })
                .then((res) => {
                  console.log("deled ca",res.data.message);
                  toast.success(res.data.message, {
        
                  });
                  // setTimeout(() => {
                  //   AlertModal02.hide()
                  //   closecreateserviceForm()
                   
                  //     }, 1000);  
                 
                      
                }).catch((error) => {
                      toast.error('Something Went Wrong!',
    );
                })
      
}




  // For Data table columns
  // const columns = [
  //   { label: <GCheckbox name="1" id="remember" />, field: "checkbox" },
  //   { label: t("Awardname"), field: "name" },
  //   { label: t("Awardsbadges"), field: "noOfSalon" },
  //   { label: t("Numofsalons"), field: "noOfSalon" },
  //   { label: t("Action"), field: "actions" },
  // ];
  // let rows = awards.data && awards.data.map((items) => {
  //   var editawards = items
  //   items.actions =  <>
  //         <UncontrolledDropdown>
  //           <DropdownToggle className="btn btn-danger">
  //             <span>{Svg.horizontalellipsis}</span>
  //           </DropdownToggle>
  //           <DropdownMenu className="radius4 shadow noBorder">
  //             <DropdownItem>
  //               <ul className="noBg noUl mb0 pt10 pb10">
  //                 <li
  //                   className="mb10"
  //                   onClick={() =>
  //                     AlertModal02.show(<EditAward editawards={editawards} />, "", () => {}, "md")
  //                   }
  //                 >
  //                   <span className="mr10">{Svg.pencil}</span>
  //                   {t("Edit")}
  //                 </li>
  //                 <li>
  //                   <span className="fs14 d-block w-100 colorBlack">
  //                     <span className="mr10">{Svg.delete}</span>
  //                     {t("Delete")}
  //                   </span>
  //                 </li>
  //               </ul>
  //             </DropdownItem>
  //           </DropdownMenu>
  //         </UncontrolledDropdown>
  //       </>
  //     items.checkbox = <GCheckbox name={items._id} id={items._id} />
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
        {t("Awards List")}
      </Link>
            </Col>
            <Col className="text-end" md={4}>
              <GButton
                onClick={() =>
                  AlertModal02.show(<AddAward  />, "", () => {}, "md")
                }
              >
                <span className="mr5">{Svg.whiteplus}</span>
                {t("Createnewaward")}
              </GButton>
            </Col>
          </Row>
        </div>

        <Col md={12}>
          {/* <div className="card">
            <AwardsActions />
          </div> */}
          <div className="card">
            <div className="table_awards">   <ReactDatatable
                            config={config1}
                            records={awards}
                            columns={columns}
                              />
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Awards;

// Awards Actions Part which is below breadcrum part
const AwardsActions = () => {
  const [searchFilter, setsearchFilter] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={2} md={3} xl={2} xxl={1} className="mobMb15">
              <span className="fs14 colorLightGrey">{t("Allawards")}</span>
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
