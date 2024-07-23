import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import './Window9.scss';
import { useTranslation } from 'react-i18next';

const Window9 = ({ onClose, onAddVlangMember, vemberToEdit }) => {
    const { t } = useTranslation();
    const [date] = useState(null);
    const [formErrors, setFormErrors] = useState({
        awardName: false,
        awardType: false,
        reviewDate: false,
        awardDate: false,
        orderOrDecree: false,
        signedBy: false,

    });

    const [formData, setFormData] = useState({
awardName: '',
awardType: '',
reviewDate: '',
awardDate: '',
orderOrDecree: '',
signedBy: '',


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
        if (formData.reviewDate.trim() === "") {
            errors.reviewDate = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.awardType.trim() === "") {
            errors.awardType  = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.awardDate.trim() === "") {
            errors.awardDate  = t("Это поле обязательно для заполнения");
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
                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Ранг")}
                                                    </label>
                                                    <select className={`awardName ${formErrors.awardName ? 'error-border' : ''}`} name='awardName' id="awardName" value={formData.awardName} onChange={handleChange}>
    <option value="">{t("-Выбрать-")}</option>
    <option value="Младший юрист">{t("Младший юрист")}</option>
    <option value="Государственный советник юстиции 1 класс">{t("Государственный советник юстиции 1 класс")}</option>
    <option value="Государственный советник юстиции 2 класса">{t("Государственный советник юстиции 2 класса")}</option>
    <option value="Государственный советник юстиции 3 класса">{t("Государственный советник юстиции 3 класса")}</option>
    <option value="Советник юстиции 1 класса">{t("Советник юстиции 1 класса")}</option>
    <option value="Советник юстиции 2 класса">{t("Советник юстиции 2 класса")}</option>
    <option value="Советник юстиции 3 класса">{t("Советник юстиции 3 класса")}</option>
    <option value="Юрист 1 класса">{t("Юрист 1 класса")}</option>
    <option value="Юрист 2 класса">{t("Юрист 2 класса")}</option>
    <option value="Юрист 3 класса">{t("Юрист 3 класса")}</option>
    <option value="Младший инспектор МС">{t("Младший инспектор МС")}</option>
    <option value="Государственный советник налоговой службы 3 ранга">{t("Государственный советник налоговой службы 3 ранга")}</option>
    <option value="Государственный советник налоговой службы 2 ранга">{t("Государственный советник налоговой службы 2 ранга")}</option>
    <option value="Государственный советник налоговой службы 1 ранга">{t("Государственный советник налоговой службы 1 ранга")}</option>
    <option value="Младший инспектор налоговой службы">{t("Младший инспектор налоговой службы")}</option>
    <option value="Инспектор налоговой службы 3 ранга">{t("Инспектор налоговой службы 3 ранга")}</option>
    <option value="Инспектор налоговой службы 2 ранга">{t("Инспектор налоговой службы 2 ранга")}</option>
    <option value="Инспектор налоговой службы 1 ранга">{t("Инспектор налоговой службы 1 ранга")}</option>
    <option value="Советник налоговой службы 3 ранга">{t("Советник налоговой службы 3 ранга")}</option>
    <option value="Советник налоговой службы 2 ранга">{t("Советник налоговой службы 2 ранга")}</option>
    <option value="Советник налоговой службы 1 ранга">{t("Советник налоговой службы 1 ранга")}</option>
    <option value="Младший инспектор ГГС">{t("Младший инспектор ГГС")}</option>
    <option value="Инспектор ГГС 3 класса">{t("Инспектор ГГС 3 класса")}</option>
    <option value="Инспектор ГГС 2 класса">{t("Инспектор ГГС 2 класса")}</option>
    <option value="Инспектор ГГС 1 класса">{t("Инспектор ГГС 1 класса")}</option>
    <option value="Советник ГГС 3 класса">{t("Советник ГГС 3 класса")}</option>
    <option value="Советник ГГС 2 класса">{t("Советник ГГС 2 класса")}</option>
    <option value="Советник ГГС 1 класса">{t("Советник ГГС 1 класса")}</option>
    <option value="Государственный советник ГГС 3 класса">{t("Государственный советник ГГС 3 класса")}</option>
    <option value="Государственный советник ГГС 2 класса">{t("Государственный советник ГГС 2 класса")}</option>
    <option value="Государственный советник ГГС 1 класса">{t("Государственный советник ГГС 1 класса")}</option>
    <option value="Инспектор МС 3 класса">{t("Инспектор МС 3 класса")}</option>
    <option value="Инспектор МС 2 класса">{t("Инспектор МС 2 класса")}</option>
    <option value="Инспектор МС 1 класса">{t("Инспектор МС 1 класса")}</option>
    <option value="Советник МС 3 класса">{t("Советник МС 3 класса")}</option>
    <option value="Советник МС 2 класса">{t("Советник МС 2 класса")}</option>
    <option value="Советник МС 1 класса">{t("Советник МС 1 класса")}</option>
    <option value="Муниципальный советник МС 3 класса">{t("Муниципальный советник МС 3 класса")}</option>
    <option value="Муниципальный советник МС 2 класса">{t("Муниципальный советник МС 2 класса")}</option>
    <option value="Муниципальный советник МС 1 класса">{t("Муниципальный советник МС 1 класса")}</option>
    <option value="Классный чин отсутствует">{t("Классный чин отсутствует")}</option>
</select>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("№ Приказа")}
                                                    </label>
                                                    <input className={formErrors.awardType ? 'error-border' : ''} name='awardType'  type="text"  value={formData.awardType} onChange={handleChange} />
                                                    {formErrors.awardType && <div className="error-message">{formErrors.awardType}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Дата ознакомления")}
                                                    </label>
                                                    <InputMask className={formErrors.reviewDate ? 'error-border' : ''} name='reviewDate'  mask="99.99.9999" placeholder="дд.мм.гггг" value={formData.reviewDate} onChange={handleChange} />
                                                    {formErrors.reviewDate && <div className="error-message">{formErrors.reviewDate}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Дата приказа")}
                                                    </label>
                                                    <InputMask className={formErrors.awardDate ? 'error-border' : ''} name='awardDate'  mask="99.99.9999" placeholder="дд.мм.гггг" value={formData.awardDate} onChange={handleChange} />
                                                    {formErrors.awardDate && <div className="error-message">{formErrors.awardDate}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-6__flex'>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Кем подписано Представление")}
                                                    </label>
                                                    <input className={formErrors. orderOrDecree ? 'error-border' : ''} name='orderOrDecree'  type="text" value={formData.orderOrDecree} onChange={handleChange} />
                                                    {formErrors.orderOrDecree && <div className="error-message">{formErrors.orderOrDecree}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='form-group'>
                                                    <label className='lb-text' >
                                                        {t("Основания")}
                                                    </label>
                                                    <input className={formErrors.signedBy ? 'error-border' : ''} name='signedBy' type="text"  value={formData.signedBy} onChange={handleChange} />
                                                    {formErrors.signedBy && <div className="error-message">{formErrors.signedBy}</div>}
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
}

export default Window9;
