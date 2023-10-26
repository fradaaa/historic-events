import { ComponentPropsWithoutRef } from "react";
import styles from "./PeriodsControls.module.scss";

type PeriodsControlsProps = {
  currentPeriod: number;
  maxPeriods: number;
  prevPeriod: () => void;
  nextPeriod: () => void;
};

const PeriodsControls = ({
  currentPeriod,
  maxPeriods,
  prevPeriod,
  nextPeriod,
}: PeriodsControlsProps) => {
  const disabledPrev = currentPeriod === 0;
  const disabledNext = currentPeriod + 1 === maxPeriods;

  return (
    <div className={styles.controlsWrapper}>
      <div className={styles.controlsState}>
        <span>
          0{currentPeriod + 1}/0{maxPeriods}
        </span>
      </div>
      <div className={styles.buttonsWraper}>
        <IconButton
          text="previous"
          disabled={disabledPrev}
          onClick={prevPeriod}
        />
        <IconButton text="next" disabled={disabledNext} onClick={nextPeriod} />
      </div>
    </div>
  );
};

type IconButtonProps = ComponentPropsWithoutRef<"button"> & {
  text: string;
};

const IconButton = ({ text, ...props }: IconButtonProps) => {
  return (
    <button type="button" className={styles.button} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="transparent"
        aria-hidden={true}
      >
        <circle
          cx="25"
          cy="25"
          r="24.5"
          transform="matrix(-1 0 0 1 50 0)"
          stroke="#42567A"
          strokeOpacity="0.5"
        />
        <path
          d="M27.4999 18.75L21.2499 25L27.4999 31.25"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
      <span className="sr-only">{text}</span>
    </button>
  );
};

export default PeriodsControls;
