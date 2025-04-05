import { useState, useEffect } from 'react'

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        console.log(isMobile)
    }, [isMobile])

    return {isMobile, setIsMobile}
}

export default useIsMobile