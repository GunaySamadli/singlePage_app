import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../../redux/actions/userAction';
import UserCreate from '../UserCreate';
import User from './User';

const Table = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);


    return (
        <>
            <div className='body_header'>
                <div className='search_section'>
                    <input type="text" name="search" placeholder='Search' />
                </div>
                <button className="header-btn" onClick={() => setModal(true)} >Create</button>
            </div>
            <div className="task-container">
            </div>
            <UserCreate toggle={toggle} modal={modal} setModal={setModal} />
            <div className="task-container">
                <User />
            </div>

        </>
    )
}

export default Table