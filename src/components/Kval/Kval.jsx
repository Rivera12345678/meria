import React, { useState } from 'react';
import kval from "./Kval.module.css";
import Window5 from '../../popup/Window5/Window5';
import { useTranslation } from 'react-i18next';

const Kval = () => {
  const { t } = useTranslation();
  const [isWindow5Open, setIsWindow5Open] = useState(false);
  const [VlangMembers, setVlangMembers] = useState([]);
  const [vemberToEdit, setVemberToEdit] = useState(null);

  const toggleWindow = () => {
    setIsWindow5Open(!isWindow5Open);
  };

  const closeWindow5 = () => {
    setIsWindow5Open(false);
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
    closeWindow5();
  };

  const editVlangMember = (index) => {
    setVemberToEdit(index);
    setIsWindow5Open(true);
  };

  const deleteVlangMember = (index) => {
    const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
    setVlangMembers(updatedVembers);
  };

  return (
    <div className='container'>
      <h4>{t("Работа с трудовой деятельностю")}</h4>
      <div className={kval.family}>
        <div className={kval.family__card}>
          <div className={kval.family__div}>{t("Действие")}</div>
          <div className={kval.table_bordered}>
            <table>
              <thead>
                <tr>
                  <th className={kval.lb_text} scope='col'>{t("Тип подразделения")}</th>
                  <th className={kval.lb_text} scope='col'>{t("Дата вступления")}</th>
                  <th className={kval.lb_text} scope='col'>{t("Дата ухода")}</th>
                  <th className={kval.lb_text} scope='col'>{t("Наименование учреждения")}</th>
                  <th className={kval.lb_text} scope='col'>{t("Адрес")}</th>
                  <th className={kval.lb_text} scope='col'>{t("Занимаемая должность")}</th>
                  <th className={kval.lb_text} scope='col'>{t("Работа по специальности")}</th>
                  <th className={kval.lb_text} scope='col'>{t("Работа по совместительству")}</th>
                  
                </tr>
              </thead>
              <tbody className={kval.family__button}>
                {VlangMembers.map((vember, index) => (
                  <tr key={index} className={kval.family__tr}>
                    <td className={kval.family__td}>{vember.country}</td>
                    <td className={kval.family__td}>{vember.startDate}</td>
                    <td className={kval.family__td}>{vember.endDate}</td>
                    <td className={kval.family__td}>{vember.qualificationType}</td>
                    <td className={kval.family__td}>{vember.location}</td>
                    <td className={kval.family__td}>{vember.description}</td>
                    <td className={kval.family__td}>{vember.isSpecialtyChecked }</td>
                    <td className={kval.family__td}>{vember.isConcurrentChecked }</td>
                    <td className={kval.family__td}>
                      <div className={kval.family_edit_flex}>
                        <button className={kval.family__edit} onClick={() => editVlangMember(index)}>
                          {t("Редактировать")}
                        </button>
                        <button className={kval.family__delete} onClick={() => deleteVlangMember(index)}>
                          {t("Удалить")}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className={kval.family__tr}>
                  <td >
                    <button className={kval.family__open} onClick={toggleWindow}>
                      <svg className={kval.family__open_svg} aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
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
      {isWindow5Open && <Window5 onClose={closeWindow5} onAddVlangMember={addVlangMember} vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null} />}
    </div>
  );
}

export default Kval;
