import { TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledTableCell } from "../DayEventsRow";

const TableHeader = () => {
  const HeaderStyledTableCell = styled(StyledTableCell)(({ theme }) => ({
    fontWeight: "bolder",
    backgroundColor: theme.palette.action.disabled,
  }));

  return (
    <TableHead>
      <TableRow>
        <HeaderStyledTableCell>Date</HeaderStyledTableCell>
        <HeaderStyledTableCell>Number of events</HeaderStyledTableCell>
        <HeaderStyledTableCell>Total duration [min]</HeaderStyledTableCell>
        <HeaderStyledTableCell>Longest event</HeaderStyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
