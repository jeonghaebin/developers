import React from "react";
import { Swiper, SoiperSlide } from "swiper/react";
import "swiper/css";

export default function Homeslider() {
  return (
    <div>
    <Swiper
      spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      </div>
  );
};