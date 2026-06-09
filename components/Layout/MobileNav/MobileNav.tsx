"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import css from "./MobileNav.module.css";
import { linkToBooksy } from "@/constants/linkToBooksy";
import { links } from "../NavLinks/NavLinks";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const pathname = usePathname();
  useEffect(() => {
    // Батчувати зміни DOM в requestAnimationFrame для оптимізації
    // та уникнення forced reflow при анімаціях
    if (isOpen) {
      requestAnimationFrame(() => {
        document.documentElement.classList.add("mobile-nav-open");
      });
    } else {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("mobile-nav-open");
      });
    }

    return () => {
      document.documentElement.classList.remove("mobile-nav-open");
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
            Close
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
          </Link>
        </div>
      </nav>
    </>
  );
};
