import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { createUser } from "../../redux/actions/userAction";

const UserCreate = ({ modal, toggle, setModal }) => {

    const dispatch = useDispatch();

    const [customRole, setCustomRole] = useState();

    const [data, setData] = useState({
        id: Math.round(Math.random() * 999),
        name: "",
        surname: "",
        balance: 0,
        date: new Date()
    });


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "genderId") {
            const value = (parseInt(e.target.value)) || 0;
            setCustomRole({ ...customRole, [name]: value })
            setData({ ...data, [name]: value });
        } else {
            setCustomRole({ ...customRole, [name]: value })
            setData({ ...data, [name]: value });
        }
    }

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(createUser(data));
        setModal(false);
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
                <form >
                    <input onChange={handleChange} type="text" name="name" id="name" placeholder='Enter your Name' />
                    <input onChange={handleChange} type="text" name="surname" id="surname" placeholder='Enter your Surname' />
                    <input onChange={handleChange} type="text" name="cart" id="cart" placeholder='Enter your Cart' />
                    <input onChange={handleChange} value={data.balance || ''} type="number" name="balance" id="balance" placeholder='Enter your Balance' />
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel onChange={handleChange} name="genderId"
                            value="1" control={<Radio />} label="Man" />

                        <FormControlLabel onChange={handleChange} name="genderId"
                            value="2" control={<Radio />} label="Female" />
                    </RadioGroup>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel onChange={handleChange} name="cart"
                            value="false" control={<Radio />} label="No cart" />

                        <FormControlLabel onChange={handleChange} name="cart"
                            value="true" control={<Radio />} label="Yes cart" />
                    </RadioGroup>
                    <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </form>
            </ModalBody>
        </Modal>
    );
};

export default UserCreate;