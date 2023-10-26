import styles from "./PeriodItem.module.scss";

type PeriodItemProps = {
  order: number;
  text: string;
  selectedPeriod: number;
  rotateTo: (order: number) => void;
};

const PeriodItem = ({
  order,
  text,
  selectedPeriod,
  rotateTo,
}: PeriodItemProps) => {
  const itemClassName = `${styles.periodItem} ${
    order === selectedPeriod ? styles.selected : ""
  }`;

  return (
    <div className={itemClassName} onClick={() => rotateTo(order)}>
      <div className={styles.periodDot}></div>
      <span className={styles.periodItemOrder}>{order + 1}</span>
      <p className={styles.periodItemText}>{text}</p>
    </div>
  );
};

export default PeriodItem;
