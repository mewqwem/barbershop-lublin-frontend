"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import css from "./SwiperImage.module.css";
import { images } from "@/constants/galleryData";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const SwiperImage = () => {
  const placeholderImage = "/placeholderImage.jpg";
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleSlideClick = (idx: number) => {
    setIndex(idx);
    setIsOpen(true);
  };

  const slides = images.map((img, imageIndex) => ({
    src: failedImages.has(imageIndex) ? placeholderImage : img.url,
    alt: img.alt,
  }));

  return (
    <div className={css.sliderContainer}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
        className={css.swiperRoot}
      >
        {images.map((i, idx) => (
          <SwiperSlide key={i.id}>
            <div
              className={css.imageWrapper}
              onClick={() => handleSlideClick(idx)}
            >
              <Image
                src={i.url}
                alt={i.alt}
                fill
                unoptimized
                className={css.image}
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={index}
        slides={slides}
        className={css.modal}
        controller={{ closeOnBackdropClick: true }}
        animation={{ fade: 300 }}
      />
    </div>
  );
};
