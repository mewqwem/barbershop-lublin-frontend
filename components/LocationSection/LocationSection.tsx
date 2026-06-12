"use client";
import React from "react";
import Link from "next/link";
import css from "./LocationSection.module.css";

export const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1404.8284392200917!2d21.00804937135612!3d52.229891343110666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd0029661f53%3A0x25f25e465e1b9af9!2sWierz%20w%20siebie!5e1!3m2!1suk!2spl!4v1781273874478!5m2!1suk!2spl";

export const LocationSection = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.infoSide}>
          <span className={css.subtitle}>Odwiedź nas</span>
          <h2 className={css.title}>Gdzie jesteśmy?</h2>

          <p className={css.address}>pl. Defilad, 00-901 Warszawa</p>

          <div className={css.guideBox}>
            <p className={css.guideText}>
              <strong>Jak nas znaleźć:</strong> Wejście od boku budynku, po
              prawej stronie od głównego wejścia do centrum biznesowego. Jeśli
              przyjedziesz autem — obok dostępny jest bezpłatny parking dla
              gości.
            </p>
          </div>

          <Link href="/contacts" className={css.pageLink}>
            Wszystkie kontakty i dane →
          </Link>
        </div>

        <div className={css.mapSide}>
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Barbershop Location Map"
            className={css.mapIframe}
          />
        </div>
      </div>
    </section>
  );
};
