"use client";

import css from "./BurgerMenu.module.css";

interface BurgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const BurgerMenu = ({ isOpen, onToggle }: BurgerMenuProps) => {
  return (
    <button
      className={`${css.burger} ${isOpen ? css.open : ""}`}
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className={css.line}></span>
      <span className={css.line}></span>
      <span className={css.line}></span>
    </button>
  );
};
