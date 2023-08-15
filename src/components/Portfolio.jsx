import { tabs } from "../utils/constants";
import "../sass/portfolio.scss";
import dinning from "../dinning.jpeg";
import powder from "../powder.jpeg";
import stairs from "../stairs.jpeg";
import bath from "../bath.jpeg";

const Portfolio = ({setTab}) => {
    const handleTabToAbout = () => {
        setTab(tabs.about);
    }
    const handleTabToOffer = () => {
        setTab(tabs.intro);
    }
    return (
        <div className="lead">
            <div>
            As detailed in <a className="switch-tab" onClick={handleTabToAbout}>our narrative</a>, our designer is making a transition from architectural design to the world of interior design. Simultaneously, we are enthusiastically engaged in <a className="switch-tab" onClick={handleTabToOffer}>interior design projects</a> that are enriching our portfolio with stunning before-and-after photos. Take a moment to appreciate some visuals from our past accomplishments.</div>
            <div className="images">
                <img src={dinning} alt="dinning" className="portfolio"></img>
                <img src={stairs} alt="stairs" className="portfolio"></img>
                <img src={powder} alt="powder" className="portfolio"></img>
                <img src={bath} alt="bath" className="portfolio"></img>
            </div>
        </div>

    )
}

export default Portfolio;