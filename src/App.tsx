import Title from "./components/Title/Title";
import styles from "./App.module.css";

const App = () => {
  return (
    <main className={styles.main}>
      <div className={styles.vLine}></div>
      <div className={styles.hLine}></div>
      <Title />
    </main>
  );
};

export default App;
