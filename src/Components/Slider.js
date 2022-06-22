import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import foto1 from "./../img/arbolV.jpg";
import foto2 from "./../img/toboganV.jpg";
import foto3 from "./../img/secundariaV.jpg";
import foto4 from "./../img/salonjardinV.jpg";
import Button from '@mui/material/IconButton';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={foto2} alt="SecondSlide"></img>
        <div className="SlideText">
                <h1>Por una educación mejor</h1>
                <p>En nuestro colegio nos esforzamos dia a dia para ser todos mejores. Nuestros ideales nos mantienen en pie desde que comenzamos en 1996</p>
                <Button>Ver más</Button>
            </div></SwiperSlide>
        <SwiperSlide>
        <img src={foto1} alt="FirstSlide"></img>
            <div className="SlideText">
                <h1>Por una educación mejor</h1>
                <p>En nuestro colegio nos esforzamos dia a dia para ser todos mejores. Nuestros ideales nos mantienen en pie desde que comenzamos en 1996</p>
                <Button>Ver más</Button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={foto3} alt="ThirdSlide"></img>
        <div className="SlideText">
                <h1>Por una educación mejor</h1>
                <p>En nuestro colegio nos esforzamos dia a dia para ser todos mejores. Nuestros ideales nos mantienen en pie desde que comenzamos en 1996</p>
                <Button>Ver más</Button>
            </div></SwiperSlide>
        <SwiperSlide>
        <img src={foto4} alt="FourthSlide"></img>
        <div className="SlideText">
                <h1>Por una educación mejor</h1>
                <p>En nuestro colegio nos esforzamos dia a dia para ser todos mejores. Nuestros ideales nos mantienen en pie desde que comenzamos en 1996</p>
                <Button>Ver más</Button>
            </div></SwiperSlide>
      </Swiper>
    </>
  );
}
