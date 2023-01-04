"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userReducer = void 0;

var _actionTypes = require("../contants/actionTypes");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = [];

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes.ActionTypes.CREATE_USER:
      return [].concat(_toConsumableArray(state), [payload]);

    case _actionTypes.ActionTypes.GET_USERS:
      return payload;

    case _actionTypes.ActionTypes.DELETE_USER:
      return state.filter(function (_ref2) {
        var id = _ref2.id;
        return id !== payload.id;
      });

    default:
      return state;
  }
};

exports.userReducer = userReducer;