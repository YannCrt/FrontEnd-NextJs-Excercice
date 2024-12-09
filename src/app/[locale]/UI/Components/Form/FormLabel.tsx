import React from 'react';
import {useTranslations} from 'next-intl';

type FormLabelProps = {      // L'étiquette à afficher
    name: string;         // Le nom du champ (pour l'input et le label) // Placeholder pour l'input
    type?: string;        // Le type de l'input (par défaut, 'text')
  };

const FormLabel: React.FC<FormLabelProps> = ({name, type = "text" }) => {
   
  const t = useTranslations('Form');

    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {t(name)}
        </label>
        <input
          type={type}
          id={t(name)}
          name={t(name)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={t(name)}
          required
        />
      </div>
    );
  }
  
  export default FormLabel;

