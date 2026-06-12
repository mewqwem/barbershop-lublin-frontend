"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { NavLinks } from "../NavLinks/NavLinks";
import { MobileNav } from "../MobileNav/MobileNav";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import { linkToBooksy } from "@/constants/linkToBooksy";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo}>
          <Link href={"/"}>BARBERSHOP</Link>
        </div>
        <nav className={css.nav}>
          <NavLinks />
        </nav>
        <div className={css.spacer}></div>
        <Link
          href={linkToBooksy}
          className={`booksyBtn ${css.ctaButton}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Umów wizytę
        </Link>
        <BurgerMenu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};
