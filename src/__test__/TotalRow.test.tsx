import { render, screen } from "@testing-library/react";
import { calculateTotal, findTotalLongestEventTitle } from "../helpers";
import { mockEventsData } from "./CalendarSummary.test";
import TotalRow from "../components/TotalRow";
import { Table, TableBody } from "@mui/material";

describe("TotalRow Component", () => {
  test("renders total row with correct data", async () => {
    render(
      <Table>
        <TableBody>
          <TotalRow nextDaysEvents={mockEventsData} />
        </TableBody>
      </Table>
    );

    const totalRow = await screen.findByTestId("total-row");
    expect(totalRow).toBeInTheDocument();

    const totalNumberOfEvents = await screen.findByTestId("total-count");
    expect(totalNumberOfEvents.textContent).toBe(calculateTotal(mockEventsData, "count")?.toString());

    const totalDurationOfEvents = await screen.findByTestId("total-duration");
    expect(totalDurationOfEvents.textContent).toBe(calculateTotal(mockEventsData, "duration")?.toString());

    const totalLongestEvent = await screen.findByTestId("total-longest-event");
    expect(totalLongestEvent.textContent).toBe(findTotalLongestEventTitle(mockEventsData));
  });
});
