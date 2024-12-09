import { useTranslations } from 'next-intl';
import React from 'react';

type FormLabelProps = {      
    name: string;
  };

  
const FormSubmit: React.FC<FormLabelProps> = ({name}) => {
  
    const t = useTranslations('Form');
      
    return (
        <div className="btn-form">
          <button type="submit" className="btn-form">
            {t(name)}
          </button>
        </div>
      );
    }
    
    export default FormSubmit;