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
import GButton from "../../../components/Layout/GButton";
import GCheckbox from "../../../components/Layout/GCheckbox";
import GIconInput from "../../../components/Layout/GIconInput";
import BreadCrum from "../BreadCrum/BreadCrum";
import { connect, useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { postLanguageList } from "../../../store/admin/language/action";
import ReactDatatable from '@ashvin27/react-datatable'
import { Link } from "react-router-dom";

const LanguagePreference = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const language = useSelector(state => state.language.data)
      console.log("languagess",language);
  const [createLanguageForm, setCreateLanguageForm] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({})
  const [ languageID, setLanguageID] = useState('')
 
  useEffect(() => {
    const fetchData = async () => {
       await dispatch(postLanguageList());
    }
    fetchData()
  }, [createLanguageForm, languageID])


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
 

 const deleteLanguage = (languageid) => {
    
	}

  const columns = [

    {
      key: "",
      text: <GCheckbox name="greyscissors" id="greyscissors" />,
      sortable: true,
      cell: (item) => {
      return (
          <span>   <GCheckbox name="greyscissors" id="greyscissors" /></span>
      );
      }
      },

  {
    key: "name",
    text: "Language Name",
    sortable: true,
    cell: (item) => {
    return (
        <span>{item.name}</span>
    );
    }
    },
   {
  key: "",
  text: "Action",
  cell: (editlanguagegroup) => {
  return (
    <>
        <UncontrolledDropdown>
    <DropdownToggle className="btn btn-danger">
      <span>{Svg.horizontalellipsis}</span>
    </DropdownToggle>
    <DropdownMenu className="radius4 shadow noBorder">
      <DropdownItem>
        <ul className="noBg noUl mb0 pt10 pb10">
          {/* <li className="mb10" onClick={() => editcreateLanguageForm()} >
          <span className="mr8">{Svg.pencil}</span> Edit
        
          </li>
          <li className="mb10">
            <span className="fs15 d-block w-100 colorBlack">
              <span className="mr10">{Svg.gallery}</span>
              Add photo
            </span>
          </li> */}
          <li>
            <span className="fs15 d-block w-100 colorBlack" onClick={() => deleteLanguage()} >
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

  // let rows = language.data && language.data.map((items) => {
  //   items.actions = <UncontrolledDropdown>
  //   <DropdownToggle className="btn btn-danger">
  //     <span>{Svg.horizontalellipsis}</span>
  //   </DropdownToggle>
  //   <DropdownMenu className="radius4 shadow noBorder">
  //     <DropdownItem>
  //       <ul className="noBg noUl mb0 pt10 pb10">
  //         <li className="mb10" onClick={() => editcreateLanguageForm(items)} >
  //         <span className="mr8">{Svg.pencil}</span> Edit
  //         {/* <Link to={{ pathname: '/admin/create-salon-request', state: { salonid: items._id } }} className="mb10" >
  //             <span className="mr8">{Svg.pencil}</span>
  //             Edit
  //           </Link> */}
  //         </li>
  //         <li className="mb10">
  //           <span className="fs15 d-block w-100 colorBlack">
  //             <span className="mr10">{Svg.gallery}</span>
  //             Add photo
  //           </span>
  //         </li>
  //         <li>
  //           <span className="fs15 d-block w-100 colorBlack" onClick={() => deleteLanguage(items._id)} >
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
        <div className="card_tr">
          <Row className="align-items-center">
            <Col md={8}>
            <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>
     <Link to="#" className="colorLightGrey fs14 ml10 mr10" name={t("Salonrequestlist")} >
      {t("Languagepreferencelist")}
      </Link>
            </Col>
            <Col className="text-end" md={4}>
              <GButton>
                <span className="mr5">{Svg.whiteplus}</span>
                {t("Addnewlanguage")}
              </GButton>
            </Col>
          </Row>
        </div>

        <Col md="12">
      
          <div className="card">
            <div className="table_amenities">
            {/* <AdminDataTable key='LanguageTable' columns={columns} rows={rows} paginate={paginationData} changeTableData={handlePaginateChange}/> */}
            <ReactDatatable
                            config={config1}
                            records={language}
                            columns={columns}
                              />

            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default LanguagePreference;

// Amenities Name
const AmenitiesName = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col xxl={8} xl={10} lg={10} md={12}>
              <Row className="align-items-center">
                <Col xxl={2} xl={2} lg={3} md={3} className="mobMb15">
                  <span className="fs15 colorLightGrey">
                    {t("Amenitiesname")} :
                  </span>
                </Col>
                <Col xxl={4} xl={4} lg={5} md={5} className="mobMb15">
                  <GIconInput
                    placeholder={t("Enterlanguagename")}
                    paddingBottom="0px"
                  />
                </Col>
                <Col xxl={6} xl={6} lg={4} md={4}>
                  <GButton>{t("Save")}</GButton>
                  <GButton
                    ml="15px"
                    backgroundColor="#fff"
                    color="#000"
                    border="1px solid #707070"
                    hoverBg="#fff"
                    hoveColor="#000"
                    hoverBorder="1px solid #000"
                  >
                    {t("Close")}
                  </GButton>
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
