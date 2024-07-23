

import React from 'react'
import cool from './Cool.module.css'
import Window9 from '../../popup/Window9/Window9'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
const Cool = () => {
  const { t } = useTranslation();
  const [isWindow9Open, setIsWindow9Open] = useState(false);
  const [VlangMembers, setVlangMembers] = useState([]);
  const [vemberToEdit, setVemberToEdit] = useState(null);

  const toggleWindow = () => {
      setIsWindow9Open(!isWindow9Open);
      setVemberToEdit(null); 
  };

  const closeWindow9 = () => {
      setIsWindow9Open(false);
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
      closeWindow9();
  };

  const editVlangMember = (index) => {
      setVemberToEdit(index);
      setIsWindow9Open(true); 
  };

  const deleteVlangMember = (index) => {
      const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
      setVlangMembers(updatedVembers);
  };
  return (
    <div className='container'>

    <h4>{t("Классный чин")}</h4>
    
    <div className={cool.family}>
        <div className={cool.family__card}>
          <div className={cool.family__div}>{t("Действие")}</div>
          <table className={cool.table_bordered}>
            <thead>
              <tr>
                <th className={cool.lb_text} scope='col'>{t("Тип классного чина")}</th>
                <th className={cool.lb_text} scope='col'>{t("№ Приказа")}</th>
                <th className={cool.lb_text} scope='col'>{t("Дата ознакомления")}</th>
                <th className={cool.lb_text} scope='col'>{t("Дата приказа")}</th>
                <th className={cool.lb_text} scope='col'>{t("Кем подписано награда")}</th>
                <th className={cool.lb_text} scope='col'>{t("Основания")}</th>
              </tr>
            </thead>
            <tbody className={cool.family__button}>
                                {VlangMembers.map((vember, index) => (
                                    <tr key={index} className={cool.family__tr}>
                                        <td className={cool.family__td}>{vember.awardType}</td>
                                        <td className={cool.family__td}>{vember.awardName}</td>
                                        <td className={cool.family__td}>{vember.reviewDate}</td>
                                        <td className={cool.family__td}>{vember.awardDate}</td>
                                        <td className={cool.family__td}>{vember.orderOrDecree}</td>
                                        <td className={cool.family__td}>{vember.signedBy}</td>
                                        <td className={cool.family__td}>{vember.awardDescription}</td>
                                        <td className={cool.family__td}>
                                            <div className={cool.family_edit_flex}>
                                                <button className={cool.family__edit} onClick={() => editVlangMember(index)}>
                                                    {t("Редактировать")}
                                                </button>
                                                <button className={cool.family__delete} onClick={() => deleteVlangMember(index)}>
                                                    {t("Удалить")}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                <tr className={cool.family__tr}>
                                    <td colSpan="8">
                                        <button className={cool.family__open} onClick={toggleWindow}>
                                            <svg className={cool.family__open_svg} aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"></path>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
          </table>
        </div>
      </div>
      {isWindow9Open && <Window9 onClose={closeWindow9} onAddVlangMember={addVlangMember} vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null} />}    
</div>
  )
}

export default Cool