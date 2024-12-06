"use client";
import React, { useState } from "react";
import { Button } from "antd";
import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import logo from '@/assets/logo.jpg'; 

const Navbar: React.FC = () => {
  const [isRecruteur, setIsRecruteur] = useState(false);
  const t = useTranslations('NavBar');

  return (
    <nav className="flex items-center justify-between bg-slate-800 p-4 text-white">
      <Link href="/" className="flex items-center justify-center gap-8">
      <Image
          src={logo} // logo est un objet StaticImageData
          alt="Logo"
          width={150}
          height={50}
          className="h-10 w-10"
        />
        <span>Arimayi</span>
      </Link>
      <ul className="m-0 flex list-none items-center justify-center gap-8 p-0">
        <li className="m-0">
          <Link href="/" className="home" aria-current="page">
          {t('home')}
          </Link>
        </li>
        {isRecruteur ? (
          <li className="m-0">
            <Link href="/admin" className="admin">
            {t('adminpages')}
            </Link>
          </li>
        ) : (
          <li className="m-0">
            <Link href="/form" className="">
              {t('form')}
            </Link>
          </li>
        )}
        <li className="m-0">
         <a onClick={() => setIsRecruteur(!isRecruteur)} ><UserOutlined className = "h-10 w-10 rounded-3xl"></UserOutlined></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
