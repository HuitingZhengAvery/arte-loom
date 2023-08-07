import React, { useEffect, useRef, useState } from 'react';
import '../sass/home.scss'
const Home = () => {
    const sloganRef = useRef(null);
    const [isSloganInView, setIsSloganInView] = useState(false);

    useEffect(() => {
        const checkSloganInView = () => {
            if (sloganRef.current) {
                const rect = sloganRef.current.getBoundingClientRect();
                const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
                setIsSloganInView(isInView);
            }
        };
        window.addEventListener('scroll', checkSloganInView);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', checkSloganInView);
        };
    }, []);
    return (
        <div className={`home ${isSloganInView ? 'in-view' : ''}`}>
            <div className="bg"></div>
            <div className="slogan" ref={sloganRef}>Serenity Within, Elegance All Around</div>
        </div>
    )
}

export default Home;
