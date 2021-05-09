"use strict";

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _getEditorNamespace = require("./libs/getEditorNamespace.js");

var _getEditorNamespace2 = _interopRequireDefault(_getEditorNamespace);

var _package = require("../package.json");

var _package2 = _interopRequireDefault(_package);

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.loadinstance = function () {
      var options = _this.props.options || {};

      _this.options = _this.options || {};
      _this.options.id = _this.instanceId;
      if (_this.props.config) {
        _this.options.config = _this.props.config;
      }
      if (_this.props.template) {
        _this.options.template = _this.props.template;
      }
      _this.instance = window.Yakoue;

      var onLoad = _this.props.onLoad;


      _this.instance.create(_this.options, function () {
        onLoad && onLoad(window.Yakoue);
      });

      // All properties starting with on[Name] are registered as event listeners.
      for (var _iterator = Object.entries(_this.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var _ref = _ref2;
        var key = _ref[0];
        var value = _ref[1];

        if (/^on/.test(key) && key != "onLoad") {
          _this.addEvent(key, value);
        }
      }
    };

    _this.addEvent = function (type, callback) {
      _this.instance.addEvent(type, callback);
    };

    _this.setTemplate = function (template) {
      _this.instance.setTemplate(template);
    };

    _this.save = function (callback) {
      _this.instance.save(callback);
    };

    _this.exportHtml = function (callback) {
      _this.instance.expor(callback);
    };

    _this.setFusionTags = function (fusionTags) {
      _this.instance.setFusionTags(fusionTags);
    };

    _this.instanceId = "yakoue-instance";
    _this.instanceUrl = "http://localhost/iframe/embed.js"; // "https://editor.yakoue.com/embed.js";
    return _this;
  }

  _default.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    (0, _getEditorNamespace2.default)(this.instanceUrl, function (namespace) {
      // this.$emit("namespaceloaded", namespace);
    }).then(function () {
      if (!window.Yakoue) {
        return;
      }
      _this2.loadinstance();
    });
  };

  _default.prototype.render = function render() {
    var _props = this.props,
        _props$minHeight = _props.minHeight,
        minHeight = _props$minHeight === undefined ? 500 : _props$minHeight,
        _props$style = _props.style,
        style = _props$style === undefined ? {} : _props$style;


    return _react2.default.createElement(
      "div",
      {
        style: {
          flex: 1,
          display: "flex",
          minHeight: minHeight
        }
      },
      _react2.default.createElement("div", { id: this.instanceId, style: _extends({}, style, { flex: 1 }) })
    );
  };

  return _default;
}(_react.Component);

exports.default = _default;
module.exports = exports["default"];