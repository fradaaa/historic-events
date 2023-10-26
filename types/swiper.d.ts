import { DetailedHTMLProps } from "react";

import type { SwiperProps, SwiperSlideProps } from "swiper/react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      "swiper-slide": DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}
