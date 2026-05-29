import Link from "next/link";
import css from "./not-found.module.css";
const NotFound = () => {
  return (
    <section className={css.sectionNotFound}>
      <div className={`container ${css.wrapper}`}>
        <div className={css.numberWrapper}>
          <h1 className={css.number}>404</h1>
        </div>

        <div className={css.messageWrapper}>
          <h2 className={css.title}>Strona nie została znaleziona</h2>
          <p className={css.description}>
            Ta strona została golona zbyt krótko i zniknęła. Wróćmy do lepszych
            stron.
          </p>
        </div>

        <div className={css.actions}>
          <Link href="/" className={`${css.btn} ${css.primaryBtn}`}>
            <span>Strona główna</span>
          </Link>

          <Link href="/uslugi" className={`${css.btn} ${css.secondaryBtn}`}>
            <span>Nasze usługi</span>
          </Link>
        </div>

        <div className={css.footer}>
          <p className={css.footerText}>
            Lub skorzystaj z nawigacji powyżej, aby znaleźć to, czego szukasz
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
