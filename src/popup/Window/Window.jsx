import React, { useState } from 'react';
import "./Window.scss";
import { useTranslation } from 'react-i18next';
import { Calendar } from 'primereact/calendar';

const Window = ({ onClose, onAddFamilyMember }) => {
    const { t } = useTranslation();
    const [date, setDate] = useState(null);
    const [formErrors, setFormErrors] = useState({
        relation: "",
        birthDate: "",
        lastName: "",
        firstName: "",
        middleName: "",
        birthPlace: "",
        residence: "",
        workPlace: "",
        position: ""

    });

    const [formData, setFormData] = useState({
        relation: "",
        birthDate: "",
        lastName: "",
        firstName: "",
        middleName: "",
        birthPlace: "",
        residence: "",
        workPlace: "",
        position: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Удаление ошибки, когда пользователь начинает вводить
        if (value.trim() !== "") {
            setFormErrors({
                ...formErrors,
                [name]: "",
            });
        }
    };

    const validateForm = () => {
        let valid = true;
        let newFormErrors = { ...formErrors };

        // Проверка обязательных полей
        if (formData.relation.trim() === "") {
            newFormErrors.relation = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (!date) {
            newFormErrors.birthDate = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.lastName.trim() === "") {
            newFormErrors.lastName = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.firstName.trim() === "") {
            newFormErrors.firstName = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.middleName.trim() === "") {
            newFormErrors.middleName = t("Это поле обязательно для заполнения");
            valid = false;
        }

        setFormErrors(newFormErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const newMember = {
                ...formData,
                birthDate: date
            };
            onAddFamilyMember(newMember);
            onClose();
        }
    };

    const handleBgClick = (e) => {
        if (e.target.id === 'popup-bg') {
            onClose();
        }
    };

    return (
        <div className='popup-bg' id='popup-bg' onClick={handleBgClick}>
            <div className='popup' onClick={(e) => e.stopPropagation()}>
                <div className='popup-closes' onClick={onClose}>
                    <svg className="svg-inline--fa fa-times fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path>
                    </svg>
                </div>
                <div className='popup-content'>
                    <div className='form-popup'>
                        <div className='col-md-12'>
                            <div className='card-body'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <input type="hidden"  value="relation" />
                                                    <label className='lb-text' >
                                                        {t("Степень родства")}
                                                        <span>*</span>
                                                    </label>
                                                    <div className='select-wrapper'>
                                                        <select
                                                            className={formErrors.relation ? 'error-border' : ''}
                                                            name="relation"
                                                            value={formData.relation}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">{t("Выбрать")}</option>
                                                            <option value="Муж">{t("Муж")}</option>
                                                            <option value="Жена">{t("Жена")}</option>
                                                            <option value="Сын">{t("Сын")}</option>
                                                            <option value="Дочь">{t("Дочь")}</option>
                                                            <option value="Брат">{t("Брат")}</option>
                                                            <option value="Сестра">{t("Сестра")}</option>
                                                            <option value="Мать">{t("Мать")}</option>
                                                            <option value="Отец">{t("Отец")}</option>
                                                            <option value="Отчим">{t("Отчим")}</option>
                                                            <option value="Мачеха">{t("Мачеха")}</option>
                                                        </select>
                                                    </div>
                                                    {formErrors.relation && <div className="error-message">{formErrors.relation}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Дата рождения")}
                                                        <span>*</span>
                                                    </label>
                                                    <Calendar
                                                        className={formErrors.birthDate ? 'error-border' : ''}
                                                        style={{  width: "100%" }}
                                                        value={formData.birthDate}
                                                        onChange={(e) => setDate(e.value)}
                                                        type='data'
                                                        name='birthDate'
                                                        mask="99.99.9999"
                                                        placeholder="дд.мм.гггг"
                                                    />
                                                    {formErrors.birthDate && <div className="error-message">{formErrors.birthDate}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4__flex'>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label className='lb-text'>
                                                        {t("Фамилия")}
                                                        <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name='lastName'
                                                        placeholder='Иванов'
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        className={formErrors.lastName ? 'error-border' : ''}
                                                    />
                                                    {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label className='lb-text'>
                                                        {t("Имя")}
                                                        <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder='Иван'
                                                        name='firstName'
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        className={formErrors.firstName ? 'error-border' : ''}
                                                    />
                                                    {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className='form-group'>
                                                    <label className='lb-text'>
                                                        {t("Отчество")}
                                                        <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name='middleName'
                                                        placeholder='Иванович'
                                                        value={formData.middleName}
                                                        onChange={handleChange}
                                                        className={formErrors.middleName ? 'error-border' : ''}
                                                    />
                                                    {formErrors.middleName && <div className="error-message">{formErrors.middleName}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Место рождения")}
                                                    </label>
                                                    <input type="text" name='birthPlace' placeholder='село, город, район, область' value={formData.birthPlace} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Место жительства")}
                                                    </label>
                                                    <input type="text" name='residence' value={formData.residence} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Место работы")}
                                                    </label>
                                                    <input type="text" name='workPlace'  value={formData.workPlace} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Должность")}
                                                    </label>
                                                    <input type="text" name='position'  value={formData.position} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='location-middle'>
                                        <li>
                                            <button onClick={handleSubmit}>{t("Добавить")}</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Window;
 