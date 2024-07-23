import React, { useState, useRef, useEffect } from 'react';
import classes from './Main.module.css';
import star from '../../assets/star.svg';
import { useTranslation } from 'react-i18next';

const Main = ({ formData, setFormData, formErrors,  }) => {
    const { t } = useTranslation();
    const [showRequest, setShowRequest] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [inputText, setInputText] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
    const inputRef = useRef(null);


    const cities = [
        "Бишкек",
        "Ысык-кол",
        "Нарын",
        "Баткен",
        "Ош",
        "Жалал-абад",
        "Чуй",
        "Талас"
    ];

    const [date, setDate] = useState(null);

    const handleDivClick = () => {
        setShowRequest(!showRequest);
        if (!showRequest) {
            inputRef.current.focus();
        }
    };

    const handleInputChange = (event) => {
        const searchText = event.target.value;
        setInputText(searchText);
        filterCities(searchText);
        setShowRequest(true);
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setInputText(city); 
        setShowRequest(false); 
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setShowRequest(false);
        }
    };

    const filterCities = (text) => {
        const filtered = cities.filter(city =>
            city.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCities(filtered);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const handleRelationChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').slice(0, 14);
        setFormData({ ...formData, relation: input });
        if (input.length == 14) return;
    };

    return (
        <div className='container'>
            <h4>{t("Ваши данные")}</h4>
            <div className={classes.text__center}>
                <div className={classes.row}>

                    <div className={classes.col_md_flex}>

                        <div className={classes.col_md_6}>
                            <p className={classes.p_promp}></p>
                            <div className={classes.form_groupt}>
                                <div className={classes.select_wrapper}></div>
                                <label className={classes.lb_text}>
                                    {t("ПИН")}
                                    <span>
                                        <img src={star} alt="" />
                                    </span>
                                </label>
                                <div className={classes.form_control }>
                                    <input className={formErrors.relation ? 'error-border' : ''}
                                        onBlur={(e) => {
                                            if (e.target.value !== 14) {
                                            }
                                        }}
                                        autoFocus
                                        minLength="14"
                                        maxLength="14"
                                        placeholder='хххххххххххххх'
                                        type='number'
                                        name="relation"
                                        value={formData.relation}
                                        onChange={handleRelationChange}
                                    />
                                    {formErrors.relation && <div className="error-message">{formErrors.relation}</div>}
                                </div>
                            </div>
                        </div>

                        <div className={classes.col_md_6}>
                            <p className={classes.p_promp}></p>
                            <div className={classes.select_wrapper ?? classes.arrow_wrap}></div>
                            <div className={classes.form_groupt}>
                                <label className={classes.lb_text}>
                                    {t("Организация")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <div className={classes.selectWidthSearch}>
                                    <div className={classes.selectText} onClick={handleDivClick}></div>
                                    <div className={classes.searchContainer}>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            className={classes.searchInput}
                                            placeholder={t("поиск")}
                                            value={inputText}
                                            onChange={handleInputChange}
                                        />

                                        {showRequest && (
                                            <div className={classes.requestContainer}>
                                                <ul className={classes.cityList}>
                                                    {filteredCities.map((city, index) => (
                                                        <li key={index} onClick={() => handleCitySelect(city)}>{city}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={classes.col_md_flex}>

                        <div className={classes.mininput}>
                            <div className={classes.form_group}>
                                <label> {t("Фамилия")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <input
                                className={formErrors.lastName ? 'error-border' : ''}
                                    type="text"
                                    placeholder='Иванов'
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                                {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                            </div>
                        </div>
                        <div className={classes.mininput}>
                            <div className={classes.form_group}>
                                <label> {t("Имя")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <input
                                className={formErrors.firstName ? 'error-border' : ''}
                                    type="text"
                                    placeholder='Иван'
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                                {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                            </div>
                        </div>
                        <div className={classes.mininput}>
                            <div className={classes.form_group}>
                                <label> {t("Отчество")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Иванович'
                                    value={formData.middleName}
                                    onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}

                                />
                                {formErrors.middleName && <div className="error-message">{formErrors.middleName}</div>}
                            </div>
                        </div>

                    </div>

                    <div className={classes.col_md_flex}>

                        <div className={classes.mininput}>
                            <div className={classes.form_group}>
                                <label>
                                    {t("Если изменили фамилию")}
                                </label>
                                <input
                                    type="text"
                                    className={formErrors.birthPlace ? 'error-border' : ''}
                                    value={formData.birthPlace}
                                    onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                                />
                                {formErrors.birthPlace && <div className="error-message">{formErrors.birthPlace}</div>}
                            </div>
                        </div>
                        <div className={classes.mininput}>
                            <div className={classes.form_group}>
                                <label> {t("Место рождения")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='село город район область '
                                    value={formData.residence}
                                    className={formErrors.residence ? 'error-border' : ''}
                                    onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
                                />
                                {formErrors.residence && <div className="error-message">{formErrors.residence}</div>}
                            </div>
                        </div>
                        <div className={classes.mininput}>
                            <div className={classes.form_group}>
                                <label> {t("Семейное положение")}
                                    <span><img src={star} alt="" /></span>
                                </label>
                                <select
                                    value={formData.workPlace}
                                    className={formErrors.workPlace ? 'error-border' : ''}
                                    onChange={(e) => setFormData({ ...formData, workPlace: e.target.value })}>
                                    <option value="">{t("-Выбрать-")}</option>
                                    <option value={t("В браке не состоял(а)")} >{t("В браке не состоял(а)")}</option>
                                    <option value={t("Состоит в браке")}>{t("Состоит в браке")}</option>
                                    <option value={t("Разведен(а)")}>{t("Разведен(а)")}</option>
                                    <option value={t("Вдовец/вдова")}>{t("Вдовец/вдова")}</option>
                                </select>
                                {formErrors.workPlace && <div className="error-message">{formErrors.workPlace}</div>}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;
