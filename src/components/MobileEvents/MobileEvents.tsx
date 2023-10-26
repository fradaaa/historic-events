import EventsSlider from "../EventsSlider/EventsSlider";
import Fade from "../Fade/Fade";
import styles from "./MobileEvents..module.css";

type MobileEventsProps = {
  title: string;
  show: boolean;
  events: TimeSliceEvent[];
};

const MobileEvents = ({ title, show, events }: MobileEventsProps) => {
  return (
    <div className={styles.wrapper}>
      <Fade show={show}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{title}</p>
        </div>
        <EventsSlider events={events} spaceBetween={25} slidesPerView={1.5} />
      </Fade>
    </div>
  );
};

export default MobileEvents;
