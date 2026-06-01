"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import css from "./MobileNav.module.css";
import { linkToBooksy } from "@/constants/linkToBooksy";
import { ImNewTab } from "react-icons/im";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { href: "/", label: "Główna" },
  { href: "/services", label: "Usługi" },
  { href: "/team", label: "Zespół" },
  { href: "/gallery", label: "Galeria" },
  { href: "/contacts", label: "Kontakt" },
];

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const pathname = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
    }

    return () => {
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className={css.overlay} onClick={onClose}></div>}

      <nav className={`${css.mobileMenu} ${isOpen ? css.open : ""}`}>
        <div className={css.menuHeader}>
          <h2 className={css.menuTitle}>Menu</h2>
          <button
            className={css.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            <IoClose size={28} />
          </button>
        </div>

        <div className={css.menuContent}>
          <div className={css.navLinks}>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${css.navLink} ${isActive ? css.active : ""}`}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href={linkToBooksy}
            className={css.bookLink}
            onClick={onClose}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zarezerwuj wizytę
            <ImNewTab className="arrow" />
          </Link>
        </div>
      </nav>
    </>
  );
};
