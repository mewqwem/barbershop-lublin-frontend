import Link from "next/link";
import css from "./TopServices.module.css";
import { services } from "@/constants/services";
import { linkToBooksy } from "@/constants/linkToBooksy";
import NewTabArrowCard from "../UI/NewTabArrowCard/NewTabArrowCard";
import Image from "next/image";

const TopServices = () => {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className={css.sectionTitle}>Top Usługi</h2>

        <ul className={css.servicesContainer}>
          {services.slice(0, 3).map((service) => (
            <li key={service.name} className={css.serviceCard}>
              <Link href={linkToBooksy} className={css.cardLink}>
                <div className={css.cardContent}>
                  <div className={css.imageWrapper}>
                    <Image
                      className={css.image}
                      src={service.image.src || "/placeholderImageCard.jpg"}
                      alt=""
                      fill
                    />
                  </div>
                  <h3 className={css.serviceTitle}>{service.name}</h3>
                  <p className={css.servicePrice}>{service.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={css.buttonWrapper}>
          <Link href="/services" className={css.viewAllLink}>
            Zobacz wszystkie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopServices;
