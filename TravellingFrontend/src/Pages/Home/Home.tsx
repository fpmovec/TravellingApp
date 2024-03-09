import React, { useState } from "react";
import Calendar from "../../Components/DatePicker";
import "../../styles/pages/home-page.scss";
import Time from "../../Components/TimePicker";
import { transportTypes, countries } from "../../Models/SelectableItems";
import SelectorBox from "../../Components/SelectorBoxes";
import "../../styles/components/card.scss";
import CardItem from "../../Components/Card";

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
      <div className="cards-container">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </>
  );
};

export default HomePage;
