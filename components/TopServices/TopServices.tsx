import Link from "next/link";
import css from "./TopServices.module.css";
import { services } from "@/constants/services";
import ServiceCard from "../ServiceCard/ServiceCard";

const TopServices = () => {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className={css.sectionTitle}>Top Usługi</h2>

        <ul className={css.list}>
          {services.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
              topService={true}
            />
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
