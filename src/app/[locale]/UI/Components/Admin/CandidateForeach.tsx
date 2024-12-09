import { useLocale, useTranslations } from 'next-intl';
import { Candidate } from "../../../fakeData/candidate";
import React from 'react'
import Link from 'next/link';
import { Button } from 'antd';

function CandidateForeach() {
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
        
        <Link href={`/${locale}/admin/${candidate.id}`} passHref>
          <Button className="Button-Admin">
            {t("read")}
          </Button>
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default CandidateForeach