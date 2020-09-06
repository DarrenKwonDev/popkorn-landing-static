import React from "react";
import styled from "styled-components";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

const StyledSwiper = styled(Swiper)`
  position: absolute;
  bottom: 300px;
  left: 0%;

  @media all and (max-width: 1023px) {
    bottom: 200px;
  }
`;

const SlideItemStyle = {
  height: "350px",
};

function Slider({ isMobile }) {
  return (
    <StyledSwiper
      autoplay={{
        delay: 750,
        disableOnInteraction: false,
      }}
      loop
      spaceBetween={50}
      slidesPerView={isMobile ? 2 : 6}
    >
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard
          name={"John Fang"}
          image={""}
          reivew={
            "Most practical way to learn Korean. Teaches dialogues that will be useful when I visit Korea. Very clever!"
          }
        />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard
          name={"Jeny Doe"}
          image={""}
          reivew={
            "An addictive and fun way to learn new language with my phone without stress"
          }
        />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard name={"test"} image={""} reivew={"dksskdfkajf"} />
      </SwiperSlide>
    </StyledSwiper>
  );
}

export default Slider;
