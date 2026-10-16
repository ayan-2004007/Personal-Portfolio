"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Preloader from "./Preloader"
import HomeHero from "./HomeHero"
import Works from "./Works"
import Intro from "./Intro"
import Transition from "./Transition"
import Footer from "./Footer"

gsap.registerPlugin(ScrollTrigger)

const hasSeenPreloader = () => {
    try {
        return !!sessionStorage.getItem("hasSeenPreloader")
    } catch {
        return true
    }
}

const Home = () => {
    const [loading, setLoading] = useState(false)

    useLayoutEffect(() => {
        if (!hasSeenPreloader()) {
            setLoading(true)
        }
        document.documentElement.classList.remove("js-pending", "preload-pending")
    }, [])

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches
        const lenis = new Lenis({
            duration: isMobile ? 2 : 1,
            easing: isMobile
                ? (t) => t * t * t * (t * (t * 6 - 15) + 10)
                : (t) => t * (2 - t),
            smoothTouch: isMobile,
            inertia: isMobile ? 0.55 : 0.95,
            syncTouch: true,
        })

        let frameId
        function raf(time) {
            lenis.raf(time)
            ScrollTrigger.update()
            frameId = requestAnimationFrame(raf)
        }
        frameId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(frameId)
            lenis.destroy()
        }
    }, [])

    // ScrollTrigger measures positions once. Re-measure whenever the page height
    // changes (late images, fonts, pin spacers) and keep triggers in page order,
    // otherwise animations further down fire at the wrong scroll position
    // (most visible after navigating back from /contact).
    useEffect(() => {
        if (loading) return
        const content = document.querySelector(".site-content")
        if (!content) return
        const refresh = () => {
            ScrollTrigger.sort?.()
            ScrollTrigger.refresh()
        }
        let timer
        const scheduleRefresh = () => {
            clearTimeout(timer)
            timer = setTimeout(refresh, 200)
        }
        const observer = new ResizeObserver(scheduleRefresh)
        observer.observe(content)
        document.fonts?.ready.then(scheduleRefresh)
        window.addEventListener("load", scheduleRefresh)
        scheduleRefresh()
        return () => {
            clearTimeout(timer)
            observer.disconnect()
            window.removeEventListener("load", scheduleRefresh)
        }
    }, [loading])

    return (
        <>
            {loading ? (
                <Preloader
                    onComplete={() => {
                        try {
                            sessionStorage.setItem("hasSeenPreloader", "true")
                        } catch {}
                        setLoading(false)
                    }}
                />
            ) : (
                <main className="site-content overflow-x-hidden flex flex-col gap-[156px]">
                    <div className="flex flex-col gap-[48px] xl:gap-[100px] 2xl:gap-[156px]">
                        <div>
                            <HomeHero />
                        </div>
                        <Works />
                        <div>
                            <Intro />
                            <Transition />
                            <Footer />
                        </div>
                    </div>
                </main>
            )}
        </>
    )
}

export default Home
