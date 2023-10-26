import styles from "./App.module.css";
import HistoricEventsBlock from "./components/HistoricEventsBlock";
import { data } from "./sampleData";

const App = () => {
  return (
    <main className={styles.main}>
      <HistoricEventsBlock data={data} />
      <HistoricEventsBlock data={data} />
    </main>
  );
};

export default App;
