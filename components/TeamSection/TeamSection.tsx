import React from "react";
import css from "./TeamSection.module.css";
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  return (
    <section className={css.teamSection}>
      <div className="container">
        <h2 className="sectionTitle">Poznaj naszych mistrzów</h2>

        <div className={css.heroBlock}>
          <div className={css.imageWrapper}>
            <Image
              className={css.image}
              src="/team.jpg"
              alt="Team"
              width={800}
              height={520}
            />
          </div>
          <div className={css.contentWrapper}>
            <p className={css.description}>
              Nasza ekipa łączy doświadczenie i nowoczesny styl, aby każda
              wizyta była wyjątkowa.
            </p>
            <Link href="/team" className={css.ctaButton}>
              Zobacz pełną ekipę
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
