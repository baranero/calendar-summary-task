import React from "react";
import { TableRow, TableCell, styled } from "@mui/material";
import { calculateTotalDayDuration, findLongestDayEventTitle } from "../../helpers";
import { DayEvents } from "../CalendarSummary";

export const StyledTableCell = styled(TableCell)(() => ({
  border: "1px #e0e0e0 solid",
  textAlign: "center",
}));

const DayEventsRow: React.FC<{ dayEvents: DayEvents; index: number }> = ({ dayEvents, index }) => {
  return (
    <TableRow data-testid={`table-row-${index}`} key={index}>
      <StyledTableCell data-testid={`date-cell-${index}`}>{dayEvents.date}</StyledTableCell>
      <StyledTableCell data-testid={`event-cell-${index}`}>
        {dayEvents.events ? dayEvents.events.length : 0}
      </StyledTableCell>
      <StyledTableCell data-testid={`duration-cell-${index}`}>
        {calculateTotalDayDuration(dayEvents.events)}
      </StyledTableCell>
      <StyledTableCell data-testid={`longest-event-cell-${index}`}>
        {findLongestDayEventTitle(dayEvents.events)}
      </StyledTableCell>
    </TableRow>
  );
};

export default DayEventsRow;
