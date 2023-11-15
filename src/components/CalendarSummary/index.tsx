import React, { useEffect, useState } from "react";
import getCalendarEvents, { CalendarEvent } from "../../api-client";
import CalendarTable from "../CalendarTable";
import { addDays, format } from "date-fns";

export interface DayEvents {
  date: string;
  events: CalendarEvent[];
}

const CalendarSummary: React.FC = () => {
  const [nextDaysEvents, setNextDaysEvents] = useState<DayEvents[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const nextSevenDays = Array.from({ length: 7 }, (_, index) => {
      return addDays(currentDate, index);
    });

    const fetchDayEvents = async (day: Date) => {
      try {
        const dayEvents = await getCalendarEvents(day);
        return { date: format(day, "yyyy-MM-dd"), events: dayEvents };
      } catch (error) {
        setError(true);
        throw new Error(`Error fetching day calendar events: ${error}`);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      try {
        const eventsArray = await Promise.all(nextSevenDays.map(fetchDayEvents));
        setNextDaysEvents(eventsArray);
      } catch (error) {
        setError(true);
        throw new Error(`Error fetching weekly calendar events: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Calendar Summary</h2>
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center" }}>Something went wrong!</p>}
      {!loading && !error && <CalendarTable nextDaysEvents={nextDaysEvents} />}
    </>
  );
};

export default CalendarSummary;
