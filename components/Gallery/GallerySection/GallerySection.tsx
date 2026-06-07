import Link from "next/dist/client/link";
import { SwiperImage } from "../SwiperImage/SwiperImage";
import css from "./GallerySection.module.css";

const GallerySection = () => {
  return (
    <section className={css.gallerySection}>
      <div className="container">
        <h2 className="sectionTitle">Galeria</h2>
        <SwiperImage />
      </div>
      <div className={css.contentWrapper}>
        <Link href="/gallery" className={css.ctaButton}>
          Zobacz pełną Galerię
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
