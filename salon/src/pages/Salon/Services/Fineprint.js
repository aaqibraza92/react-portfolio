import React, { useState ,useEffect,useRef } from "react";
import WysiwygEditor from "../../../components/WysiwygEditor/WysiwygEditor";
import { useTranslation } from "react-i18next";
import JoditEditor from "jodit-react";
import { updateSalonServicesFinePrint } from '../../../helpers/backend/salon'
import { notify } from "react-notify-toast";
import GButton from "../../../components/Layout/GButton";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Fineprint = ({services}) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const editor = useRef(null)
  const config1 = {readonly: false  }
  const newContent1 = (value) => { localStorage.setItem('restriction',value) } 
  const newContent2 = (value) => { localStorage.setItem('goodToKnow',value)}  

    var initialFormState = {
        goodToKnow :services.goodToKnow,
        restriction :services.restriction,
        salonserviceid: services.serviceid,
    }
  const [dataState, setDataState] = useState(initialFormState);
  const handleFormSubmit = () => {
    var iData = {
      goodToKnow :localStorage.getItem('goodToKnow'),
      restriction :localStorage.getItem('restriction'),
      salonserviceid: services.serviceid,
    }
    updateSalonServicesFinePrint(iData).then((res) => {
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
    <section className="pl20 pr20 pt10 pb20">
      <h3 className="fs15 text-uppercase mb15">{t("Restrictions")}</h3>
      <JoditEditor ref={editor} value={dataState.restriction} config={config1} onBlur={dataState => setDataState(dataState.target)} onChange={newContent1} />
      <h3 className="fs15 text-uppercase mb15">{t("Goodtoknow")}</h3>
      <JoditEditor ref={editor} value={dataState.goodToKnow} config={config1} onBlur={dataState => setDataState(dataState)} onChange={newContent2} />
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
  );
};

export default Fineprint;
