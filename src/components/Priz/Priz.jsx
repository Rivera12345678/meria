import React, { useState } from 'react';
import priz from './Priz.module.css'; 
import Window8 from '../../popup/Window8/Window8';
import { useTranslation } from 'react-i18next';

const Priz = () => {
    const { t } = useTranslation();
    const [isWindow8Open, setIsWindow8Open] = useState(false);
    const [VlangMembers, setVlangMembers] = useState([]);
    const [vemberToEdit, setVemberToEdit] = useState(null);

    const toggleWindow = () => {
        setIsWindow8Open(!isWindow8Open);
        setVemberToEdit(null); 
    };

    const closeWindow8 = () => {
        setIsWindow8Open(false);
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
        closeWindow8();
    };

    const editVlangMember = (index) => {
        setVemberToEdit(index);
        setIsWindow8Open(true); 
    };

    const deleteVlangMember = (index) => {
        const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
        setVlangMembers(updatedVembers);
    };

    return (
        <div className='container'>
            <h4>{t("Награды")}</h4>
            <div className={priz.family}>
                <div className={priz.family__card}>
                    <div className={priz.family__div}>{t("Действие")}</div>
                    <div className={priz.table_bordered}>
                        <table className={priz.table}>
                            <thead>
                                <tr>
                                    <th className={priz.lb_text} scope='col'>{t("Тип награды")}</th>
                                    <th className={priz.lb_text} scope='col'>{t("Наименование награды")}</th>
                                    <th className={priz.lb_text} scope='col'>{t("Дата ознакомления")}</th>
                                    <th className={priz.lb_text} scope='col'>{t("Дата награждения")}</th>
                                    <th className={priz.lb_text} scope='col'>{t("Указ/Распоряжение/Приказ")}</th>
                                    <th className={priz.lb_text} scope='col'>{t("Кем подписано награда")}</th>
                                    <th className={priz.lb_text} scope='col'>{t("Описание награды")}</th>
                                </tr>
                            </thead>
                            <tbody className={priz.family__button}>
              {VlangMembers.map((vember, index) => (
                <tr key={index} className={priz.family__tr}>
                  <td className={priz.family__td}>{vember.awardName}</td>
                  <td className={priz.family__td}>{vember.awardType}</td>
                  <td className={priz.family__td}>{vember.reviewDate}</td>
                  <td className={priz.family__td}>{vember.awardDate}</td>
                  <td className={priz.family__td}>{vember.orderOrDecree}</td>
                  <td className={priz.family__td}>{vember.signedBy}</td>
                  <td className={priz.family__td}>{vember.awardDescription}</td>
                  <td className={priz.family__td}>
                    <div className={priz.family_edit_flex}>
                      <button className={priz.family__edit} onClick={() => editVlangMember(index)}>
                        {t("Редактировать")}
                      </button>
                      <button className={priz.family__delete} onClick={() => deleteVlangMember(index)}>
                        {t("Удалить")}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className={priz.family__tr} id={priz.vlangily__relationId}>
                <td className={priz.tdshka}  >
                  <button className={priz.family__open} onClick={toggleWindow}>
                    <svg className={priz.family__open_svg} aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
                          
                        </table>
                    </div>
                </div>
            </div>
            {isWindow8Open && <Window8 onClose={closeWindow8} onAddVlangMember={addVlangMember} vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null} />}
        </div>
    );
};

export default Priz;
