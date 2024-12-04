//app/[locale]/page
"use client"

import React, { useEffect, useState } from "react";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex min-h-screen items-center justify-center bg-white bg-gradient-to-r">
      <div className="max-w-xl rounded-lg border-2 border-black bg-white p-6 text-center shadow-lg">
        <h1 className="mb-4 text-5xl font-bold text-gray-800">
          {t("welcome")} {/* Utilisation de la fonction de traduction */}
        </h1>
        <p className="mb-6 text-xl text-gray-600">
        {t('next')} {/* Utilisation de la fonction de traduction avec scope */}
        </p>
      </div>
    </div>
  );
}
