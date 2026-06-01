import React from "react";
import css from "./Contacts.module.css";
import { linkToBooksy } from "@/constants/linkToBooksy";

const ContactsPage = () => {
  return (
    <section className={css.contactsSection}>
      <div className="container">
        <h1 className="sectionTitle">Kontakt i Dane firmy</h1>
        <p className={css.sectionDescription}>
          Masz pytania lub chcesz zarezerwować wizytę telefonicznie? Skontaktuj
          się z nami.
        </p>

        <div className={css.gridContainer}>
          {/* Block 1: Main Contact info */}
          <div className={css.card}>
            <h3 className={css.cardTitle}>Dane kontaktowe</h3>
            <div className={css.infoRow}>
              <span className={css.label}>Telefon:</span>
              <a href="tel:+48123456789" className={css.valueLink}>
                +48 123 456 789
              </a>
            </div>
            <div className={css.infoRow}>
              <span className={css.label}>E-mail:</span>
              <a href="mailto:info@legitbarber.pl" className={css.valueLink}>
                info@legitbarber.pl
              </a>
            </div>
            <div className={css.infoRow}>
              <span className={css.label}>Social Media:</span>
              <div className={css.socialLinks}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.valueLink}
                >
                  Instagram
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.valueLink}
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Block 2: Location and Working hours */}
          <div className={css.card}>
            <h3 className={css.cardTitle}>Adres i Godziny</h3>
            <div className={css.infoRow}>
              <span className={css.label}>Lokalizacja:</span>
              <span className={css.value}>Nałęczowska 16A/U5, Lublin</span>
            </div>
            <div className={css.infoRow}>
              <span className={css.label}>Godziny otwarcia:</span>
              <span className={css.value}>
                Poniedziałek - Niedziela: 09:00 - 21:00
              </span>
            </div>
          </div>

          {/* Block 3: Legal business info (Essential for Poland) */}
          <div className={css.card}>
            <h3 className={css.cardTitle}>Dane rejestrowe firmy</h3>
            <div className={css.infoRow}>
              <span className={css.label}>Nazwa firmy:</span>
              <span className={css.value}>LEGIT Barbershop Sp. z o.o.</span>
            </div>
            <div className={css.infoRow}>
              <span className={css.label}>NIP:</span>
              <span className={css.value}>1234567890</span>
            </div>
            <div className={css.infoRow}>
              <span className={css.label}>REGON:</span>
              <span className={css.value}>987654321</span>
            </div>
          </div>
        </div>

        {/* Quick Online Booking Call to Action */}
        <div className={css.ctaBlock}>
          <h3 className={css.ctaTitle}>Najszybsza rezerwacja online</h3>
          <p className={css.ctaText}>
            Wybierz wolny termin, ulubionego barbera i zarezerwuj wizytę w 2
            minuty bez dzwonienia.
          </p>
          <a
            href={linkToBooksy}
            target="_blank"
            rel="noopener noreferrer"
            className={css.ctaButton}
          >
            Zarezerwuj przez Booksy
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
