import { render, screen } from "@testing-library/react";
import CalendarSummary from "../components/CalendarSummary/index";

describe("CalendarSummary", () => {
  it("render header", () => {
    render(<CalendarSummary />);
    const headElement = screen.getByText(/calendar summary/i);
    expect(headElement).toBeInTheDocument();
  });
});
