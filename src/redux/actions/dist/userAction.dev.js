"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.deleteUser = exports.createUser = exports.getAllUsers = exports.getAllUsersByName = exports.searchItem = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _service = require("../../Apis/Services/service");

var _actionTypes = require("../contants/actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var searchItem = function searchItem(text) {
  return function (dispatch) {
    dispatch({
      type: _actionTypes.ActionTypes.SEARCH_USER,
      payload: text
    });
  };
};

exports.searchItem = searchItem;

var getAllUsersByName = function getAllUsersByName(text) {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:3005/users?name=".concat(text)).then(function (response) {
              return dispatch({
                type: _actionTypes.ActionTypes.GET_USERS,
                payload: response.data
              });
            })["catch"](function (err) {
              return console.log(err);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getAllUsersByName = getAllUsersByName;

var getAllUsers = function getAllUsers() {
  return function _callee2(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_service.userService.getAllUsers());

          case 3:
            res = _context2.sent;
            dispatch({
              type: _actionTypes.ActionTypes.GET_USERS,
              payload: res.data
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getAllUsers = getAllUsers;

var createUser = function createUser(user) {
  return function _callee3(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_service.userService.createNewUser(user));

          case 3:
            response = _context3.sent;
            dispatch({
              type: _actionTypes.ActionTypes.CREATE_USER,
              payload: response.data
            });
            return _context3.abrupt("return", Promise.resolve(response.data));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", Promise.reject(_context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.createUser = createUser;

var deleteUser = function deleteUser(id) {
  return function _callee4(dispatch) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(_service.userService.deleteUser(id));

          case 3:
            dispatch({
              type: _actionTypes.ActionTypes.DELETE_USER,
              payload: {
                id: id
              }
            });
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 6]]);
  };
};

exports.deleteUser = deleteUser;

var updateUser = function updateUser(id, data) {
  return function _callee5(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(_service.userService.editUser(id, data));

          case 3:
            res = _context5.sent;
            dispatch({
              type: _actionTypes.ActionTypes.UPDATE_USER,
              payload: data
            });
            return _context5.abrupt("return", Promise.resolve(res.data));

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", Promise.reject(_context5.t0));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.updateUser = updateUser;