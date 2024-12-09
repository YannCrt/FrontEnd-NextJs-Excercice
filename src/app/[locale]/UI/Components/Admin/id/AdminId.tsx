import { Candidate } from '@/app/[locale]/fakeData/candidate'; 
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react';

type AdminIdProps = {
  id: number; 
};

const AdminId: React.FC<AdminIdProps> = ({ id }) => {
  const t = useTranslations('Form'); 
  const r = useTranslations('Id'); 
  const router = useRouter(); 
  const locale = useLocale(); 

  const candidate = Candidate.find((c) => c.id === id);

  if (!candidate) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-red-500">Candidat introuvable</p>
      </div>
    );
  }

  return (
    <div className="div-id">
      <div className="div-id-2">
        <h3>
          {r('details')}
        </h3>
        <ul className="ul-id">
          <li>
            <strong>ID:</strong> {candidate.id}
          </li>
          <li>
            <strong>{t('lastname')}:</strong> {candidate.lastname}
          </li>
          <li>
            <strong>{t('firstname')}:</strong> {candidate.firstname}
          </li>
          <li>
            <strong>{t('phone')}:</strong> {candidate.number}
          </li>
          <li>
            <strong>{t('email')}:</strong> {candidate.email}
          </li>
          <li>
            <strong>{t('adress')}:</strong> {candidate.address}
          </li>
          <li>
            <strong>{t('gender')}:</strong> {candidate.gender}
          </li>
          <li>
            <strong>{t('nationality')}:</strong> {candidate.nationality}
          </li>
          <li>
            <strong>{t('available')}:</strong>
            <span className={candidate.available ? "text-green-500" : "text-red-500"}>
              {candidate.available ? " Oui" : " Non"}
            </span>
          </li>
        </ul>
      </div>
      <div className="div-btn-id">
        <button
          className="btn-id"
          onClick={() => router.push(`/${locale}/admin`)}
        >
          Retour
        </button>
      </div>
    </div>
  );
};

export default AdminId;
