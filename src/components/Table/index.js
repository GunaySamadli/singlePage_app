import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions/userAction';

const Table = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const users = useSelector(state => state.allUsers.users);

    console.log(users);
    return (
        <div>index</div>
    )
}

export default Table