import { render, screen } from "@testing-library/react";
import CalendarSummary from "../components/CalendarSummary/index";

export const mockEventsData = [
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

describe("CalendarSummary", () => {
  it("render header", () => {
    render(<CalendarSummary />);
    const headElement = screen.getByText(/calendar summary/i);
    expect(headElement).toBeInTheDocument();
  });
});
