import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = (() => {  
    const cursorRef=useRef(null)
    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX-40/2,
                y: e.clientY-40/2,
                duration: 0.5,
                delay:0.1,
                ease: "power4.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cursorRef]);

    return (
        <div
            ref={cursorRef} 
            className="hidden lg:block fixed top-0 left-0 h-[40px] w-[40px] border-2 border-[#212121] rounded-full z-20 pointer-events-none"
        ></div>
    );
});


export default Cursor;
