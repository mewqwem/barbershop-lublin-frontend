import css from "./Services.module.css";
import { services } from "@/constants/services";
import ServiceCard from "@/components/ServiceCard/ServiceCard";

const page = () => {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className="sectionTitle">Wszystkie Usługi</h2>
        <h3 className={css.sectionDescription}>
          Profesjonalna pielęgnacja męska na najwyższym poziomie. Każda usługa
          wykonywana z dbałością o szczegóły.
        </h3>
        <ul className={css.list}>
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
              topService={false}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
