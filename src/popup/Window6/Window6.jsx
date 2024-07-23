import React, { useState, useEffect } from 'react';
import './Window6.scss';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';

const Window6 = ({onClose, onAddVlangMember, vemberToEdit }) => {
    const { t } = useTranslation();
    const [date] = useState(null);
    const [formErrors, setFormErrors] = useState({
        country: false,
        purpose: false,
        startDate: false,
        endDate: false
    });

    const [formData, setFormData] = useState({
        country: "",
        purpose: "",
        startDate: "",
        endDate: ""
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
            errors.country  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.purpose.trim() === "") {
            errors.purpose  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.startDate.trim() === "") {
            errors.startDate  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.endDate.trim() === "") {
            errors.endDate  = t("Это поле обязательно для заполнения");
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
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Страна")}
                                                    </label>
                                                    <input  className={formErrors.country ? 'error-border' : ''} type="text" name='country'  value={formData.country} onChange={handleChange}  />
                                                    {formErrors.country && <div className="error-message">{formErrors.country}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Цель командировки")}
                                                    </label>
                                                    <select  className={formErrors.purpose ? 'error-border' : ''} name='purpose'  value={formData.purpose} onChange={handleChange}>
                                                        <option value="">{t("Выбрать")}</option>
                                                        <option value="Конференции Симпозиумы семинары собрания">{t("Конференции Симпозиумы семинары собрания")}</option>
                                                        <option value="Курсы Стажировки обичения">{t("Курсы Стажировки обичения")}</option>
                                                        <option value="Заседания сессии">{t("Заседания сессии")}</option>
                                                        <option value="Консультации">{t("Консультации")}</option>
                                                        <option value="Визиты">{t("Визиты")}</option>
                                                        <option value="Обмен опытом">{t("Обмен опытом")}</option>
                                                        <option value="Сопровождении делегации">{t("Сопровождении делегации")}</option>
                                                        <option value="Вопросы финансирования">{t("Вопросы финансирования")}</option>
                                                        <option value="Ярмарки выставки кинофестивали">{t("Ярмарки выставки кинофестивали")}</option>
                                                        <option value="Презентации">{t("Презентации")}</option>
                                                        <option value="Подписание документа">{t("Подписание документа")}</option>
                                                        <option value="Вопросы поставо">{t("Вопросы поставо")}</option>
                                                        <option value="Разширения">{t("Разширения")}</option>
                                                        <option value="Служебная">{t("Служебная")}</option>
                                                        <option value="Участие в тендере">{t("Участие в тендере")}</option>
                                                        <option value="Прочие цели">{t("Прочие цели")}</option>
                                                        <option value="Выездная плановая проверка">{t("Выездная плановая проверка")}</option>
                                                        <option value="Выездная внеплановая проверка">{t("Выездная внеплановая проверка")}</option>
                                                    </select>
                                                    {formErrors.purpose && <div className="error-message">{formErrors.purpose}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Дата начала командировки")}
                                                    </label>
                                                    <InputMask  className={formErrors.startDate ? 'error-border' : ''} name='startDate' mask="99.99.9999" placeholder="дд.мм.гггг"  value={formData.startDate} onChange={handleChange} />
                                                    {formErrors.startDate && <div className="error-message">{formErrors.startDate}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Дата оканчание командировки")}
                                                    </label>
                                                    <InputMask  className={formErrors.endDate ? 'error-border' : ''} name='endDate' mask="99.99.9999" placeholder="дд.мм.гггг" value={formData.endDate} onChange={handleChange} />
                                                    {formErrors.endDate && <div className="error-message">{formErrors.endDate}</div>}
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
    )
}

export default Window6;
