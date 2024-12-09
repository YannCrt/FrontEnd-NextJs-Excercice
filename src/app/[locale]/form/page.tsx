"use client";

import React, { useState } from "react";
import { Candidate } from "../fakeData/candidate"; 
import {useTranslations} from 'next-intl';
import FormLabel from "../UI/Components/Form/FormLabel";
import TitleForm from "../UI/Components/Form/FormTitle";
import FormSelect from "../UI/Components/Form/FormSelect";
import FormSubmit from "../UI/Components/Form/FormSubmit";

const CandidateForm = () => {
  return (
    <div className="form-div">
      <TitleForm name="form" />
      <form>
      <FormLabel name="firstname"/>
      <FormLabel name="lastname"/>
      <FormLabel name="phone"/>
      <FormLabel name="email"/>
      <FormLabel name="adress"/>
      <FormSelect name="selectgender" nameselect="selectgender" options={['male', 'female', 'other']}/>
      <FormLabel name="nationality"/>
      <FormLabel name="available"/>
      <FormSubmit name="submit"/>
      </form>
    </div>
  );
};

export default CandidateForm;
