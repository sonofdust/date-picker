import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Day } from "../Day";

describe("Testing day Component", () => {
  it("If day greater than zero render calendar cell with value of Day.", () => {
    const component = render(
      <Day
        selectedDay={"2021-10-21"}
        day={2}
        yearmonth={"October 2021"}
        setAvailability={jest.fn(() => "2021-10-0")}
      />
    );
    expect(component.getByTestId("day").textContent).toBe("2");
  });

  it("If day equal zero render calendar cell with no value.", () => {
    const component = render(
      <Day
        selectedDay={"2021-10-21"}
        day={0}
        yearmonth={"October 2021"}
        setAvailability={jest.fn(() => "2021-10-0")}
      />
    );
    expect(component.queryByTestId("day")).toBeNull();
  });
});
