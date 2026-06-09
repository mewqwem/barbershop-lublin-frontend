import { MdArchitecture, MdGroups2 } from "react-icons/md";
import css from "./WhyUsSection.module.css";

export default function WhyUsSection() {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className="sectionTitle">Dlaczego My?</h2>
        <div className={css.grid}>
          <div className={css.imageSide}>
            <div className={css.decorativeBox}></div>
            <div className={css.imageContainer}>
              <img
                className={css.image}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2PelLV0_l94nEqXpfM1FNeUAsd3OVKvl2AIBLaRpyDKk7Pb6vmxEYAEpCpd9qithpAVn0IJqt5mYbSW_LzktvTa4bNfcJiFjOegV5Om768QarA_2Gd3bFENO5oDUoO2VeAmSpIUG7-e-doQ6AYco0ISqTeVy2hV0hiRRbt2o9SbKt_wO3leVoTB6-qyjwh2N6VUUsNN6T5QiItWgq_rlaElCUhEdC34KUkaG5WebFHSrpAy-vNFdBuyCtrcqxKLF3zKhAU-IYfzI"
                alt="Craftsmanship execution"
              />
            </div>
            <div className={css.watermark}>01</div>
          </div>
          <div className={css.contentSide}>
            <div className={css.featuresList}>
              <div className={css.featureItem}>
                <MdArchitecture className={` ${css.icon}`} />
                <div className={css.featureText}>
                  <h3 className={css.featureTitle}>Ekstremalna Precyzja</h3>
                  <p className={css.featureDesc}>
                    Uczymy nie tylko cięcia, ale geometrii męskiej twarzy. Każdy
                    ruch brzytwy musi być świadomy i perfekcyjny.
                  </p>
                </div>
              </div>
              <div className={css.featureItem}>
                <MdGroups2 className={` ${css.icon}`} />
                <div className={css.featureText}>
                  <h3 className={css.featureTitle}>Mistrzowie Rzemiosła</h3>
                  <p className={css.featureDesc}>
                    Nasi edukatorzy to aktywni barberzy z wieloletnim
                    doświadczeniem w branży high-end. Żadnej teorii z książek,
                    tylko żywa praktyka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
