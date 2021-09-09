import moment from "moment";
import "./index.scss";

export const CalendarNavigation = ({
  setMonth,
  monthValue,
}: {
  setMonth: Function;
  monthValue: string;
}) => (
  <div className="rTableRow">
    <div className="rTableCell">
      <div className="flex-container">
        <span
          onClick={() =>
            setMonth(moment(monthValue).add(-1, "month").format("MMMM YYYY"))
          }
        >
          <h3 className="hand">{"<"}</h3>
        </span>
        <h3>
          {moment(monthValue).format("MMMM") +
            " " +
            moment(monthValue).format("YYYY")}
        </h3>
        <span
          onClick={() =>
            setMonth(moment(monthValue).add(1, "month").format("MMMM YYYY"))
          }
        >
          <h3 className="hand">{">"}</h3>
        </span>
      </div>
    </div>
  </div>
);
