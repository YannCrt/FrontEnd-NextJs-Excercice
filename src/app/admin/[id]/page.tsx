  "use client";
  import React from "react";
  import { Candidate } from "../../fakeData/candidate";
  import { Button } from "antd";

  interface CandidateDetailsProps {
    params: { id: string }; // Récupère les paramètres de l'URL
  }

  const CandidateDetails = ({ params }: CandidateDetailsProps) => {
    const { id } = params;

    // Trouver le candidat correspondant
    const candidate = Candidate.find((c) => c.id === parseInt(id, 10));

    if (!candidate) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <p className="text-xl font-semibold text-red-500">
            Candidat introuvable
          </p>
        </div>
      );
    }

    return (
          <div className="bg-gray-100 flex flex-col items-center p-10">
      <div className="w-max max-w-lg rounded-lg bg-white p-6 shadow-lg mt-40">
        <h3 className="text-2xl font-semibold text-gray-800">
          Détails du Candidat
        </h3>
        <ul className="space-y-2">
          <li className="text-lg">
            <strong className="text-gray-700">ID:</strong> {candidate.id}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">Nom:</strong> {candidate.lastname}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">Prénom:</strong>{" "}
            {candidate.firstname}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">Numéro:</strong>{" "}
            {candidate.number}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">Email:</strong> {candidate.email}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">Adresse:</strong>{" "}
            {candidate.address}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">Genre:</strong> {candidate.gender}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">Nationalité:</strong>{" "}
            {candidate.nationality}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">Disponible:</strong>{" "}
            <span
              className={
                candidate.available ? "text-green-500" : "text-red-500"
              }
            >
              {candidate.available ? "Oui" : "Non"}
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-start mt-6">
        <Button
          className="rounded-lg bg-slate-800 px-4 py-2 mt-44"
          onClick={() => (window.location.href = "/admin")}
        >
          Retour
        </Button>
      </div>
    </div>
    );
  };

  export default CandidateDetails;
