"use client";
import React, { useState } from "react";
import { Candidate } from "../fakeData/candidate"; // Importez votre tableau de candidats

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    address: "",
    gender: "",
    nationality: "",
    available: true,
  });

  // Initialiser l'état des candidats avec les données importées
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

  return (
    <div className="border-bla mx-auto mt-10 max-w-xl rounded-lg border-2 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Add a New Candidate</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ pour le prénom */}
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="First Name"
            required
          />
        </div>

        {/* Champ pour le nom de famille */}
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Last Name"
            required
          />
        </div>

        {/* Champ pour le numéro de téléphone */}
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Champ pour l'email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            required
          />
        </div>

        {/* Champ pour l'adresse */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Address"
            required
          />
        </div>

        {/* Sélection du genre */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Champ pour la nationalité */}
        <div className="mb-4">
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nationality"
            required
          />
        </div>

        {/* Champ pour la disponibilité */}
        <div className="mb-4">
          <label htmlFor="available" className="block text-sm font-medium text-gray-700">
            Available
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
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateForm;
