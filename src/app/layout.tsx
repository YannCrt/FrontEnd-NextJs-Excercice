"use client"; // Si tu utilises des fonctionnalités côté client

import localFont from "next/font/local";
import Navbar from "./components/navbar/page";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";  // Importer le Provider
import { store } from "../store/store";  // Importer ton store Redux

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
