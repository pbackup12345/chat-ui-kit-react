"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.Status = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _enums = require("../enums");
var _settings = require("../settings");
var _excluded = ["status", "size", "className", "name", "selected", "children"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Status = (exports.Status = function Status(_ref) {
  var status = _ref.status,
    size = _ref.size,
    className = _ref.className,
    name = _ref.name,
    selected = _ref.selected,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-status");
  var bullet = /*#__PURE__*/ _react["default"].createElement("div", {
    className: "".concat(cName, "__bullet"),
  });
  var named = name || children;
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      "aria-selected": selected === true ? "" : null,
      className: (0, _classnames["default"])(
        cName,
        "".concat(cName, "--").concat(size),
        "".concat(cName, "--").concat(status),
        _defineProperty({}, "".concat(cName, "--selected"), selected),
        _defineProperty({}, "".concat(cName, "--named"), named),
        className
      ),
    }),
    bullet,
    named &&
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          className: "".concat(cName, "__name"),
        },
        name ? name : children
      )
  );
});
process.env.NODE_ENV !== "production"
  ? (Status.propTypes = {
      /** Primary content */
      children: _propTypes["default"].node,
      /** Status. */
      status: _propTypes["default"].oneOf(_enums.StatusEnum).isRequired,
      /** Size. */
      size: _propTypes["default"].oneOf(_enums.SizeEnum),
      /** Name */
      name: _propTypes["default"].node,
      /** Selected */
      selected: _propTypes["default"].bool,
      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
Status.defaultProps = {
  size: "md",
};
var _default = (exports["default"] = Status);
