import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={styles.titleWrapper}>
      <div className={styles.titleGradientLine}></div>
      <h1 className={styles.titleText}>Исторические даты</h1>
    </div>
  );
};

export default Title;
