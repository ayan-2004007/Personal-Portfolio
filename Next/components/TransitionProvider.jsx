"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import PageTransition from "./PageTransition"

const TransitionContext = createContext(() => {})

export const useTransitionPath = () => useContext(TransitionContext)

const TransitionProvider = ({ children }) => {
    const router = useRouter()
    const pathname = usePathname()

    const [isTransitioning, setIsTransitioning] = useState(false)
    const [targetPath, setTargetPath] = useState(null)
    const targetRef = useRef(null)

    const setTransitionPath = useCallback((path) => {
        router.prefetch(path)
        targetRef.current = path
        setTargetPath(path)
        setIsTransitioning(true)
    }, [router])

    const handleTransitionComplete = useCallback(() => {
        if (targetRef.current) {
            router.push(targetRef.current)
        }
    }, [router])

    useEffect(() => {
        if (targetPath && pathname === targetPath) {
            targetRef.current = null
            setTargetPath(null)
            setIsTransitioning(false)
        }
    }, [pathname, targetPath])

    return (
        <TransitionContext.Provider value={setTransitionPath}>
            <PageTransition isActive={isTransitioning} onComplete={handleTransitionComplete} />
            {children}
        </TransitionContext.Provider>
    )
}

export default TransitionProvider
