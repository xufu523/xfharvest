import React from 'react';
import { Modal, Icon } from 'antd';

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
class HImgPreview extends React.Component {
  static defaultProps = {
    imgDatas: [{}],
    className: '',
    tagName: 'a',
    renderChildren: null
  }

  static propTypes = {
    imgDatas: React.PropTypes.arrayOf(React.PropTypes.object),
    className: React.PropTypes.string,
    tagName: React.PropTypes.oneOf(['a', 'img']),
    renderChildren: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.state = {
      visible: false,
      currentIndex: 0,
      rotate: 0,
      scale: 1
    };
  }

  getComponent(imgDatas) {
    const { tagName } = this.props;

    return (
      imgDatas.map((item, index) => {
        let tag = null;

        if (tagName === 'a') {
          tag = (
            <a key={index} className="item-a" title={item.title} onClick={() => this.handleModal(index)}>
              {item.title}
            </a>
          );
        } else if (tagName === 'img') {
          tag = (
            <img
              key={index}
              className="item-img"
              src={item.smallSrc || item.bigSrc}
              title={item.title}
              alt={item.alt || item.title}
              onClick={() => this.handleModal(index)}
            />
          );
        }

        return tag;
      })
    );
  }

  // 修正currentIndex
  reviseCurrentIndex(currentIndex, maxIndex) {
    let reviseCurrentIndex = 0;

    if (currentIndex < 0) {
      reviseCurrentIndex = maxIndex;
    } else if (currentIndex > (maxIndex)) {
      reviseCurrentIndex = 0;
    } else {
      reviseCurrentIndex = currentIndex;
    }

    return reviseCurrentIndex;
  }

  handleModal(index) {
    this.setState({ visible: true, currentIndex: index });
  }

  handleCancel() {
    this.setState({ visible: false, rotate: 0, scale: 1 });
  }

  handlePrev() {
    const { currentIndex } = this.state;
    const { imgDatas } = this.props;
    const prevIndex = currentIndex - 1;

    this.drag.style.left = '50%';
    this.drag.style.top = '50%';
    this.setState({ currentIndex: this.reviseCurrentIndex(prevIndex, imgDatas.length - 1), rotate: 0, scale: 1 });
  }

  handleNext() {
    const { currentIndex } = this.state;
    const { imgDatas } = this.props;
    const nextIndex = currentIndex + 1;

    this.drag.style.left = '50%';
    this.drag.style.top = '50%';
    this.setState({ currentIndex: this.reviseCurrentIndex(nextIndex, imgDatas.length - 1), rotate: 0, scale: 1 });
  }

  handleSmallClick(index) {
    this.drag.style.left = '50%';
    this.drag.style.top = '50%';
    this.setState({ currentIndex: index, rotate: 0, scale: 1 });
  }

  handleLeftRotate() {
    let { rotate } = this.state;

    rotate -= 90;
    this.setState({ rotate });
  }

  handleRightRotate() {
    let { rotate } = this.state;

    rotate += 90;
    this.setState({ rotate });
  }

  handleWheel(e) {
    const deta = e.deltaY;
    let { scale } = this.state;

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

    this.setState({ scale });
  }

  handleMouseDown(e) {
    e.preventDefault();
    this.disX = e.clientX - e.target.offsetLeft;
    this.disY = e.clientY - e.target.offsetTop;
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(e) {
    const left = e.clientX - this.disX;
    const top = e.clientY - this.disY;

    this.drag.style.left = `${left}px`;
    this.drag.style.top = `${top}px`;
  }

  handleMouseUp() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleRestore() {
    this.drag.style.left = '50%';
    this.drag.style.top = '50%';
    this.setState({ rotate: 0, scale: 1 });
  }

  render() {
    const { visible, currentIndex, rotate, scale } = this.state;
    const { imgDatas, className, renderChildren } = this.props;
    const modalProps = {
      visible: true,
      title: null,
      footer: null,
      wrapClassName: 'h-img-preview',
      width: '100%',
      style: { top: 0, padding: 0, height: '100%' },
      bodyStyle: { position: 'absolute', width: '100%', height: '100%', padding: 0 },
      onCancel: () => this.handleCancel()
    };

    return (
      <div className={className ? `h-img-preview-wrap ${className}` : 'h-img-preview-wrap'}>
        {
          (renderChildren && renderChildren(imgDatas, this.handleModal.bind(this))) ||
          this.getComponent(imgDatas)
        }
        {
          visible && <Modal {...modalProps}>
            <div className="h-big-img-preview">
              {/* eslint jsx-a11y/no-noninteractive-element-interactions: 'off' */}
              <img
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg) scale(${scale})` }}
                src={imgDatas[currentIndex].bigSrc}
                title={imgDatas[currentIndex].title}
                alt={imgDatas[currentIndex].alt}
                ref={e => (this.drag = e)}
                onWheel={e => this.handleWheel(e)}
                onMouseDown={e => this.handleMouseDown(e)}
              />
              <Icon className="h-arrow h-left-arrow" type="left" onClick={() => this.handlePrev()} />
              <Icon className="h-arrow h-right-arrow" type="right" onClick={() => this.handleNext()} />
              <div className="h-other-btn">
                <Icon className="h-item-btn h-left-rotate" type="reload" onClick={() => this.handleLeftRotate()} />
                <Icon className="h-item-btn h-restore" type="sync" onClick={() => this.handleRestore()} />
                <Icon className="h-item-btn h-right-rotate" type="reload" onClick={() => this.handleRightRotate()} />
              </div>
            </div>
            <div className="h-small-preview">
              {imgDatas.map((item, index) => (
                <img
                  key={index}
                  className={currentIndex === index ? 'active' : ''}
                  src={item.smallSrc || item.bigSrc}
                  title={item.title}
                  alt={item.alt || item.title}
                  onClick={() => this.handleSmallClick(index)}
                />
              ))}
            </div>
          </Modal>
        }
      </div>
    );
  }
}

export default HImgPreview;
