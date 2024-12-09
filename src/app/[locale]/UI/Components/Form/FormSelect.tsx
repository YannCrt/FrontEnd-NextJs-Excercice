import { useTranslations } from 'next-intl';
import React from 'react';

type FormLabelProps = {      
    name: string;
    nameselect : string;        
    type?: string; 
    options: string[]; 
  };

const FormSelect: React.FC<FormLabelProps> = ({name, type = "text", nameselect, options}) => {
  
  const t = useTranslations('Form');
    
  return (
      <div className="select">
        <label htmlFor={t(name)}>
          {t(name)}
        </label>
        <select
        id={t(name)}
        name={t(name)}
        required
      >
        <option value="">{t(nameselect)}</option>
        {options.map((option, index) => (
          <option key={index} value={t(option)}>
            {t(option)}
          </option>
        ))}
      </select>
      </div>
    );
  }
  
  export default FormSelect;