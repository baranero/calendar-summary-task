import { render, screen } from "@testing-library/react";
import CalendarTable from "../CalendarTable/index";
import {
  calculateTotal,
  calculateTotalDayDuration,
  findLongestDayEventTitle,
  findTotalLongestEventTitle,
} from "../helpers";

const mockEventsData = [
  {
    date: "2023-01-01",
    events: [
      {
        uuid: "1",
        title: "Lorem",
        durationInMinutes: 1,
      },
      {
        uuid: "33",
        title: "Lorems",
        durationInMinutes: 13,
      },
      {
        uuid: "122",
        title: "Loremsdsds",
        durationInMinutes: 122,
      },
    ],
  },
  {
    date: "2023-01-02",
    events: [
      {
        uuid: "2",
        title: "Ipsum",
        durationInMinutes: 2,
      },
    ],
  },
  {
    date: "2023-01-05",
    events: [
      {
        uuid: "222",
        title: "Ipsum",
        durationInMinutes: 2,
      },
      {
        uuid: "2222",
        title: "Ipsums",
        durationInMinutes: 21,
      },
    ],
  },
];

describe("CalendarTable Component", () => {
  test("renders table with correct data", async () => {
    render(<CalendarTable nextDaysEvents={mockEventsData} />);

    const tableRows = await screen.findAllByTestId(/table-row/i);
    expect(tableRows.length).toBe(mockEventsData.length);

    mockEventsData.forEach(async (day, index) => {
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

  test("renders total row with correct data", async () => {
    render(<CalendarTable nextDaysEvents={mockEventsData} />);

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
