import React, { useEffect, useMemo, useState } from "react";
import getCalendarEvents, { CalendarEvent } from "../api-client";
import CalendarTable from "../CalendarTable";

export interface DayEvents {
  date: string;
  events: CalendarEvent[];
}

const CalendarSummary: React.FC = () => {
  const [nextDaysEvents, setNextDaysEvents] = useState<DayEvents[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const nextDays = useMemo(() => {
    const currentDate = new Date();
    return Array.from({ length: 7 }, (_, index) => {
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + index);
      return nextDay;
    });
  }, []);

  const fetchDayEvents = async (day: Date) => {
    try {
      const dayEvents = await getCalendarEvents(day);
      return { date: day.toLocaleDateString("fr-CA"), events: dayEvents };
    } catch (error) {
      setError(true);
      throw new Error(`Error fetching day calendar events: ${error}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const eventsArray = await Promise.all(nextDays.map(fetchDayEvents));
        setNextDaysEvents(eventsArray);
      } catch (error) {
        setError(true);
        throw new Error(`Error fetching weekly calendar events: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nextDays]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Calendar Summary</h2>
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center" }}>Something went wrong!</p>}
      {!loading && !error && <CalendarTable nextDaysEvents={nextDaysEvents} />}
    </div>
  );
};

export default CalendarSummary;
