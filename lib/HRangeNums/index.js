'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

require('antd/lib/input-number/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 数字区间限制
 *
 * @props placeholder []数组类型参数 如['请输入XXX下限', '请输入XXX上线']
 * @props ...others 传递给antd InputNumber的disabled, max, min, precision, size, step属性, 请参考antd.InputNumber属性
 *
 */

// 返回一个object副本，只过滤出keys参数指定的属性值
var pick = function pick(obj, keys) {
  return keys.reduce(function (initObj, k) {
    return k in obj ? (0, _extends4.default)({}, initObj, (0, _defineProperty3.default)({}, k, obj[k])) : initObj;
  }, {});
};

var HRangeNums = function (_React$Component) {
  (0, _inherits3.default)(HRangeNums, _React$Component);

  function HRangeNums(props) {
    (0, _classCallCheck3.default)(this, HRangeNums);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HRangeNums.__proto__ || Object.getPrototypeOf(HRangeNums)).call(this, props));

    var _props$value = props.value,
        value = _props$value === undefined ? [] : _props$value,
        _props$min = props.min,
        min = _props$min === undefined ? -Infinity : _props$min,
        _props$max = props.max,
        max = _props$max === undefined ? Infinity : _props$max;


    _this.state = {
      min: value[0] || min,
      max: value[1] || max,
      minValue: value[0],
      maxValue: value[1]
    };
    return _this;
  }

  (0, _createClass3.default)(HRangeNums, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        var value = nextProps.value;

        this.setState((0, _extends4.default)({}, this.state, { minValue: value[0], maxValue: value[1] }));
      }
    }
  }, {
    key: 'handleMinBlur',
    value: function handleMinBlur(value) {
      var _props$min2 = this.props.min,
          min = _props$min2 === undefined ? -Infinity : _props$min2;


      if (value) {
        this.setState({ min: Number(value) });
      } else {
        this.setState({ min: min });
      }
    }
  }, {
    key: 'handleMaxBlur',
    value: function handleMaxBlur(value) {
      var _props$max2 = this.props.max,
          max = _props$max2 === undefined ? Infinity : _props$max2;


      if (value) {
        this.setState({ max: Number(value) });
      } else {
        this.setState({ max: max });
      }
    }
  }, {
    key: 'handleMinChange',
    value: function handleMinChange(value) {
      if (!('value' in this.props)) {
        this.setState({ minValue: value });
      }

      this.handleTriggerChange({ minValue: value });
    }
  }, {
    key: 'handleMaxChange',
    value: function handleMaxChange(value) {
      if (!('value' in this.props)) {
        this.setState({ maxValue: value });
      }

      this.handleTriggerChange({ maxValue: value });
    }
  }, {
    key: 'handleTriggerChange',
    value: function handleTriggerChange(changedValue) {
      var onChange = this.props.onChange;

      if (onChange) {
        var obj = (0, _extends4.default)({}, this.state, changedValue);
        var arr = [obj.minValue, obj.maxValue];

        onChange(arr);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          min = _state.min,
          max = _state.max,
          minValue = _state.minValue,
          maxValue = _state.maxValue;
      var placeholder = this.props.placeholder;

      var rangeNumsProps = pick(this.props, ['disabled', 'max', 'min', 'precision', 'size', 'step']);

      rangeNumsProps.size = rangeNumsProps.size || 'large';

      return _react2.default.createElement(
        'div',
        { className: 'h-range-nums' },
        _react2.default.createElement(_inputNumber2.default, (0, _extends4.default)({}, rangeNumsProps, {
          max: max,
          value: minValue,
          placeholder: placeholder[0],
          onChange: function onChange(value) {
            return _this2.handleMinChange(value);
          },
          onBlur: function onBlur(e) {
            return _this2.handleMinBlur(e.target.value);
          }
        })),
        _react2.default.createElement(
          'span',
          { className: 'h-range-step' },
          '-'
        ),
        _react2.default.createElement(_inputNumber2.default, (0, _extends4.default)({}, rangeNumsProps, {
          min: min,
          value: maxValue,
          placeholder: placeholder[1],
          onChange: function onChange(value) {
            return _this2.handleMaxChange(value);
          },
          onBlur: function onBlur(e) {
            return _this2.handleMaxBlur(e.target.value);
          }
        }))
      );
    }
  }]);
  return HRangeNums;
}(_react2.default.Component);

HRangeNums.defaultProps = {
  placeholder: []
};
HRangeNums.propTypes = {
  placeholder: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
};
exports.default = HRangeNums;