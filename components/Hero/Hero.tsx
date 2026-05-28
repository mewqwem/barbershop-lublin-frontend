import React from "react";
import css from "./Hero.module.css";
import Image from "next/image";
import { linkToBooksy } from "@/constants/linkToBooksy";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";
import ScrollButton from "../UI/ScrollButton/ScrollButton";

export const Hero = () => {
  return (
    <div className={css.heroSection}>
      <div className={css.backgroundWrapper}>
        <Image
          src="/hero-background1.jpeg"
          alt="LEGIT Barbershop Interior"
          className={css.backgroundImage}
          fill
          loading="eager"
        />
        <div className={css.overlay} />
      </div>

      <div className={css.content}>
        <h1 className={css.title}>Profesjonalny Barber w Lublinie</h1>
        <h2 className={css.subtitle}>Strzyżenie męskie i pielęgnacja brody</h2>
        <p className={css.description}>
          Zadbaj o swój wizerunek. Oferujemy klasyczne cięcia, precyzyjne
          trymowanie oraz relaksujące golenie brzytwą. Zarezerwuj swój moment na
          męski relaks.
        </p>

        <Link
          href={linkToBooksy}
          className={`booksyBtn ${css.ctaButton}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapisz się online
          <ImNewTab className="arrow" />
        </Link>
        <ScrollButton />
      </div>
    </div>
  );
};
