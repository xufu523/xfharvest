(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/helpers/inherits"), require("antd/lib/input-number"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/defineProperty"), require("babel-runtime/helpers/extends"), require("antd/lib/input-number/style"), require("react"), require("antd/lib/modal"), require("antd/lib/icon"), require("antd/lib/modal/style"), require("antd/lib/icon/style"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/helpers/inherits", "antd/lib/input-number", "babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/createClass", "babel-runtime/helpers/possibleConstructorReturn", "babel-runtime/helpers/defineProperty", "babel-runtime/helpers/extends", "antd/lib/input-number/style", "react", "antd/lib/modal", "antd/lib/icon", "antd/lib/modal/style", "antd/lib/icon/style"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("babel-runtime/helpers/inherits"), require("antd/lib/input-number"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/defineProperty"), require("babel-runtime/helpers/extends"), require("antd/lib/input-number/style"), require("react"), require("antd/lib/modal"), require("antd/lib/icon"), require("antd/lib/modal/style"), require("antd/lib/icon/style")) : factory(root["babel-runtime/helpers/inherits"], root["antd/lib/input-number"], root["babel-runtime/helpers/classCallCheck"], root["babel-runtime/helpers/createClass"], root["babel-runtime/helpers/possibleConstructorReturn"], root["babel-runtime/helpers/defineProperty"], root["babel-runtime/helpers/extends"], root["antd/lib/input-number/style"], root["react"], root["antd/lib/modal"], root["antd/lib/icon"], root["antd/lib/modal/style"], root["antd/lib/icon/style"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HRangeNums = exports.HImgPreview = undefined;

var _HImgPreview = __webpack_require__(6);

Object.defineProperty(exports, 'HImgPreview', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HImgPreview).default;
  }
});

var _HRangeNums = __webpack_require__(11);

Object.defineProperty(exports, 'HRangeNums', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HRangeNums).default;
  }
});

__webpack_require__(16);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(7);

var _modal2 = _interopRequireDefault(_modal);

var _icon = __webpack_require__(8);

var _icon2 = _interopRequireDefault(_icon);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(9);

__webpack_require__(10);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 图片预览组件  基于antd的Modal组件封装
 *
 * @props imgDatas [{}]json类型参数，如[{smallSrc: '', bigSrc: '', title: '', alt: ''}],
 * smallSrc默认使用bigSrc，alt默认使用title的值。
 * @props className String类型参数，指定最外层div盒子的className。
 * @props tagName String类型参数，指定输出的Component标签类型，参数： 'a' | 'img'。
 * @props renderChildren 函数类型参数，自定义渲染Component renderChildren(imgDatas, onPreview)，
 *  设置了此props则tagName失效。
 *
 */
var HImgPreview = function (_React$Component) {
  (0, _inherits3.default)(HImgPreview, _React$Component);

  function HImgPreview(props) {
    (0, _classCallCheck3.default)(this, HImgPreview);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HImgPreview.__proto__ || Object.getPrototypeOf(HImgPreview)).call(this, props));

    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.state = {
      visible: false,
      currentIndex: 0,
      rotate: 0,
      scale: 1
    };
    return _this;
  }

  (0, _createClass3.default)(HImgPreview, [{
    key: 'getComponent',
    value: function getComponent(imgDatas) {
      var _this2 = this;

      var tagName = this.props.tagName;


      return imgDatas.map(function (item, index) {
        var tag = null;

        if (tagName === 'a') {
          tag = _react2.default.createElement(
            'a',
            { key: index, className: 'item-a', title: item.title, onClick: function onClick() {
                return _this2.handleModal(index);
              } },
            item.title
          );
        } else if (tagName === 'img') {
          tag = _react2.default.createElement('img', {
            key: index,
            className: 'item-img',
            src: item.smallSrc || item.bigSrc,
            title: item.title,
            alt: item.alt || item.title,
            onClick: function onClick() {
              return _this2.handleModal(index);
            }
          });
        }

        return tag;
      });
    }

    // 修正currentIndex

  }, {
    key: 'reviseCurrentIndex',
    value: function reviseCurrentIndex(currentIndex, maxIndex) {
      var reviseCurrentIndex = 0;

      if (currentIndex < 0) {
        reviseCurrentIndex = maxIndex;
      } else if (currentIndex > maxIndex) {
        reviseCurrentIndex = 0;
      } else {
        reviseCurrentIndex = currentIndex;
      }

      return reviseCurrentIndex;
    }
  }, {
    key: 'handleModal',
    value: function handleModal(index) {
      this.setState({ visible: true, currentIndex: index });
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.setState({ visible: false, rotate: 0, scale: 1 });
    }
  }, {
    key: 'handlePrev',
    value: function handlePrev() {
      var currentIndex = this.state.currentIndex;
      var imgDatas = this.props.imgDatas;

      var prevIndex = currentIndex - 1;

      this.drag.style.left = '50%';
      this.drag.style.top = '50%';
      this.setState({ currentIndex: this.reviseCurrentIndex(prevIndex, imgDatas.length - 1), rotate: 0, scale: 1 });
    }
  }, {
    key: 'handleNext',
    value: function handleNext() {
      var currentIndex = this.state.currentIndex;
      var imgDatas = this.props.imgDatas;

      var nextIndex = currentIndex + 1;

      this.drag.style.left = '50%';
      this.drag.style.top = '50%';
      this.setState({ currentIndex: this.reviseCurrentIndex(nextIndex, imgDatas.length - 1), rotate: 0, scale: 1 });
    }
  }, {
    key: 'handleSmallClick',
    value: function handleSmallClick(index) {
      this.drag.style.left = '50%';
      this.drag.style.top = '50%';
      this.setState({ currentIndex: index, rotate: 0, scale: 1 });
    }
  }, {
    key: 'handleLeftRotate',
    value: function handleLeftRotate() {
      var rotate = this.state.rotate;


      rotate -= 90;
      this.setState({ rotate: rotate });
    }
  }, {
    key: 'handleRightRotate',
    value: function handleRightRotate() {
      var rotate = this.state.rotate;


      rotate += 90;
      this.setState({ rotate: rotate });
    }
  }, {
    key: 'handleWheel',
    value: function handleWheel(e) {
      var deta = e.deltaY;
      var scale = this.state.scale;

      // 鼠标滚轮向上滚动

      if (deta < 0) {
        scale += 0.1;
        if (scale > 3) scale = 3;
      }

      // 鼠标滚轮向下滚动
      if (deta > 0) {
        scale -= 0.1;
        if (scale < 0.2) scale = 0.2;
      }

      this.setState({ scale: scale });
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      e.preventDefault();
      this.disX = e.clientX - e.target.offsetLeft;
      this.disY = e.clientY - e.target.offsetTop;
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      var left = e.clientX - this.disX;
      var top = e.clientY - this.disY;

      this.drag.style.left = left + 'px';
      this.drag.style.top = top + 'px';
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'handleRestore',
    value: function handleRestore() {
      this.drag.style.left = '50%';
      this.drag.style.top = '50%';
      this.setState({ rotate: 0, scale: 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          visible = _state.visible,
          currentIndex = _state.currentIndex,
          rotate = _state.rotate,
          scale = _state.scale;
      var _props = this.props,
          imgDatas = _props.imgDatas,
          className = _props.className,
          renderChildren = _props.renderChildren;

      var modalProps = {
        visible: true,
        title: null,
        footer: null,
        wrapClassName: 'h-img-preview',
        width: '100%',
        style: { top: 0, padding: 0, height: '100%' },
        bodyStyle: { position: 'absolute', width: '100%', height: '100%', padding: 0 },
        onCancel: function onCancel() {
          return _this3.handleCancel();
        }
      };

      return _react2.default.createElement(
        'div',
        { className: className ? 'h-img-preview-wrap ' + className : 'h-img-preview-wrap' },
        renderChildren && renderChildren(imgDatas, this.handleModal.bind(this)) || this.getComponent(imgDatas),
        visible && _react2.default.createElement(
          _modal2.default,
          modalProps,
          _react2.default.createElement(
            'div',
            { className: 'h-big-img-preview' },
            _react2.default.createElement('img', {
              style: { transform: 'translate(-50%,-50%) rotate(' + rotate + 'deg) scale(' + scale + ')' },
              src: imgDatas[currentIndex].bigSrc,
              title: imgDatas[currentIndex].title,
              alt: imgDatas[currentIndex].alt,
              ref: function ref(e) {
                return _this3.drag = e;
              },
              onWheel: function onWheel(e) {
                return _this3.handleWheel(e);
              },
              onMouseDown: function onMouseDown(e) {
                return _this3.handleMouseDown(e);
              }
            }),
            _react2.default.createElement(_icon2.default, { className: 'h-arrow h-left-arrow', type: 'left', onClick: function onClick() {
                return _this3.handlePrev();
              } }),
            _react2.default.createElement(_icon2.default, { className: 'h-arrow h-right-arrow', type: 'right', onClick: function onClick() {
                return _this3.handleNext();
              } }),
            _react2.default.createElement(
              'div',
              { className: 'h-other-btn' },
              _react2.default.createElement(_icon2.default, { className: 'h-item-btn h-left-rotate', type: 'reload', onClick: function onClick() {
                  return _this3.handleLeftRotate();
                } }),
              _react2.default.createElement(_icon2.default, { className: 'h-item-btn h-restore', type: 'sync', onClick: function onClick() {
                  return _this3.handleRestore();
                } }),
              _react2.default.createElement(_icon2.default, { className: 'h-item-btn h-right-rotate', type: 'reload', onClick: function onClick() {
                  return _this3.handleRightRotate();
                } })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'h-small-preview' },
            imgDatas.map(function (item, index) {
              return _react2.default.createElement('img', {
                key: index,
                className: currentIndex === index ? 'active' : '',
                src: item.smallSrc || item.bigSrc,
                title: item.title,
                alt: item.alt || item.title,
                onClick: function onClick() {
                  return _this3.handleSmallClick(index);
                }
              });
            })
          )
        )
      );
    }
  }]);
  return HImgPreview;
}(_react2.default.Component);

HImgPreview.defaultProps = {
  imgDatas: [{}],
  className: '',
  tagName: 'a',
  renderChildren: null
};
HImgPreview.propTypes = {
  imgDatas: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
  className: _react2.default.PropTypes.string,
  tagName: _react2.default.PropTypes.oneOf(['a', 'img']),
  renderChildren: _react2.default.PropTypes.func
};
exports.default = HImgPreview;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = __webpack_require__(12);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(14);

var _extends4 = _interopRequireDefault(_extends3);

__webpack_require__(15);

var _react = __webpack_require__(4);

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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number/style");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});