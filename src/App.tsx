import { useState } from "react";
import styles from "./App.module.css";
import PeriodsControls from "./components/PeriodsControls/PeriodsControls";
import TimePeriods from "./components/TimePeriods/TimePeriods";
import Title from "./components/Title/Title";

import { data } from "./sampleData";

const App = () => {
  const [selectedTime, setSelectedTime] = useState(0);

  const nextPeriod = () => {
    if (selectedTime + 1 === data.length) return;

    setSelectedTime(selectedTime + 1);
  };

  const prevPeriod = () => {
    if (selectedTime === 0) return;

    setSelectedTime(selectedTime - 1);
  };

  return (
    <main className={styles.main}>
      <div className={styles.vLine}></div>
      <div className={styles.hLine}></div>
      <Title />
      <TimePeriods />
      <PeriodsControls
        currentPeriod={selectedTime}
        maxPeriods={data.length}
        prevPeriod={prevPeriod}
        nextPeriod={nextPeriod}
      />
    </main>
  );
};

export default App;
