import React, { useEffect, useState } from "react";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import BreadCrum from "../BreadCrum/BreadCrum";
import { useTranslation } from "react-i18next";
import GCheckbox from "../../../components/Layout/GCheckbox";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GButton from "../../../components/Layout/GButton";
import CreateGiftCard from "./CreateGiftCard";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import EditGiftCard from "./EditGiftCard";
import GIconInput from "../../../components/Layout/GIconInput";
import { connect, useDispatch, useSelector } from "react-redux";
import { giftcardsList } from "../../../store/admin/giftcards/action";
import ReactDatatable from '@ashvin27/react-datatable'
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import {API_URL2} from '../../../helpers/apiurls';
import { Link } from "react-router-dom";

const GiftCards = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const giftcards = useSelector(state => state.giftcards.data)
  const [createGiftCardsForm, setCreateGiftCardsForm] = useState(false)
  const [selectedGiftCards, setSelectedGiftCards] = useState({})
  const [ GiftCardsID, setGiftCardsID] = useState('')
  

  const closecreateGiftCardsForm = () => {
    setCreateGiftCardsForm(false)
	}

  const showcreateGiftCardsForm = () => {
    setCreateGiftCardsForm(true)
	}
  const editcreateGiftCardsForm = (items) => {
    setSelectedGiftCards(items)
    setCreateGiftCardsForm(true)
	}
  // const [paginationData, setPaginationData] = useState({
  //   sort_by:{ "planType" : 1 },
  //   pagesize:"10",
  //   page:1,
  //   totalDocs : giftcards.totalDocs ? giftcards.totalDocs :0,
  //   totalPages : giftcards.totalPages ? giftcards.totalDocs :0,
  //   prevPage : giftcards.prevPage ? giftcards.totalDocs :0,
  //   nextPage : giftcards.nextPage ? giftcards.totalDocs :0,
  // })

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(giftcardsList());
    }
    fetchData()
  }, [])

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
      text: "Gift Card Name",
      sortable: true,
      cell: (items) => {
        return (
          <span>{items.name}</span>
        );
      }
      },

{
key: "code",
text: "Gift Card Code",
sortable: true,
cell: (items) => {
  return (
      <span>{items.code}</span>
  );
}
},
{
  key: "quantity",
  text: "Quantity",
  sortable: true,
  cell: (items) => {
    return (
        <span>{items.quantity}</span>
    );
  }
  },
  {
    key: "price",
    text: "Card Price",
    sortable: true,
    cell: (items) => {
      return (
          <span>{items.price}</span>
      );
    }
    },
    {
      key: "benifit",
      text: "Benefit Amount",
      sortable: true,
      cell: (items) => {
        return (
            <span>{items.benifit}</span>
        );
      }
      },
  {
    key: "createdAt",
    text: "Create Date",
    sortable: true,
    cell: (items) => {
      return (
      <>
         <span>{items.createdAt}</span>
      </>
      );
    }
    },
    {
      key: "expirtDate",
      text: "Expiry Date",
      sortable: true,
      cell: (items) => {
        return (
        <>
           <span>{items.expirtDate}</span>
        </>
        );
      }
      },
   {
key: "",
text: "Action",
cell: (editgiftcard,items) => {
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
              className="mb10"   onClick={() =>
                AlertModal02.show(<EditGiftCard editgiftcard={editgiftcard} closeForm={closecreateGiftCardsForm} />, "", () => {}, "md")
              }
            >
              <span className="mr10">{Svg.pencil}</span>
              {t("Edit")}
            </li>
            <li>
              <span className="fs14 d-block w-100 colorBlack" onClick={(e) => deletegiftcard(editgiftcard._id)}>
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

const deletegiftcard = async (_id) => {

 
            axios({
                method: 'post',
                url: `${API_URL2}admin/deleteGiftCard`,
                headers: {
                  // "Content-Type": "multipart/form-data",
                  Accept: "application/json",
                  Authorization: "Bearer " + Auth.getToken(),
                },
                data: {"giftid":_id}
                  })
            .then((res) => {
              console.log("deled ca",res.data.message);
              toast.success(res.data.message, {
    
              });
              window.location.reload()
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
  //   { label: t("Giftcardname"), field: "name" },
  //   { label: t("Giftcardcode"), field: "code" },
  //   { label: t("Quantity"), field: "quantity" },
  //   { label: t("Cardprice"), field: "price" },
  //   { label: t("Benefitamount"), field: "benifit" },
  //   { label: t("Createdate"), field: "createdAt" },
  //   { label: t("Expirydate"), field: "expirtDate" },
  //   { label: t("Action"), field: "actions" },
  // ];

  // let rows = giftcards.data && giftcards.data.map((items) => {
  //   var editgiftcard = items
  //   items.actions = <>
  //   <UncontrolledDropdown>
  //     <DropdownToggle className="btn btn-danger">
  //       <span>{Svg.horizontalellipsis}</span>
  //     </DropdownToggle>
  //     <DropdownMenu className="radius4 shadow noBorder">
  //       <DropdownItem>
  //         <ul className="noBg noUl mb0 pt10 pb10">
  //           <li
  //             className="mb10"   onClick={() =>
  //               AlertModal02.show(<EditGiftCard editgiftcard={editgiftcard} />, "", () => {}, "md")
  //             }
  //           >
  //             <span className="mr10">{Svg.pencil}</span>
  //             {t("Edit")}
  //           </li>
  //           <li>
  //             <span className="fs14 d-block w-100 colorBlack">
  //               <span className="mr10">{Svg.delete}</span>
  //               {t("Delete")}
  //             </span>
  //           </li>
  //         </ul>
  //       </DropdownItem>
  //     </DropdownMenu>
  //   </UncontrolledDropdown>
  // </>
  //     items.checkbox = <div><GCheckbox name={items._id} id={items._id} /></div>
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
        {t("Gift Card List")}
      </Link>
            </Col>
            <Col className="text-end" md={4}>
              <GButton
                onClick={() =>
                  AlertModal02.show(<CreateGiftCard  closeForm={editcreateGiftCardsForm} />, "", () => {}, "md")
                }
              >
                <span className="mr5">{Svg.whiteplus}</span>
                {t("Creategiftcard")}
              </GButton>
            </Col>
          </Row>
        </div>
        <Col md={12}>
          {/* <div className="card">
            <GiftCardsActions />
          </div> */}

          <div className="card">
            <div className="table_giftcards"> <ReactDatatable
                            config={config1}
                            records={giftcards}
                            columns={columns}
                              />
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default GiftCards;

// Services Group Part which is below breadcrum part
const GiftCardsActions = (props) => {
  const [searchFilter, setsearchFilter] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb15">
        <Container fluid>
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
