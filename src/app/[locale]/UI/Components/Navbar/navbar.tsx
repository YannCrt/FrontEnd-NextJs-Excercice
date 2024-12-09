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
    <nav>
      <Link href="/" className="logo">
      <Image
          src={logo} // logo est un objet StaticImageData
          alt="Logo"
          width={150}
          height={50}
          className="img"
        />
        <span>Arimayi</span>
      </Link>
      <ul>
        <li>
          <Link href="/" aria-current="page">
          {t('home')}
          </Link>
        </li>
        {isRecruteur ? (
          <li>
            <Link href="/admin">
            {t('adminpages')}
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/form">
              {t('form')}
            </Link>
          </li>
        )}
        <li>
         <a onClick={() => setIsRecruteur(!isRecruteur)} ><UserOutlined></UserOutlined></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
