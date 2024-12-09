import { ReactElement, ReactNode } from "react";
import Navbar from './UI/Components/Navbar/navbar';
import './globals.css'; 
import { StoreProvider } from "../../store/StoreProvider";
import { store } from "../../store/store";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <StoreProvider>
        <NextIntlClientProvider messages={messages}>
        <Navbar />  
          {children} 
        </NextIntlClientProvider> 
        </StoreProvider> 
      </body>
    </html>
  );
}

