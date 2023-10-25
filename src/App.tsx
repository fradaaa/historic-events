import styles from "./App.module.css";
import TimePeriods from "./components/TimePeriods/TimePeriods";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <main className={styles.main}>
      <div className={styles.vLine}></div>
      <div className={styles.hLine}></div>
      <Title />
      <TimePeriods />
    </main>
  );
};

export default App;
