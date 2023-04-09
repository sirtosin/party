import React from "react";
import { hero1, swiper, swiper1 } from "../asset";
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";

export const Hero = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/membership');
  }
  return (
    <div>
      <div className="relative -z-10">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          className="swiper"
        >
          <SwiperSlide>
            <img
              className="w-full md:object-cover  md:h-[500px]"
              src={hero1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full md:object-cover  md:h-[500px]"
              src={swiper}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full md:object-cover  md:h-[500px]"
              src={swiper1}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute flex flex-col ml-10 space-y-4 top-40 sm:top-60 sm:ml-32 ">
        <h2 className="text-2xl font-bold text-white md:text-4xl">
          Leadership. Experience. Values.
        </h2>
        <p className="text-white uppercase md:tracking-wide">
          NEW LEADERS FOR NEW GENERATION
        </p>
        <Button color="gray" onClick={handleNavigate} title="Become a member" />
      </div>
    </div>
  );
};
