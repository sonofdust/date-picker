import { v4 } from "uuid";
import moment from "moment";
import "./index.scss";

import { Day } from "./Day";

export const CalendarBody = ({
   month,
  selectedDay,
  setAvailibility,
  calendar,
}: {
   month: string;
  selectedDay: string;
  setAvailibility: Function;
  calendar: number[][];
}) => {
  return (
    <div className="rTable">
      <div className="rTableRow">
        {moment.weekdaysShort().map((dayofweek: string) => (
          <div className="rTableCell">{dayofweek}</div>
        ))}
      </div>
      {calendar.map((row) => (
        <div className="rTableRow">
          {row.map((day: number, i: number) => (
            <Day
              key={`${day}-${i}`}
              selectedDay={selectedDay}
               day={day}
               yearmonth={month}
              setAvailability={setAvailibility}
            ></Day>
          ))}
        </div>
      ))}
    </div>
  );
};
