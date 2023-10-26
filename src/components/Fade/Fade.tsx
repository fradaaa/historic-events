import { PropsWithChildren, useEffect, useState } from "react";
import "./Fade.css";

type FadeProps = {
  show: boolean;
};

const Fade = ({ show, children }: PropsWithChildren<FadeProps>) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <div
        style={{
          animationName: `${show ? "fadeIn" : "fadeOut"}`,
          animationDuration: `${show ? ".3s" : ".5s"}`,
          animationFillMode: "both",
          animationDelay: `${show ? ".1s" : "0s"}`,
          animationTimingFunction: "ease-in-out",
          position: "relative",
        }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;
