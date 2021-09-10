import { Fragment, useEffect, useState } from "react";
import moment from "moment";

import "./index.scss";
import { AvailabilityDate } from "./AvailabilityDate";
import { AvailabilityShift } from "./AvailabilityShift";
import { CalendarBody } from "./DatePicker/CalendarBody";
import { TimePrefrence } from "./DatePicker/TimePrefrence";
import { CalendarNavigation } from "./CalendarNavigation";

export const DatePicker = () => {
  const [value, setValue] = useState<string>(moment().format("MMMM YYYY"));
  const [available, setAvailibility] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  // const [selectedDay, setSelectedDay] = useState(moment().format("YYYY-MM-DD"));
  const [selectedDay, setSelectedDay] = useState("");
  const [shift, setShift] = useState<string>("0");
  const [calendar, setCalandar] = useState<number[][]>([]);

  const getCalendar = (days: number, weekday: number, count = 0) =>
    Array.from({ length: 6 }, (e) => Array.from({ length: 7 }, (e) => 0)).map(
      (row, i) =>
        row.map((e, j) =>
          row.length * i + j >= weekday && days > count ? ++count : e
        )
    );

  useEffect(() => {
    const days = moment(value).daysInMonth();
    const weekday = moment(value).add(0, "days").startOf("month").day();
    setCalandar(getCalendar(days, weekday));
       setSelectedDay(value);
  }, [value ]);

  return (
    <Fragment>
      <div className="rTable">
        <div className="rTableRow">
          <TimePrefrence setShift={setShift} reSet={setValue} />
        </div>
      </div>
      <div className="rTable">
        <div className="rTableRow">
          <div className="rTableCell">
            <div className="rTable">
              <CalendarNavigation setMonth={setValue} monthValue={value} />
              <CalendarBody
                selectedDay={selectedDay}
                 month={value}
                setAvailibility={(date: string) => {
                  setAvailibility(date);
                  setSelectedDay(date);
                }}
                calendar={calendar}
              />
            </div>
            <div className="bottomtext">
              Remaining slots available per day are shown above
            </div>
          </div>
          <div>
            <AvailabilityDate stringDate={available} />
            <AvailabilityShift
              setShift={shift}
              // isPreference={timePreference}
              // setPrefrence={(boolval:boolean)=>{setTimePrefrence(boolval);}}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
