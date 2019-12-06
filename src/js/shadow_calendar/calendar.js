"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = _interopRequireDefault(require("@fullcalendar/react"));

var _daygrid = _interopRequireDefault(require("@fullcalendar/daygrid"));

var _resourceTimegrid = _interopRequireDefault(require("@fullcalendar/resource-timegrid"));

var _interaction = _interopRequireDefault(require("@fullcalendar/interaction"));

require("./calendar.css");

require("@fullcalendar/timegrid/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "calendarComponentRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      calendarEvents: [{
        title: "Closing",
        start: new Date(),
        resourceIds: ["roomA", "roomB"],
        editable: true
      }],
      resources: [{
        title: "Room A",
        id: "roomA"
      }, {
        title: "Room B",
        id: "roomB"
      }]
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateClick", function (arg) {
      if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        _this.setState({
          calendarEvents: _this.state.calendarEvents.concat({
            title: "New Event",
            start: arg.date,
            allDay: arg.allDay
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEventClick", function (info) {
      alert(info.event.title);
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "App"
      }, _react.default.createElement("header", {
        className: "App-header"
      }, _react.default.createElement("div", {
        id: "st-header"
      }, _react.default.createElement("h1", null, _react.default.createElement("span", {
        style: {
          color: '#0065b3'
        }
      }, "Short"), _react.default.createElement("span", {
        style: {
          color: '#ff9910'
        }
      }, "Track"), " Calendar")), _react.default.createElement(_react2.default, {
        defaultView: "dayGridMonth",
        header: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,resourceTimeGridDay"
        },
        dateClick: this.handleDateClick,
        events: this.state.calendarEvents,
        resources: this.state.resources,
        eventClick: this.handleEventClick,
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        plugins: [_resourceTimegrid.default, _daygrid.default, _interaction.default]
      })));
    }
  }]);

  return Calendar;
}(_react.default.Component);

exports.Calendar = Calendar;
;
