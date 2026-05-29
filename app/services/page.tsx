import Link from "next/link";
import css from "./Services.module.css";
import { linkToBooksy } from "@/constants/linkToBooksy";
import { services } from "@/constants/services";
import Image from "next/image";

const page = () => {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className={css.sectionTitle}>Wszystkie Usługi</h2>
        <div className={css.listWrapper}>
          <ul className={css.list}>
            {services.map((service) => (
              <li key={service.name} className={css.item}>
                <Link
                  href={linkToBooksy}
                  className={css.linkWrapper}
                  target="_blank"
                  rel="noopener nooferrer"
                >
                  <h3 className={css.cardTitle}>{service.name}</h3>
                  <div className={css.imageWrapper}>
                    <Image
                      className={css.image}
                      src={service.image.src || "/placeholderImageCard.jpg"}
                      alt=""
                      fill
                    />
                  </div>
                  <p className={css.cardDescription}>{service.description}</p>
                  <div className={css.priceWrapper}>
                    <p className={css.price}>{service.price}</p>
                    <p className={css.duration}>{service.duration}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
