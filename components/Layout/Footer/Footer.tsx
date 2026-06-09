import React from "react";
import Link from "next/link";
import css from "./Footer.module.css";
import { linkToBooksy } from "@/constants/linkToBooksy";

const mapUrl =
  "https://www.google.com/maps?cid=12854092725395271923&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=uk&gl=PL&source=embed";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.brandBlock}>
          <h2 className={css.logo}>
            LEGIT<span>.</span>
          </h2>
          <p className={css.tagline}>
            More than just a haircut. It`s a lifestyle.
          </p>
          <a
            href={linkToBooksy}
            target="_blank"
            rel="noopener noreferrer"
            className={css.ctaButton}
          >
            Book Online
          </a>
        </div>

        <div className={css.infoBlock}>
          <h3 className={css.title}>Working Hours</h3>
          <p className={css.text}>Every Day: 09:00 - 21:00</p>
          <p className={css.subtext}>No days off</p>
        </div>

        <div className={css.infoBlock}>
          <h3 className={css.title}>Contacts</h3>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            Nałęczowska 16A/U5, 20-701 Lublin
          </a>
          <a href="tel:+48123456789" className={css.link}>
            +48 123 456 789
          </a>
          <a href="mailto:info@legitbarber.com" className={css.link}>
            info@legitbarber.com
          </a>
        </div>

        <div className={css.infoBlock}>
          <h3 className={css.title}>Follow Us</h3>
          <div className={css.socials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              TikTok
            </a>
            <a
              href={linkToBooksy}
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Booksy
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className={css.bottomBar}>
        <div className={css.bottomContainer}>
          <p>&copy; {currentYear} LEGIT Barbershop. All rights reserved.</p>
          <div className={css.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
