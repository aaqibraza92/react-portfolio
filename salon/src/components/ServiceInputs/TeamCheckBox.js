import React, { useEffect, useState } from "react"
import { getSalonTeams } from '../../store/salon/salonteams/action'
import { useDispatch, useSelector } from "react-redux";
import GCheckbox from "../Layout/GCheckbox";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { isEmptyObject } from "jquery";
const TeamCheckBox = (props) => {
    const { teamsdata, onChange } = props;
    var teamIds = Array.isArray(teamsdata) && teamsdata.map(a => a.teamid);
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
    const dispatch = useDispatch();
    const salonteam = useSelector((state) => {
        return state.salonteams;
    });
    useEffect(() => {
        dispatch(getSalonTeams())
    }, [dispatch])
    const [salonTeamList, setSalonTeamList] = useState([]);
    useEffect(() => {
        setSalonTeamList(salonteam)
    }, [salonteam])
    const [teams, setTeams] = useState([]);
    const handleTeamChecked = async(event, userid) => {
        if (event.target.checked) {
            setTeams([
                ...teams,
                {
                    teamid: userid
                }
            ]);
        }
        else {
            const updatedRowsState = await Promise.all(teams.filter((s,key) => s.teamid !== userid))
            await setTeams(updatedRowsState);
        }
    }

    const assignAllUsers = async(event) => {
        var assigned = []
        if (event.target.checked) {
            salonTeamList.forEach((user) => {
                assigned.push({teamid: user._id})
            })
        }
        setTeams(assigned)
        
    }
    useEffect(() => {
        onChange({target : {name : 'teams', value : teams}})
    }, [teams])
    return (
        <>
            <div className="card_thank mb10">
                <Container>
                    <Row>
                        <Col md={12} className="mt20 ">
                            <label className="mb10">{t("teamcheckbox")}</label>
                            <div className="checkbox_section">
                                <div>
                                    <GCheckbox
                                        name="remember"
                                        id="remember"
                                        label="Select All"
                                        value='All'
                                        onChange={(e) => assignAllUsers(e)}
                                    />
                                </div>
                                {Array.isArray(salonTeamList) && salonTeamList.map((team) => {
                                //    let existIds = teams.filter((s,key) => s.teamid === team._id);
     
                                    return (<>
                                        <div>  
                                            <GCheckbox
                                                name="teamid"
                                                id={team._id}
                                                label={team.teamMember}
                                                onChange={(e) => handleTeamChecked(e, team._id)}
                                                defaultChecked = {Array.isArray(teamIds) && teamIds.includes(team._id) }
                                            />
                                        </div>
                                    </>)
                                })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TeamCheckBox