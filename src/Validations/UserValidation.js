const UserValidation = (values) => {

    let errors = {};
    if (!values.name) {
        errors.name = "Name is required";
    }
    if (!values.surname) {
        errors.surname = "Surname is required";
    }
    if (!values.genderId) {
        errors.genderId = "Gender is required";
    }
    if (!values.balance) {
        errors.balance = "Balance is required";
    }

    return errors;
};

export default UserValidation;