import { render, screen } from "@testing-library/react";
import TableHeader from "../components/TableHeader";

describe("TableHeader Component", () => {
  it("render table header", () => {
    render(<TableHeader />);
    const headerDateCell = screen.getByText(/date/i);
    expect(headerDateCell).toBeInTheDocument();

    const headerEventsCell = screen.getByText(/number of events/i);
    expect(headerEventsCell).toBeInTheDocument();

    const headerDurationCell = screen.getByText(/total duration \[min\]/i);
    expect(headerDurationCell).toBeInTheDocument();

    const headerLongestEventCell = screen.getByText(/longest event/i);
    expect(headerLongestEventCell).toBeInTheDocument();
  });
});
