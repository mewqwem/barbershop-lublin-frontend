import Link from "next/link";
import css from "./TopServices.module.css";
import { POPULAR_OFFERS } from "@/constants/services";

const TopServices = () => {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className="sectionTitle">Top Usługi</h2>
        <div className={css.popularGrid}>
          {POPULAR_OFFERS.map((offer) => (
            <div key={offer.id} className={css.popularCard}>
              {offer.isMostChosen && (
                <span className={css.cardBadge}>MOST CHOSEN</span>
              )}
              <div className={css.cardTop}>
                <h3 className={css.cardTitle}>{offer.title}</h3>
                <p className={css.cardDesc}>{offer.description}</p>
              </div>
              <div className={css.cardFooter}>
                <div className={css.cardPriceSection}>
                  <span className={css.cardDuration}>
                    DURATION: {offer.duration}
                  </span>
                  <span className={css.cardPrice}>{offer.price}</span>
                </div>
                <Link
                  href="youbarber56.booksy.com/c"
                  className={css.cardBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={css.contentWrapper}>
          <Link href="/services" className={css.ctaButton}>
            Zobacz wszystkie usługi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopServices;
