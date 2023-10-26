import { ComponentPropsWithoutRef } from "react";
import styles from "./SliderButton.module.css";

type SliderButtonProps = ComponentPropsWithoutRef<"button"> & {
  hide: boolean;
};

const SliderButton = ({ hide, ...props }: SliderButtonProps) => {
  const buttonClassName = `${styles.button} ${hide ? styles.hidden : ""}`;

  return (
    <button type="button" className={buttonClassName} {...props}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="white" />
        <path d="M18 15L23 20L18 25" stroke="#3877EE" strokeWidth="2" />
      </svg>
    </button>
  );
};

export default SliderButton;
