import React, { useState, useEffect } from 'react';
import buttonStyles from './Button.module.css';
import { useTranslation } from 'react-i18next';


const Button = ({ onClick }) => {
    const { t } = useTranslation();
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = () => {
        setIsValid();
    };
    return (
        <div className='container'>
            <div className={buttonStyles.button__center}>
                <div className={buttonStyles.Button__div}>
                    <button onClick={onClick} type='button' className='default-btn next-step' data-toggle="modal" data-target="#exampleModalCenter" id='send-btn'>{t("Отправить")}</button>
                </div>
            </div>
        </div>
    );
};

export default Button;


