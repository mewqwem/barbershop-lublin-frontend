"use client";

import css from "./HeroSection.module.css";
import { handleScroll } from "../UI/ScrollButton/ScrollButton";

const handleScrollToSection = (id: string) => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function HeroSection() {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className="sectionTitle">Craftsmanship Academy</h2>
        <div className={css.imageWrapper}>
          <img
            className={css.bgImage}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKhxVHtmxSZ1aTvPrF5VLt-Eeh8FZW5LKFVsFzPQvxBhYI6OzaclzQHL_qDn5n95IvA-tMkUetvM_BNmoF6vRqWQioAbc3Uk07ZM2zrslr6PLgxcEkQJK7UyMk9Y7YhrydfM1GgG_wdAN7S-VFL5vJckg0IsPrdD3Ap1bOk-lFFTK2qK3faha6P3dQezfLDolBWYM_7oa6DiHtEvUMgl-x3EzGqEtOBS3-1iE8y3XOIRNo-YfoSHPMGS6Z3Qb8nfo7Ca4jFm1eIhY"
            alt="Hero background"
          />
          <div className={css.gradientOverlay}></div>
        </div>
        <div className={css.textContent}>
          <h1 className={css.mainTitle}>
            AKADEMIA <span className={css.accentText}>LEGIT</span>
          </h1>
          <p className={css.description}>
            Zostań mistrzem rzemiosła. Profesjonalne kursy barberskie w
            Lublinie. Dołącz do elity i zdefiniuj swój styl pod okiem ekspertów.
          </p>
          <div className={css.buttonGroup}>
            <button
              onClick={() => handleScrollToSection("contactForm")}
              className={css.primaryButton}
            >
              ZAPISZ SIĘ NA KURS
            </button>
            <button onClick={handleScroll} className={css.secondaryButton}>
              DOWIEDZ SIĘ WIĘCEJ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
