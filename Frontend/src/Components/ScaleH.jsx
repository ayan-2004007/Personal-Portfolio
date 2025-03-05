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
            { scale:1},
            {
                scale: 25,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin:true
                }
            }
        );

    }, []);

    return (
        <> 
            <div ref={containerRef} className="h-screen w-full flex items-center justify-center overflow-hidden">
                <h1 ref={textRef} className="font-sohne text-[138px] lg:text-[176px] xl:text-[218px] 2xl:text-[276px] text-black font-extrabold ">
                    HEY
                </h1>
            </div>
            <div className="h-screen w-full bg-black text-white -mt-40 relative z-10">
                <h1>
                    hello
                </h1>
            </div>
        </>
    );
};

export default ScaleH;
