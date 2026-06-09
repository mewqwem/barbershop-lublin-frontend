"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import css from "../Header/Header.module.css";

export const links = [
  { href: "/", label: "Główna" },
  { href: "/services", label: "Usługi" },
  { href: "/team", label: "Zespół" },
  { href: "/gallery", label: "Galeria" },
  { href: "/contacts", label: "Kontakt" },
  { href: "/academy", label: "Szkolenie" },
];

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className={css.nav}>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${css.navLink} ${isActive ? css.active : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
