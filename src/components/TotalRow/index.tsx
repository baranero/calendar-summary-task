import React from "react";
import { TableRow, styled, alpha } from "@mui/material";
import { DayEvents } from "../CalendarSummary";
import { calculateTotal, findTotalLongestEventTitle } from "../../helpers";
import { StyledTableCell } from "../DayEventsRow";

const TotalRow: React.FC<{ nextDaysEvents: DayEvents[] }> = ({ nextDaysEvents }) => {
  const LastStyledTableCell = styled(StyledTableCell)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.success.light, 0.45),
  }));

  return (
    <TableRow data-testid="total-row">
      <LastStyledTableCell>Total</LastStyledTableCell>
      <LastStyledTableCell data-testid="total-count">{calculateTotal(nextDaysEvents, "count")}</LastStyledTableCell>
      <LastStyledTableCell data-testid="total-duration">
        {calculateTotal(nextDaysEvents, "duration")}
      </LastStyledTableCell>
      <LastStyledTableCell data-testid="total-longest-event">
        {findTotalLongestEventTitle(nextDaysEvents)}
      </LastStyledTableCell>
    </TableRow>
  );
};

export default TotalRow;
