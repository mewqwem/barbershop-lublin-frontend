import Image from "next/image";
import css from "./TeamCardFull.module.css";
import { Team } from "@/types/team";
import { PiMedalFill } from "react-icons/pi";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";

interface TeamCardFullProps {
  teamMember: Team;
}

const TeamCardFull = ({ teamMember }: TeamCardFullProps) => {
  return (
    <li className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          className={css.image}
          src={teamMember.img.src}
          alt={teamMember.img.alt}
          sizes="185px"
          fill
        ></Image>
      </div>
      <div className={css.contentWrapper}>
        <p className={css.experience}>
          <PiMedalFill /> {teamMember.experience}
        </p>
        <h3 className={css.title}>{teamMember.name}</h3>
        <p className={css.text}>{teamMember.position}</p>
        <div className={css.specialtyWrapper}>
          <p className={css.specialtyTitle}>Specjalizacja:</p>
          <p className={css.specialtyText}>{teamMember.specialty}</p>
        </div>
        <Link
          href={`https://www.instagram.com/@${teamMember.socialMedia}`}
          className={css.socialMedia}
          target="_blank"
          rel="noopener nooferer"
        >
          <IoLogoInstagram />@{teamMember.socialMedia}
        </Link>
      </div>
    </li>
  );
};

export default TeamCardFull;
