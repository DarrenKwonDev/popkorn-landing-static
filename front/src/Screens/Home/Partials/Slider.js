import React from "react";
import styled from "styled-components";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

const StyledSwiper = styled(Swiper)`
  /* position: absolute; */
  /* bottom: 300px; */
  /* left: 0%; */

  @media all and (max-width: 1023px) {
    /* bottom: 200px; */
  }
`;

const SlideItemStyle = {
  // backgroundColor: "crimson",
  // border: "2px solid black",
  width: "90vw",
  display: "flex",
};

function Slider({ isMobile }) {
  return (
    <StyledSwiper
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop
      direction={"vertical"}
      // 슬라이더 사이의 간격
      spaceBetween={5}
      // 슬라이드 몇 개씩 보여줄거야?
      slidesPerView={3}
      // 슬라이드가 몇 개씩 넘어갈 거야?
      slidesPerGroup={1}
      // autoHeight={true}
    >
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard
          name={"John Doe"}
          image={""}
          reivew={"askdfha;ksdgf;dsbfkj;agsd;jifkbsadkj;fgahjsdgflhsdfj"}
        />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard
          name={"John Doe"}
          image={""}
          reivew={
            "It defines whether the flex items are forced in a single line or can be flowed into multiple lines. If set to multiple lines, "
          }
        />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard
          name={"John Doe"}
          image={""}
          reivew={"askdfha;ksdgf;dsbfkj;agsd;jifkbsadkj;fgahjsdgflhsdfj"}
        />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard />
      </SwiperSlide>
    </StyledSwiper>
  );
}

export default Slider;
