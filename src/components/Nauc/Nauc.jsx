import React, { useState } from 'react';
import nauc from './Nauc.module.css';
import Window3 from '../../popup/Window3/Window3';
import { useTranslation } from 'react-i18next';

const Nauc = () => {
  const { t } = useTranslation();
  const [isWindow3Open, setIsWindow3Open] = useState(false);
  const [VlangMembers, setVlangMembers] = useState([]);
  const [vemberToEdit, setVemberToEdit] = useState(null);

  const toggleWindow = () => {
    setIsWindow3Open(!isWindow3Open);
  };

  const closeWindow3 = () => {
    setIsWindow3Open(false);
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
    closeWindow3();
  };

  const editVlangMember = (index) => {
    setVemberToEdit(index);
    setIsWindow3Open(true);
  };

  const deleteVlangMember = (index) => {
    const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
    setVlangMembers(updatedVembers);
  };

  return (
    <div className='container'>
      <h4>{t("Научные труды")}</h4>
      <div className={nauc.family}>
        <div className={nauc.family__card}>
          <div className={nauc.family__div}>{t("Действие")}</div>
          <table className={nauc.table_bordered}>
            <thead>
              <tr>
                <th className={nauc.lb_text} scope='col'>{t("Тематика")}</th>
                <th className={nauc.lb_text} scope='col'>{t("Дата")}</th>
                <th className={nauc.lb_text} scope='col'>{t("Описание")}</th>
              </tr>
            </thead>
            <tbody className={nauc.family__button}>
              {VlangMembers.map((vember, index) => (
                <tr key={index} className={nauc.family__tr}>
                  <td className={nauc.family__td}>{vember.topic}</td>
                  <td className={nauc.family__td}>{vember.date}</td>
                  <td className={nauc.family__td}>{vember.description}</td>
                  <td className={nauc.family__td}>
                    <div className={nauc.family_edit_flex}>
                      <button className={nauc.family__edit} onClick={() => editVlangMember(index)}>
                        {t("Редактировать")}
                      </button>
                      <button className={nauc.family__delete} onClick={() => deleteVlangMember(index)}>
                        {t("Удалить")}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className={nauc.family__tr} id={nauc.vlangily__relationId}>
                <td  colSpan="4">
                  <button className={nauc.family__open} onClick={toggleWindow}>
                    <svg className={nauc.family__open_svg} aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {isWindow3Open && <Window3 onClose={closeWindow3} onAddVlangMember={addVlangMember} vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null} />}
    </div>
  );
}

export default Nauc;
