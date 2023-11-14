import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  calculateTotal,
  calculateTotalDayDuration,
  findLongestDayEventTitle,
  findTotalLongestEventTitle,
} from "../helpers";

import { DayEvents } from "../CalendarSummary";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px #e0e0e0 solid",
  textAlign: "center",
}));

const HeaderStyledTableCell = styled(StyledTableCell)(({ theme }) => ({
  fontWeight: "bolder",
  backgroundColor: theme.palette.action.disabled,
}));

const LastStyledTableCell = styled(StyledTableCell)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.success.light, 0.45),
}));

const CalendarTable: React.FC<{ nextDaysEvents: DayEvents[] }> = ({ nextDaysEvents }) => {
  return (
    <TableContainer data-testid="calendar-summary" style={{ boxShadow: "0 0 10px 10px #e0e0e0" }}>
      <Table sx={{ minWidth: 300 }}>
        <TableHead>
          <TableRow>
            <HeaderStyledTableCell>Date</HeaderStyledTableCell>
            <HeaderStyledTableCell>Number of events</HeaderStyledTableCell>
            <HeaderStyledTableCell>Total duration [min]</HeaderStyledTableCell>
            <HeaderStyledTableCell>Longest event</HeaderStyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nextDaysEvents.map((dayEvents, index) => (
            <TableRow data-testid={`table-row-${index}`} key={index}>
              <StyledTableCell data-testid={`date-cell-${index}`}>{dayEvents.date}</StyledTableCell>
              <StyledTableCell data-testid={`event-cell-${index}`}>{dayEvents.events ? dayEvents.events.length : 0}</StyledTableCell>

              <StyledTableCell data-testid={`duration-cell-${index}`}>
                {calculateTotalDayDuration(dayEvents.events)}
              </StyledTableCell>
              <StyledTableCell data-testid={`longest-event-cell-${index}`}>
                {findLongestDayEventTitle(dayEvents.events)}
              </StyledTableCell>
            </TableRow>
          ))}
          <TableRow data-testid="total-row">
            <LastStyledTableCell>Total</LastStyledTableCell>
            <LastStyledTableCell data-testid="total-count">
              {calculateTotal(nextDaysEvents, "count")}
            </LastStyledTableCell>
            <LastStyledTableCell data-testid="total-duration">
              {calculateTotal(nextDaysEvents, "duration")}
            </LastStyledTableCell>
            <LastStyledTableCell data-testid="total-longest-event">
              {findTotalLongestEventTitle(nextDaysEvents)}
            </LastStyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CalendarTable;
