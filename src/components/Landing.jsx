import React, { useState } from "react";
import { tabs } from "../utils/constants.js";
import Header from "./Header.jsx";
import Tab from "./Tab";
import Home from "./Home";
import About from "./About";
import IntroductoryOffer from "./IntroductoryOffer";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import "../sass/landingPage.scss";

const Landing = () => {
  const [tab, setTab] = useState(tabs.home);
  const [error, setError] = useState(false);

  const handleTabClick = (tab) => {
    setTab(tab);
  };

  return (
    <>
      {!error && <div className="landing">
        <Header />
        <div className="tab-container">
          {Object.keys(tabs).map(key => <Tab key={key} label={tabs[key]} selectedTab={tab} onClick={handleTabClick}/>)}
        </div>

        <div className="main-content">
          {tab === tabs.home && <Home />}
          {tab === tabs.about && <About />}
          {tab === tabs.intro && <IntroductoryOffer />}
          {tab === tabs.portfolio && <Portfolio />}
          {tab === tabs.contact && <Contact />}
        </div>
      </div>}
      {error && <ErrorPage />}
    </>
  );
};

export default Landing;
