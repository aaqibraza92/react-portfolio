import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'reactstrap'
import Img from '../../../../assets/Img/Img'
import SalonAuthHeader from '../../../../components/Common/Header/Salon/SalonAuthHeader'
import GImage from '../../../../components/Layout/GImage/GImage'
import MarketingMessageBox from '../../../../components/MarketingMessageBox/MarketingMessageBox'
// import MarketingMessageBox from '../../../../components/Layout/MarketingMessageBox'
import SalonSidebar from '../../SalonSidebar/SalonSidebar'


const AutomatedMessagingBox = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="border radius bgLightBlue pt25 pb15 pr25 pl25 position-relative mb20">
        <div className="right_side">
          <GImage src={Img.social} />
        </div>
        <h4 className="fs20 lm mb20 width90">
          {t("FacebookAndIntagramSubtext")}
        </h4>
        <div className="width90">
          <p>
            {t("FacebookAndIntagramSubtextNew")}
          </p>
        </div>
      </div>
    </>
  );
};

const SocialMedia = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
     <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 position-relative salon_pc_container">
          <SalonAuthHeader />
          {/* <AutomatedMessagingTab /> */}
          <div className="card-body">
            <h1 className="fs24 lb mb20">{t("FacebookAndIntagram")}</h1>
            <Row>
              <Col xl={9} lg={12} md={12}>
                <AutomatedMessagingBox />
                <h4 className='fs20 lb mb25'>Get Booked Through:</h4>
                <MarketingMessageBox
                  Img={Img.facebook}
                  title={t("SocialFacebook")}
                  text={t("SocialFacebookSub")}
                  buttontext="Link Now"
                />

                <MarketingMessageBox
                  Img={Img.instagram}
                  title={t("SocialInstagram")}
                  text={t("SocialInstagramSub")}
                  buttontext="Linked"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SocialMedia