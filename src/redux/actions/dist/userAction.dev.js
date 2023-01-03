"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.getAllUsers = void 0;

var _service = require("../../Apis/Services/service");

var _actionTypes = require("../contants/actionTypes");

var getAllUsers = function getAllUsers() {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_service.userService.getAllUsers());

          case 3:
            res = _context.sent;
            dispatch({
              type: _actionTypes.ActionTypes.GET_USERS,
              payload: res.data
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getAllUsers = getAllUsers;

var createUser = function createUser(user) {
  return function _callee2(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_service.userService.createNewUser(user));

          case 3:
            response = _context2.sent;
            dispatch({
              type: _actionTypes.ActionTypes.CREATE_USER,
              payload: response.data
            });
            return _context2.abrupt("return", Promise.resolve(response.data));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", Promise.reject(_context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.createUser = createUser;