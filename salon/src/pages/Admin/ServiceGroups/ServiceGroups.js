import React, { useState, useEffect } from "react";
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
import Createservicegroup from "./Createservicegroup";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import GIconInput from "../../../components/Layout/GIconInput";
import { connect, useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../../../helpers/apiurls";
import toast, { Toaster } from 'react-hot-toast';
import { AdminGetServiceGroupLists } from "../../../store/admin/servicegroup/action";
import EditServiceGroup from "./EditServiceGroup";
import ReactDatatable from '@ashvin27/react-datatable'
import Auth from "../../../helpers/Auth/Auth";
import {API_URL2} from '../../../helpers/apiurls';
import axios from 'axios';
import { Link } from "react-router-dom";


const ServiceGroup = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const dispatch = useDispatch()
  const servicegroup = useSelector(state => state.servicegroup && state.servicegroup.servicegroup)
  // console.log("servicegroup",servicegroup)
  const [createAminitiesForm, setCreateAminitiesForm] = useState(false)
  const [AllServiceGroupLists, setAllServiceGroupLists] = useState([])
  const [selectedAminities, setSelectedAminities] = useState({})
  const [ servicegroupID, setAminitiesID] = useState('')

  // const [paginationData, setPaginationData] = useState({

  //   planType : "Both",
  //   sort_by:{ "planType" : 1 },
  //   pagesize:"10",
  //   page:1,
  //   totalDocs :servicegroup && servicegroup.totalDocs ? servicegroup.totalDocs :0,
  //   totalPages :servicegroup && servicegroup.totalPages ? servicegroup.totalDocs :0,
  //   prevPage : servicegroup && servicegroup.prevPage ? servicegroup.totalDocs :0,
  //   nextPage : servicegroup && servicegroup.nextPage ? servicegroup.totalDocs :0,
  // })

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(AdminGetServiceGroupLists());
    }
    fetchData()
  }, [ createAminitiesForm, servicegroupID])
  const closecreateAminitiesForm = () => {
    setCreateAminitiesForm(false)
	}
  const showcreateAminitiesForm = () => {
    setCreateAminitiesForm(true)
	}
  const editcreateAminitiesForm = (items) => {
    setSelectedAminities(items)
    setCreateAminitiesForm(true)
	}
  
  // const handlePaginateChange = (event) => {
  //   setPaginationData({ ...paginationData, [event.name]: event.value })
  // }


  useEffect(() => {
    AdminAllServiceGroupLists()
  }, [])

  const AdminAllServiceGroupLists = async () => {
    await axios({
     method: 'get',
     headers: {
      // "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
    },
     url: `${API_URL2}admin/getServiceGroupList`, 
  })
 .then(result => {

  if (result.data.status === 200) {
   setAllServiceGroupLists(result.data.data)
             }
  else {
  }
}).catch(err => {

});
}
 

  const columns = [

    {
        key: '#',
        text: '#',
        sortable: true,
        cell: (row, index) => index + 1
    },
 
{
key: "groupName",
text: "Service Group Name",
sortable: true,
},
{
key: "servicelist",
text: "Service Name",
sortable: true,
cell: (item) => {
  return (
      // <span>{item.servicelist.map(o=>{o.name})}</span>
      <>
      {item.servicelist.map((service, index) => {
        return(
            <span >{service.name}{index < service.length - 1 ? "" : ", "}</span>
        );
    })}
    </>
  );
}
},
{
key: "",
text: "Availability",
cell: (item) => {
    return (
        <>
           <label className="switchgreen">
              <input
                 type="checkbox"
                 id="availability"
               name="availability"
                value={availability}
                onChange={(e) => setAvailability(e.target.checked)}
            />
             <span className="slidergreen roundgreen"></span>
    </label>   
        </>
    );
}
},

{
key: "",
text: "Action",
cell: (editservicegroup) => {
  return (
    <>
        <UncontrolledDropdown>
      <DropdownToggle className="btn btn-danger">
        <span>{Svg.horizontalellipsis}</span>
      </DropdownToggle>
      <DropdownMenu className="radius4 shadow noBorder">
        <DropdownItem>
          <ul className="noBg noUl mb0 pt10 pb10">
            {/* <li
              className="mb10"    onClick={() =>
                AlertModal02.show(<EditServiceGroup editservicegroup={editservicegroup} />, "", () => {}, "md")
              }
            >
              <span className="mr10" >{Svg.pencil}</span>
              {t("Edit")}
            </li> */}
            <li>
              <span className="fs15 d-block w-100 colorBlack" >
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


 
  const [availability, setAvailability] = useState(false);

  // let rows = servicegroup && servicegroup.data.map((items) => {
  //   var editservicegroup = items
  //   items.action = <>
    
  // </>
  //   items.checkbox = <GCheckbox   name={items._id} id={items._id} />
  //   items.imageurl = items.image === ""  ?  Svg.greynails :<img src={IMAGE_URL + items.image} style={{height:'40px',width:'40px'}}/>
  //   items.thumbnailimg =     <div
  //           className="text-underline pointer"
         
  //         >
  //            {t("Viewimage")}
  //         </div>
  //   items.active =  <label className="switchgreen">
  //             <input
  //                type="checkbox"
  //                id="availability"
  //              name="availability"
  //               value={availability}
  //               onChange={(e) => setAvailability(e.target.checked)}
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
        {t("Service Group List")}
      </Link>
            </Col>
            <Col className="text-end" md={4}>
              <GButton
                onClick={() =>
                  AlertModal02.show(<Createservicegroup />, "", () => {}, "md")
                }
              >
                <span className="mr5">{Svg.whiteplus}</span>
                {t("Create Service Group")}
              </GButton>
            </Col>
          </Row>
        </div>

        <Col md={12}>
          {/* <div className="card">
            <ServicesGroupActions />
          </div> */}
          <div className="card">
            {/* <DataTable /> */}
            <div className="table_servicegroup">
            <ReactDatatable
                            config={config1}
                            records={AllServiceGroupLists}
                            columns={columns}
                              />
            {/* <AdminDataTable key='ServicesTable' columns={columns} rows={rows} paginate={paginationData} changeTableData={handlePaginateChange}/> */}

            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default ServiceGroup;

// Services Group Part which is below breadcrum part
const ServicesGroupActions = (props) => {
  const [searchFilter, setsearchFilter] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={2} md={3} xl={2} xxl={1} className="mobMb15">
              <span className="fs15 colorLightGrey">{t("Allcustomers")}</span>
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
              <h3 className="fs15 colorGrey text-underline mb0 mobMb10">
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
                        <span className="fs15 d-block w-100 colorBlack">
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

