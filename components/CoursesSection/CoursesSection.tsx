import { IoMdCut } from "react-icons/io";
import css from "./CoursesSection.module.css";
import { FaBolt } from "react-icons/fa";

export default function CoursesSection() {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className="sectionTitle">Wybierz Swoją Ścieżkę</h2>
        <p className={css.subtitle}>
          Dopasowaliśmy programy nauczania do każdego poziomu zaawansowania. Od
          totalnych podstaw po mistrzowski szlif.
        </p>
        <div className={css.bentoGrid}>
          <div className={css.largeCard}>
            <div className={css.cardHeader}>
              <span className={css.tagBeg}>DLA POCZĄTKUJĄCYCH</span>
              <span className={css.cardNum}>01</span>
            </div>
            <div className={css.cardBody}>
              <h3 className={css.cardTitle}>FUNDAMENTY</h3>
              <p className={css.cardDesc}>
                Kompletny kurs wprowadzający w świat barberingu. Poznasz
                techniki cięcia, trymowania brody i klasycznego golenia.
              </p>
            </div>
            <div className={css.cardFooter}>
              <div className={css.meta}>
                <span className={css.metaLabel}>CZAS TRWANIA</span>
                <span className={css.metaValue}>8 TYGODNI</span>
              </div>
            </div>
          </div>

          <div className={css.mediumCard}>
            <div className={css.cardHeader}>
              <span className={css.tagPro}>DLA PRO</span>
              <span className={css.cardNum}>02</span>
            </div>
            <div className={css.cardBody}>
              <h3 className={css.cardTitle}>MASTERCLASS</h3>
              <p className={css.cardDesc}>
                Zaawansowane techniki cieniowania (Skin Fade) oraz kreatywne
                formy stylizacji. Tylko dla praktykujących.
              </p>
            </div>
            <div className={css.cardFooter}>
              <div className={css.meta}>
                <span className={css.metaLabel}>INTENSYWNOŚĆ</span>
                <span className={css.metaValue}>2 DNI</span>
              </div>
              <FaBolt />
            </div>
          </div>

          <div className={css.fullWidthCard}>
            <div className={css.fullWidthBody}>
              <h3 className={css.cardTitle}>TRIMMING & BEARD</h3>
              <p className={css.cardDesc}>
                Specjalistyczny kurs skupiony wyłącznie na pielęgnacji i
                formowaniu męskiego zarostu. Brzytwa, gorący ręcznik i rytuały.
              </p>
            </div>
            <div className={css.fullWidthFooter}>
              <div className={css.meta}>
                <span className={css.metaLabel}>MODUŁ</span>
                <span className={css.metaValue}>1 TYDZIEŃ</span>
              </div>
              <div className={css.iconCircle}>
                <IoMdCut />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
