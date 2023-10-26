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
  const [selectedPeriod, setSelectedPeriod] = useState(1);

  const angleBetween = 360 / periodsCount;

  const rotateTo = (order: number) => {
    setRotateAngle(120 - (order - 1) * angleBetween);
    setSelectedPeriod(order);
  };

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
            };

            return (
              <div key={i} style={style} className={styles.itemWrapper}>
                <PeriodItem
                  order={i + 1}
                  text="Period"
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
