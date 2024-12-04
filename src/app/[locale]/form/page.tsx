"use client";
import React, { useState } from "react";
import { Candidate } from "../fakeData/candidate"; // Importez votre tableau de candidats
import {useTranslations} from 'next-intl';

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    address: "",
    gender: "",
    nationality: "",
    available: true
  });
  
  const [candidates, setCandidates] = useState(Candidate);

  // Gestion des changements dans le formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Calculer l'ID pour le nouveau candidat en prenant le dernier ID + 1
    const lastId = candidates.length > 0 ? candidates[candidates.length - 1].id : 0;
    const newCandidate = {
      id: lastId + 1, // Générer un ID unique
      ...formData,
    };

    // Ajouter le nouveau candidat au tableau de candidats
    setCandidates([...candidates, newCandidate]);

    // Réinitialisation du formulaire après soumission
    setFormData({
      firstname: "",
      lastname: "",
      number: "",
      email: "",
      address: "",
      gender: "",
      nationality: "",
      available: true,
    });

    console.log("Nouveau candidat ajouté:", newCandidate);
  };
  const t = useTranslations('Form');
  const r = useTranslations('NavBar');
  
  return (
    <div className="border-bla mx-auto mt-10 max-w-xl rounded-lg border-2 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">{r('form')}</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ pour le prénom */}
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
          {t('firstname')}
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('firstname')}
            required
          />
        </div>

        {/* Champ pour le nom de famille */}
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
          {t('lastname')}
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder= {t('lastname')}
            required
          />
        </div>

        {/* Champ pour le numéro de téléphone */}
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
          {t('phone')}
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('phone')}
            required
          />
        </div>

        {/* Champ pour l'email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder= {t('email')}
            required
          />
        </div>

        {/* Champ pour l'adresse */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          {t('adress')}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('adress')}
            required
          />
        </div>

        {/* Sélection du genre */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          {t('adress')}
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">{t('selectgender')}</option>
            <option value="Male">{t('male')}</option>
            <option value="Female">{t('female')}</option>
            <option value="Other">{t('other')}</option>
          </select>
        </div>

        {/* Champ pour la nationalité */}
        <div className="mb-4">
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
          {t('nationality')}
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('nationality')}
            required
          />
        </div>

        {/* Champ pour la disponibilité */}
        <div className="mb-4">
          <label htmlFor="available" className="block text-sm font-medium text-gray-700">
          {t('available')}
          </label>
          <input
            type="checkbox"
            id="available"
            name="available"
            checked={formData.available}
            onChange={() =>
              setFormData({ ...formData, available: !formData.available })
            }
            className="mt-1 block"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="mt-6">  
          <button
            type="submit"
            className="w-full rounded-md bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateForm;
