"use client"
import { Carousel } from 'antd';
const contentStyle = {
  margin:"50px",
  height: '280px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',
};
const CommonCarousel = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img className="w-full object-fill" src="https://www.creatopy.com/blog/wp-content/uploads/2018/05/animations-e-commerce.png"/>
      </h3>
    </div>
    <div>
    <h3 style={contentStyle}>
        <img className="w-full object-fill"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgM8RlZ0uehCZUxvIxTnjQY_DU_rYNAVTyA_eCrsZzUZiF9HzPni8ptGY4pTtXcf-EB0&usqp=CAU"/>
      </h3>
    </div>
    <div>
    <h3 style={contentStyle}>
        <img className="w-full object cover"  src="https://i.ibb.co/XXR8kzF/3.png"/>
      </h3>
    </div>
    <div>
    <h3 style={contentStyle}>
        <img className="w-full object cover"  src="https://i.ibb.co/yg7BSdM/4.png"/>
      </h3>
    </div>
  </Carousel>
);
export default CommonCarousel;