import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Container,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import BreadCrum from "../BreadCrum/BreadCrum";
import GButton from "../../../components/Layout/GButton";
import GCheckbox from "../../../components/Layout/GCheckbox";
import GIconInput from "../../../components/Layout/GIconInput";
import { notify } from "react-notify-toast";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { postAminitiesList } from "../../../store/admin/amenities/action";
import { adminCreateAminities } from '../../../helpers/backend/admin'
import ImageModalView from "../../../components/ImageModalView/ImageModalView";
import ReactDatatable from '@ashvin27/react-datatable'
import { Link } from "react-router-dom";

const Amenities = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const amenities = useSelector(state => state.amenities.data)
  console.log(amenities)
  
  const [selectedAminities, setSelectedAminities] = useState({})
  const [ amenitiesID, setAminitiesID] = useState('')
  const [createAminitiesForm, setCreateAminitiesForm] = useState(false)

  // const [paginationData, setPaginationData] = useState({

  //   planType : "Both",
  //   sort_by:{ "planType" : 1 },
  //   pagesize:"10",
  //   page:1,
  //   totalDocs : amenities.totalDocs ? amenities.totalDocs :0,
  //   totalPages : amenities.totalPages ? amenities.totalDocs :0,
  //   prevPage : amenities.prevPage ? amenities.totalDocs :0,
  //   nextPage : amenities.nextPage ? amenities.totalDocs :0,
  // })

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(postAminitiesList());
    }
    fetchData()
  }, [createAminitiesForm, amenitiesID])

 

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
  const deleteAminities = (amenitiesid) => {
    
	}


  const columns = [

    {
        key: '#',
        text: '#',
        sortable: true,
        cell: (row, index) => index + 1
    },
 
    {
      key: "name",
      text: t("Amenitiesname"),
      sortable: true,
      cell: (items) => {
        return (
          <span>{items.name}</span>
        );
      }
      },
   {
key: "",
text: "Action",
cell: (items) => {
  return (
    <>
  <UncontrolledDropdown>
    <DropdownToggle className="btn btn-danger">
      <span>{Svg.horizontalellipsis}</span>
    </DropdownToggle>
    <DropdownMenu className="radius4 shadow noBorder">
      <DropdownItem>
        <ul className="noBg noUl mb0 pt10 pb10">
          <li className="mb10" onClick={() => editcreateAminitiesForm(items)} >
          <span className="mr8">{Svg.pencil}</span> Edit
          {/* <Link to={{ pathname: '/admin/create-salon-request', state: { salonid: items._id } }} className="mb10" >
              <span className="mr8">{Svg.pencil}</span>
              Edit
            </Link> */}
          </li>
      
          <li>
            <span className="fs14 d-block w-100 colorBlack" onClick={() => deleteAminities(items._id)} >
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
  // For Data table columns
  // const columns = [
  //   { label: <GCheckbox name="1" id="remember" />, field: "checkbox" },
  //   { label: t("Amenitiesname"), field: "name" },
  //   { label: t("Action"), field: "actions" },
  // ];

  // let rows = amenities.data && amenities.data.map((items) => {
  //   var editamenities = items
        
  //   items.actions = <UncontrolledDropdown>
  //   <DropdownToggle className="btn btn-danger">
  //     <span>{Svg.horizontalellipsis}</span>
  //   </DropdownToggle>
  //   <DropdownMenu className="radius4 shadow noBorder">
  //     <DropdownItem>
  //       <ul className="noBg noUl mb0 pt10 pb10">
  //         <li className="mb10" onClick={() => editcreateAminitiesForm(items)} >
  //         <span className="mr8">{Svg.pencil}</span> Edit
  //         {/* <Link to={{ pathname: '/admin/create-salon-request', state: { salonid: items._id } }} className="mb10" >
  //             <span className="mr8">{Svg.pencil}</span>
  //             Edit
  //           </Link> */}
  //         </li>
      
  //         <li>
  //           <span className="fs14 d-block w-100 colorBlack" onClick={() => deleteAminities(items._id)} >
  //             <span className="mr10">{Svg.delete}</span>
  //             Delete
  //           </span>
  //         </li>
  //       </ul>
  //     </DropdownItem>
  //   </DropdownMenu>
  // </UncontrolledDropdown>
  //     items.checkbox = <GCheckbox name={items._id} id={items._id} />
  //   return items
  // })

  return (
    <>
      <div className="row">
        <Toaster/>
        <Col md={8}>
        <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>

  
      <Link to="#" className="colorLightGrey fs14 ml10 mr10">
      {t("Amenitieslist")}
      </Link>
          </Col>
          
             <Col md="12">
          <div className="card">
            <AmenitiesName />
          </div>

          {/* <div className="card">
            <AmenitiesSearch />
          </div> */}

          <div className="card">
            <div className="table_amenities">
            {/* <AdminDataTable key='SalonApprovedTable' columns={columns} rows={rows} paginate={paginationData} changeTableData={handlePaginateChange}/> */}
            <ReactDatatable
                            config={config1}
                            records={amenities}
                            columns={columns}
                              />
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Amenities;

// Amenities Name
const AmenitiesName = (props) => {

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const { amenities } = props
 
  const [amenitiesInfo, setgiftcardInfo] = useState(amenities);
  const [createAminitiesForm, setCreateAminitiesForm] = useState(false)
  useEffect(() => {
    // adminGetSalonProfileInfo().then(res => {
    //   setgiftcardInfo(res.data)
    // });
  }, [createAminitiesForm])

  const closecreateAminitiesForm = () => {
    setCreateAminitiesForm(false)
	}

  var initialFormState = {
    name: amenitiesInfo ? amenitiesInfo.name : '',
  
  }
  const [dataState, setDataState] = useState(initialFormState);
  const [errors, seterrors] = useState({});


  const handleFormSubmit = () => {
    try {
      const functioncall = adminCreateAminities(dataState) 
      // adminPostgiftcard(dataState).then((resp) => {
        functioncall.then((resp) => {
        if (resp.status === 200) {
          toast.success('Amenities Created Successfully.', {
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
     setTimeout(() => {
      ImageModalView.hide()
      closecreateAminitiesForm()
     
        }, 1000); 
 
        }
        
        else {
          if (resp.status === 202) {
            let myColor = { background: "#FF385C", text: "#FFFFFF" };
            return notify.show(resp.message[0].param + ' ' + resp.message[0].msg, "custom", 5000, myColor);
          
          }
        }
      }).catch(err => {
      
      })
    } catch (e) {

    }
  }

  const handleInputChange = event => {
    const { name, value, type, id } = event.target
    if (type === "checkbox") {
      if (name === 'planType') {
        setDataState({ ...dataState, [name]: id })
      }
      else {
        setDataState({ ...dataState, [name]: value === "on" ? true : false })
      }
    }
    else {

      setDataState({ ...dataState, [name]: value })
    }
    }





  return (
    <>
      <section className="pt15 pb15">
        
        <Container fluid>
          <Row className="align-items-center">
            <Col xxl={8} xl={10} lg={10} md={12}>
              <Row className="align-items-center">
                <Col xxl={2} xl={2} lg={3} md={3} className="mobMb15">
                  <span className="fs14 colorLightGrey">
                    {t("Amenitiesname")} :
                  </span>
                </Col>
                <Col xxl={4} xl={4} lg={5} md={5} className="mobMb15">
                  <GIconInput
                    placeholder={t("Enteramenitiesname")}
                    paddingBottom="0px"
                    name="name"
                    value={dataState.name}
                    onChange={(e) => handleInputChange(e)}
                  />
                </Col>
                <Col xxl={6} xl={6} lg={4} md={4}>
                  <GButton onClick={event => {
                    event.preventDefault()
                    handleFormSubmit()
                  }}>{t("Save")}</GButton>
               
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

// Amenities Search & Filter
const AmenitiesSearch = () => {
  const [searchFilter, setsearchFilter] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={3} md={4} className="mobMb15 d-flex align-items-center">
              <GIconInput
                name="searchfilter"
                placeholder="Search here..."
                iconRight={Svg.search}
                paddingBottom="0px"
              />
              <span className="ml15 colorGrey text-underline">
                {t("Resetall")}
              </span>
            </Col>
            <Col
              lg={9}
              md={8}
              className="d-flex justify-content-end text-end mobJustifyContentStart"
            >
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
