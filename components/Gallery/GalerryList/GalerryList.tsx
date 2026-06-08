"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import css from "./GalerryList.module.css";
import { images } from "@/constants/galleryData";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const breakpointColumnsObj = {
  default: 5,
  1200: 4,
  900: 3,
  600: 2,
  400: 1,
};

const sizeClasses = ["tall", "short", "medium", "xshort", "xlong", "short"];

const GalerryList = () => {
  const placeholderImage = "/placeholderImage.jpg";
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageClick = (idx: number) => {
    setIndex(idx);
    setIsOpen(true);
  };

  const slides = images.map((image, imageIndex) => ({
    src: failedImages.has(imageIndex) ? placeholderImage : image.url,
    alt: image.alt,
  }));

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={css.grid}
        columnClassName={css.column}
      >
        {images.map((image, i) => {
          const sizeClass = sizeClasses[i % sizeClasses.length];
          return (
            <div
              key={image.id}
              className={css.gridItem}
              onClick={() => handleImageClick(i)}
            >
              <div className={`${css.imageWrapper} ${css[sizeClass]}`}>
                <Image
                  className={css.image}
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, (max-width: 1200px) 30vw, 18vw"
                  unoptimized
                  loading="eager"
                />
              </div>
            </div>
          );
        })}
      </Masonry>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={index}
        slides={slides}
        className={css.modal}
        controller={{ closeOnBackdropClick: true }}
        animation={{ fade: 300 }}
      />
    </>
  );
};

export default GalerryList;
