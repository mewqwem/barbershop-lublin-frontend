import { BsChatRightQuoteFill } from "react-icons/bs";
import css from "./SuccessStorySection.module.css";

export default function SuccessStorySection() {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className="sectionTitle">Historia Sukcesu</h2>
        <div className={css.flexContainer}>
          <div className={css.imageSide}>
            <div className={css.wrapper}>
              <img
                className={css.image}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Xi3zz53x-hQnF7Tb7CfFUAIyHvSFQvsoi4YN0Kj9gMbIaW004uHDEFlSOqJ7Qb6b7eHw_Tjdclm5SHT925Fdpq7nFy-7gZUmRU-LA1kOlamdE9rVW-WsXtjiryNKZsr7XADgYRw8sH4gDK1Ozh1IMzV2TnR7WQXUfmfaLePBhKeBEFw-etvwXwZcNs_Adu_D41YsMNyxFPgB3nLiP_zO7ovMCn3n3clvPOXUy8FYnkWb9lmssc9XRfAgTgAtm2K6Nd9KuMqD64k"
                alt="Graduate spotlight"
              />
              <div className={css.backdropFrame}></div>
            </div>
          </div>
          <div className={css.contentSide}>
            <BsChatRightQuoteFill className={`${css.quoteIcon}`} />
            <h3 className={css.quote}>
              `Akademia zmieniła nie tylko moje umiejętności, ale i podejście do
              zawodu. To miejsce, gdzie rzemiosło spotyka się ze sztuką.`
            </h3>
            <div className={css.authorMeta}>
              <p className={css.authorName}>MARIUSZ KOWALSKI</p>
              <p className={css.authorTitle}>
                GRADUATE 2023 | SENIOR BARBER AT THE LAB
              </p>
            </div>
            <div className={css.additionalInfo}>
              <h4 className={css.infoHeading}>Twoja Droga</h4>
              <p className={css.infoText}>
                Każdy z naszych absolwentów otrzymuje certyfikat rozpoznawany w
                najlepszych salonach w Polsce oraz wsparcie w budowaniu własnego
                portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
