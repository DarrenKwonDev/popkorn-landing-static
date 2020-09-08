import React from "react";
import styled from "styled-components";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import { FormattedMessage } from "react-intl";

SwiperCore.use([Autoplay]);

const StyledSwiper = styled(Swiper)`
  /* position: absolute; */
  /* bottom: 300px; */
  /* left: 0%; */

  width: 50%;

  @media all and (max-width: 1023px) {
    width: 80%;
  }
`;

const SlideItemStyle = {
  // backgroundColor: "crimson",
  // border: "2px solid black",
  width: "100%",
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
          name={"Jessica Lang"}
          image={""}
          reivew={
            <FormattedMessage id="Great and fun experience! I really enjoyed using it! It really helps me improve Korean language." />
          }
        />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard
          name={"Noah Woods"}
          image={""}
          reivew={
            <FormattedMessage id="I studied Korean language for several years and popkorn turned out to be the best. I will definitely recommand" />
          }
        />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard
          name={"Đào  hiên"}
          image={""}
          reivew={
            <FormattedMessage id="Easy way to learn Korean language. I found Korean to be really challenging but Popkorn changed my mind! I use popkorn to have fun, not to study" />
          }
        />
      </SwiperSlide>
      <SwiperSlide style={SlideItemStyle}>
        <ReviewCard
          name={"Quỳnh Như"}
          image={""}
          reivew={
            <FormattedMessage id="I love Kpop and I love Kdramas. Now I love Popkorn too! I think I will continue using this application." />
          }
        />
      </SwiperSlide>
    </StyledSwiper>
  );
}

export default Slider;
