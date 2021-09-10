import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CalendarNavigation } from "../Calendar/CalendarNavigation";
import { CalendarBody } from "../Calendar/DatePicker/CalendarBody";

test("Renders with correct header data.", () => {
  const component = render(
    <CalendarNavigation
      setMonth={jest.fn(() => "November 2021")}
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

  const children =
    component.container.querySelector("div")?.firstChild?.childNodes;
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  children?.forEach((e, i) => {
    expect(e.textContent === weekdays[i]).toBe(true);
  });
});

test("Test discrete numbers in dates 1,2,3,4 ect....", () => {
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

  const rows = component.container.querySelector("div")?.childNodes;

   const days =  component.getAllByTestId("cell");//. queryAllByTestId("cell")
   days.forEach(e=>{
     console.log("*********************",e.firstChild?.textContent)
   })
   
  // rows?.forEach((row, i) => {
  //   row.childNodes.forEach((col, j) => {
  //     // console.log(col.nodeValue);
  //     // console.log(`****************${i} ${j}********************`)
  //   });
  // });

  // const children = component.container.querySelector("div");

  // console.log(children?.childNodes.length);
  // children?.childNodes.forEach((e, i) => {

  // let child = e.childNodes;
  // child.forEach((el, j) => {
  //   console.log(
  //     "****************************************************************************************"
  //   );
  //   console.log(el);
  //   console.log(
  //     "****************************************************************************************"
  //   );
  // });

  // });
});
