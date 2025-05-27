import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Cursor = () => {
    const cursorRef = useRef(null)
    const dotRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursorSize = 50
            const dotSize = 8
            gsap.to(cursorRef.current, {
                x: e.clientX - cursorSize / 2,
                y: e.clientY - cursorSize / 2,
                duration: 0.5,
                delay: 0.1,
                ease: "power4.out",
            })
            gsap.to(dotRef.current, {
                x: e.clientX - dotSize / 2,
                y: e.clientY - dotSize / 2,
                duration: 0.2,
                ease: "power2.out",
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className="hidden lg:flex fixed top-0 left-0 h-[50px] w-[50px] border-2 border-[#212121] rounded-full z-20 pointer-events-none"
            ></div>
            <div
                ref={dotRef}
                className="hidden lg:flex fixed top-0 left-0 h-2 w-2 bg-[#121212] rounded-full z-30 pointer-events-none"
            ></div>
        </>
    )
}

export default Cursor
