import React, { useState } from "react";
import Calendar from "../../Components/DatePicker";
import "../../styles/pages/home-page.scss";
import Time from "../../Components/TimePicker";
import { transportTypes, countries } from "../../Models/SelectableItems";
import SelectorBox from "../../Components/SelectorBoxes";
import "../../styles/components/card.scss";
import CardItem from "../../Components/Card";
import about from "../../assets/Home/about.png";

const HomePage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [country, setCountry] = useState<string>("");
  const [transport, setTransport] = useState<string>("");
  React.useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <div className="travelling-selector">
        <div>
          <h1 className="main-title">Enjoy in the best way!</h1>
          <h3 className="subtitle">Enjoy our services for your trip anytime</h3>
        </div>
        <div className="travelling-selector-block">
          <div className="travelling-selector-content">
            <Calendar handleValue={setDate} />
            <Time />
            <SelectorBox
              label="Country"
              value={country}
              source={countries}
              handleValue={setCountry}
            />
            <SelectorBox
              label="Transport"
              value={transport}
              source={transportTypes}
              handleValue={setTransport}
            />
            <button className="search">
              <i className="fa fa-search fa-lg" aria-hidden={true}></i>
            </button>
          </div>
        </div>
      </div>
      <h2 className="cards-subtitle">
        Explore Our The Most Popular Destinantions
      </h2>
      <div className="cards-container">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="about-section">
        <div>
          <img src={about} alt="about-logo"></img>
        </div>
        <div>
          <h2 style={{ fontWeight: 300 }}>Welcome to Our Site!</h2>
          <h2>We are the best company for your visit</h2>
          <div className="about-description">
            <div>
              <h3 style={{ fontWeight: 300 }}>
                After decades of experience, and a whole life in Lucca, we offer
                you the most complete tourism service in the city. In addition
                to having bikes and rickshaws to have as much fun as you want,
                you have the choice of tour guides with whom to tour and drivers
                for your every need! We offer packages in the way that you get
                the most at the lowest price. Book with us and we will always be
                available for you!
              </h3>
            </div>
            <div>
              <div className="about-item"></div>
              <div className="about-item"></div>
              <div className="about-item"></div>
              <div className="about-item"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
