import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CalendarNavigation } from ".";

test("Renders with correct header data.", () => {
  const component = render(
    <CalendarNavigation
      setMonth={jest.fn(() => "November 2021")}
      monthValue={"November 2021"}
    />
  );
  expect(component.getByTestId("Header").textContent).toBe("November 2021");
});
