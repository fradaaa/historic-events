import { useEffect, useState } from "react";
import styles from "./App.module.css";
import EventsSlider from "./components/EventsSlider/EventsSlider";
import Fade from "./components/Fade/Fade";
import MobileEvents from "./components/MobileEvents/MobileEvents";
import MobilePagination from "./components/MobilePagination/MobilePagination";
import PeriodYears from "./components/PeriodYears/PeriodYears";
import PeriodsControls from "./components/PeriodsControls/PeriodsControls";
import TimePeriods from "./components/TimePeriods/TimePeriods";
import Title from "./components/Title/Title";
import { useDebounce } from "./hooks/useDebounce";
import { data } from "./sampleData";

const App = () => {
  const defaultAngle = 120;
  const angleBetween = 360 / data.length;

  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [rotateAngle, setRotateAngle] = useState(defaultAngle);

  const { startYear, endYear, events, title } = data[selectedPeriod];

  const [key, setKey] = useState(`${startYear}-${endYear}`);

  useEffect(() => {
    const newKey = `${startYear}-${endYear}`;

    const counter = setTimeout(() => {
      setKey(newKey);
    }, 700);

    return () => {
      clearTimeout(counter);
    };
  }, [startYear, endYear]);

  const changeSelectedPeriod = (period: number) => {
    setSelectedPeriod(period);
  };

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

  const showEvents = key === `${startYear}-${endYear}`;
  const debEvents = useDebounce(events, 700);
  const dbTitle = useDebounce(title, 500);

  return (
    <main className={styles.main}>
      <div className={styles.vLine}></div>
      <div className={styles.hLine}></div>
      <Title />
      <PeriodYears startYear={startYear} endYear={endYear} />
      <MobileEvents title={dbTitle} show={showEvents} events={debEvents} />
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
      <div className={styles.events}>
        <Fade show={showEvents}>
          <EventsSlider events={debEvents} spaceBetween={80} />
        </Fade>
      </div>
      <MobilePagination
        currentPeriod={selectedPeriod}
        maxPeriods={data.length}
        changeSelectedPeriod={changeSelectedPeriod}
      />
    </main>
  );
};

export default App;
