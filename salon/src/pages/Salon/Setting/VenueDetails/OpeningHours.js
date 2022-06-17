import React, { useState, useEffect } from "react";
import { CardText, CardTitle, Col, Container, Label, Row } from "reactstrap";
import "./VenueDetails.css";
// import TimePicker from "react-time-picker";
import SalonProfileNavigation from "./SalonProfileNavigation";
import { useTranslation } from "react-i18next";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../../components/Layout/GAlign";
import GButton from "../../../../components/Layout/GButton";
import { updateWorkingHours } from "../../../../helpers/backend";
import { useNavigate } from "react-router-dom";
import { notify } from "react-notify-toast";
import { useSelector, useDispatch } from "react-redux";
import { AuthGetWorkingHours } from "../../../../store/auth/salon/getWorkingHours/actions";
import TimeOpenClose from "../../../../components/TimeOpenClose/TimeOpenClose";
import TimePicker from "react-time-picker";
import { AuthGetSalonTime } from "../../../../store/auth/salon/getSalonTime/actions";
import VenueProfileNavigation from "./Venue/VenueProfileNavigation";

const OpeningHours = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSalonTime = useSelector((state) => {
    return (
      state &&
      state.redGetSalonTime.getSalonTimeState &&
      state.redGetSalonTime.getSalonTimeState.data
    );
  });

  useEffect(() => {
    dispatch(AuthGetSalonTime());
  }, [dispatch]);

  const [monIsopen, setMonIsopen] = useState(
    getSalonTime && getSalonTime.monday.isOpen
  );
  const [monStart, setMonStart] = useState(
    getSalonTime && getSalonTime.monday.startTime
  );
  const [monEnd, setMonEnd] = useState(
    getSalonTime && getSalonTime.monday.endtime
  );

  const [tuesIsopen, settuesIsopen] = useState(
    getSalonTime && getSalonTime.tuesday.isOpen
  );
  const [tuesStart, settuesStart] = useState(
    getSalonTime && getSalonTime.tuesday.startTime
  );
  const [tuesEnd, settuesEnd] = useState(
    getSalonTime && getSalonTime.tuesday.endtime
  );

  const [wedIsopen, setwedIsopen] = useState(
    getSalonTime && getSalonTime.wednesday.isOpen
  );
  const [wedStart, setwedStart] = useState(
    getSalonTime && getSalonTime.wednesday.startTime
  );
  const [wedEnd, setwedEnd] = useState(
    getSalonTime && getSalonTime.wednesday.endtime
  );

  const [thursIsopen, setthursIsopen] = useState(
    getSalonTime && getSalonTime.thursday.isOpen
  );
  const [thursStart, setthursStart] = useState(
    getSalonTime && getSalonTime.thursday.startTime
  );
  const [thursEnd, setthursEnd] = useState(
    getSalonTime && getSalonTime.thursday.endtime
  );

  const [friIsopen, setfriIsopen] = useState(
    getSalonTime && getSalonTime.friday.isOpen
  );
  const [friStart, setfriStart] = useState(
    getSalonTime && getSalonTime.friday.startTime
  );
  const [friEnd, setfriEnd] = useState(
    getSalonTime && getSalonTime.friday.endtime
  );

  const [satIsopen, setsatIsopen] = useState(
    getSalonTime && getSalonTime.friday.isOpen
  );
  const [satStart, setsatStart] = useState(
    getSalonTime && getSalonTime.friday.startTime
  );
  const [satEnd, setsatEnd] = useState(
    getSalonTime && getSalonTime.friday.endtime
  );

  const [sundIsopen, setsundIsopen] = useState(
    getSalonTime && getSalonTime.friday.isOpen
  );
  const [sundStart, setsundStart] = useState(
    getSalonTime && getSalonTime.friday.startTime
  );
  const [sundEnd, setsundEnd] = useState(
    getSalonTime && getSalonTime.friday.endtime
  );

  useEffect(() => {
    setMonIsopen(getSalonTime && getSalonTime.monday.isOpen);
    setMonStart(getSalonTime && getSalonTime.monday.startTime);
    setMonEnd(getSalonTime && getSalonTime.monday.endtime);

    settuesIsopen(getSalonTime && getSalonTime.tuesday.isOpen);
    settuesStart(getSalonTime && getSalonTime.tuesday.startTime);
    settuesEnd(getSalonTime && getSalonTime.tuesday.endtime);

    setwedIsopen(getSalonTime && getSalonTime.wednesday.isOpen);
    setwedStart(getSalonTime && getSalonTime.wednesday.startTime);
    setwedEnd(getSalonTime && getSalonTime.wednesday.endtime);

    setthursIsopen(getSalonTime && getSalonTime.thursday.isOpen);
    setthursStart(getSalonTime && getSalonTime.thursday.startTime);
    setthursEnd(getSalonTime && getSalonTime.thursday.endtime);

    setfriIsopen(getSalonTime && getSalonTime.friday.isOpen);
    setfriStart(getSalonTime && getSalonTime.friday.startTime);
    setfriEnd(getSalonTime && getSalonTime.friday.endtime);

    setsatIsopen(getSalonTime && getSalonTime.saturday.isOpen);
    setsatStart(getSalonTime && getSalonTime.saturday.startTime);
    setsatEnd(getSalonTime && getSalonTime.saturday.endtime);

    setsundIsopen(getSalonTime && getSalonTime.sunday.isOpen);
    setsundStart(getSalonTime && getSalonTime.sunday.startTime);
    setsundEnd(getSalonTime && getSalonTime.sunday.endtime);
  }, [getSalonTime]);

  const handleCheck = (val) => {
    console.log("tttt", val.target.name);
    const { type } = val.target.name;
    //console.log("valll", val.target.name);

    if (val.target.checked) {
      console.log("valll", val.target.name);
      if (val.target.name === "monCheck") {
        setMonIsopen(true);
      }
      if (val.target.name === "tueCheck") {
        settuesIsopen(true);
      }
    } else {
      if (val.target.name === "monCheck") {
        setMonIsopen(false);
      }
      if (val.target.name === "tueCheck") {
        settuesIsopen(false);
      }
    }
  };

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const onSubmitClick = () => {
    const iData = {
      monday: {
        isOpen: monIsopen,
        startTime: monStart,
        endtime: monEnd,
      },
      tuesday: {
        isOpen: tuesIsopen,
        startTime: tuesStart,
        endtime: tuesEnd,
      },
      wednesday: {
        isOpen: wedIsopen,
        startTime: wedStart,
        endtime: wedEnd,
      },
      thursday: {
        isOpen: thursIsopen,
        startTime: thursStart,
        endtime: thursEnd,
      },
      friday: {
        isOpen: friIsopen,
        startTime: friStart,
        endtime: friEnd,
      },
      saturday: {
        isOpen: satIsopen,
        startTime: satStart,
        endtime: satEnd,
      },
      sunday: {
        isOpen: sundIsopen,
        startTime: sundStart,
        endtime: sundEnd,
      },
    };

    updateWorkingHours(iData).then((res) => {
      if (res.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
        navigate("/salon/setting/services");
      }
      if (res.status === 202) {
        let myColor = { background: "#ff385c", text: "#FFFFFF" };
        notify.show("Please fill required fields", "custom", 5000, myColor);
      }
    });
  };

  return (
    <>
      <section className="pt40 pb40 bgLightBlue">
        {console.log("monIsopen what", monIsopen)}
        <Container>
          {props.venue ? (
            ""
          ) : (
            <h2 className="fs24 mobFs18 lb mb20 mobMb10">
              <span className="mr15">{Svg.backarrow}</span>
              {t("Setup")}
            </h2>
          )}
           {props.venue ? (
            <VenueProfileNavigation />
          ) : (
            <SalonProfileNavigation />
          )}
          <section className="bgWhite pt20 pb20 pl30 pr30">
            <Row>
              <Col md={12}>
                <CardTitle tag="h2" className="fs24 lb mb20 mobMb10">
                  Set standard opening hours
                </CardTitle>
                <CardText>
                  Configure the standard hours of operation for this location.
                </CardText>
              </Col>

              <Col md={12} className="pt20">
                <div className="openhours">
                  <div className="openfirst">
                    <span>Monday</span>
                  </div>
                  <div className="opensecond">
                    <label htmlFor="serviceLists" className="switch">
                      <input
                        id="serviceLists"
                        onChange={(e) => handleCheck(e)}
                        type="checkbox"
                        name="monCheck"
                        defaultChecked={monIsopen}
                      />
                      <span className="slider round"></span>
                    </label>

                    <span className="ml10">
                      {monIsopen ? "Opened" : "Closed"}
                    </span>
                  </div>
                  <div className="openthird">
                    <div className="time_picker">
                      <TimePicker onChange={setMonStart} value={monStart} />
                    </div>
                  </div>
                  <div className="openfourth">
                    <span>To</span>
                  </div>

                  <div className="openfive">
                    <div className="time_picker">
                      <TimePicker onChange={setMonEnd} value={monEnd} />
                    </div>
                  </div>
                </div>

                <div className="openhours">
                  <div className="openfirst">
                    <span>Tuesday</span>
                  </div>
                  <div className="opensecond">
                    <Label className="switch">
                      <input
                        type="checkbox"
                        // onChange={(e) => settuesIsopen(!tuesIsopen)}
                        onChange={(e) => handleCheck(e)}
                      />
                      <span className="slider round"></span>
                    </Label>
                    <span className="ml10">
                      {tuesIsopen ? "Opened" : "Closed"}
                    </span>
                  </div>
                  <div className="openthird">
                    <div className="time_picker">
                      <TimePicker onChange={settuesStart} value={tuesStart} />
                    </div>
                  </div>
                  <div className="openfourth">
                    <span>To</span>
                  </div>

                  <div className="openfive">
                    <div className="time_picker">
                      <TimePicker onChange={settuesEnd} value={tuesEnd} />
                    </div>
                  </div>
                </div>

                <div className="openhours">
                  <div className="openfirst">
                    <span>Wednesay</span>
                  </div>
                  <div className="opensecond">
                    <Label className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => setwedIsopen(!wedIsopen)}
                      />
                      <span className="slider round"></span>
                    </Label>
                    <span className="ml10">
                      {wedIsopen ? "Opened" : "Closed"}
                    </span>
                  </div>
                  <div className="openthird">
                    <div className="time_picker">
                      <TimePicker onChange={setwedStart} value={wedStart} />
                    </div>
                  </div>
                  <div className="openfourth">
                    <span>To</span>
                  </div>

                  <div className="openfive">
                    <div className="time_picker">
                      <TimePicker onChange={setwedEnd} value={wedEnd} />
                    </div>
                  </div>
                </div>

                <div className="openhours">
                  <div className="openfirst">
                    <span>Thursday</span>
                  </div>
                  <div className="opensecond">
                    <Label className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => setthursIsopen(!thursIsopen)}
                      />
                      <span className="slider round"></span>
                    </Label>
                    <span className="ml10">
                      {thursIsopen ? "Opened" : "Closed"}
                    </span>
                  </div>
                  <div className="openthird">
                    <div className="time_picker">
                      <TimePicker onChange={setthursStart} value={thursStart} />
                    </div>
                  </div>
                  <div className="openfourth">
                    <span>To</span>
                  </div>

                  <div className="openfive">
                    <div className="time_picker">
                      <TimePicker onChange={setthursEnd} value={thursEnd} />
                    </div>
                  </div>
                </div>

                <div className="openhours">
                  <div className="openfirst">
                    <span>Friday</span>
                  </div>
                  <div className="opensecond">
                    <Label className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => setfriIsopen(!friIsopen)}
                      />
                      <span className="slider round"></span>
                    </Label>
                    <span className="ml10">
                      {friIsopen ? "Opened" : "Closed"}
                    </span>
                  </div>
                  <div className="openthird">
                    <div className="time_picker">
                      <TimePicker onChange={setfriStart} value={friStart} />
                    </div>
                  </div>
                  <div className="openfourth">
                    <span>To</span>
                  </div>

                  <div className="openfive">
                    <div className="time_picker">
                      <TimePicker onChange={setfriEnd} value={friEnd} />
                    </div>
                  </div>
                </div>

                <div className="openhours">
                  <div className="openfirst">
                    <span>Saturday</span>
                  </div>
                  <div className="opensecond">
                    <Label className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => setsatIsopen(!satIsopen)}
                      />
                      <span className="slider round"></span>
                    </Label>
                    <span className="ml10">
                      {satIsopen ? "Opened" : "Closed"}
                    </span>
                  </div>
                  <div className="openthird">
                    <div className="time_picker">
                      <TimePicker onChange={setsatStart} value={satStart} />
                    </div>
                  </div>
                  <div className="openfourth">
                    <span>To</span>
                  </div>

                  <div className="openfive">
                    <div className="time_picker">
                      <TimePicker onChange={setsatEnd} value={satEnd} />
                    </div>
                  </div>
                </div>

                <div className="openhours">
                  <div className="openfirst">
                    <span>Sunday</span>
                  </div>
                  <div className="opensecond">
                    <Label className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => setsundIsopen(!sundIsopen)}
                      />
                      <span className="slider round"></span>
                    </Label>
                    <span className="ml10">
                      {sundIsopen ? "Opened" : "Closed"}
                    </span>
                  </div>
                  <div className="openthird">
                    <div className="time_picker">
                      <TimePicker onChange={setsundStart} value={sundStart} />
                    </div>
                  </div>
                  <div className="openfourth">
                    <span>To</span>
                  </div>

                  <div className="openfive">
                    <div className="time_picker">
                      <TimePicker onChange={setsundEnd} value={sundEnd} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <GAlign align="right" className="bTop mt50 pt20 pb20 pr30">
              <GButton className="text-capitalize" onClick={onSubmitClick}>
                {t("Next")}
              </GButton>
            </GAlign>
          </section>
        </Container>
      </section>
    </>
  );
};

export default OpeningHours;
