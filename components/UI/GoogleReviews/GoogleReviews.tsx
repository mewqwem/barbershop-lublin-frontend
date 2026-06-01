"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import axios from "axios"; // Imported axios for client-side fetching

import "swiper/css";
import "swiper/css/pagination";
import css from "./GoogleReviews.module.css";

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data via axios instance
    axios
      .get<Review[]>("/api/reviews")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.error("Axios layout error fetching reviews:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={css.loader}>Loading reviews...</div>;
  if (reviews.length === 0) return null;

  return (
    <section className={css.section}>
      <div className="container">
        <h2 className="sectionTitle">Google Reviews</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={css.swiper}
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id}>
              <div className={css.card}>
                <div className={css.header}>
                  <div className={css.avatarWrapper}>
                    <Image
                      src={r.avatar}
                      alt={r.author}
                      fill
                      unoptimized
                      className={css.avatar}
                    />
                  </div>
                  <div>
                    <h3 className={css.author}>{r.author}</h3>
                    <span className={css.time}>{r.relativeTime}</span>
                  </div>
                </div>

                <div className={css.rating}>
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </div>

                <p className={css.text}>{r.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
