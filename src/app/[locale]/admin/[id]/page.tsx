"use client";

import React from "react";
import { Candidate } from "../../fakeData/candidate";
import { Button } from "antd";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation"; // Importation de useRouter
import { useLocale } from 'next-intl'; // Importation de useLocale pour récupérer la locale actuelle

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

  const t = useTranslations('Form');
  const r = useTranslations('Id');
  const router = useRouter();
  const locale = useLocale();

  return (
    <div className="bg-gray-100 flex flex-col items-center p-10">
      <div className="w-max max-w-lg rounded-lg bg-white p-6 shadow-lg mt-40">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          {r('details')}
        </h3>
        <ul className="space-y-2">
          <li className="text-lg">
            <strong className="text-gray-700">ID:</strong> {candidate.id}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">{t('lastname')}:</strong> {candidate.lastname}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">{t('firstname')}:</strong>{" "}
            {candidate.firstname}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">{t('phone')}:</strong>{" "}
            {candidate.number}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">{t('email')}:</strong> {candidate.email}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">{t('adress')}:</strong>{" "}
            {candidate.address}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">{t('gender')}:</strong> {candidate.gender}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">{t('nationality')}:</strong>{" "}
            {candidate.nationality}
          </li>
          <li className="text-lg">
            <strong className="text-gray-700">{t('available')}:</strong>{" "}
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
        {/* Utilise la locale pour construire l'URL dynamique */}
        <Button
          className="rounded-lg bg-slate-800 px-4 py-2 mt-44"
          onClick={() => router.push(`/${locale}/admin`)} // Utiliser la locale pour retourner à la page admin
        >
          Retour
        </Button>
      </div>
    </div>
  );
};

export default CandidateDetails;
