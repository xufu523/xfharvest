# 个人封装的组件


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

##### HImgPreview

```
图片预览组件，基于antd的Modal组件封装，props如下：

imgDatas         [{}]json类型参数  如[{smallSrc: '', bigSrc: '', title: '', alt: ''}],smallSrc默认使用bigSrc，alt默认使用title的值，默认值[{}]。
className        String类型参数    指定最外层div盒子的className，默认值''。
tagName          String类型参数    指定输出的Component标签类型，参数： 'a' | 'img'，默认值'a'。
renderChildren   函数类型参数      自定义渲染Component renderChildren(imgDatas, onPreview)，设置了此props则tagName失效，默认值null。
```

#### utils

```
暂未封装
```

#### third-party

```
暂未封装
```
