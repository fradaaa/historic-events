import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import styles from "./EventsSlider.module.css";
import SliderButton from "./SliderButton";

type EventsSliderProps = {
  events: TimeSliceEvent[];
};

const EventsSlider = ({ events }: EventsSliderProps) => {
  // eslint-disable-next-line
  const swiperRef = useRef<any>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesPerView = 3;

  useEffect(() => {
    register();

    const params = {
      spaceBetween: 80,
      slidesPerView,
    };

    Object.assign(swiperRef.current, params);

    if (swiperRef.current) {
      swiperRef.current.initialize();
      swiperInstanceRef.current = swiperRef.current.swiper as Swiper;

      swiperInstanceRef.current.on("activeIndexChange", (e: Swiper) => {
        setActiveIndex(e.activeIndex);
      });
    }
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
      <SliderButton onClick={slidePrev} hide={hidePrev} />
      <SliderButton onClick={slideNext} hide={hideNext} />
    </div>
  );
};

export default EventsSlider;
