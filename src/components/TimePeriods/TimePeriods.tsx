import { useState, CSSProperties } from "react";
import styles from "./TimePeriod.module.css";
import { getCoords } from "../../utils/getCoords";
import PeriodItem from "./PeriodItem";

type TimePeriodsProps = {
  periodsCount?: number;
};

const defaultAngle = 120;

const TimePeriods = ({ periodsCount = 6 }: TimePeriodsProps) => {
  const [rotateAngle, setRotateAngle] = useState(defaultAngle);

  const angleBetween = 360 / periodsCount;

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
          {new Array(periodsCount).fill("").map((_, i) => {
            const [x, y] = getCoords(angleBetween * i);
            const style: CSSProperties = {
              transform: `translate(${-x}px, ${-y}px) rotate(${counterAngle(
                rotateAngle,
              )}deg)`,
              position: "absolute",
            };

            return (
              <div key={i} style={style} className={styles.test}>
                <PeriodItem order={i + 1} text="Period" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimePeriods;
