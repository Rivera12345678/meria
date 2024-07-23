import React, { useState, useEffect } from 'react';
import './Window2.scss';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';

const Window2 = ({ onClose, onAddVlangMember, vemberToEdit }) => {
    const { t } = useTranslation();
    const [formErrors, setFormErrors] = useState({
        degree: false,
        direction: false,
        issueDate: false,
        location: false,
        institution: false,
        specialty: false,
        qualification: false,
        startYear: false,
        endYear: false,
        documentSeries: false,
        documentNumber: false,
    });

    const [formData, setFormData] = useState({
        degree: "",
        direction: "",
        issueDate: "",
        location: "",
        institution: "",
        specialty: "",
        qualification: "",
        startYear: "",
        endYear: "",
        documentSeries: "",
        documentNumber: ""
    });

    useEffect(() => {
        if (vemberToEdit) {
            setFormData(vemberToEdit);
        }
    }, [vemberToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Remove error on field fill
        if (value.trim() !== "") {
            setFormErrors({
                ...formErrors,
                [name]: false
            });
        }
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (formData.degree.trim() === "") {
            errors.degree = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.direction.trim() === "") {
            errors.direction = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.issueDate.trim() === "") {
            errors.issueDate = t("Это поле обязательно для заполнения");
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const newVember = {
                ...formData,
            };
            onAddVlangMember(newVember);
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
                <div className='popup-close' onClick={onClose}>
                    <svg className="svg-inline--fa fa-times fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path></svg>
                </div>
                <div className='popup-content'>
                    <div className='form-popup'>
                        <div className='col-md-1'>
                            <div className='card-body'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md__flex'>
                                            <div className='col-md'>
                                                <div className='form-group'>
                                                    <label className='label-text' htmlFor="degree">
                                                        {t("Степень образования")}
                                                        <span>*</span>
                                                    </label>
                                                    <select className={formErrors.degree ? 'error-border' : ''} name='degree'  id="degree" value={formData.degree} onChange={handleChange}>
                                                        <option value="">{t("-Выбрать-")}</option>
                                                        <option value="Среднее профессиональное">{t("Среднее профессиональное")}</option>
                                                        <option value="Кандидат наук">{t("Кандидат наук")}</option>
                                                        <option value="Доктор наук">{t("Доктор наук")}</option>
                                                        <option value="Магистр">{t("Магистр")}</option>
                                                        <option value="Высшее">{t("Высшее")}</option>
                                                        <option value="Бакалавр">{t("Бакалавр")}</option>
                                                        <option value="Высшее не оконченное">{t("Высшее не оконченное")}</option>
                                                        <option value="Среднее специальное">{t("Среднее специальное")}</option>
                                                        <option value="Среднее">{t("Среднее")}</option>
                                                    </select>
                                                    {formErrors.degree && <div className="error-message">{formErrors.degree}</div>}
                                                </div>
                                            </div>
                                            <div className='col-md'>
                                                <div className='form-group'>
                                                    <label className='label-text' >
                                                        {t("Направления")}
                                                        <span>*</span>
                                                    </label>
                                                    <select className={formErrors.direction ? 'error-border' : ''} name='direction'  id="direction" value={formData.direction} onChange={handleChange}>
                                                        <option value="">{t("-Выбрать-")}</option>
                                                        <option value="Государственное и муниципиальное управление">{t("Государственное и муниципиальное управление")}</option>
                                                        <option value="Юридическое">{t("Юридическое")}</option>
                                                        <option value="Экономическое">{t("Экономическое")}</option>
                                                        <option value="Естественные науки">{t("Естественные науки")}</option>
                                                        <option value="Гуманитарные науки">{t("Гуманитарные науки")}</option>
                                                        <option value="Сельско-хозяственное">{t("Сельско-хозяственное")}</option>
                                                        <option value="Вычеслительные техникии и информационные технологии">{t("Вычеслительные техникии и информационные технологии")}</option>
                                                        <option value="Техническое">{t("Техническое")}</option>
                                                        <option value="Другие">{t("Другие")}</option>
                                                    </select>
                                                    {formErrors.direction && <div className="error-message">{formErrors.direction}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='form-group'>
                                                    <label className='label-text' htmlFor="issueDate">
                                                        {t("Дата выдачи")}
                                                        <span>*</span>
                                                    </label>
                                                    <InputMask   mask="99.99.9999" placeholder="дд.мм.гггг" name='issueDate'  value={formData.issueDate} onChange={handleChange} className={`input ${formErrors.issueDate ? 'error-border' : ''}`} />
                                                    {formErrors.issueDate && <div className="error-message">{formErrors.issueDate}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='label-text' >
                                                       {t("Местонахождение")}
                                                    </label>
                                                    <input type="text" name='location' value={formData.location} onChange={handleChange} className={`input ${formErrors.location ? 'error' : ''}`} />
                                                    {formErrors.location && <div className="error-message">{formErrors.location}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='label-text' htmlFor="institution">
                                                        {t("Ученое звание")}
                                                    </label>
                                                    <input type="text" name='institution'  value={formData.institution} onChange={handleChange} className={`input ${formErrors.institution ? 'error' : ''}`} />
                                                    {formErrors.institution && <div className="error-message">{formErrors.institution}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='label-text' >
                                                        {t("Специальность")}
                                                    </label>
                                                    <input type="text" name='specialty'  value={formData.specialty} onChange={handleChange} className={`input ${formErrors.specialty ? 'error' : ''}`} />
                                                    {formErrors.specialty && <div className="error-message">{formErrors.specialty}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='label-text' >
                                                        {t("Квалификация")}
                                                    </label>
                                                    <input type="text" name='qualification'  value={formData.qualification} onChange={handleChange} className={`input ${formErrors.qualification ? 'error' : ''}`} />
                                                    {formErrors.qualification && <div className="error-message">{formErrors.qualification}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='label-text' >
                                                        {t("Дата начала обучения")}
                                                    </label>
                                                    <InputMask mask="99.99.9999" name='startYear' placeholder="дд.мм.гггг"  value={formData.startYear} onChange={handleChange} className={`input ${formErrors.startYear ? 'error' : ''}`} />
                                                    {formErrors.startYear && <div className="error-message">{formErrors.startYear}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='label-text' >
                                                        {t("Дата конца обучения")}
                                                    </label>
                                                    <InputMask mask="99.99.9999" name='endYear' placeholder="дд.мм.гггг"  value={formData.endYear} onChange={handleChange} className={`input ${formErrors.endYear ? 'error' : ''}`} />
                                                    {formErrors.endYear && <div className="error-message">{formErrors.endYear}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='label-text' >
                                                        {t("Серия документа")}
                                                    </label>
                                                    <input type="text" name='documentSeries'  value={formData.documentSeries} onChange={handleChange} className={`input ${formErrors.documentSeries ? 'error' : ''}`} />
                                                    {formErrors.documentSeries && <div className="error-message">{formErrors.documentSeries}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='label-text' >
                                                        {t("Номер документа")}
                                                    </label>
                                                    <input type="text" name='documentNumber' value={formData.documentNumber} onChange={handleChange} className={`input ${formErrors.documentNumber ? 'error' : ''}`} />
                                                    {formErrors.documentNumber && <div className="error-message">{formErrors.documentNumber}</div>}
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

export default Window2;
