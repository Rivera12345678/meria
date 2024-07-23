import React, { useState } from 'react';
import Fam from "./Fam.module.css";
import Window from '../../popup/Window/Window';
import { useTranslation } from 'react-i18next';

const Family = () => {
  const { t } = useTranslation();
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const toggleWindow = () => {
    setIsWindowOpen(!isWindowOpen);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
    setMemberToEdit(null);
  };

  const addFamilyMember = (newMember) => {
    if (memberToEdit !== null) {
      const updatedMembers = familyMembers.map((member, index) =>
        index === memberToEdit ? newMember : member
      );
      setFamilyMembers(updatedMembers);
      setMemberToEdit(null);
    } else {
      setFamilyMembers([...familyMembers, newMember]);
    }
    closeWindow();
  };

  const editFamilyMember = (index) => {
    setMemberToEdit(index);
    setIsWindowOpen(true);
  };

  const deleteFamilyMember = (index) => {
    const updatedMembers = familyMembers.filter((_, idx) => idx !== index);
    setFamilyMembers(updatedMembers);
  };

  return (
    <div className='container'>
      <div className={Fam.row}>
        <h4>{t("Родственники")}</h4>
        <div className={Fam.family}>
          <div className={Fam.family__card}>
            <div className={Fam.family__div}>{t("Действие")}</div>
            <table className={Fam.table_bordered}>
              <thead>
                <tr>
                  <th className={Fam.lb_text} scope='col'>{t("Степень родства")}</th>
                  <th className={Fam.lb_text} scope='col'>{t("Фамилия")}</th>
                  <th className={Fam.lb_text} scope='col'>{t("Имя")}</th>
                  <th className={Fam.lb_text} scope='col'>{t("Отчество")}</th>
                  <th className={Fam.lb_text} scope='col'>{t("Дата рождения")}</th>
                  <th className={Fam.lb_text} scope='col'>{t("Место рождения")}</th>
                  <th className={Fam.lb_text} scope='col'>{t("Место жительства")}</th>
                  <th className={Fam.lb_text} scope='col'>{t("Место работы")}</th>
                  <th className={Fam.lb_text} scope='col'>{t("Должность")}</th>
                </tr>
              </thead>
              <tbody className={Fam.family__button}>
                {familyMembers.map((member, index) => (
                  <tr key={index} className={Fam.family__tr}>
                    <td className={Fam.family__td}>{t(member.relation)}</td>
                    <td className={Fam.family__td}>{member.lastName}</td>
                    <td className={Fam.family__td}>{member.firstName}</td>
                    <td className={Fam.family__td}>{member.middleName}</td>
                    <td className={Fam.family__td}>{member.birthDate?.toLocaleDateString()}</td>
                    <td className={Fam.family__td}>{member.birthPlace}</td>
                    <td className={Fam.family__td}>{member.residence}</td>
                    <td className={Fam.family__td}>{member.workPlace}</td>
                    <td className={Fam.family__td}>{member.position}</td>
                    <td className={Fam.family__td}>
                      <div className={Fam.family_edit_flex}>
                      <button className={Fam.family__edit} onClick={() => editFamilyMember(index)}>
                        {t("Редактировать")}
                      </button>
                      <button className={Fam.family__delete} onClick={() => deleteFamilyMember(index)}>
                        {t("Удалить")}
                      </button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className={Fam.family__tr} id={Fam.Family__relationId}>
                  <td >
                    <button className={Fam.family__open} onClick={toggleWindow}>
                      <svg className={Fam.family__svg} aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
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
      {isWindowOpen && <Window onClose={closeWindow} onAddFamilyMember={addFamilyMember} memberToEdit={memberToEdit !== null ? familyMembers[memberToEdit] : null} />}
    </div>
  );
};

export default Family;
