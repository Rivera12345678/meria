
import React, { useState } from 'react'
import Main from '../components/Main/Main'
import Contact from '../components/Contact/Contact'
import Army from '../components/Army/Army'
import Vlang from '../components/Vlang/Vlang'
import Format from '../components/Format/Format'
import Nauc from '../components/Nauc/Nauc'
import Pov from '../components/Pov/Pov'
import Fam from "../components/Family/Fam"
import Kval from '../components/Kval/Kval'
import Granica from '../components/Granica/Granica'
import Uchastie from '../components/Uchastie/Uchastie'
import Priz from '../components/Priz/Priz'
import Cool from '../components/Cool/Cool'
import Button from '../components/Button/Button'
import Kvalik from '../components/Kvalik/Kvalik'
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const [mainFormError, setMainFormErrors] = useState({
    relation: "",
    birthDate: "",
    lastName: "",
    firstName: "",
    middleName: "",
    birthPlace: "",
    residence: "",
    workPlace: "",
    position: "",
    email:"",
    bilet: "",
    mobilePhone: "",
    homePhone: "",
    street: "",
    houseNumber: "",
    apartmentNumber: "",
    ticket: "",
    specialty: "",
    composition: "",
    rank: "",
    accounting: "",

  
  
  });

  const [mainForm, setMainForm] = useState({
    relation: "",
    birthDate: "",
    lastName: "",
    firstName: "",
    middleName: "",
    birthPlace: "",
    residence: "",
    workPlace: "",
    position: "",
    email:"",
    bilet: "",
    mobilePhone: "",
    homePhone: "",
    region: "",
    street: "",
    houseNumber: "",
    apartmentNumber: "",
    ticket: "",
    specialty: "",
    composition: "",
    rank: "",
    accounting: "",
    lang: "",
   
   
  });
  const validateForm = () => {
    let valid = true;
    let newFormErrors = {
      relation: "",
      birthDate: "",
      lastName: "",
      firstName: "",
      middleName: "",
      birthPlace: "",
      residence: "",
      workPlace: "",
      position: "",
      email:"",
      bilet: "",
      mobilePhone: "",
      homePhone: "",
      region: "",
      street: "",
      houseNumber: "",
      apartmentNumber: "",
      ticket: "",
      specialty: "",
      rank: "",
      accounting: "",
      lang: "",
    };

    if (mainForm.relation.trim() === "") {
      newFormErrors.relation = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.lastName.trim() === "") {
      newFormErrors.lastName = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.firstName.trim() === "") {
      newFormErrors.firstName = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.middleName.trim() === "") {
      newFormErrors.middleName = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.email.trim() === "") {
      newFormErrors.email = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.workPlace.trim() === "") {
      newFormErrors.workPlace = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.bilet.trim() === "") {
      newFormErrors.bilet = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.mobilePhone.trim() === "") {
      newFormErrors.mobilePhone = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.homePhone.trim() === "") {
      newFormErrors.homePhone = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.region.trim() === "") {
      newFormErrors.region = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.street.trim() === "") {
      newFormErrors.street = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.houseNumber.trim() === "") {
      newFormErrors.houseNumber = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.apartmentNumber.trim() === "") {
      newFormErrors.apartmentNumber = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.ticket.trim() === "") {
      newFormErrors.ticket = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.specialty.trim() === "") {
      newFormErrors.specialty = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.composition.trim() === "") {
      newFormErrors.composition = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.rank.trim() === "") {
      newFormErrors.rank = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.accounting.trim() === "") {
      newFormErrors.accounting = t("Это поле обязательно для заполнения");
      valid = false;
    }
    if (mainForm.lang.trim() === "") {
      newFormErrors.lang = t("Это поле обязательно для заполнения");
      valid = false;
    }
    setMainFormErrors(newFormErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm() ) {
      const newMember = {
        ...mainForm,
        relation: date,
        birthDate: date,
        lastName: date,
        firstName: date,
        middleName: date,
        birthPlace: date,
        residence: date,
        workPlace: date,
        position: date,
        bilet: date,
        mobilePhone: date,
        homePhone: date,
        region: date,
        street: date,
        houseNumber: date,
        apartmentNumber: date,
        ticket: date,
        specialty: date,
        composition: date,
        rank: date,
        accounting: date,
        lang:date,
        
      };

      setMainForm({
        relation: "",
        birthDate: "",
        lastName: "",
        firstName: "",
        middleName: "",
        birthPlace: "",
        residence: "",
        workPlace: "",
        position: "",
        bilet: "",
        mobilePhone: "",
        homePhone: "",
        region: "",
        street: "",
        houseNumber: "",
        apartmentNumber: "",
        ticket: "",
        specialty: "",
        composition: "",
        rank: "",
        accounting: "",
        lang: "",
        
      });

    }
  };

  return (
    <div >
      <Main formData={mainForm} setFormData={setMainForm} formErrors={mainFormError} setFormErrors={setMainFormErrors} />
      <Contact formData={mainForm}  setFormData={setMainForm} formErrors={mainFormError}  setFormErrors={setMainFormErrors} />
      <Fam />
      <Army  formData={mainForm}  setFormData={setMainForm} formErrors={mainFormError}  setFormErrors={setMainFormErrors}/>
      <Vlang formData={mainForm}  setFormData={setMainForm} formErrors={mainFormError}  setFormErrors={setMainFormErrors} />
      <Format />
      <Nauc />
      <Pov />
      <Kval />
      <Kvalik formData={mainForm}  setFormData={setMainForm} formErrors={mainFormError}  setFormErrors={setMainFormErrors} />
      <Granica formData={mainForm}  setFormData={setMainForm} formErrors={mainFormError}  setFormErrors={setMainFormErrors}/>
      <Uchastie />
      <Priz />
      <Cool />
      <Button onClick={handleSubmit} />
    </div>
  )
}

export default HomePage