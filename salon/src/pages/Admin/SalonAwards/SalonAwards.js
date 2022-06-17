import React, { useState,useEffect } from "react";
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
import GiveNewSalonAward from "./GiveNewSalonAward";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import {API_URL2} from '../../../helpers/apiurls';
import ReactDatatable from '@ashvin27/react-datatable'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";


const SalonAwards = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [AllSalonAwardLists, setAllSalonAwardLists] = useState([])

  
  useEffect(() => {
    AdminSalonAwardLists()
  }, [])

  const AdminSalonAwardLists = async () => {
    await axios({
     method: 'get',
     headers: {
      // "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
    },
     url: `${API_URL2}admin/getSalonAwardList`, 
  })
 .then(result => {
  console.log("resultlist",result.data.data);
  if (result.data.status === 200) {
   setAllSalonAwardLists(result.data.data)
             }
  else {
  }
}).catch(err => {

});
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
key: "salonName",
text: "Salon Name",
sortable: true,
},
{
key: "awardCount",
text: "Award Qty",
sortable: true,
cell: (item) => {
return (
    <span>{item.awardCount}</span>
);
}
},
{
key: "awardImage",
text: "Awards Badges",
sortable: true,
cell: (item) => {
  return (
      <>
         <div>
          <img src={Img.badge1} alt="" className="w40 mr10" />
          <img src={Img.badge2} alt="" className="w40 mr10" />
          <img src={Img.badge3} alt="" className="w40" />
        </div>
      </>
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
                  <li
                    className="mb10"
                    // onClick={() =>
                    //   AlertModal02.show(<EditCategories />, "", () => {}, "md")
                    // }
                  >
                    <span className="mr10">{Svg.pencil}</span>
                    {t("Edit")}
                  </li>
                  <li>
                    <span className="fs14 d-block w-100 colorBlack" onClick={(e) => deleteSalonAward(items._id)}>
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


const deleteSalonAward = async (_id) => {

 
                axios({
                    method: 'post',
                    url: `${API_URL2}admin/deleteSalonAward`,
                    headers: {
                      // "Content-Type": "multipart/form-data",
                      Accept: "application/json",
                      Authorization: "Bearer " + Auth.getToken(),
                    },
                    data: {"salonid":_id}
                      })
                .then((res) => {
                  console.log("deled ca",res.data.message);
                  toast.success(res.data.message, {
        
                  });
                  // setTimeout(() => {
                  //   ImageModalView.hide()
                  //   closecreateCategoriesForm()
                   
                  //     }, 1000);  
                  window.location.reload()
                      
                }).catch((error) => {
                      toast.error('Something Went Wrong!',
               );
                })
        
      
}



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
      {t("Salonawardslist")}
      </Link>            </Col>
            <Col className="text-end" md={4}>
              <GButton
                onClick={() =>
                  AlertModal02.show(<GiveNewSalonAward />, "", () => {}, "md")
                }
              >
                <span className="mr5">{Svg.whiteplus}</span>
                {t("Givenewsalonaward")}
              </GButton>
            </Col>
          </Row>
        </div>

        <Col md={12}>
          <div className="card">
            <SalonAwardsActions />
          </div>
          <div className="card">
            <div className="table_amenities">
              {/* <AdminDataTable
                key="SalonAwardsTable"
                columns={columns}
                rows={rows}
              /> */}

                       <ReactDatatable
                            config={config1}
                            records={AllSalonAwardLists}
                            columns={columns}
                              />
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default SalonAwards;

// Salon Awards Part which is below breadcrum part
const SalonAwardsActions = () => {
  const [searchFilter, setsearchFilter] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={2} md={3} xl={2} xxl={1} className="mobMb15">
              <span className="fs14 colorLightGrey">{t("Allsalonaward")}</span>
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
