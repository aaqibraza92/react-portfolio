
import React, { useState , useEffect} from "react";
import { Col, Row, Container } from "reactstrap";
import { useTranslation } from "react-i18next";
import GIconInput from "../../../components/Layout/GIconInput";
import Svg from "../../../assets/svg/Svg";
import GButton from "../../../components/Layout/GButton";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonDataTable from "../SalonDataTable/SalonDataTable";
import AddProduct from "./AddProduct";

import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import ReactDatatable from '@ashvin27/react-datatable'
import { connect, useDispatch, useSelector } from "react-redux";
import { AuthGetSalonProductList } from "../../../store/auth/salon/getSalonProductList/actions";
import { Link } from "react-router-dom";
import ViewProduct from "./ViewProduct";


const Products = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const salonproduct = useSelector(state => state.productslist)
 


  useEffect(() => {
    const fetchData = async () => {
       await dispatch(AuthGetSalonProductList());
    }
    fetchData()
  }, [])

  const columns = [

    {
        key: '#',
        text: '#',
        sortable: true,
        cell: (row, index) => index + 1
    },
    {
      key: "name",
      text: t("Product"),
      sortable: true,
      cell: (items) => {
        return (
       <>
         
       <span   onClick={() =>
                  AlertModal02.show(<ViewProduct editproduct={items} />, "", () => {}, "md")
                } >  {items.name}
                                 {/* </Link> */}
                                </span>
      
       </>
        );
      }
      },

    {
      key: "price",
      text: t("Price"),
      sortable: true,
      cell: (items) => {
      return (
      <span  onClick={() =>
        AlertModal02.show(<ViewProduct editproduct={items} />, "", () => {}, "md")
      } >{items.price}</span>
      );
    }
    },
   {
  key: "stock",
  text: t("Stock"),
  sortable: true,
  cell: (items) => {
    return (
        <span  onClick={() =>
          AlertModal02.show(<ViewProduct editproduct={items} />, "", () => {}, "md")
        } >{items.stock}</span>
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

}




  // For Data table columns
  // const columns = [
  //   { label: t("Product"), field: "product" },
  //   { label: t("Price"), field: "price" },
  //   { label: t("Stock"), field: "stock" },
  // ];

  // // Dummy Row
  // let rows = [
  //   {
  //     product: "Bandido after shave 350ml",
  //     price: "7,90 €",
  //     stock: "12",
  //   },
  //   {
  //     product: "Bandido after shave 350ml",
  //     price: "7,90 €",
  //     stock: "12",
  //   },
  //   {
  //     product: "Bandido after shave 350ml",
  //     price: "7,90 €",
  //     stock: "12",
  //   },
  //   {
  //     product: "Bandido after shave 350ml",
  //     price: "7,90 €",
  //     stock: "12",
  //   },
  // ];


  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 bgCream salon_pc_container">
          <SalonAuthHeader />
          <div className="card-body ">
            <ProductsActions />
            {/* <SalonDataTable
              key="ClientListTable"
              columns={columns}
              rows={rows}
            /> */}
                 <ReactDatatable
                            config={config1}
                            records={salonproduct}
                            columns={columns}
                              />
          </div>
        </Container>
      </div>
    </>
  );
  
};

export default Products;

const ProductsActions = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt15 pb25">
        <Container fluid>
          <Row className="align-items-center">
            <Col xl={7} lg={4} md={6} className="mobMb15">
              <h1 className="fs24 lb mb0">{t("Products")}</h1>
            </Col>
            {/* <Col xl={3} lg={4} md={6} className="mobMb15">
              <GIconInput
                placeholder={t("Searchhere")}
                iconLeft={Svg.search}
                paddingBottom="0px"
              />
            </Col> */}
            <Col
              xl={2}
              lg={4}
              md={12}
              className="text-end p-0 d-flex justify-content-end"
            >
              <GButton
                onClick={() =>
                  AlertModal02.show(<AddProduct />, "", () => {}, "md")
                }
              >
                <span className="mr5">{Svg.whiteplus}</span> {t("Addto")}
              </GButton>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
