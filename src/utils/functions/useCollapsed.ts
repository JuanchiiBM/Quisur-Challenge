import { useEffect, useState } from "react";

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);

    const handleResize = () => {
        if (window.innerWidth < 640) {
            setCollapsed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize(); // Check on mount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { collapsed, setCollapsed };
}

export default useCollapsed
