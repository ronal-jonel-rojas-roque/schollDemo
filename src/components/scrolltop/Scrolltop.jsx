import React, { useEffect, useState } from 'react'
import "./scrolltop.css"
import { FiArrowUp } from "react-icons/fi";

export default function Scrolltop() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {showScrollButton && (
                <button className="ScrollToTopButton" onClick={scrollToTop}>
                    <FiArrowUp />

                </button>
            )}
        </div>
    )
}
