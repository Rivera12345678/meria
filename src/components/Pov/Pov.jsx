import React, { useState } from 'react';
import pov from './Pov.module.css';
import Window4 from '../../popup/Window4/Window4';
import { useTranslation } from 'react-i18next';

const Pov = () => {
  const { t } = useTranslation();
  const [isWindow4Open, setIsWindow4Open] = useState(false);
  const [VlangMembers, setVlangMembers] = useState([]);
  const [vemberToEdit, setVemberToEdit] = useState(null);

  const toggleWindow = () => {
    setIsWindow4Open(!isWindow4Open);
    setVemberToEdit(null); // Reset vemberToEdit when opening the window
  };

  const closeWindow4 = () => {
    setIsWindow4Open(false);
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
    closeWindow4();
  };

  const editVlangMember = (index) => {
    setVemberToEdit(index);
    setIsWindow4Open(true);
  };

  const deleteVlangMember = (index) => {
    const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
    setVlangMembers(updatedVembers);
  };

  return (
    <div className='container'>
      <h4>{t("Повышение квалификации")}</h4>
      <div className={pov.family}>
        <div className={pov.family__card}>
          <div className={pov.family__div}>{t("Действие")}</div>
          <table className={pov.table_bordered}>
            <thead>
              <tr>
                <th className={pov.lb_text} scope='col'>{t("Описание")}</th>
                <th className={pov.lb_text} scope='col'>{t("№ Сертификата")}</th>
                <th className={pov.lb_text} scope='col'>{t("Вид повышения квалификации")}</th>
                <th className={pov.lb_text} scope='col'>{t("Страна")}</th>
                <th className={pov.lb_text} scope='col'>{t("Местонахождения")}</th>
                <th className={pov.lb_text} scope='col'>{t("Начало обучения")}</th>
                <th className={pov.lb_text} scope='col'>{t("Конец обучения")}</th>
                <th className={pov.lb_text} scope='col'></th>
              </tr>
            </thead>
            <tbody className={pov.family__button}>
              {VlangMembers.map((vember, index) => (
                <tr key={index} className={pov.family__tr}>
                  <td className={pov.family__td}>{vember.description}</td>
                  <td className={pov.family__td}>{vember.certificateNumber}</td>
                  <td className={pov.family__td}>{vember.qualificationType}</td>
                  <td className={pov.family__td}>{vember.country}</td>
                  <td className={pov.family__td}>{vember.location}</td>
                  <td className={pov.family__td}>{vember.startDate}</td>
                  <td className={pov.family__td}>{vember.endDate}</td>
                  <td className={pov.family__td}>
                    <div className={pov.family_edit_flex}>
                      <button className={pov.family__edit} onClick={() => editVlangMember(index)}>
                        {t("Редактировать")}
                      </button>
                      <button className={pov.family__delete} onClick={() => deleteVlangMember(index)}>
                        {t("Удалить")}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className={pov.family__tr} id={pov.vlangily__relationId}>
                <td >
                  <button className={pov.family__open} onClick={toggleWindow}>
                    <svg className={pov.family__open_svg} aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {isWindow4Open && <Window4 onClose={closeWindow4} onAddVlangMember={addVlangMember} vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null} />}
    </div>
  )
}

export default Pov;
