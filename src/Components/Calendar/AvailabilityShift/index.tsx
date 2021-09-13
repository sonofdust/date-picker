import "./index.scss";
import { PiChart } from "./PiChart";
import { useState } from "react";

interface ICalendarAvailabilityProps {
  setShift: string;
  // isPreference: boolean;
  // setPrefrence: Function;
}

export const AvailabilityShift = (props: ICalendarAvailabilityProps) => {
  const [isTime, setTime] = useState(false);

  return (
    <div>
      <div className = "container">
      {props.setShift === "1" || props.setShift === "0" ? (
        <div className="pigroup">
          <PiChart
            text={"6am to 9am"}
            fraction={"2/4"}
            strClass={"chart4"}
          ></PiChart>
          <PiChart
            text={"9am to 12pm"}
            fraction={"1/4"}
            strClass={"chart2"}
          ></PiChart>
        </div>
      ) : null}
      {props.setShift === "2" || props.setShift === "0" ? (
        <div className="pigroup">
          <PiChart
            text={"12pm to 3pm"}
            fraction={"0/4"}
            strClass={"chart3"}
          ></PiChart>
          <PiChart
            text={"3pm to 6pm"}
            fraction={"2/4"}
            strClass={"chart4"}
          ></PiChart>
        </div>
      ) : null}
</div>

<div className="pigroup">
        <button
          onClick={() => {
            setTime(!isTime);
          }}
          className={
            isTime ? "timeprefrencebtn timetogglebtn" : "timeprefrencebtn"
          }
        >
          No Time Prefrence
        </button>
      </div>

      <div className="pigroup pigsubgroup">
        {isTime ? <h4>Selected Time:</h4> : null}
      </div>
      <div className="pigroup pigsubgroup">
        {isTime ? <span>No Preference</span> : null}
      </div>
    </div>
  );
};
