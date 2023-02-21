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
        <img className="w-full object cover" src="https://i.ibb.co/ncrXc2V/1.png"/>
      </h3>
    </div>
    <div>
    <h3 style={contentStyle}>
        <img className="w-full object cover"  src="https://i.ibb.co/B3s7v4h/2.png"/>
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