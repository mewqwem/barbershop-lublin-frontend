import { SwiperImage } from "../SwiperImage/SwiperImage";
import css from "./GallerySection.module.css";

const GallerySection = () => {
  return (
    <section className={css.gallerySection}>
      <div className="container">
        <h2 className="sectionTitle">Galeria</h2>
        <SwiperImage />
      </div>
    </section>
  );
};

export default GallerySection;
