import { ReactElement, ReactNode } from "react";
import Navbar from './UI/Components/Navbar/navbar';
import './globals.css'; 
import { StoreProvider } from "../../store/StoreProvider";
import { store } from "../../store/store";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}


export default async function LocaleLayout({children, params: {locale}} : LocaleLayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
  
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

