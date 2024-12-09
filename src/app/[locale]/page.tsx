"use client"

import React, { useEffect, useState } from "react";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="home">
      <div className="">
        <h1 className="">
          {t("welcome")} 
        </h1>
        <p className="">
        {t('next')}
        </p>
      </div>
    </div>
  );
}
