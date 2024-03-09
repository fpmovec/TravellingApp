import React, { useState } from "react";
import Calendar from "../../Components/DatePicker";
import "../../styles/pages/home-page.scss";

const HomePage = () => {
  const [date, setDate] = useState<Date>(new Date());
  React.useEffect(() => {
    console.log(date);
  }, [date]);
  return (
    <>
      <div className="travelling-selector">
        <div className="travelling-selector-block">
          <Calendar handleValue={setDate} />
        </div>
      </div>
      <div style={{height: 1100}}>Hello</div>
    </>
  );
};

export default HomePage;
