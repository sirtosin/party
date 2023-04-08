import React from "react";
import { hero1, swiper, swiper1 } from "../asset";
import { Button } from "./Button";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";

export const Hero = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div>
      <div className='relative -z-10'>
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

      <div className="absolute top-40 sm:top-1/2 ml-10 sm:ml-32 flex flex-col space-y-4 ">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Leadership. Experience. Values.
        </h2>
        <p className="md:tracking-wide uppercase text-white">
          NEW LEADERS FOR NEW GENERATION
        </p>
        <Button
          color="gray"
          onClick={() => console.log("btn")}
          title="Become a member"
        />
      </div>
    </div>
  );
};
