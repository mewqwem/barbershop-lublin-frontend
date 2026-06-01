"use client";
import React, { useState } from "react";
import css from "./GalerryList.module.css";
import { images } from "@/constants/galleryData";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
      <ul className={css.list}>
        {images.map((image, i) => (
          <li key={image.id}>
            <div
              className={css.imageWrapper}
              onClick={() => handleImageClick(i)}
            >
              <Image
                className={css.image}
                src={image.url}
                alt={image.alt}
                fill
                unoptimized
              ></Image>
            </div>
          </li>
        ))}
      </ul>
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
