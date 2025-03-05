import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScaleH = () => {
    const textRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            textRef.current,
            { scale:0.2},
            {
                scale: 100,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=1000%",
                    scrub: true
                }
            }
        );
    }, []);

    return (
        <> 
            <div ref={containerRef} className="h-screen w-full flex items-center justify-center relative z-0">
                <h1 ref={textRef} className="font-sohne text-[256px] text-black font-black tracking-tighter relative z-0">
                    HEY
                </h1>
            </div>
            <div className="h-screen w-full bg-black text-white z-10">
                <h1>
                    hello
                </h1>
            </div>
        </>
    );
};

export default ScaleH;
