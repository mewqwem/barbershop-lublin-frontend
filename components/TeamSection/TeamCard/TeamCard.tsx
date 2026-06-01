import Image from "next/image";
import css from "./TeamCard.module.css";
import { Team } from "@/types/team";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface TeamCardProps {
  teamMember: Team;
}

const TeamCard = ({ teamMember }: TeamCardProps) => {
  return (
    <li className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          className={css.image}
          src={teamMember.img.src}
          alt={teamMember.img.alt}
          width={220}
          height={220}
        ></Image>
      </div>
      <div className={css.contentWrapper}>
        <h3 className={css.title}>{teamMember.name}</h3>
        <p className={css.text}>{teamMember.position}</p>
        <Link className={css.link} href={"/team"}>
          Pelny profile <FaArrowRight />
        </Link>
      </div>
    </li>
  );
};

export default TeamCard;
