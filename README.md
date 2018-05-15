# 个人封装的组件、基于react技术栈


个人封装的公共组件库，包含如下几个部分：

- addons
- components 
- utils 
- third-party

#### 安装 xfharvest

```
npm install xfharvest
```

#### addons

```
暂未封装
```

#### components

- HImgPreview

```
图片预览组件，基于antd的Modal组件封装，支持旋转、放大缩小、左右切换、拖拽查看大图 props如下：

imgDatas         [{}]json类型参数  如[{smallSrc: '', bigSrc: '', title: '', alt: ''}],smallSrc默认使用bigSrc，alt默认使用title的值，默认值[{}]。
className        String类型参数    指定最外层div盒子的className，默认值''。
tagName          String类型参数    指定输出的Component标签类型，参数： 'a' | 'img'，默认值'a'。
renderChildren   函数类型参数      自定义渲染Component renderChildren(imgDatas, onPreview)，设置了此props则tagName失效，默认值null。
```

```
使用方法：
import { HImgPreview } from 'xfharvest';

const imgDatas = [
  {
    bigSrc: 'http://f2.topitme.com/2/b9/71/112660598401871b92l.jpg',
    title: '测试一',
    alt: '测试一'
  },
  {
    bigSrc: 'http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg',
    title: '测试二',
    alt: '测试二'
  },
  {
    bigSrc: 'http://pic2.ooopic.com/12/42/25/02bOOOPIC95_1024.jpg',
    title: '测试三',
    alt: '测试三'
  }
];

ReactDOM.render(
  <HImgPreview imgDatas={imgDatas} />,
  document.getElementById('root')
);
```

- HRangeNums

```
数字区间限制组件，基于antd的InputNumber组件封装，props如下：

placeholder      []数组类型参数    如['请输入XXX下限', '请输入XXX上线']，默认值[]。
...others        传递给antd InputNumber的disabled, max, min, precision, size, step属性, 请参考antd.InputNumber属性。
```
[antd.InputNumber 文档](https://ant.design/components/input-number-cn/)
```
使用方法：
import { HRangeNums } from 'xfharvest';

ReactDOM.render(
  <HRangeNums placeholder={['请输入XXX下限', '请输入XXX上限']} />,
  document.getElementById('root')
);
```

#### utils

```
暂未封装
```

#### third-party

```
暂未封装
```
