"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import css from "../Header/Header.module.css";

export const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Główna" },
    { href: "/services", label: "Usługi" },
    { href: "/team", label: "Zespół" },
    { href: "/galeria", label: "Galeria" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakt" },
  ];

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
