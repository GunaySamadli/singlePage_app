import React, { useState } from 'react';
import { Button, Modal, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { createUser } from "../../redux/actions/userAction";
import UserValidation from '../../Validations/UserValidation';
import { v4 as uuid } from 'uuid';


const UserCreate = ({ modal, toggle, setModal }) => {

    const unique_id = uuid();

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});

    const [customRole, setCustomRole] = useState();

    const [data, setData] = useState({
        id: unique_id.slice(0, 8),
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
        setErrors({});
        let newErrors = UserValidation(data);
        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
        } else {
            dispatch(createUser(data));
            setModal(false);
        }

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
                <Form >
                    <FormGroup>
                        <Input onChange={handleChange} type="text" name="name" id="name" placeholder='Enter your Name' />
                        {errors.name && (<p className="error">{errors.name}</p>)}
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={handleChange} type="text" name="surname" id="surname" placeholder='Enter your Surname' />
                        {errors.name && (<p className="error">{errors.name}</p>)}
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={handleChange} type="text" name="cart" id="cart" placeholder='Enter your Cart' />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={handleChange} value={data.balance || ''} type="number" name="balance" id="balance" placeholder='Enter your Balance' />
                        {errors.balance && (<p className="error">{errors.balance}</p>)}
                    </FormGroup>
                    <FormGroup>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel onChange={handleChange} name="genderId"
                                value="1" control={<Radio />} label="Man" />

                            <FormControlLabel onChange={handleChange} name="genderId"
                                value="2" control={<Radio />} label="Female" />
                        </RadioGroup>
                        {errors.genderId && (<p className="error">{errors.genderId}</p>)}
                    </FormGroup>
                    <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default UserCreate;

