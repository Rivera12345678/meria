import React, { useState } from 'react';
import armyStyles from './Army.module.css'; 
import star from "../../assets/star.svg";
import { useTranslation } from 'react-i18next';
import { Calendar } from 'primereact/calendar';

const Army = ({ formData, setFormData, formErrors }) => {
    const { t } = useTranslation();

   
    const [calendarValue, setCalendarValue] = useState(null);


    const handleCalendarChange = (e) => {
        setCalendarValue(e.value);
        setFormData({ ...formData, dateIssued: e.value });
    };

    return (
        <div className='container'>
            <h4>{t("Отношение к воинской обязанности")}</h4>
            <div className={armyStyles.Army__card}>
                <div className={armyStyles.row}>
                    <div className={armyStyles.flex__col}>
                        <div className={armyStyles.col_md_6}>
                            <p className={armyStyles.p_promp}></p>
                            <div className={armyStyles.form_grouppp}>
                                <label className={armyStyles.lb_text}>
                                    {t("Билет")}
                                </label>
                                <div className={armyStyles.form_control}>
                                    <input
                                        name='ticket'
                                        type='text'
                                        value={formData.ticket}
                                        onChange={(e) => setFormData({ ...formData, ticket: e.target.value })}
                                    />
                                    {formErrors.ticket && <div className="error-message">{formErrors.ticket}</div>}
                                </div>
                            </div>
                        </div>
                        <div className={armyStyles.col_md_6}>
                            <p className={armyStyles.p_promp}></p>
                            <div className={armyStyles.form_grouppp}>
                                <label className={armyStyles.lb_text}>
                                    {t("Дата выдачи")}
                                </label>
                                <div className={armyStyles.selectWidthSearch}>
                                    <div className={armyStyles.selectBlock}></div>
                                    <div className={armyStyles.search_Input}>
                                        <Calendar
                                            style={{ border: "none", width: "100%" }}
                                            dateFormat="dd.mm.yy"
                                            placeholder="дд.мм.гггг"
                                            value={calendarValue}
                                            onChange={handleCalendarChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={armyStyles.contact__flex}>
                        <div className={armyStyles.mininput}>
                            <div className={armyStyles.form_group}>
                                <label>
                                    <span>{t("ВУС")}</span>
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <div className={armyStyles.form__input}>
                                    <input
                                        type="text"
                                        value={formData.specialty}
                                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                                    />
                                    {formErrors.specialty && <div className="error-message">{formErrors.specialty}</div>}
                                </div>
                            </div>
                        </div>
                        <div className={armyStyles.mininput}>
                            <div className={armyStyles.form_group}>
                                <label>
                                    <span>{t("Состав")}</span>
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <div className={armyStyles.form__input}>
                                    <input
                                        type="text"
                                        value={formData.composition}
                                        onChange={(e) => setFormData({ ...formData, composition: e.target.value })}
                                    />
                                    {formErrors.composition && <div className="error-message">{formErrors.composition}</div>}
                                </div>
                            </div>
                        </div>
                        <div className={armyStyles.mininput}>
                            <div className={armyStyles.form_group}>
                                <label>
                                    <span>{t("Звание")}</span>
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <div className={armyStyles.form__input}>
                                    <input
                                        type="text"
                                        value={formData.rank}
                                        onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                                    />
                                    {formErrors.rank && <div className="error-message">{formErrors.rank}</div>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={armyStyles.group__flex}>
                        <div className={armyStyles.form_groupp}>
                            <label>{t("Состоит ли на учете")}</label>
                            <input
                                name='accounting'
                                type="text"
                                placeholder=''
                                value={formData.accounting}
                                onChange={(e) => setFormData({ ...formData, accounting: e.target.value })}
                            />
                            {formErrors.accounting && <div className="error-message">{formErrors.accounting}</div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Army;
