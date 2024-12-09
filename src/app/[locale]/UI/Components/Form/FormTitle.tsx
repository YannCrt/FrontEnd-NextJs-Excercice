import { useTranslations } from 'use-intl';
import React from 'react';

type FormTitleProps = {
    name : string;
};

const FormtTitle : React.FC<FormTitleProps> = ({name}) => {
  
  const t = useTranslations('NavBar');  

  return (
    <h2 className="title-form">{t(name)}</h2>
  )
}

export default FormtTitle;