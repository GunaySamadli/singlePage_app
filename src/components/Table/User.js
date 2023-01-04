import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateUser from "../UpdateUser";

const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function User({ user, handleDelete }) {

  const [modal, setModal] = useState(false);


  const toggle = () => {
    setModal(!modal);
  }

  return (
    <>
      <StyledTableRow key={user.id}>
        <StyledTableCell component="th" scope="row">
          {user.id}
        </StyledTableCell>
        <StyledTableCell align="right">{user.name}</StyledTableCell>
        <StyledTableCell align="right">{user.surname}</StyledTableCell>
        <StyledTableCell align="right">{user.genderId === 2 ? "Female" : "Male"}</StyledTableCell>
        <StyledTableCell align="right">{user.balance}</StyledTableCell>
        <StyledTableCell align="right">
          <label class="form-controlss">
            <input disabled type="checkbox" name="checkbox-checked" checked={user.cart} />
          </label>
        </StyledTableCell>
        <StyledTableCell align="right" className="edit-user-icon">
          <EditIcon onClick={() => setModal(true)} />
        </StyledTableCell>
        <StyledTableCell align="right" className="delete-user-icon">
          <DeleteIcon onClick={() => handleDelete(user.id)} />
        </StyledTableCell>
      </StyledTableRow>
      <UpdateUser modal={modal} toggle={toggle} user={user} setModal={setModal} />
    </>
  );
}
