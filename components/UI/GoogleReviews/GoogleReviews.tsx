"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import css from "./GoogleReviews.module.css";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

// Список темних кольорів для аватарок
const DARK_COLORS = [
  "#2C3E50",
  "#34495E",
  "#1A3A52",
  "#2D5016",
  "#5C4033",
  "#4A235A",
  "#1B3A3A",
  "#3E2723",
];

// Компонент для аватарки
const Avatar: React.FC<{ name: string; avatarUrl?: string }> = ({
  name,
  avatarUrl,
}) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const bgColor = DARK_COLORS[firstLetter.charCodeAt(0) % DARK_COLORS.length];

  if (avatarUrl) {
    return <img src={avatarUrl} alt={name} className={css.avatarImage} />;
  }

  return (
    <div className={css.avatarInitial} style={{ backgroundColor: bgColor }}>
      {firstLetter}
    </div>
  );
};

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "Andriy",
    rating: 5,
    text: "Bardzo dobry barbershop, w którym pracują profesjonaliści, świetne podejście do klientów i za każdym razem strzyżenie na najwyższym poziomie, szczególny szacunek dla Romka i Matwieja za ich pracę <3",
    date: "6 mounth ago",
  },
  {
    id: 2,
    name: "Bohdan K. (7Encor3e_)",
    rating: 5,
    text: "I liked the friendly and professional experience. Matvei made a great haircut while keeping a pleasant conversation.",
    date: "7 months ago",
  },
  {
    id: 3,
    name: "Роман Тринчій",
    rating: 5,
    text: "Bardzo dobra obsługa klienta i profesjonalne podejście. Polecam.",
    date: "1 week ago",
  },
  {
    id: 4,
    name: "Filip Gołębiowski",
    rating: 5,
    text: "Wspaniała, zrelaksowana atmosfera i przyjaźni pracownicy, którzy wiedzą, jak rozmawiać ze swoimi klientami. Strzyżenie również na bardzo wysokim poziomie. Wyszedłem niezwykle zadowolony i na pewno wrócę.",
    date: "3 weeks ago",
  },
  {
    id: 5,
    name: "Олексій Мостіпан",
    rating: 5,
    text: "Najlepszy barbershop w mieście, szczególne podziękowania dla barbera Walentyna za rekomendacje i profesjonalne strzyżenie",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Wiktoria Szeliga",
    rating: 5,
    text: "Bardzo polecam to miejsce każdemu, kto oczekuje wysokich standardów ❤️ Fryzjerzy są starannie dobrani, przeszkoleni i mają duże doświadczenie, najlepsi! Miejsce jest czyste i estetycznie przyjemne. Atmosfera jest tak miła, że chce się zostać! To nowe miejsce na mapie Lublina niedługo będzie NA PIERWSZYM MIEJSCU ✨",
    date: "7 months ago",
  },
];

export const GoogleReviews: React.FC = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className="sectionTitle">What Our Customers Say</h2>
      </div>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        // Injecting modular class to force linear CSS transition for smooth flow
        wrapperClass={`swiper-wrapper ${css.swiperWrapper}`}
        freeMode={{
          enabled: true,
          momentum: false, // Prevents sudden speed bursts after dragging
        }}
        autoplay={{
          delay: 0, // 0 delay combined with linear transition creates continuous marquee
          disableOnInteraction: false, // Ensures marquee resumes after user interaction
          pauseOnMouseEnter: false, // Temporarily stops marquee when user hovers to read
        }}
        speed={6000} // Speed configuration for smooth continuous crawl
      >
        {REVIEWS_DATA.map((review) => (
          <SwiperSlide key={review.id} className={css.slide}>
            <div className={css.card}>
              <div className={css.header}>
                <Avatar name={review.name} avatarUrl={review.avatar} />
                <div className={css.nameContainer}>
                  <p className={css.name}>{review.name}</p>
                  <p className={css.date}>{review.date}</p>
                </div>
              </div>
              <div className={css.stars}>{"★".repeat(review.rating)}</div>
              <p className={css.text}>{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
