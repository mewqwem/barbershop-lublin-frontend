"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { linkToBooksy } from "@/constants/linkToBooksy";
import { SERVICE_CATEGORIES } from "@/constants/services";
import css from "./ServiceCategories.module.css";

const ServiceCategories = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "top-barber",
  );
  const [overflowElements, setOverflowElements] = useState<Set<string>>(
    new Set(),
  );
  const titleRefs = useRef<Record<string, HTMLHeadingElement | null>>({});

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  useEffect(() => {
    const checkOverflow = () => {
      const newOverflow = new Set<string>();
      Object.entries(titleRefs.current).forEach(([key, element]) => {
        if (element && element.scrollWidth > element.clientWidth) {
          newOverflow.add(key);
        }
      });
      setOverflowElements(newOverflow);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <section className={css.servicesSection}>
      <h2 className="sectionTitle">Wszystkie Usługi</h2>
      <div className="container">
        {SERVICE_CATEGORIES.map((category) => {
          const isOpen = openAccordion === category.id;
          return (
            <div key={category.id} className={css.categoryGroup}>
              <button
                onClick={() => toggleAccordion(category.id)}
                className={css.accordionHead}
              >
                <div className={css.headLeft}>
                  <div className={css.accIndicatorLine} />
                  <div>
                    <h2 className={css.accTitle}>{category.title}</h2>
                    <span className={css.accSubtitle}>{category.subtitle}</span>
                  </div>
                </div>
                <div
                  className={`${css.chevron} ${isOpen ? css.chevronRotated : ""}`}
                ></div>
              </button>

              <div
                className={`${css.accordionContent} ${
                  isOpen ? css.accordionContentActive : ""
                }`}
              >
                <div className={css.servicesGrid}>
                  {category.services.map((srv, index) => {
                    const elementKey = `${category.id}-${index}`;
                    const hasOverflow = overflowElements.has(elementKey);

                    return (
                      <Link
                        href={linkToBooksy}
                        key={index}
                        className={css.serviceItem}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={css.serviceHeader}>
                          <div className={css.serviceTitleBlock}>
                            <h3
                              ref={(el) => {
                                if (el) titleRefs.current[elementKey] = el;
                              }}
                              className={css.serviceTitle}
                              data-overflow={hasOverflow ? "true" : "false"}
                            >
                              {srv.name}
                            </h3>
                            <span className={css.serviceDuration}>
                              {srv.duration}
                            </span>
                          </div>
                          <div className={css.servicePriceBtn}>
                            <span className={css.servicePrice}>
                              {srv.price}
                            </span>
                            <p className={css.serviceBtn}>
                              Kliknij dla rezerwacji
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceCategories;
