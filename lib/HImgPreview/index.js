'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('antd/lib/modal/style');

require('antd/lib/icon/style');

var _react = require('react');

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