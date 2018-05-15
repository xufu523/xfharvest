import React from 'react';
import ReactDOM from 'react-dom';
import './../dist/index.css';
import { HImgPreview, HRangeNums } from './../dist';

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
  <div>
    <HImgPreview imgDatas={imgDatas} />
    <HRangeNums />
  </div>,
  document.getElementById('root')
);
