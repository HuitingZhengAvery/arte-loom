import React, { useEffect, useRef, useState } from 'react';
import '../sass/home.scss'
const Home = () => {
    const sloganRef = useRef(null);
    const [isSloganInView, setIsSloganInView] = useState(false);

    useEffect(() => {
        setIsSloganInView(true);
    }, []);
    return (
        <div className={`home ${isSloganInView ? 'in-view' : ''}`}>
            <div className="bg"></div>
            <div className="slogan" ref={sloganRef}>Serenity Within, Elegance All Around</div>
        </div>
    )
}

export default Home;
