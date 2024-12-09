import React from 'react';
import {useTranslations} from 'next-intl';

type FormLabelProps = {      // L'étiquette à afficher
    name: string;         // Le nom du champ (pour l'input et le label) // Placeholder pour l'input
    type?: string;        // Le type de l'input (par défaut, 'text')
  };

const FormLabel: React.FC<FormLabelProps> = ({name, type = "text" }) => {
   
  const t = useTranslations('Form');

    return (
      <div className="label-div mb-4">
        <label htmlFor={name}>
          {t(name)}
        </label>
        <input
          type={type}
          id={t(name)}
          name={t(name)}
          className=""
          placeholder={t(name)}
          required
        />
      </div>
    );
  }
  
  export default FormLabel;

