import styles from "./PeriodItem.module.scss";

type PeriodItemProps = {
  order: number;
  text: string;
};

const PeriodItem = ({ order, text }: PeriodItemProps) => {
  const itemClassName = `${styles.periodItem} ${
    order === 1 ? styles.selected : ""
  }`;

  return (
    <div className={itemClassName}>
      <div className={styles.periodDot}></div>
      <span className={styles.periodItemOrder}>{order}</span>
      <p className={styles.periodItemText}>{text}</p>
    </div>
  );
};

export default PeriodItem;
