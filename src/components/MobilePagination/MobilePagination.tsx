import styles from "./MobilePagination.module.css";

type MobilePaginationProps = {
  currentPeriod: number;
  maxPeriods: number;
  changeSelectedPeriod: (period: number) => void;
};

const MobilePagination = ({
  currentPeriod,
  maxPeriods,
  changeSelectedPeriod,
}: MobilePaginationProps) => {
  const buttonClassName = (i: number) =>
    `${styles.button} ${i === currentPeriod ? styles.selected : ""}`;

  return (
    <div className={styles.paginationWrapper}>
      {new Array(maxPeriods).fill("").map((_, i) => (
        <button
          key={i}
          type="button"
          className={buttonClassName(i)}
          onClick={() => changeSelectedPeriod(i)}
        >
          <div></div>
          <span className="sr-only">{`${currentPeriod} / ${maxPeriods}`}</span>
        </button>
      ))}
    </div>
  );
};

export default MobilePagination;
