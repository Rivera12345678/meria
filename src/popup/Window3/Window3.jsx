import React, { useState, useEffect } from 'react';
import './Window3.scss';
import { useTranslation } from 'react-i18next';

const Window3 = ({ onClose, onAddVlangMember, vemberToEdit }) => {
    const { t } = useTranslation();
    const [date] = useState(null);
    const [formErrors, setFormErrors] = useState({
        topic: false,
        date: false,
        description: false,
    });

    const [formData, setFormData] = useState({
        topic: "",
        date: "",
        description: "",
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

        // Удаление ошибки при заполнении поля
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

        if (formData.topic.trim() === "") {
            errors.topic  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.date.trim() === "") {
            errors.date  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.description.trim() === "") {
            errors.description  = t("Это поле обязательно для заполнения");
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
            console.log();
        }
    };

    const handleBgClick = (e) => {
        if (e.target.id === 'popup-bg') {
            onClose();
        }
    };

    return (
        <div className='popup-bg' id='popup-bg' onClick={handleBgClick}>
            <div className='popup' onClick={(e) => e.stopPropagation()} >
                <div className='popup-closes' onClick={onClose} >
                    <svg className="svg-inline--fa fa-times fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path>
                    </svg>
                </div>
                <div className='popup-conten'>
                    <div className='form-popu'>
                        <div className='col-md-1'>
                            <div className='card-bod'>
                                <div className='container'>
                                    <div className='ro'>
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Тематика")}
                                                    </label>
                                                    <input className={`input ${formErrors.topic ? 'error-border' : ''}`} type="text" name='topic' value={formData.topic} onChange={handleChange} />
                                                    {formErrors.topic && <div className="error-message">{formErrors.topic}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Дата")}
                                                    </label>
                                                    <input className={`input ${formErrors.date ? 'error-border' : ''}`} type="text" name='date'  value={formData.date} onChange={handleChange} />
                                                    {formErrors.date && <div className="error-message">{formErrors.date}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-7'>
                                            <div className='form-group'>
                                                <label className='lb-text' >{t("Описание")}</label>
                                                <input className={`description_input ${formErrors.description ? 'error-border' : ''}`} name='description'  type="text"  value={formData.description} onChange={handleChange} placeholder={t('опишите')} />
                                                {/* {formErrors.description && <div className="error-message">{formErrors.description}</div>} */}
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

export default Window3;
