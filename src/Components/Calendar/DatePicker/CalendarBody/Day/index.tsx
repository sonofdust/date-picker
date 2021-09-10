import moment from "moment";
import "./index.scss";
import { useState, useEffect } from "react";

export const Day = ({
  selectedDay,
  day,
  yearmonth,
  setAvailability,
}: {
  selectedDay: string;
  day: number;
  yearmonth: string;
  setAvailability: Function;
}) => {
  const [availDate, setAvailDate] = useState<string>("");
  const [selected, setSelected] = useState<boolean>(false);

  const isBefore = moment(availDate).isBefore(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    const availDate = `${moment(yearmonth).format("YYYY-MM")}-${day
      .toString()
      .padStart(2, "0")}`;

    setAvailDate(availDate);
    setSelected(availDate === selectedDay);
  }, [day, yearmonth]);

  const selectedStyles = selected
    ? {
        color: "#000",
        backgroundColor: "rgba(22, 155, 213, 1)",
      }
    : {
        color: "#000",
        transition: "0.5s",
      };
  const selectedspan = selected
    ? { backgroundcolor: "rgba(22, 155, 213, 1)", color: "white" }
    : {};

  return (
    <div className="rTableCell" data-testid="cell">
      {day > 0 ? (
        <div
          onClick={() => setAvailability(availDate)}
          className={isBefore ? "day pastday noHover" : "day hand"}
          style={selectedStyles}
          data-testid="cell"
        >
          <span className="text" style={selectedspan}>
            {day}
          </span>
          <span className="text2" style={selectedspan}>
            {isBefore ? null : "4/16"}
          </span>
        </div>
      ) : (
        <div className="hidden">{}</div>
      )}
    </div>
  );
};
