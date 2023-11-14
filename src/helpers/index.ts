import { DayEvents } from "../CalendarSummary";
import { CalendarEvent } from "../api-client";

export const calculateTotalDayDuration = (events: CalendarEvent[]) =>
  events.reduce((totalDuration, event) => totalDuration + event.durationInMinutes, 0);

export const findLongestDayEventTitle = (events: CalendarEvent[]) => {
  const longestEvent = events.reduce((longest, event) =>
    event.durationInMinutes > longest.durationInMinutes ? event : longest
  );

  return longestEvent.title;
};

export const calculateTotal = (events: DayEvents[], type: string) =>
  events.reduce((total, dayEvents) => {
    if (type === "count") return total + dayEvents.events.length;
    if (type === "duration") return total + calculateTotalDayDuration(dayEvents.events);
    return total;
  }, 0);

export const findTotalLongestEventTitle = (events: DayEvents[]) => {
  const longestEvent = events
    .flatMap((dayEvents) => dayEvents.events)
    .reduce((longest, event) => (event.durationInMinutes > longest.durationInMinutes ? event : longest));

  return longestEvent.title;
};
