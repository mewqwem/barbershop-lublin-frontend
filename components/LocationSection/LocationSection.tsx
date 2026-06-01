"use client";
import React from "react";
import Link from "next/link";
import css from "./LocationSection.module.css";

export const LocationSection = () => {
  // Replace this placeholder URL with your actual Google Maps embed src link
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.396247922014!2d22.51423277760257!3d51.24861322957417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225925a3f270a3%3A0xb262e93ad71e30f3!2sLegit%20Barbershop%20%7C%20Fryzjer%20M%C4%99ski!5e0!3m2!1suk!2spl!4v1780337770512!5m2!1suk!2spl";

  // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.396247922014!2d22.51423277760257!3d51.24861322957417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225925a3f270a3%3A0xb262e93ad71e30f3!2sLegit%20Barbershop%20%7C%20Fryzjer%20M%C4%99ski!5e0!3m2!1suk!2spl!4v1780337770512!5m2!1suk!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.infoSide}>
          <span className={css.subtitle}>Odwiedź nas</span>
          <h2 className={css.title}>Gdzie jesteśmy?</h2>

          <p className={css.address}>Nałęczowska 16A/U5, Lublin</p>

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
