"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var UserValidation = function UserValidation(values) {
  var errors = {};

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

var _default = UserValidation;
exports["default"] = _default;