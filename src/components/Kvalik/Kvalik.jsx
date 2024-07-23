import React from 'react';
import kvalikStyles from './Kvalik.module.css';
import { useTranslation } from 'react-i18next';

const Kvalik = ({ formData, setFormData, formErrors }) => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className={kvalikStyles.format__row}>

                <div className={kvalikStyles.contact__flex}>

                    <div className={kvalikStyles.col_md_6}>
                        <p className={kvalikStyles.p_promp}></p>

                        <div className={kvalikStyles.form_groupt}>
                            <label className={kvalikStyles.lb_text}>
                                {t("Ученая степень")}
                            </label>
                            <div className={kvalikStyles.form_control}>
                                <input
                                    className={formErrors.relation ? "error_border" : ''}
                                    placeholder=''
                                    required
                                    type='text'
                                />
                                {formErrors.relation && <div className="error-message">{formErrors.relation}</div>}
                            </div>
                        </div>
                    </div>

                    <div className={kvalikStyles.col_md_6}>
                        <p className={kvalikStyles.p_promp}></p>

                        <div className={kvalikStyles.form_groupt}>
                            <label className={kvalikStyles.lb_text}>
                                {t("Ученая звание")}
                            </label>

                            <div className={kvalikStyles.search_Input}>
                                <input
                                    className={formErrors.birthDate ? "error_border" : ''}
                                    type="text"
                                    placeholder=''
                                />
                                {formErrors.birthDate && <div className="error-message">{formErrors.birthDate}</div>}
                                <ul className={kvalikStyles.searchSelectUl}></ul>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={kvalikStyles.contact__flex}>

                    <div className={kvalikStyles.col_md_6}>
                        <p className={kvalikStyles.p_promp}></p>
                        <label className={kvalikStyles.lb_text}>
                                {t("Стаж общий (лет)")}
                            </label>

                        <div className={kvalikStyles.search_Input}>
                            
                            <input
                                className={formErrors.lastName ? "error_border" : ''}
                                type='text'
                            />
                            {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                        </div>
                    </div>

                    <div className={kvalikStyles.col_md_6}>
                        <p className={kvalikStyles.p_promp}></p>

                        <div className={kvalikStyles.form_groupt}>
                            <label className={kvalikStyles.lb_text}>
                                {t("Стаж по специальности (лет)")}
                            </label>

                            <div className={kvalikStyles.search_Input}>
                                <input
                                    className={formErrors.firstName ? "error_border" : ''}
                                    type="text"
                                    placeholder=''
                                />
                                {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                                <ul className={kvalikStyles.searchSelectUl}></ul>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={kvalikStyles.contact__flex}>

                    <div className={kvalikStyles.mininput}>
                        <div className={kvalikStyles.form_group}>
                            <label>
                                {t("Стаж на государственной службе (лет)")}
                            </label>
                            <input
                                className={formErrors.middleName ? "error_border" : ''}
                                type="text"
                                placeholder=''
                            />
                            {formErrors.middleName && <div className="error-message">{formErrors.middleName}</div>}
                        </div>
                    </div>

                    <div className={kvalikStyles.mininput}>
                        <div className={kvalikStyles.form_group}>
                            <label>
                                {t("Стаж на муниципальной службе (лет)")}
                            </label>
                            <input
                                className={formErrors.birthPlace ? "error_border" : ''}
                                type="text"
                                placeholder=''
                            />
                            {formErrors.birthPlace && <div className="error-message">{formErrors.birthPlace}</div>}
                        </div>
                    </div>

                    <div className={kvalikStyles.mininput}>
                        <div className={kvalikStyles.form_group}>
                            <label>
                                {t("Стаж в частных структурах (лет)")}
                            </label>
                            <input
                                className={formErrors.residence ? "error_border" : ''}
                                type="text"
                                placeholder=''
                            />
                            {formErrors.residence && <div className="error-message">{formErrors.residence}</div>}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Kvalik;
