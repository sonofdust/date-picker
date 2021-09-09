import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CalendarNavigation } from "../Calendar/CalendarNavigation";
import { CalendarBody } from "../Calendar/DatePicker/CalendarBody";



test("Renders with correct header data.", () => {
  const component = render(
    <CalendarNavigation
      setMonth={jest.fn((x) => "November 2021")}
      monthValue={"November 2021"}
    />
  );

  expect(component.getByTestId("Header").textContent).toBe("November 2021");
});




test("Check calendar grid dimentions is 7X7.", () => {
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

  const children = component.container.querySelector("div");
  expect(children?.getElementsByClassName("rTableCell").length).toBe(49);
  expect(children?.getElementsByClassName("rTableRow").length).toBe(7);
  const weeKdays = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  // expect(children?.firstChild.array.every(e=>weeKdays.includes(e)))
          
  // expect (component.find("div.tcolgender").text()).toEqual("M").toHaveLength(1)
});


test("Test header values SUN to SAT.", () => {
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

  const children = component.container.querySelector("div")?.firstChild?.childNodes;
  expect(children?.length).toBe(7);
// console.log("**********************************************************************************************")
// console.log(children?.values[0])
// console.log("**********************************************************************************************")
  // expect(children.)
  // const weeKdays = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  // expect(children?.firstChild.array.every(e=>weeKdays.includes(e)))
          
  // expect (component.find("div.tcolgender").text()).toEqual("M").toHaveLength(1)
});
