import React from 'react';
import { InputNumber } from 'antd';

/**
 * 数字区间限制
 *
 * @props placeholder []数组类型参数 如['请输入XXX下限', '请输入XXX上线']
 * @props ...others 传递给antd InputNumber的disabled, max, min, precision, size, step属性, 请参考antd.InputNumber属性
 *
 */

// 返回一个object副本，只过滤出keys参数指定的属性值
const pick = (obj, keys) => keys.reduce((initObj, k) => k in obj ? { ...initObj, [k]: obj[k] } : initObj, {});

class HRangeNums extends React.Component {
  static defaultProps = {
    placeholder: []
  }

  static propTypes = {
    placeholder: React.PropTypes.arrayOf(React.PropTypes.string)
  }

  constructor(props) {
    super(props);

    const { value = [], min = -Infinity, max = Infinity } = props;

    this.state = {
      min: value[0] || min,
      max: value[1] || max,
      minValue: value[0],
      maxValue: value[1]
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const value = nextProps.value;

      this.setState({ ...this.state, minValue: value[0], maxValue: value[1] });
    }
  }

  handleMinBlur(value) {
    const { min = -Infinity } = this.props;

    if (value) {
      this.setState({ min: Number(value) });
    } else {
      this.setState({ min });
    }
  }

  handleMaxBlur(value) {
    const { max = Infinity } = this.props;

    if (value) {
      this.setState({ max: Number(value) });
    } else {
      this.setState({ max });
    }
  }

  handleMinChange(value) {
    if (!('value' in this.props)) {
      this.setState({ minValue: value });
    }

    this.handleTriggerChange({ minValue: value });
  }

  handleMaxChange(value) {
    if (!('value' in this.props)) {
      this.setState({ maxValue: value });
    }

    this.handleTriggerChange({ maxValue: value });
  }

  handleTriggerChange(changedValue) {
    const onChange = this.props.onChange;

    if (onChange) {
      const obj = { ...this.state, ...changedValue };
      const arr = [obj.minValue, obj.maxValue];

      onChange(arr);
    }
  }

  render() {
    const { min, max, minValue, maxValue } = this.state;
    const { placeholder } = this.props;
    const rangeNumsProps = pick(this.props, ['disabled', 'max', 'min', 'precision', 'size', 'step']);

    rangeNumsProps.size = rangeNumsProps.size || 'large';

    return (
      <div className="h-range-nums">
        <InputNumber
          {...rangeNumsProps}
          max={max}
          value={minValue}
          placeholder={placeholder[0]}
          onChange={value => this.handleMinChange(value)}
          onBlur={e => this.handleMinBlur(e.target.value)}
        />
        <span className="h-range-step">-</span>
        <InputNumber
          {...rangeNumsProps}
          min={min}
          value={maxValue}
          placeholder={placeholder[1]}
          onChange={value => this.handleMaxChange(value)}
          onBlur={e => this.handleMaxBlur(e.target.value)}
        />
      </div>
    );
  }
}

export default HRangeNums;
