import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { DatePicker, getCalendar } from "../Calendar";

describe("Testing Calander function", () => {
  const calander = getCalendar(30, 3);

  test("should test calendar row length", () => {
    expect(calander.length).toBe(6);
  });

  test("should test calendar column length", () => {
    expect(calander.every((x) => x.length == 7)).toBeTruthy;
  });

  test("should test calendar cell count", () => {
    expect(calander.map((e) => e.length).reduce((x, y) => x + y)).toBe(42);
  });

  test("test start day", () => {
    expect(calander.flat(Infinity).filter((x) => x > 0)[0]).toEqual(1);
  });
  test("test end day", () => {
    expect(calander.flat(Infinity).filter((x) => x > 0)[29]).toEqual(30);
  });

  test("test progressing of dates 1,2,3...30", () => {
    let comp = calander
      .flat(Infinity)
      .filter((x) => x > 0)
      .slice(-29);
    let list = calander.flat(Infinity).filter((x) => x > 0);
    expect(comp.every((e, i) => e > list[i])).toBe(true);
  });
});

