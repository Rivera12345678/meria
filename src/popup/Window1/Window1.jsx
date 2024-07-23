import React, { useState, useEffect } from 'react';
import './Window1.scss';
import { useTranslation } from 'react-i18next';

const Window1 = ({ onClose, onAddVlangMember, vemberToEdit }) => {
    const { t } = useTranslation();
    const [date] = useState(null);
    const [formErrors, setFormErrors] = useState({
        lang: false,
        post: false,
        level: false,
    });

    const [formData, setFormData] = useState({
        lang: "",
        post: "",
        level: "",
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

        if (formData.lang.trim() === "") {
            errors.lang = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.post.trim() === "") {
            errors.post = t("Это поле обязательно для заполнения");
            valid = false;
        }
        if (formData.level.trim() === "") {
            errors.level = t("Это поле обязательно для заполнения");
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
                <div className='popup-closes' onClick={onClose}>
                    <svg className="svg-inline--fa fa-times fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path>
                    </svg>
                </div>
                <div className='popup-conten'>
                    <div className='form-popu'>
                        <div className='col-md-1'>
                            <div className='card-bod'>
                                <div className='container'>
                                    <div className='roy'>
                                        <div className='col-md__flex'>
                                            <div className='col-md'>
                                                <div className='form-grou'>
                                                    <label className='lb-tex' htmlFor="">
                                                        {t("Язык")}
                                                        <span>*</span>
                                                    </label>
                                                    <select className={formErrors.lang ? 'error-border' : ''} name='lang'  value={formData.lang} onChange={handleChange}>
                                                        <option value="">{t("-Выбрать-")}</option>
                                                        <option value="Кыргызский язык">{t("Кыргызский язык")}</option>
                                                        <option value="Русский язык">{t("Русский язык")}</option>
                                                        <option value="Английский язык">{t("Английский язык")}</option>
                                                        <option value="Немецкий язык">{t("Немецкий язык")}</option>
                                                        <option value="Французский язык">{t("Французский язык")}</option>
                                                        <option value="Китайский язык">{t("Китайский язык")}</option>
                                                        <option value="Турецкий язык">{t("Турецкий язык")}</option>
                                                        <option value="Японский язык">{t("Японский язык")}</option>
                                                        <option value="Испанский язык">{t("Испанский язык")}</option>
                                                        <option value="Казахский язык">{t("Казахский язык")}</option>
                                                        <option value="Узбекский язык">{t("Узбекский язык")}</option>
                                                        <option value="Чешский язык">{t("Чешский язык")}</option>
                                                        <option value="Азербайджанский язык">{t("Азербайджанский язык")}</option>
                                                        <option value="Итальянский язык">{t("Итальянский язык")}</option>
                                                        <option value="Корейский язык">{t("Корейский язык")}</option>
                                                        <option value="Арабский язык">{t("Арабский язык")}</option>
                                                        <option value="Фарсийский язык">{t("Фарсийский язык")}</option>
                                                        <option value="Ивритский язык">{t("Ивритский язык")}</option>
                                                        <option value="Урду язык">{t("Урду язык")}</option>
                                                    </select>
                                                    {formErrors.lang && <div className="error-message">{t("Обязательно для заполнения")}</div>}
                                                </div>
                                            </div>
                                            <div className='col-md'>
                                                <div className='form-grou'>
                                                    <label className='lb-tex' htmlFor="">
                                                        {t("Уровень")}
                                                        <span>*</span>
                                                    </label>
                                                    <select className={formErrors.post ? 'error-border' : ''} name='post' value={formData.post} onChange={handleChange}>
                                                        <option value="">{t("-Выбрать-")}</option>
                                                        <option value="Владеет свободно">{t("Владеет свободно")}</option>
                                                        <option value="Читает и может объяснить">{t("Читает и может объяснить")}</option>
                                                        <option value="Читает или переводит со словарём">{t("Читает или переводит со словарём")}</option>
                                                    </select>
                                                    {formErrors.post && <div className="error-message">{t("Обязательно для заполнения")}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='form-grou'>
                                                    <label className='lb-tex' htmlFor="">
                                                        Код
                                                        <span>*</span>
                                                    </label>
                                                    <select className={formErrors.level ? 'error-border' : ''} name='level' id='level'  value={formData.level} onChange={handleChange}>
                                                        <option value="">{t("-Выбрать-")}</option>
                                                        <option value="A1">{t("A1")}</option>
                                                        <option value="A2">{t("A2")}</option>
                                                        <option value="B1">{t("B1")}</option>
                                                        <option value="B2">{t("B2")}</option>
                                                        <option value="C1">{t("C1")}</option>
                                                        <option value="C2">{t("C2")}</option>
                                                    </select>
                                                    {formErrors.level && <div className="error-message">{t("Обязательно для заполнения")}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='location-middle'>
                                        <li>
                                            <button onClick={handleSubmit} >{t("Добавить")}</button>
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

export default Window1;
