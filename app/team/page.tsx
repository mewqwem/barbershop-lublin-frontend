import React from "react";
import css from "./Team.module.css";
import { teamMembers } from "@/constants/team";
import TeamCardFull from "@/components/TeamSection/TeamCardFull/TeamCardFull";

const page = () => {
  return (
    <section className={css.servicesSection}>
      <div className="container">
        <h2 className={css.sectionTitle}>Nasz Zespol</h2>
        <h3 className={css.sectionDescription}>
          Poznaj mistrzów fryzjerstwa męskiego. Każdy z nas to pasjonat, który
          kocha swoją pracę.
        </h3>
        <ul className={css.teamList}>
          {teamMembers.map((i) => (
            <TeamCardFull key={i.socialMedia} teamMember={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
