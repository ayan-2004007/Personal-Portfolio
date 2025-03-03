import React, { useEffect, forwardRef } from "react";
import { gsap } from "gsap";

const Cursor = forwardRef((props, ref) => {  // Accept props and ref
    useEffect(() => {
        if (!ref || !ref.current) return;

        const handleMouseMove = (e) => {
            gsap.to(ref.current, {
                x: e.clientX - 10,
                y: e.clientY - 10,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [ref]);

    return (
        <div
            id="cursor"
            ref={ref} // Forward ref properly
            className="fixed top-0 left-0 h-[20px] w-[20px] bg-[#121212] rounded-full z-20 pointer-events-none"
        ></div>
    );
});

export default Cursor;
