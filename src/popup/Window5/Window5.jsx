import React, { useState, useEffect } from 'react';
import './Window5.scss';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';

const Window5 = ({ onClose, onAddVlangMember, vemberToEdit }) => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        country: "",
        startDate: "",
        endDate: "",
        qualificationType: "",
        location: "",
        description: "",
        isSecureContext: false,
        isConcurrentChecked: false
    });

    const [formErrors, setFormErrors] = useState({
        country: false,
        startDate: false,
        endDate: false,
        qualificationType: false,
        location: false,
        description: false,
        isSecureContext: false,
        isConcurrentChecked: false
    });

    useEffect(() => {
        if (vemberToEdit) {
            setFormData(vemberToEdit);
        }
    }, [vemberToEdit]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val
        });

        // Удаление ошибки при заполнении поля
        if (val.trim() !== "" || val !== false) {
            setFormErrors({
                ...formErrors,
                [name]: false
            });
        }
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (formData.country.trim() === "") {
            errors.country = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.startDate.trim() === "") {
            errors.startDate = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.endDate.trim() === "") {
            errors.endDate = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.qualificationType.trim() === "") {
            errors.qualificationType = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.location.trim() === "") {
            errors.location = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.description.trim() === "") {
            errors.description = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.isSecureContext === "") {
            errors.isSecureContext = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.isConcurrentChecked === "") {
            errors.isConcurrentChecked = t("Это поле обязательно для заполнения");
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const newVember = { ...formData };
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
                <div className='popup-closes' onClick={onClose}>
                    <svg className="svg-inline--fa fa-times fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path></svg>
                </div>
                <div className='popup-conten'>
                    <div className='form-popu'>
                        <div className='col-md-1'>
                            <div className='card-bod'>
                                <div className='container'>
                                    <div className='ro'>
                                        <div className='col-md__flex'>
                                            <div className='col-md'>
                                                <div className='form-grou'>
                                                    <label className='lb-tex' >
                                                        {t("Страна")}
                                                        <span>*</span>
                                                    </label>
                                                    <select className={formErrors.country ? 'error-border' : ''} name='country' value={formData.country} onChange={handleChange}>
                                                        <option value="">{t("-Выбрать-")}</option>
                                                        <option value="Не государственная служба">{t("Не государственная служба")}</option>
                                                        <option value="Государственная служба">{t("Государственная служба")}</option>
                                                        <option value="Военная служба">{t("Военная служба")}</option>
                                                        <option value="Правоохранительная служба">{t("Правоохранительная служба")}</option>
                                                        <option value="Муниципальная служба">{t("Муниципальная служба")}</option>
                                                    </select>
                                                    {formErrors.country && <div className="error-message">{formErrors.country}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='form-grou'>
                                                    <label className='lb-tex' >
                                                        {t("Дата вступления")}
                                                        <span>*</span>
                                                    </label>
                                                    <InputMask className={formErrors.startDate ? 'error-border' : ''} name='startDate' mask="99.99.9999" placeholder="дд.мм.гггг" value={formData.startDate} onChange={handleChange} />
                                                    {formErrors.startDate && <div className="error-message">{formErrors.startDate}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='form-grou'>
                                                    <label className='lb-tex' >
                                                        {t("Дата ухода")}
                                                        <span>*</span>
                                                    </label>
                                                    <InputMask className={formErrors.endDate ? 'error-border' : ''} name='endDate' mask="99.99.9999" placeholder="дд.мм.гггг" value={formData.endDate} onChange={handleChange} />
                                                    {formErrors.endDate && <div className="error-message">{formErrors.endDate}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Наименование учреждения")}
                                                    </label>
                                                    <input className={formErrors.qualificationType ? 'error-border' : ''} name='qualificationType' type="text" value={formData.qualificationType} onChange={handleChange} />
                                                    {formErrors.qualificationType && <div className="error-message">{formErrors.qualificationType}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Адрес")}
                                                    </label>
                                                    <input className={formErrors.location ? 'error-border' : ''} type="text" name='location' value={formData.location} onChange={handleChange} />
                                                    {formErrors.location && <div className="error-message">{formErrors.location}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group__flex">
                                            <div className="form_groupp">
                                                <label>{t("Занимаемая должность")}</label>
                                                <input className={formErrors.description ? 'error-border' : ''} type="text" name='description' value={formData.description} onChange={handleChange} />
                                                {formErrors.description && <div className="error-message">{formErrors.description}</div>}
                                            </div>
                                        </div>

                                        <div className='col-md__chekbox'>
                                            <div>
                                                <input className={formErrors.isSecureContext ? 'error-border' : ''} name='isSecureContext' type="checkbox" id="isSecureContext" checked={formData.isSecureContext} onChange={handleChange} />
                                                <label htmlFor="isSecureContext">{t("Работа по специальности")}</label>
                                                {formErrors.isSecureContext && <div className="error-message">{formErrors.isSecureContext}</div>}
                                            </div>
                                            <div>
                                                <input className={formErrors.isConcurrentChecked ? 'error-border' : ''} name='isConcurrentChecked' type="checkbox" id="isConcurrentChecked" checked={formData.isConcurrentChecked} onChange={handleChange} />
                                                <label htmlFor="isConcurrentChecked">{t("Работа по совместительству")}</label>
                                                {formErrors.isConcurrentChecked && <div className="error-message">{formErrors.isConcurrentChecked}</div>}
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
}

export default Window5;
