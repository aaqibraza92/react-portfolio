import React, { useState , useEffect} from "react";
import { CardTitle, DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown} from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import { useTranslation } from "react-i18next";
import GCheckbox from "../../../components/Layout/GCheckbox";
import GSpacing from "../../../components/Layout/GSpacing";
import GAlign from "../../../components/Layout/GAlign";
import Svg from "../../../assets/svg/Svg";
import { notify } from "react-notify-toast";
import { updateSalonProducts } from '../../../helpers/backend/salon'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import {API_URL2} from '../../../helpers/apiurls';

const ViewProduct = (props) => {

  console.log("editproduct",props);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const { editproduct } = props
 
  const [editproductInfo, seteditproductInfo] = useState(editproduct);
  useEffect(() => {
    // adminGetSalonProfileInfo().then(res => {
    //   setMembershipInfo(res.data)
    // });
  }, [])
  var initialFormState = {
    productid: editproduct ? editproduct._id : '',
    name: editproduct ? editproduct.name : '',
    price: editproduct ? editproduct.price : '',
    stock: editproduct ? editproduct.stock : '',
  }
  const [dataState, setDataState] = useState(initialFormState);

  const handleInputChange = (e) => {
    setDataState({ ...dataState,[e.target.name]: e.target.value});
                       }

  const handleFormSubmit = () => {
    try {
      const functioncall =  updateSalonProducts(dataState)
        functioncall.then((resp) => {
        if (resp.status === 200) {
         let myColor = { background: "#4bb543", text: "#FFFFFF" };
        return notify.show(resp.message, "custom", 5000, myColor);
  
          props.toggle(false)
          setDataState(initialFormState)
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
  };

  const deleteproduct = async (productid) => {
  alert(productid)
    axios({
        method: 'post',
        url: `${API_URL2}salon/deleteProduct`,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + Auth.getToken(),
        },
        data: {"salonid":productid, "productid":productid}
          })
    .then((res) => {
      console.log("deled ca",res.data.message);
      toast.success(res.data.message, {

      });
      // window.location.reload()
      // setTimeout(() => {
      //   AlertModal02.hide()
      //   closecreateserviceForm()
       
      //     }, 1000);  
      }).catch((error) => {
          toast.error('Something Went Wrong!',
      );
    })
}




  return (
    <>
      <div className="box_s border_radius8">
        <GAlign
          align="between"
          alignV="center"
          className="pt15 pb15 pl15 pr15 bBottom card_thank"
        >
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("Product")}
          </CardTitle>
          <UncontrolledDropdown className="noBgonDropDown">
            <DropdownToggle>
              <span className="fm12 colorBlack">{Svg.ellipsiswhitebg}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="fs14" onClick={(e) => deleteproduct(dataState.productid)}> {t("Delete")}</li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </GAlign>
        <div className="card_thank">
          <h3 className="fs14 mb20">{t("Addaproducttobe")}</h3>
          <label>{t("Productname")}</label>
          <input
            type="text"
            className="form_custom"
            placeholder={t("Enterdevice")}
            name="name"
            value={dataState.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label>{t("Unitprice")}</label>
          <input
            type="number"
            className="form_custom"
            placeholder={t("Enterunitprice")}
            name="price"
            value={dataState.price}
            onChange={(e) => handleInputChange(e)}
          />
          <GSpacing>
            <GCheckbox id="manage" name="manage" label={t("Manageinventory")} />
          </GSpacing>
          <label>{t("Quantityinstock")}</label>
          <input
            type="number"
            className="form_custom"
            placeholder={t("Enterquantityinstock")}
            name="stock"
            value={dataState.stock}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="border-top card_thank m_bg_footer">
          <div className="d-flex align-items-center justify-content-end">
            <GButton
              mr="15px"
              backgroundColor="#fff"
              color="#000"
              border="1px solid #707070"
              hoverBg="#fff"
              hoveColor="#000"
              hoverBorder="1px solid #000"
            >
              {t("Close")}
            </GButton>
            <GButton onClick={event => {
                    event.preventDefault()
                    handleFormSubmit()
                  }}>{t("Save")}</GButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
