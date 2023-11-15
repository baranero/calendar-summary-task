import { render, screen } from "@testing-library/react";
import { calculateTotalDayDuration, findLongestDayEventTitle } from "../helpers";
import { mockEventsData } from "./CalendarSummary.test";
import DayEventsRow from "../components/DayEventsRow";
import { Table, TableBody } from "@mui/material";

describe("DayEventsRow Component", () => {
  test("renders events table row with correct data", async () => {
    mockEventsData.forEach(async (day, index) => {
      render(
        <Table>
          <TableBody>
            <DayEventsRow dayEvents={day} index={index} />
          </TableBody>
        </Table>
      );

      const dateCell = await screen.findByTestId(`date-cell-${index}`);
      expect(dateCell.textContent).toBe(day.date);

      const numberOfEventsCell = await screen.findByTestId(`event-cell-${index}`);
      expect(numberOfEventsCell.textContent).toBe(day.events.length.toString());

      const totalDuration = await screen.findByTestId(`duration-cell-${index}`);
      expect(totalDuration.textContent).toBe(calculateTotalDayDuration(day.events).toString());

      const longestDayEvent = await screen.findByTestId(`longest-event-cell-${index}`);
      expect(longestDayEvent.textContent).toBe(findLongestDayEventTitle(day.events));
    });
  });
});
