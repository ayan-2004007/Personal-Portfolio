import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const TransitionOverlay = ({ onComplete }) => {
  const barsRef = useRef([]);
  const container = useRef();

  useGSAP(() => {
    let tl = gsap.timeline({
      onComplete: () => onComplete?.()
    });

    tl.to(barsRef.current, {
      y: 0,
      duration: 0.5,
      stagger: {
        each: 0.1,
        from: "end"
      },
      ease: "power4.out"
    });

    // Disappear after short delay
    tl.to(barsRef.current, {
      y: "-100%",
      duration: 0.6,
      stagger: {
        each: 0.1,
        from: "start"
      },
      delay: 0.3,
      ease: "power4.in"
    });
  }, { scope: container });

  return (
    <div ref={container} className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none overflow-hidden">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={el => el && (barsRef.current[i] = el)}
          className="absolute bottom-0 w-1/4 h-full bg-black"
          style={{
            left: `${i * 25}%`,
            transform: "translateY(100%)"
          }}
        />
      ))}
    </div>
  );
};

export default TransitionOverlay;
