import React, { useState, useRef } from 'react';
import vlang from './Vlang.module.css';
import Window1 from '../../popup/Window1/Window1';
import { useTranslation } from 'react-i18next';

const Vlang = ({ formData, setFormData, formErrors }) => {
  const { t } = useTranslation();
  const [isWindow1Open, setIsWindow1Open] = useState(false);
  const [VlangMembers, setVlangMembers] = useState([]);
  const [vemberToEdit, setVemberToEdit] = useState(null);
  const inputRef = useRef(null);

  const toggleWindow = () => {
    setIsWindow1Open(!isWindow1Open);
  };

  const closeWindow = () => {
    setIsWindow1Open(false);
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
    closeWindow();
  };

  const editVlangMember = (index) => {
    setVemberToEdit(index);
    setIsWindow1Open(true);
  };

  const deleteVlangMember = (index) => {
    const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
    setVlangMembers(updatedVembers);
  };

  return (
    <div className='container'>
      <div className={vlang.vlang__row}>
        <h4>{t("Владение языками")}</h4>
        <div className={vlang.group__flex}>
          <div className={vlang.form_groupp}>
            <label>{t("Знание государственного языка")}</label>
            <select
              value={formData.lang}
              className={formErrors.lang ? 'error-border' : ''}
              onChange={(e) => setFormData({ ...formData, lang: e.target.value })}
            >
              <option value="">{t("-Выбрать-")}</option>
              <option value="Свободно владею">{t("Свободно владею")}</option>
              <option value="Могу объяснить">{t("Могу объяснить")}</option>
              <option value="Не владею">{t("Не владею")}</option>
            </select>
            {formErrors.workPlace && <div className="error-message">{formErrors.lang}</div>}
          </div>
        </div>
      </div>
      <div className={vlang.family}>
        <div className={vlang.family__card}>
          <div className={vlang.family__div}>{t("Действие")}</div>
          <table className={vlang.table_bordered}>
            <thead>
              <tr>
                <th className={vlang.lb_text}>{t("Тематика")}</th>
                <th className={vlang.lb_text}>{t("Дата")}</th>
                <th className={vlang.lb_text}>{t("Описание")}</th>
                <th className={vlang.lb_text}>{t("Действие")}</th>
              </tr>
            </thead>
            <tbody className={vlang.family__button}>
              {VlangMembers.map((vember, index) => (
                <tr key={index} className={vlang.family__tr}>
                  <td className={vlang.family__td}>{vember.lang}</td>
                  <td className={vlang.family__td}>{vember.post}</td>
                  <td className={vlang.family__td}>{vember.level}</td>
                  <td className={vlang.family__td}>
                    <div className={vlang.family_edit_flex}>
                      <button className={vlang.family__edit} onClick={() => editVlangMember(index)}>
                        {t("Редактировать")}
                      </button>
                      <button className={vlang.family__delete} onClick={() => deleteVlangMember(index)}>
                        {t("Удалить")}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className={vlang.family__tr} id={vlang.vlangily__relationId}>
                <td>
                  <button className={vlang.family__open} onClick={toggleWindow}>
                    <svg className={vlang.family__open_svg} aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {isWindow1Open && <Window1 onClose={closeWindow} onAddVlangMember={addVlangMember} vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null} />}
      </div>
    </div>
  );
}

export default Vlang;
