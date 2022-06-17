import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '../../../components/LanguageSwitcher/LanguageDropdown';


const Home = () => {
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
    return (
        <div>
              <LanguageDropdown />
         
          <h1>
          {t("Dashboards")}
          </h1>
        </div>
    );
};

export default Home;