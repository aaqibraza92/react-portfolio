import React, { useState ,useEffect,useRef } from "react";
import { useTranslation } from "react-i18next";
import WysiwygEditor from "../../../components/WysiwygEditor/WysiwygEditor";
import { updateSalonServicesDescription } from '../../../helpers/backend/salon'
import { notify } from "react-notify-toast";
import GButton from "../../../components/Layout/GButton";
import JoditEditor from "jodit-react";
const Description = ({services}) => {
  const editor = useRef(null)
  const [dataState, setDataState] = useState({});
    var initialFormState = {
        description :'',
        salonserviceid: services.salonserviceid,
      }
    useEffect(() => {
        setDataState(services)
      }, [services]);

      const config1 = {
        readonly: false   // all options from https://xdsoft.net/jodit/doc/
      }
      const newContent = (value) => {
        localStorage.setItem('description',value)
             } 
  const [description, setdescription] = useState("");

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const getWswing = (val) => {
    setdescription(val);
  };

  const onChangeHandler = (e) => {
    
  };

  const handleFormSubmit = () => {
    var IData = {
      salonserviceid: services.salonserviceid,
      description : dataState
    }
    updateSalonServicesDescription(IData).then((res) => {
        console.log(res)
        if (res.status === 200) {
          let myColor = { background: "#4bb543", text: "#FFFFFF" };
          notify.show(res.message, "custom", 5000, myColor);
        }
        if (res.status === 202) {
          let myColor = { background: "#ff385c", text: "#FFFFFF" };
          notify.show("Please fill required fields", "custom", 5000, myColor);
        }
    });
  }
  return (
    <>
      <section className="pl20 pr20 pt10 pb20">
        <h3 className="fs15 text-uppercase mb15">{t("Description")}</h3>
        <div className="mb20">
              <h3 className="fs14 mb10">{t("Description")}</h3>
            
              <JoditEditor
              ref={editor}
              value={dataState.description}
              config={config1}
              onBlur={dataState => setDataState(dataState)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent}
            />
          </div>
        {/* <WysiwygEditor callback={getWswing} onChange={onChangeHandler} /> */}
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
            <GButton  onClick={handleFormSubmit}>{t("Save")}</GButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
