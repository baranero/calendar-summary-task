import { render, screen, waitFor } from "@testing-library/react";
import CalendarSummary from "../CalendarSummary/index";
import { act } from "react-dom/test-utils";

describe("CalendarSummary", () => {

  it("render header", () => {
    render(<CalendarSummary/>)
    const headElement = screen.getByText(/calendar summary/i);
    expect(headElement).toBeInTheDocument();
  });
});
