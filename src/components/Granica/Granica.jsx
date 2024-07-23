import React, { useState } from 'react';
import granica from './Granica.module.css';
import Window6 from '../../popup/Window6/Window6';
import { useTranslation } from 'react-i18next';

const Granica = ({ formData, setFormData, formErrors }) => {
  const { t } = useTranslation();

  const [isWindow6Open, setIsWindow6Open] = useState(false);
  const [VlangMembers, setVlangMembers] = useState([]);
  const [vemberToEdit, setVemberToEdit] = useState(null);

  const toggleWindow = () => {
    setIsWindow6Open(!isWindow6Open);
  };

  const closeWindow6 = () => {
    setIsWindow6Open(false);
    setVemberToEdit(null);
  };

  const onAddVlangMember = (newVember) => {
    if (vemberToEdit !== null) {
      const updatedVembers = VlangMembers.map((vember, index) =>
        index === vemberToEdit ? newVember : vember
      );
      setVlangMembers(updatedVembers);
      setVemberToEdit(null);
    } else {
      setVlangMembers([...VlangMembers, newVember]);
    }
    closeWindow6();
  };

  const editVlangMember = (index) => {
    setVemberToEdit(index);
    setIsWindow6Open(true);
  };

  const deleteVlangMember = (index) => {
    const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
    setVlangMembers(updatedVembers);
  };

  return (
    <div className='container'>
      <h4>{t("Перебывание за границей")}</h4>
      <div className={granica.family}>
        <div className={granica.family__card}>
          <div className={granica.family__div}>{t("Действие")}</div>
          <table className={granica.table_bordered}>
            <thead>
              <tr>
                <th className={granica.lb_text} scope='col'>{t("Страна")}</th>
                <th className={granica.lb_text} scope='col'>{t("Цель командировки")}</th>
                <th className={granica.lb_text} scope='col'>{t("Дата начала командировки")}</th>
                <th className={granica.lb_text} scope='col'>{t("Дата окончания командировки")}</th>
                <th className={granica.lb_text} scope='col'>{t("Действия")}</th>
              </tr>
            </thead>
            <tbody className={granica.family__button}>
              {VlangMembers.map((vember, index) => (
                <tr key={index} className={granica.family__tr}>
                  <td className={granica.family__td}>{vember.country}</td>
                  <td className={granica.family__td}>{vember.purpose}</td>
                  <td className={granica.family__td}>{vember.startDate}</td>
                  <td className={granica.family__td}>{vember.endDate}</td>
                  <td className={granica.family__td}>
                    <div className={granica.family_edit_flex}>
                      <button className={granica.family__edit} onClick={() => editVlangMember(index)}>
                        {t("Редактировать")}
                      </button>
                      <button className={granica.family__delete} onClick={() => deleteVlangMember(index)}>
                        {t("Удалить")}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className={granica.family__tr}>
                <td colSpan="5">
                  <button className={granica.family__open} onClick={toggleWindow}>
                    <svg className={granica.family__open_svg} aria-hidden="true" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={granica.form__groupt}>
        <div className={granica.form_groupp}>
          <label>{t("В какой партии состоите")}</label>
          <input className={formErrors.relation ? "error_border" : ''} type="text" placeholder='' value={formData.relation} onChange={(e) => setFormData({ ...formData, relation: e.target.value })} />
          {formErrors.relation && <div className="error-message">{formErrors.relation}</div>}
        </div>
      </div>
      {isWindow6Open && <Window6 onClose={closeWindow6} onAddVlangMember={onAddVlangMember} vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null} />}
    </div>
  );
}

export default Granica;
