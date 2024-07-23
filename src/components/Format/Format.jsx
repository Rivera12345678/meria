import React, { useState } from 'react';
import format from './Format.module.css';
import Window2 from '../../popup/Window2/Window2';
import { useTranslation } from 'react-i18next';

const Format = () => {
  const { t } = useTranslation();
  const [isWindow2Open, setIsWindow2Open] = useState(false);
  const [VlangMembers, setVlangMembers] = useState([]);
  const [vemberToEdit, setVemberToEdit] = useState(null);

  const toggleWindow = () => {
    setIsWindow2Open(!isWindow2Open);
  };

  const closeWindow = () => {
    setIsWindow2Open(false);
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
    setIsWindow2Open(true);
  };

  const deleteVlangMember = (index) => {
    const updatedVembers = VlangMembers.filter((_, idx) => idx !== index);
    setVlangMembers(updatedVembers);
  };

  return (
    <div className='container'>
      <h4>{t("Образование")}</h4>
      <div className={format.family}>
        <div className={format.family__card}>
          <div className={format.family__div}>{t("Действие")}</div>
          <div className={format.table_bordered}>
            <table>
              <thead>
                <tr>
                  <th className={format.lb_text} scope='col'>{t("Степень образование")}</th>
                  <th className={format.lb_text} scope='col'>{t("Местонахождение")}</th>
                  <th className={format.lb_text} scope='col'>{t("Учебное заведение")}</th>
                  <th className={format.lb_text} scope='col'>{t("Специальность")}</th>
                  <th className={format.lb_text} scope='col'>{t("Направление")}</th>
                  <th className={format.lb_text} scope='col'>{t("Квалификация")}</th>
                  <th className={format.lb_text} scope='col'>{t("Год начало обучение")}</th>
                  <th className={format.lb_text} scope='col'>{t("Год оканчание обучения")}</th>
                  <th className={format.lb_text} scope='col'>{t("Серия документа")}</th>
                  <th className={format.lb_text} scope='col'>{t("Номер документа")}</th>
                  <th className={format.lb_text} scope='col'>{t("Дата выдачи")}</th>
                </tr>
              </thead>
              <tbody className={format.family__button}>
                {VlangMembers.map((vember, index) => (
                  <tr className={format.family__tr_active} key={index}>
                    <td className={format.tr_td_text}>{vember.degree}</td>
                    <td className={format.tr_td_text}>{vember.location}</td>
                    <td className={format.tr_td_text}>{vember.institution}</td>
                    <td className={format.tr_td_text}>{vember.specialty}</td>
                    <td className={format.tr_td_text}>{vember.direction}</td>
                    <td className={format.tr_td_text}>{vember.qualification}</td>
                    <td className={format.tr_td_text}>{vember.startYear}</td>
                    <td className={format.tr_td_text}>{vember.endYear}</td>
                    <td className={format.tr_td_text}>{vember.documentSeries}</td>
                    <td className={format.tr_td_text}>{vember.documentNumber}</td>
                    <td className={format.tr_td_text}>{vember.issueDate}</td>
                    <td className={format.family__td}>
                      <div className={format.family_edit_flex}>
                        <button className={format.family__edit} onClick={() => editVlangMember(index)}>
                          {t("Редактировать")}
                        </button>
                        <button className={format.family__delete} onClick={() => deleteVlangMember(index)}>
                          {t("Удалить")}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className={format.family__tr}>
                  <td >
                    <button className={format.family__open} onClick={toggleWindow}>
                      <svg
                        className="svg-inline--fa fa-plus fa-w-14"
                        aria-hidden="true"
                        data-fa-processed=""
                        data-prefix="fas"
                        data-icon="plus"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isWindow2Open && (
        <Window2
          onClose={closeWindow}
          onAddVlangMember={addVlangMember}
          vemberToEdit={vemberToEdit !== null ? VlangMembers[vemberToEdit] : null}
        />
      )}
    </div>
  );
};

export default Format;
