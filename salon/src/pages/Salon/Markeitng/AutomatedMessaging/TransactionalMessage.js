import { t } from 'i18next';
import React from 'react'
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from 'reactstrap';
import Img from '../../../../assets/Img/Img';
import SalonAuthHeader from '../../../../components/Common/Header/Salon/SalonAuthHeader';
import GImage from '../../../../components/Layout/GImage/GImage';
import MarketingMessageBox from '../../../../components/MarketingMessageBox/MarketingMessageBox';
// import MarketingMessageBox from '../../../../components/Layout/MarketingMessageBox';


import SalonSidebar from '../../SalonSidebar/SalonSidebar';
import AutomatedMessagingTab from './AutomatedMessagingTab';


const AutomatedMessagingBox = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="border radius bgLightBlue pt25 pb15 pr25 pl25 position-relative mb20">
        <div className="right_side">
          <GImage src={Img.marketing} />
        </div>
        <h4 className="fs20 lm mb20">
          {t("WinbackyourtimewithAuomatedmessaging")}
        </h4>
        <div className="width90">
          <p>
            {t("Wintext")}
          </p>
          <p>
           {t("Wintexttwo")}
          </p>
        </div>
      </div>
    </>
  );
};


const TransactionalMessage = () => {
  return (
    <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 position-relative salon_pc_container">
          <SalonAuthHeader />
          <AutomatedMessagingTab />
          <div className="card-body">
            <h1 className="fs24 lb mb20">{t("Automated_Transactional")}</h1>
            <Row>
              <Col xl={9} lg={12} md={12}>
                <AutomatedMessagingBox />
                <MarketingMessageBox
                  Img={Img.men}
                  title={t("Keepclientsuptodate")}
                  text={t("KeepclientsuptodateSubtext")}
                  buttontext="Enable"
                />

                <MarketingMessageBox
                  Img={Img.calender}
                  title={t("Sendhelpfullappointmentreminder")}
                  text={t("SendhelpfullappointmentreminderSubtext")}
                  buttontext="Enabled"
                />

                <MarketingMessageBox
                  Img={Img.star}
                  title={t("askforverifyviewers")}
                  text={t("askforverifyviewersSubtext")}
                  buttontext="Enabled"
                />
              </Col>
            </Row>
          </div>
          
        </Container>
      </div>
  )
}

export default TransactionalMessage