import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import styles from "./EventsSlider.module.css";
import SliderButton from "./SliderButton";

type EventsSliderProps = {
  events: TimeSliceEvent[];
  spaceBetween: number;
  slidesPerView?: number;
};

type SwiperRef = HTMLElement & {
  initialize: () => void;
  swiper: Swiper;
};

const EventsSlider = ({
  events,
  spaceBetween,
  slidesPerView = 3,
}: EventsSliderProps) => {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    register();

    const params = {
      slidesPerView,
      spaceBetween,
    };

    if (swiperRef.current) {
      Object.assign(swiperRef.current, params);

      swiperRef.current.initialize();
      swiperInstanceRef.current = swiperRef.current.swiper;

      swiperInstanceRef.current.on("activeIndexChange", (e: Swiper) => {
        setActiveIndex(e.activeIndex);
      });
    }
    // eslint-disable-next-line
  }, []);

  const hidePrev = activeIndex === 0;
  const hideNext = activeIndex === events.length - slidesPerView;

  const slidePrev = () => {
    swiperInstanceRef.current?.slidePrev();
  };

  const slideNext = () => {
    swiperInstanceRef.current?.slideNext();
  };

  return (
    <div className={styles.swiperContainer}>
      <swiper-container ref={swiperRef} init={false}>
        {events.map(({ eventDetails, year }, i) => (
          <swiper-slide key={i + year}>
            <p className={styles.eventYear}>{year}</p>
            <p className={styles.eventDetails}>{eventDetails}</p>
          </swiper-slide>
        ))}
      </swiper-container>
      <SliderButton onClick={slidePrev} hide={hidePrev} aria-label="previous" />
      <SliderButton onClick={slideNext} hide={hideNext} aria-label="next" />
    </div>
  );
};

export default EventsSlider;
