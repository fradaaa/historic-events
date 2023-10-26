import { useEffect, useRef } from "react";
import styles from "./PeriodYears.module.css";

type PeriodYearsProps = {
  startYear: number;
  endYear: number;
};

const PeriodYears = ({ startYear, endYear }: PeriodYearsProps) => {
  return (
    <div className={styles.yearsWrapper}>
      <Year year={startYear} />
      <span>&nbsp;</span>
      <Year year={endYear} />
    </div>
  );
};

const Year = ({ year }: { year: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const interval = 400;

  useEffect(() => {
    if (divRef.current) {
      if (!divRef.current.textContent) {
        divRef.current.textContent = String(year);
      } else {
        let start = Number(divRef.current.textContent);
        const end = year;

        const duration = Math.floor(interval / Math.abs(end - +start));
        intervalRef.current = setInterval(() => {
          if (year > start) {
            start += 1;
          } else {
            start -= 1;
          }
          divRef.current!.textContent = String(start);

          if (start === end) {
            clearInterval(intervalRef.current!);
          }
        }, duration);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [year]);

  return <div ref={divRef}></div>;
};

export default PeriodYears;
