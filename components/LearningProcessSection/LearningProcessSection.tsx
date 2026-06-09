// components/LearningProcessSection/LearningProcessSection.tsx
import css from "./LearningProcessSection.module.css";

// Illustrates step-by-step practical education timeline
export default function LearningProcessSection() {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className="sectionTitle">JAK UCZYMY?</h2>
        <div className={css.grid}>
          <div className={css.contentSide}>
            <span className={css.accentLabel}>80% PRAKTYKI</span>
            <div className={css.steps}>
              <div className={css.stepItem}>
                <div className={css.stepBadge}>1</div>
                <div className={css.stepText}>
                  <h4 className={css.stepTitle}>Fundamenty Teorii</h4>
                  <p className={css.stepDesc}>
                    Niezbędna wiedza o strukturze włosa, higienie pracy i
                    geometrii twarzy.
                  </p>
                </div>
              </div>
              <div className={css.stepItem}>
                <div className={css.stepBadge}>2</div>
                <div className={css.stepText}>
                  <h4 className={css.stepTitle}>Pokazy Master</h4>
                  <p className={css.stepDesc}>
                    Obserwujesz techniki naszych mistrzów na żywo. Każdy detal
                    jest analizowany.
                  </p>
                </div>
              </div>
              <div className={css.stepItem}>
                <div className={css.stepBadge}>3</div>
                <div className={css.stepText}>
                  <h4 className={css.stepTitle}>Praktyka na Modelach</h4>
                  <p className={css.stepDesc}>
                    Esencja kursu. Tniemy, golimy i stylizujemy pod okiem
                    mentora. Bez manekinów.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={css.imageSide}>
            <div className={css.imageContainer}>
              <img
                className={css.image}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu4E52LHmDvBcq_n1fhmbYFdylbH5v75XD1PfoNh8ZntmG0as1i0sphpSCLe5L9wObdZSwLYY85BAmTFzuCzR0oEAr219_ySvhI9mw9JnyTHWTbPnlS9c-f41DwPJ90TWlWAMjxZ4OeV2eZ__f-bbclNEmf9b76UByiQmqKzkYaYHwTLk7m_sKuPMiTRZuWDnKr6O8jH1_GrHpgyH84L32fmZNdnfyrxdotPBHsd7EjHwwC4IYkFJnkvO41U3zgBrqb0Sogh4RbxE"
                alt="Practical lesson"
              />
            </div>
            <div className={css.statsOverlay}>
              <div className={css.statsNum}>150+</div>
              <div className={css.statsLabel}>PRZESZKOLONYCH BARBERÓW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
