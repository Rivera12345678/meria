import css from './Header.module.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n'; 
import Logo from '../../assets/logo.png'

const Header = () => {
  const { t } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'kg' : 'ru';
    i18n.changeLanguage(newLang).then(() => {
    });
  };

  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.header__logo}>
          <div className={css.header__flex}>
            <div className={css.logo}>
              <img src={Logo} alt="logo" />
            </div>
            <div className={css.p}>
              <h1>{t("Форма личного листка")}</h1>
            </div>
            <div className={css.header__lang}>
              <button onClick={toggleLang}>
                {i18n.language === 'ru' ? 'Кыр' : 'Рус'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

