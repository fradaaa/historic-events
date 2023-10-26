import { CSSProperties } from "react";
import { getCoords } from "../../utils/getCoords";
import PeriodItem from "./PeriodItem";
import styles from "./TimePeriod.module.css";

type TimePeriodsProps = {
  selectedPeriod: number;
  angleBetween: number;
  rotateAngle: number;
  periods: TimeSlice[];
  rotateTo: (order: number) => void;
};

const TimePeriods = ({
  selectedPeriod,
  angleBetween,
  rotateAngle,
  periods,
  rotateTo,
}: TimePeriodsProps) => {
  const counterAngle = (angle: number) =>
    angle > 0 ? `-${angle}` : Math.abs(angle);

  return (
    <div className={styles.circle}>
      <div
        className={styles.rotate}
        style={{
          transform: `rotate(${rotateAngle}deg)`,
        }}
      >
        <div className={styles.circleCentre}>
          {periods.map(({ title }, i) => {
            const [x, y] = getCoords(angleBetween * i);
            const style: CSSProperties = {
              transform: `translate(${-x}px, ${-y}px) rotate(${counterAngle(
                rotateAngle,
              )}deg)`,
            };

            return (
              <div key={i} style={style} className={styles.itemWrapper}>
                <PeriodItem
                  order={i}
                  text={title}
                  selectedPeriod={selectedPeriod}
                  rotateTo={rotateTo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimePeriods;
