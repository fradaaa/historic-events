import { useState } from "react";
import styles from "./App.module.css";
import PeriodsControls from "./components/PeriodsControls/PeriodsControls";
import TimePeriods from "./components/TimePeriods/TimePeriods";
import Title from "./components/Title/Title";

import { data } from "./sampleData";
import PeriodYears from "./components/PeriodYears/PeriodYears";
import EventsSlider from "./components/EventsSlider/EventsSlider";

const App = () => {
  const defaultAngle = 120;
  const angleBetween = 360 / data.length;

  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [rotateAngle, setRotateAngle] = useState(defaultAngle);

  const rotateTo = (order: number) => {
    setRotateAngle(defaultAngle - order * angleBetween);
    setSelectedPeriod(order);
  };

  const nextPeriod = () => {
    if (selectedPeriod + 1 === data.length) return;

    setSelectedPeriod(selectedPeriod + 1);
    setRotateAngle(defaultAngle - (selectedPeriod + 1) * angleBetween);
  };

  const prevPeriod = () => {
    if (selectedPeriod === 0) return;

    setSelectedPeriod(selectedPeriod - 1);
    setRotateAngle(defaultAngle - (selectedPeriod - 1) * angleBetween);
  };

  const { startYear, endYear, events } = data[selectedPeriod];

  return (
    <main className={styles.main}>
      <div className={styles.vLine}></div>
      <div className={styles.hLine}></div>
      <Title />
      <TimePeriods
        selectedPeriod={selectedPeriod}
        angleBetween={angleBetween}
        rotateAngle={rotateAngle}
        periods={data}
        rotateTo={rotateTo}
      />
      <PeriodsControls
        currentPeriod={selectedPeriod}
        maxPeriods={data.length}
        prevPeriod={prevPeriod}
        nextPeriod={nextPeriod}
      />
      <PeriodYears startYear={startYear} endYear={endYear} />
      <EventsSlider events={events} />
    </main>
  );
};

export default App;
