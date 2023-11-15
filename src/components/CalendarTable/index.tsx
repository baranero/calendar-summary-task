import React from "react";
import { TableContainer, Table, TableBody } from "@mui/material";
import { DayEvents } from "../CalendarSummary";
import TableHeader from "../TableHeader";
import DayEventsRow from "../DayEventsRow";
import TotalRow from "../TotalRow";

const CalendarTable: React.FC<{ nextDaysEvents: DayEvents[] }> = ({ nextDaysEvents }) => {
  return (
    <TableContainer className="table-container" data-testid="calendar-summary">
      <Table className="table">
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
