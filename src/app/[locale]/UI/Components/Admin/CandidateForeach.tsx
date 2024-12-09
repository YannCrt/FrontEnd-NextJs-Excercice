import { useLocale, useTranslations } from 'next-intl';
import { Candidate } from "../../../fakeData/candidate";
import React from 'react'
import Link from 'next/link';
import { Button } from 'antd';

type CandidateForeachProps = {
  onViewCandidate: (id: number) => void;
};

function CandidateForeach({onViewCandidate}: CandidateForeachProps) {
  const t = useTranslations("Admin");
  const locale = useLocale();
  return (
    <ul className='ul-admin'>
    {Candidate.map((candidate) => (
      <li className='li-admin'
        key={candidate.id}>
        <span>
          {candidate.firstname} {candidate.lastname}
        </span>
        
        <Button
            className="Button-Admin"
            onClick={() => onViewCandidate(candidate.id)}
          >
            {t("read")}
          </Button>
      </li>
    ))}
  </ul>
  )
}

export default CandidateForeach