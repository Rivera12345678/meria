

import React, { useState, useEffect } from 'react';
import './Window8.scss'; // Подключение стилей компонента
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';

const Window8 = ({ onClose, onAddVlangMember, vemberToEdit }) => {
    const { t } = useTranslation();
    const [date] = useState(null);
    const [formErrors, setFormErrors] = useState({
        awardName: false,
        awardType: false,
        reviewDate: false,
        awardDate: false,
        orderOrDecree: false,
        signedBy: false,
        awardDescription: false,
    });

    const [formData, setFormData] = useState({
awardName: '',
awardType: '',
reviewDate: '',
awardDate: '',
orderOrDecree: '',
signedBy: '',
awardDescription: ''

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

        if (formData.awardName.trim() === "") {
            errors.awardName  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.awardDate.trim() === "") {
            errors.awardDate  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.awardType.trim() === "") {
            errors.awardType  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.reviewDate.trim() === "") {
            errors.reviewDate  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.orderOrDecree.trim() === "") {
            errors.orderOrDecree  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.signedBy.trim() === "") {
            errors.signedBy  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.awardDescription.trim() === "") {
            errors.awardDescription  = t("Это поле обязательно для заполнения");
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
            <div className='popup' onClick={(e) => e.stopPropagation()}  >
                <div className='popup-closes' onClick={onClose} >
                    <svg className="svg-inline--fa fa-times fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path></svg>
                </div>
                <div className='popup-conten'>
                    <div className='form-popu'>
                        <div className='col-md-1'>
                            <div className='card-bod'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='group__flex'>
                                            <div className='form-group'>
                                                <label >{t("Наименование награды")}</label>
                                                <input  className={formErrors.awardName ? 'error-border' : ''} name='awardName' type="text" id="awardName"  value={formData.awardName} onChange={handleChange} />
                                                {formErrors.awardName && <div className="error-message">{formErrors.awardName}</div>}
                                            </div>
                                        </div>
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >{t("Тип Награды")}</label>
                                                    <select className={formErrors.awardType ? 'error-border' : ''} name='awardType'  id="awardType"value={formData.awardType} onChange={handleChange}>
                                                        <option value="">{t("-Выбрать-")}</option>
                                                        <option value={t("Государственная награда")}>{t("Государственная награда")}</option>
                                                        <option value={t("Ведомственная награда")}>{t("Ведомственная награда")}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >{t("Дата ознакомления")}</label>
                                                    <InputMask  className={formErrors.reviewDate ? 'error-border' : ''} name='reviewDate' mask="99.99.9999" placeholder="дд.мм.гггг" id="reviewDate"  value={formData.reviewDate} onChange={handleChange} />
                                                    {formErrors.reviewDate && <div className="error-message">{formErrors.reviewDate}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md__flex'>
                                            <div className='col-md'>
                                                <div className='form-group'>
                                                    <label className='lb-text' >{t("Дата награждения")}</label>
                                                    <InputMask  className={formErrors.awardDate ? 'error-border' : ''} name='awardDate' mask="99.99.9999" placeholder="дд.мм.гггг" id="awardDate"  value={formData.awardDate} onChange={handleChange} />
                                                    {formErrors.awardDate && <div className="error-message">{formErrors.awardDate}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='form-group'>
                                                    <label className='lb-text' >{t("Указ/Распоряжение/Приказ")}</label>
                                                    <input  className={formErrors.orderOrDecree ? 'error-border' : ''} type="text" name='orderOrDecree' value={formData.orderOrDecree} onChange={handleChange} />
                                                    {formErrors.orderOrDecree && <div className="error-message">{formErrors.orderOrDecree}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='form-group'>
                                                    <label className='lb-text' >{t("Кем подписано")}</label>
                                                    <input  className={formErrors.signedBy ? 'error-border' : ''} type="text" name='signedBy'  value={formData.signedBy} onChange={handleChange} />
                                                    {formErrors.signedBy && <div className="error-message">{formErrors.signedBy}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='group__flex'>
                                            <div className='form-group'>
                                                <label >{t("Описание награды")}</label>
                                                <input  className={formErrors.awardDescription ? 'error-border' : ''} name='awardDescription' type="text"  value={formData.awardDescription} onChange={handleChange} />
                                                {formErrors.awardDescription && <div className="error-message">{formErrors.awardDescription}</div>}
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

export default Window8;
