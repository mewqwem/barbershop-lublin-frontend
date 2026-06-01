import React from "react";
import css from "./Gallery.module.css";
import GalerryList from "@/components/Gallery/GalerryList/GalerryList";

const page = () => {
  return (
    <section className={css.gallerySection}>
      <div className="container">
        <h2 className="sectionTitle">Galeria</h2>
        <h3 className={css.sectionDescription}>
          Nasza praca w każdym detalu. Zobacz efekty.
        </h3>
        <GalerryList />
      </div>
    </section>
  );
};

export default page;
