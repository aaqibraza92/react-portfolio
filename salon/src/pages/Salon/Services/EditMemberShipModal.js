import React, { useState ,useEffect,useRef } from "react";
import { CardTitle, Col, Container, Row } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import { notify } from "react-notify-toast";
import { updateSalonServiceGroupName } from '../../../helpers/backend/salon'
const EditMemberShipModal = ({groups}) => {
    const [dataState, setDataState] = useState({});
    useEffect(() => {
        setDataState({
            name :groups.name,
            servicegroupid: groups._id,
          })
    }, [groups]);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setDataState({...dataState, [name] : value})
    }
    const handleFormSubmit = async() => {
        updateSalonServiceGroupName(dataState).then((res) => {
            if (res.status === 200) {
              let myColor = { background: "#4bb543", text: "#FFFFFF" };
              notify.show(res.message, "custom", 5000, myColor);
            }
            if (res.status === 201) {
              let myColor = { background: "#ff385c", text: "#FFFFFF" };
              notify.show("Please fill required fields", "custom", 5000, myColor);
            }
        });
    }
  return (
        <>
            <div className="box_s border_radius8">
            <div className="border-bottom card_thank d-flex justify-content-between align-items-center">
                <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
                Menu GROUP
                </CardTitle>
            </div>
            <div className="card_thank">
                <Row>
                <Col md={12}>
                    {/* <GIconInput
                    label="Menu group name"
                    type="text"
                    name="firstname"
                    placeholder="Menu group name"
                    className
                    required
                    /> */}
                    <label>
                    Menu group name <sup className="text-red">*</sup>
                    </label>
                    <input
                    name="name"
                    type="text"
                    placeholder="Menu group name"
                    className="form_custom"
                    value={dataState.name}
                    onChange={(e) => handleInputChange(e)}
                    />
                </Col>
                </Row>
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
                    Close
                </GButton>
                <GButton onClick={handleFormSubmit}>Save</GButton>
                </div>
            </div>
            </div>
     </>
  )
}

export default EditMemberShipModal