import React, { useState } from 'react';
import contact from './Contact.module.css';
import star from '../../assets/star.svg';
import { InputMask } from 'primereact/inputmask';
import { useTranslation } from 'react-i18next';

const regionsData = [
    'Чуйская область',
    'Ошская область',
    'Джалал-Абадская область',
    'Нарынская область',
    'Иссык-Кульская область',
    'Таласская область',
    'Баткенская область',
    'Город Бишкек',
    'Город Ош'
    // Здесь добавьте остальные регионы Кыргызстана по необходимости
];

const Contact = ({ formData, setFormData, formErrors }) => {
    const { t } = useTranslation();
    const [showRegionDropdown, setShowRegionDropdown] = useState(false);
    const [filteredRegions, setFilteredRegions] = useState(regionsData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleRegionDropdown = () => {
        setShowRegionDropdown(!showRegionDropdown);
    };

    const filterRegions = (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredData = regionsData.filter(region =>
            region.toLowerCase().includes(searchText)
        );
        setFilteredRegions(filteredData);
    };

    return (
        <div className='container'>
            <h4>{t("Контакты")}</h4>
            <div className={contact.contact__flex}>
                <div className={contact.row}>
                    <div className={contact.col_md_flex}>
                        <div className={contact.mininput}>
                            <div className={contact.form_group}>
                                <label>{t("Моб телефон")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <div className={contact.mask}>
                                    <span>+996</span>
                                    <InputMask defaultValue={'___-___-___'} mask='999-999-999' placeholder='___-___-___' value={formData.mobilePhone} onChange={(e) => handleInputChange(e)} />
                                </div>
                                {formErrors.mobilePhone && <div className="error-message">{formErrors.mobilePhone}</div>}
                            </div>
                        </div>
                        <div className={contact.mininput}>
                            <div className={contact.form_group}>
                                <label>{t("Дом телефон")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <div className={contact.mask}>
                                    <span>+996(312)</span>
                                    <InputMask defaultValue={'___-___'} mask='999-999' placeholder='___-___' value={formData.homePhone} onChange={(e) => handleInputChange(e)} />
                                </div>
                                {formErrors.homePhone && <div className="error-message">{formErrors.homePhone}</div>}
                            </div>
                        </div>
                        <div className={contact.mininput}>
                            <div className={contact.form_group}>
                                <label>{t("Эл почта")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <input type="text" placeholder='example@example.com' value={formData.email} onChange={(e) => handleInputChange(e)} />
                                {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                            </div>
                        </div>
                    </div>

                    <div className={contact.col_md_6_flex}>
                        <div className={contact.col_md_6}>
                            <p className={contact.p_promp}></p>
                            <div className={contact.form_groupt}>
                                <label className={contact.lb_text}>{t("Регион")}
                                    <span><img src={star} alt="" />
                                    </span>
                                    </label>
                                    <input className={contact.form_control} onClick={() => toggleRegionDropdown()} style={{ paddingRight: '50px', cursor: 'pointer' }} type="text"  placeholder="поиск" value={formData.region} onChange={(e) => { handleInputChange(e); filterRegions(e); }} />
                                    {showRegionDropdown && (
                                        <div className={contact.dropdown}>
                                            {filteredRegions.map((region, index) => (
                                                <div key={index} onClick={() => {
                                                    setFormData({ ...formData, region: region });
                                                    setShowRegionDropdown(false);
                                                }}>
                                                    {region}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                
                                {formErrors.region && <div className="error-message">{formErrors.region}</div>}
                            </div>
                        </div>
                        <div className={contact.col_md_6}>
                            <p className={contact.p_promp}></p>
                            <div className={contact.form_groupt}>
                                <label className={contact.lb_text}>
                                    {t("Улица")}
                                    <span><img src={star} alt="" /></span>
                                </label>

                                
                                    
                                    <input className={contact.form_control} onClick={() => handleDivClick('street')} style={{ paddingRight: '50px', cursor: 'pointer' }} type="text"  placeholder="поиск"  onChange={(e) => handleInputChange(e)} />
                                    {formErrors.street && <div className="error-message">{formErrors.street}</div>}
                                
                            </div>
                        </div>
                    </div>

                    <div className={contact.col_md_6_flex}>
                        <div className={contact.col_md_6}>
                            <p className={contact.p_promp}></p>
                            <div className={contact.form_groupt}>
                                <label className={contact.lb_text}>
                                    {t("Номер Дома")}
                                    <span><img src={star} alt="" /></span>
                                    <span>?</span>
                                </label>
                                <div className={contact.form_control}>
                                    <input placeholder='' required type='text'  onChange={(e) => handleInputChange(e)} />
                                    {formErrors.houseNumber && <div className="error-message">{formErrors.houseNumber}</div>}
                                </div>
                            </div>
                        </div>
                        <div className={contact.col_md_6}>
                            <p className={contact.p_promp}></p>
                            <div className={contact.form_groupt}>
                                <label className={contact.lb_text}>
                                    {t("Номер Квартиры")}
                                    <span><img src={star} alt="" /></span>
                                    <span>?</span>
                                </label>
                                <div className={contact.form_control}>
                                    <input required type='text' onChange={(e) => handleInputChange(e)} />
                                    {formErrors.apartmentNumber && <div className="error-message">{formErrors.apartmentNumber}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
