import Image from "next/image";
import Link from "next/link";
import React from "react";
import css from "./ServiceCard.module.css";
import { linkToBooksy } from "@/constants/linkToBooksy";
import { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
  topService?: boolean;
}

const ServiceCard = ({ service, topService }: ServiceCardProps) => {
  return (
    <li className={css.item}>
      <Link href={linkToBooksy} className={css.cardLink}>
        <div className={css.cardContent}>
          <div className={css.imageWrapper}>
            <Image
              className={css.image}
              src={service.image.src || "/placeholderImageCard.jpg"}
              alt=""
              fill
              sizes="287px"
            />
          </div>

          <h3 className={css.cardTitle}>{service.name}</h3>

          {!topService && (
            <p className={css.cardDescription}>{service.description}</p>
          )}

          <h3 className={css.cardSubTitle}>Kliknij dla rezerwacji</h3>
          <div className={css.priceWrapper}>
            <p className={css.price}>{service.price}</p>
            <p className={css.duration}>{service.duration}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ServiceCard;
