import React from "react";
import css from "./TeamSection.module.css";
import { teamMembers } from "@/constants/team";
import TeamCard from "./TeamCard/TeamCard";

const TeamSection = () => {
  return (
    <section className={css.teamSection}>
      <div className="container">
        <h2 className={css.sectionTitle}>Poznaj naszych mistrzów</h2>
        <h3></h3>
        <ul className={css.teamList}>
          {teamMembers.map((i) => (
            <TeamCard key={i.socialMedia} teamMember={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamSection;
