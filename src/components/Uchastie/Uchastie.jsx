import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import uchastieStyles from './Uchastie.module.css';
import Window7 from '../../popup/Window7/Window7';

const Uchastie = () => {
    const { t } = useTranslation();

    const [isWindow7Open, setIsWindow7Open] = useState(false);
    const [VlangMembers, setVlangMembers] = useState([]);
    const [vemberToEdit, setVemberToEdit] = useState(null);

    const toggleWindow = () => {
        setIsWindow7Open(!isWindow7Open);
    };

    const closeWindow7 = () => {
        setIsWindow7Open(false);
        setVemberToEdit(null);
    };

    const addVlangMember = (newVember) => {
        if (vemberToEdit !== null) {
            const updatedVembers = VlangMembers.map((vember, index) =>
                index === vemberToEdit ? newVember : vember
            );
            setVlangMembers(updatedVembers);
            setVemberToEdit(null);
        } else {
            setVlangMembers([...VlangMembers, newVember]);
        }
        closeWindow7();
    };

    const editVlangMember = (index) => {
        setVemberToEdit(index);
        setIsWindow7Open(true);
    };

    const deleteVlangMember = (index) => {
        const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
        setVlangMembers(updatedVembers);
    };

    return (
        <div className='container'>

            <h4>{t("Участие в выборных органах")}</h4>

            <div className={uchastieStyles.family}>
                <div className={uchastieStyles.family__card}>
                    <div className={uchastieStyles.family__div}>{t("Действие")}</div>
                    <table className={uchastieStyles.table_bordered}>
                        <thead>
                            <tr>
                                <th className={uchastieStyles.lb_text} scope='col'>{t("Местонахождение выборного органа")}</th>
                                <th className={uchastieStyles.lb_text} scope='col'>{t("Название выборного органа")}</th>
                                <th className={uchastieStyles.lb_text} scope='col'>{t("В качестве кого избран")}</th>
                                <th className={uchastieStyles.lb_text} scope='col'>{t("Дата избрания")}</th>
                                <th className={uchastieStyles.lb_text} scope='col'>{t("Дата выбытия")}</th>
                            </tr>
                        </thead>
                        <tbody className={uchastieStyles.family__button}>
                            {VlangMembers.map((vember, index) => (
                                <tr key={index} className={uchastieStyles.family__tr}>
                                    <td className={uchastieStyles.family__td}>{vember.country}</td>
                                    <td className={uchastieStyles.family__td}>{vember.purpose}</td>
                                    <td className={uchastieStyles.family__td}>{vember.startDate}</td>
                                    <td className={uchastieStyles.family__td}>{vember.endDate}</td>
                                    <td className={uchastieStyles.family__td}>{vember.bont}</td>
                                    <td className={uchastieStyles.family__td}>
                                        <div className={uchastieStyles.family_edit_flex}>
                                            <button className={uchastieStyles.family__edit} onClick={() => editVlangMember(index)}>
                                                {t("Редактировать")}
                                            </button>
                                            <button className={uchastieStyles.family__delete} onClick={() => deleteVlangMember(index)}>
                                                {t("Удалить")}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr className={uchastieStyles.family__tr} id={uchastieStyles.vlangily__relationId}>
                                <td>
                                    <button className={uchastieStyles.family__open} onClick={toggleWindow}>
                                        <svg className={uchastieStyles.family__open_svg} aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor" d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {isWindow7Open && <Window7 onClose={closeWindow7} onAddVlangMember={addVlangMember} vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null} />}
        </div>
    )
}

export default Uchastie;
