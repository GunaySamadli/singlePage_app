import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, deleteUser } from '../../redux/actions/userAction';
import UserCreate from '../UserCreate';
import User from './User';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const UserTable = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);


    const users = useSelector(state => state.allUsers.users);

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }


    return (
        <>
            <div className='body_header'>
                <div className='search_section'>
                    <input type="text" name="search" placeholder='Search' />
                </div>
                <button className="header-btn" onClick={() => setModal(true)} >Create</button>
            </div>
            <div className="task-container">
                <TableContainer component={Paper} className="user-table">
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell align="right">Name</StyledTableCell>
                                <StyledTableCell align="right">Surname</StyledTableCell>
                                <StyledTableCell align="right">Gender</StyledTableCell>
                                <StyledTableCell align="right">Balance</StyledTableCell>
                                <StyledTableCell align="right">Cart</StyledTableCell>
                                <StyledTableCell align="right">Edit</StyledTableCell>
                                <StyledTableCell align="right">Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users && users.map((user, index) => <User key={index} user={user} index={index} handleDelete={handleDelete} />)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <UserCreate toggle={toggle} modal={modal} setModal={setModal} />

        </>
    )
}

export default UserTable