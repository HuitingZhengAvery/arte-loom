import '../sass/intro.scss';
import icon from '../lamp.svg';
import { eligibility, tabs, benefits } from '../utils/constants';
const IntroductoryOffer = ({setTab}) => {
    const handleSetTab = () => {
        setTab(tabs.contact);
    }
    return (
        <div className="intro">
            <div className="ad">
                <div className="headline">Starting from $300! Unlock Your Dream Space with Our Introductory Offer!</div>
                <div className="description">Transform Your Interiors at Unbeatable Design Fees - Starting from $300, Maxing out at $550 depending on the complexity of the project.</div>
                <div className="description">For a Limited Time, Experience Maximum Elegance.</div>
                <div className="headline">
                    Check if you're eligible for this offer
                </div>
                <div className='checklist'>
                    {eligibility.map((item, idx) => (
                        <div key={idx} className='item'>
                            <img className="item-icon" src={icon} alt="Icon" />
                            <span className='item-text'>{item}</span>
                        </div>
                    ))}
                </div>
                <div className="headline">
                    Our guarantees
                </div>
                <div className='checklist'>
                    {benefits.map((item, idx) => (
                        <div key={idx} className='item'>
                            <img className="item-icon" src={icon} alt="Icon" />
                            <span className='item-text'>{item}</span>
                        </div>
                    ))}
                </div>
                <div className='end'>
                    If you're interested, please don't hesitate to <a className='contact-link' onClick={handleSetTab}>contact us</a>. Whether or not we get to enjoy this amazing experience together, wish you all the best in making your dream space!
                </div>
            </div>
        </div>
    )
}

export default IntroductoryOffer;
