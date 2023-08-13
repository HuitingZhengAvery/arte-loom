import '../sass/about.scss';
import { about } from '../utils/constants';
const About = () => {
    return (
        <>
            <div className="about">
                <div className='sub-header'>Redefining Spaces with Comfort and Purpose</div>
                {about.map((paragraph, idx) => (
                    <div className='paragraph' key={idx}>{paragraph}</div>
                ))}
            </div>
        </>
    )
}

export default About;
