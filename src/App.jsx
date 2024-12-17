import { useState, useEffect } from "react";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  //Options
  const options = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const getISTTime = () => {
    const currentDateObj = new Date(); //Create object of Date()
    const currentTime = currentDateObj.toLocaleString("en-IN", options);

    //Format date
    const dateOptions = { timeZone: "Asia/Kolkata" };
    const currentDate = new Intl.DateTimeFormat("en-IN", dateOptions).format(
      currentDateObj
    );

    //Set the current date and time values
    setDate(currentDate);
    setTime(currentTime);
  };

  useEffect(() => {
    getISTTime(); //Get the initial date and time
    const interval = setInterval(getISTTime, 1000); //Update every second

    //Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center mb-3">
        <h1 className="fw-bold text-primary">Bharat Clock</h1>
        <div className="container fs-2 d-flex flex-column">
          <div>
            This is a clock that shows the time in Bharat (India) at all times.
          </div>
          <div>
            Today's Date is: <strong>{date}</strong>
          </div>
          <div>
            Current Time in IST is: <strong>{time}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
