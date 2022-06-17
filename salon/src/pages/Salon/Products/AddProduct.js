import React, { useState , useEffect} from "react";
import { CardTitle } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import { useTranslation } from "react-i18next";
import GCheckbox from "../../../components/Layout/GCheckbox";
import GSpacing from "../../../components/Layout/GSpacing";
import { addSalonProducts } from '../../../helpers/backend/salon'
import { notify } from "react-notify-toast";

const AddProduct = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const { products } = props
 
  const [productsInfo, setproductsInfo] = useState(products);
 var initialFormState = {
    name: productsInfo ? productsInfo.name : '',
    price: productsInfo ? productsInfo.price : '',
    stock: productsInfo ? productsInfo.stock : '',
  }
  const [dataState, setDataState] = useState(initialFormState);
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
   
  }, [])

  const handleInputChange = (e) => {
          setDataState({ ...dataState,[e.target.name]: e.target.value});
                             }

  const myFunction =(e) => {
           var checkBox = document.getElementById("myCheck");
           var text = document.getElementById("text");
           if (checkBox.checked == true){
           text.input.display = "block";
              } else {
          text.input.display = "none";
                     }
                  }


  const handleFormSubmit = () => {
    try {
      const functioncall = addSalonProducts(dataState) 
        functioncall.then((resp) => {
        if (resp.status === 200) {
         let myColor = { background: "#4bb543", text: "#FFFFFF" };
        return notify.show(resp.message, "custom", 5000, myColor);
  
          props.toggle(false)
          setDataState(initialFormState)
          setTimeout(() => {
            // ImageModalView.hide()
            props.closeForm()
           
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




  return (
    <>
      <div className="box_s border_radius8">
        <div className="border-bottom card_thank">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("AddProduct")}
          </CardTitle>
        </div>

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
          <GSpacing >
            <GCheckbox id="myCheck" name="myCheck" type="checkbox" label={t("Manageinventory")} defaultChecked={checked}
        onChange={() => setChecked(!checked)}  onclick={(e) =>myFunction(e)} />
          </GSpacing>

          <label>{t("Quantityinstock")}</label>
          <input
            id="text"
           style={{display:'none'}}
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

export default AddProduct;
