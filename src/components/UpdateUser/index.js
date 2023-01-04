import React, { useState } from 'react';
import { Button, Modal, ModalBody, Form, FormGroup, Input, ModalHeader } from 'reactstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { updateUser } from "../../redux/actions/userAction";


const UpdateUser = ({ modal, toggle, setModal, user }) => {

    const dispatch = useDispatch();

    const [customRole, setCustomRole] = useState();

    const [data, setData] = useState(user);


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


    const handleSave = () => {
        dispatch(updateUser(user.id, data));
        setModal(false);
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update : {user.name}</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Input onChange={handleChange} value={data.name} type="text" name="name" id="name" placeholder='Enter your Name' />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={handleChange} value={data.surname} type="text" name="surname" id="surname" placeholder='Enter your Surname' />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={handleChange} value={data.cart} type="text" name="cart" id="cart" placeholder='Enter your Cart' />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={handleChange} value={data.balance || ''} type="number" name="balance" id="balance" placeholder='Enter your Balance' />
                    </FormGroup>
                    <FormGroup>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel onChange={handleChange} name="genderId"
                                value="1" control={<Radio />} label="Man" />

                            <FormControlLabel onChange={handleChange} name="genderId"
                                value="2" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormGroup>
                    <Button color="primary" onClick={handleSave}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default UpdateUser;

