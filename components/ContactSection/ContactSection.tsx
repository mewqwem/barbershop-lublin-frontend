import { LuLocate, LuMail, LuPhone } from "react-icons/lu";
import css from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contactForm" className={css.servicesSection}>
      <div className="container">
        <h2 className="sectionTitle">ZACZNIJ SWOJĄ KARIERĘ</h2>
        <div className={css.panelGrid}>
          <div className={css.infoPanel}>
            <h3 className={css.panelTitle}>
              ZACZNIJ SWOJĄ <span className={css.accent}>KARIERĘ</span>
            </h3>
            <p className={css.panelDesc}>
              Wypełnij formularz zgłoszeniowy. Nasz koordynator skontaktuje się
              z Tobą w ciągu 24 godzin, aby omówić szczegóły kursu i wolne
              terminy.
            </p>
            <div className={css.contactDetails}>
              <div className={css.contactItem}>
                <LuPhone className={`${css.icon}`} />
                <p className={css.itemText}>+48 123 456 789</p>
              </div>
              <div className={css.contactItem}>
                <LuMail className={`${css.icon}`} />
                <p className={css.itemText}>akademia@legit.pl</p>
              </div>
              <div className={css.contactItem}>
                <LuLocate className={`${css.icon}`} />
                <p className={css.itemText}>
                  Nałęczowska 16A/U5, 20-701 Lublin
                </p>
              </div>
            </div>
          </div>
          <div className={css.formPanel}>
            <form className={css.form}>
              <div className={css.inputGroup}>
                <label className={css.label}>Imię i Nazwisko</label>
                <input
                  className={css.input}
                  placeholder="Jan Kowalski"
                  type="text"
                />
              </div>
              <div className={css.formRow}>
                <div className={css.inputGroup}>
                  <label className={css.label}>Telefon</label>
                  <input
                    className={css.input}
                    placeholder="+48 000 000 000"
                    type="tel"
                  />
                </div>
                <div className={css.inputGroup}>
                  <label className={css.label}>Email</label>
                  <input
                    className={css.input}
                    placeholder="jan@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className={css.inputGroup}>
                <label className={css.label}>Wybierz Kurs</label>
                <select className={css.select}>
                  <option>FUNDAMENTY (8 tyg.)</option>
                  <option>MASTERCLASS (2 dni)</option>
                  <option>TRIMMING & BEARD (1 tyg.)</option>
                </select>
              </div>
              <button className={css.submitButton} type="button">
                WYŚLIJ ZGŁOSZENIE
              </button>
              <p className={css.disclaimer}>
                Klikając przycisk wyrażasz zgodę na przetwarzanie danych
                osobowych.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
