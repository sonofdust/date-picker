import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CalendarBody } from "../CalendarBody";

describe("Testing Calendar Body", () => {
  const component = render(
    <CalendarBody
      month={"September 2021"}
      selectedDay={"2021-09-09"}
      setAvailibility={jest.fn(() => "2021-09-29")}
      calendar={Array(6)
        .fill(null)
        .map((e) => Array(7).fill(0))}
    />
  );

  it("Check calendar grid dimentions is 7X7.", () => {
    const children = component.container.querySelector("div");
    expect(children?.getElementsByClassName("rTableCell").length).toBe(49);
    expect(children?.getElementsByClassName("rTableRow").length).toBe(7);
  });

  it("Test header values SUN to SAT.", () => {
    const children =
      component.container.querySelector("div")?.firstChild?.childNodes;
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    children?.forEach((e, i) => {
      expect(e.textContent === weekdays[i]).toBe(true);
    });
  });
});
