import React from "react";
import { TableContainer, Table, TableBody } from "@mui/material";
import { DayEvents } from "../CalendarSummary";
import TableHeader from "../TableHeader";
import DayEventsRow from "../DayEventsRow";
import TotalRow from "../TotalRow";

const CalendarTable: React.FC<{ nextDaysEvents: DayEvents[] }> = ({ nextDaysEvents }) => {
  return (
    <TableContainer data-testid="calendar-summary" style={{ boxShadow: "0 0 10px 10px #e0e0e0" }}>
      <Table sx={{ minWidth: 600 }}>
        <TableHeader />
        <TableBody>
          {nextDaysEvents.map((dayEvents, index) => (
            <DayEventsRow key={index} dayEvents={dayEvents} index={index} />
          ))}
          <TotalRow nextDaysEvents={nextDaysEvents} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CalendarTable;
