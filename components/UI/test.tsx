import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  CheckCircle2,
} from "lucide-react";
import styles from "./App.module.css";

const POPULAR_OFFERS = [
  {
    id: "pop1",
    title: "Combo (Hair + Beard)",
    description: "Full service precision cut with expert beard sculpting.",
    duration: "1G 30MIN",
    price: "150,00 zł",
    isMostChosen: true,
  },
  {
    id: "pop2",
    title: "Haircut",
    description: "Standard industrial grade hair architectural maintenance.",
    duration: "1G",
    price: "100,00 zł",
    isMostChosen: false,
  },
  {
    id: "pop3",
    title: "Beard Trim",
    description: "Precise beard line definition and length adjustment.",
    duration: "45MIN",
    price: "80,00 zł",
    isMostChosen: false,
  },
];

const SERVICE_CATEGORIES = [
  {
    id: "top-barber",
    title: "TOP BARBER",
    subtitle: "10 Professional Services",
    services: [
      { name: "Strzyżenie włosów", price: "100,00 zł", duration: "1g" },
      {
        name: "Strzyżenie długich włosów",
        price: "120,00 zł",
        duration: "1g 20min",
      },
      {
        name: "Buzz cut (strzyżenie maszynką)",
        price: "90,00 zł",
        duration: "1g",
      },
      { name: "Strzyżenie brody", price: "80,00 zł", duration: "45min" },
      { name: "Combo (włosy+broda)", price: "150,00 zł", duration: "1g 30min" },
      {
        name: "Combo + Golenie królewskie",
        price: "160,00 zł",
        duration: "1g 40min",
      },
      { name: "Królewskie golenie", price: "80,00 zł", duration: "40min" },
      { name: "Farbowanie brody", price: "70,00 zł", duration: "30min" },
      { name: "Golenie głowy", price: "80,00 zł", duration: "40min" },
      { name: "Depilacja woskiem", price: "20,00 zł", duration: "5min" },
    ],
  },
  {
    id: "senior-barber",
    title: "SENIOR BARBER",
    subtitle: "8 Essential Services",
    services: [
      { name: "Strzyżenie włosów", price: "80,00 zł", duration: "1g" },
      {
        name: "Strzyżenie długich włosów",
        price: "100,00 zł",
        duration: "1g 20min",
      },
      {
        name: "Buzz cut (strzyżenie maszynką)",
        price: "70,00 zł",
        duration: "1g",
      },
      { name: "Strzyżenie brody", price: "60,00 zł", duration: "45min" },
      { name: "Combo (włosy+broda)", price: "130,00 zł", duration: "1g 30min" },
      {
        name: "Combo (Buzz Cut+Broda)",
        price: "120,00 zł",
        duration: "1g 30min",
      },
      { name: "Farbowanie brody", price: "60,00 zł", duration: "35min" },
      { name: "Depilacja woskiem", price: "20,00 zł", duration: "5min" },
    ],
  },
  {
    id: "barber",
    title: "BARBER",
    subtitle: "5 Standard Services",
    services: [
      { name: "Strzyżenie włosów", price: "60,00 zł", duration: "1g" },
      {
        name: "Strzyżenie długich włosów",
        price: "80,00 zł",
        duration: "1g 30min",
      },
      { name: "Strzyżenie brody", price: "40,00 zł", duration: "45min" },
      { name: "Combo (włosy+broda)", price: "90,00 zł", duration: "1g 40min" },
      { name: "Depilacja woskiem", price: "20,00 zł", duration: "5min" },
    ],
  },
];

export default function text() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "top-barber",
  );
  const [activeTab, setActiveTab] = useState("services");
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleBook = (serviceName: string, price: string) => {
    setBookingStatus(`Pomyślnie wybrano: ${serviceName} (${price})`);
    setTimeout(() => setBookingStatus(null), 4000);
  };

  return (
    <div style={{ backgroundColor: "#131313", minHeight: "100vh" }}>
      {/* Toast Notification */}
      {bookingStatus && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            backgroundColor: "#201f1f",
            border: "1px solid #ffffff",
            padding: "16px 24px",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
          }}
        >
          <CheckCircle2 size={20} color="#e2e2e2" />
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
            {bookingStatus}
          </span>
        </div>
      )}

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="#" className={styles.logo}>
            LEGIT.
          </a>

          <div className={styles.navLinks}>
            {["home", "services", "team", "contact"].map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.navLink} ${
                  activeTab === tab ? styles.navLinkActive : ""
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className={styles.navActions}>
            <button
              onClick={() => handleBook("Dowolna usługa", "Zarezerwuj")}
              className={styles.btnPrimary}
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.hamburger}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileOverlay} ${
            mobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.mobileNav}>
            {["home", "services", "team", "contact"].map((tab) => (
              <span
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`${styles.navLink} ${
                  activeTab === tab ? styles.navLinkActive : ""
                }`}
              >
                {tab}
              </span>
            ))}
            <button
              onClick={() => {
                handleBook("Dowolna usługa", "Zarezerwuj");
                setMobileMenuOpen(false);
              }}
              className={styles.btnPrimary}
              style={{ width: "100%", textAlign: "center" }}
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerBg} />
        <span className={styles.subtitle}>Industrial Precision</span>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.desc}>
          Technical mastery meets monolithic style. A curated menu of grooming
          essentials for the discerning individual.
        </p>
      </header>

      {/* Main Services Sections */}
      <main className={styles.main}>
        {/* Popular Offers */}
        <section style={{ marginBottom: "120px" }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular Offers</h2>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.popularGrid}>
            {POPULAR_OFFERS.map((offer) => (
              <div key={offer.id} className={styles.popularCard}>
                {offer.isMostChosen && (
                  <span className={styles.cardBadge}>MOST CHOSEN</span>
                )}
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{offer.title}</h3>
                  <p className={styles.cardDesc}>{offer.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.cardPriceSection}>
                    <span className={styles.cardDuration}>
                      DURATION: {offer.duration}
                    </span>
                    <span className={styles.cardPrice}>{offer.price}</span>
                  </div>
                  <button
                    onClick={() => handleBook(offer.title, offer.price)}
                    className={styles.cardBtn}
                  >
                    BOOK
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories (Accordions) */}
        <section>
          {SERVICE_CATEGORIES.map((category) => {
            const isOpen = openAccordion === category.id;
            return (
              <div key={category.id} className={styles.categoryGroup}>
                <button
                  onClick={() => toggleAccordion(category.id)}
                  className={styles.accordionHead}
                >
                  <div className={styles.headLeft}>
                    <div className={styles.accIndicatorLine} />
                    <div>
                      <h2 className={styles.accTitle}>{category.title}</h2>
                      <span className={styles.accSubtitle}>
                        {category.subtitle}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${styles.chevron} ${
                      isOpen ? styles.chevronRotated : ""
                    }`}
                  >
                    <ChevronDown size={32} />
                  </div>
                </button>

                <div
                  className={`${styles.accordionContent} ${
                    isOpen ? styles.accordionContentActive : ""
                  }`}
                >
                  <div className={styles.servicesGrid}>
                    {category.services.map((srv, index) => (
                      <div key={index} className={styles.serviceItem}>
                        <div className={styles.serviceHeader}>
                          <h3 className={styles.serviceTitle}>{srv.name}</h3>
                          <div className={styles.serviceDotSpace} />
                          <span className={styles.servicePrice}>
                            {srv.price}
                          </span>
                        </div>
                        <div className={styles.serviceFooter}>
                          <span className={styles.serviceDuration}>
                            {srv.duration}
                          </span>
                          <button
                            onClick={() => handleBook(srv.name, srv.price)}
                            className={styles.serviceBtn}
                          >
                            UMÓW
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* Booking CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaOverlay}>
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80"
            alt="Concrete texture"
            className={styles.ctaImg}
          />
        </div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Secure Your Slot</h2>
          <p className={styles.ctaDesc}>
            Book instantly via Booksy. Digital reservation for physical
            precision.
          </p>
          <button
            onClick={() => handleBook("Główna Rezerwacja Online", "Booksy")}
            className={styles.ctaBtn}
          >
            RESERVE ONLINE
            <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrandCol}>
              <a href="#" className={styles.footerLogo}>
                LEGIT.
              </a>
              <p className={styles.footerDesc}>
                Industrial grooming infrastructure. Precision, craftsmanship,
                and a monolithic commitment to style.
              </p>
              <button
                onClick={() => handleBook("Dowolna usługa", "Zarezerwuj")}
                className={styles.footerBookBtn}
              >
                BOOK ONLINE
              </button>
            </div>

            <div>
              <h4 className={styles.colTitle}>NAVIGATE</h4>
              <nav className={styles.linksList}>
                <a href="#">THE STUDIO</a>
                <a href="#">SERVICES</a>
                <a href="#">PRODUCTS</a>
                <a href="#">FRANCHISE</a>
              </nav>
            </div>

            <div>
              <h4 className={styles.colTitle}>OPERATIONS</h4>
              <div className={styles.operationsContainer}>
                <div className={styles.operationRow}>
                  <span>MON - FRI</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className={styles.operationRow}>
                  <span>SATURDAY</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className={styles.operationRowClosed}>
                  <span>SUNDAY</span>
                  <span className={styles.italicClosed}>CLOSED</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className={styles.colTitle}>NETWORK</h4>
              <div className={styles.networkList}>
                <a href="#" className={styles.networkItem}>
                  <Globe size={16} /> INSTAGRAM
                </a>
                <a href="#" className={styles.networkItem}>
                  <Facebook size={16} /> FACEBOOK
                </a>
                <a href="#" className={styles.networkItem}>
                  <Youtube size={16} /> YOUTUBE
                </a>
              </div>
            </div>
          </div>

          <div className={styles.copyrightRow}>
            <p className={styles.copyrightText}>
              © 2026 LEGIT BARBERSHOP. REGISTERED TRADEMARK. INDUSTRIAL
              CRAFTSMANSHIP GUARANTEED.
            </p>
            <div className={styles.legalLinks}>
              <a href="#">Privacy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
