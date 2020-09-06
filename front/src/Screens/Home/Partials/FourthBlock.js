import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import search from "../../../assets/search.svg";
import watch from "../../../assets/watch.svg";
import learn from "../../../assets/learn.svg";
import improve from "../../../assets/improve.svg";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const OuterWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding: 3em 0;

  background-color: #f6f9fc;

  .featurebackground {
    z-index: -10;

    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .features {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 2rem;
      @media all and (max-width: 1023px) {
        font-size: 30px;
      }
    }

    .desc {
      font-size: 24px;
      margin-bottom: 4rem;
      text-align: center;
      @media all and (max-width: 1023px) {
        font-size: 18px;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-template-rows: repeat(2, 275px);
  place-content: center;

  align-items: center;
  justify-items: center;

  @media all and (max-width: 1023px) {
    /* Chunk의 사이즈와 같아야 함
    grid-template-columns: 80vw;
    grid-template-rows: repeat(4, 150px); */

    display: flex;
    flex-direction: column;

    row-gap: 6px;
    justify-items: center;
  }
`;

const Chunk = styled.div`
  /* 부모 그리드를 위한 속성  */
  align-self: center;
  justify-self: center;

  /* 본연의 속성 */
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 12px;
  background-color: white;
  border-radius: 12px;

  height: 225px;

  @media all and (max-width: 1023px) {
    height: 150px;
    width: 80vw;
  }

  .innerChunk {
    @media all and (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      /* Chunk width와 같아야 함 */
      width: 70vw;
    }
  }

  .chunkUpperWrapper {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;

    @media all and (max-width: 1023px) {
      justify-items: center;
      align-items: flex-start;
    }
  }

  img {
    width: 55px;

    @media all and (max-width: 1023px) {
      width: 35px;
    }
  }

  .chunktitle {
    margin: 16px 0 16px 16px;
    font-weight: bold;
    font-size: 1.5rem;
    @media all and (max-width: 1023px) {
      margin: 8px 0 8px 8px;
      font-size: 1.15rem;
    }
  }

  .chunkDesc {
    text-align: center;
    align-self: center;
    line-height: 1.5;
    font-size: 1.5rem;
    width: 400px;

    @media all and (max-width: 1023px) {
      font-size: 1rem;
      text-align: left;

      /* Chunk width와 같아야 함 */
      width: 70vw;
    }
  }
`;

function FourthBlock() {
  const searchChunk = useRef("search");
  const watchChunk = useRef("watch");
  const learnChunk = useRef("learn");
  const improveChunk = useRef("improve");

  const options = {
    threshold: "0.5",
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      // console.log(entry);
      // console.log(entry.length);
      // if (entry.isIntersecting) {
      //   console.log("화면에서 노출됨");
      // } else {
      //   console.log("화면에서 제외됨");
      // }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(searchChunk.current);
    observer.observe(watchChunk.current);
    observer.observe(learnChunk.current);
    observer.observe(improveChunk.current);
    return () => observer.disconnect();
  }, []);

  return (
    <OuterWrapper id={"features"}>
      <div className="textWrapper">
        <div className="features">Features</div>
        <div className="desc">
          EduPopKorn’s Mission expands beyond education.
        </div>
      </div>

      <Wrapper>
        <Chunk ref={searchChunk}>
          <div className="innerChunk">
            <div className="chunkUpperWrapper">
              <img src={search} alt="search"></img>
              <div className="chunktitle">Search</div>
            </div>
            <div className="chunkDesc">
              Find your K-Pop Stars, <br /> favorite dramas and movies. <br />
            </div>
          </div>
        </Chunk>
        <Chunk>
          <div className="innerChunk">
            <div className="chunkUpperWrapper" ref={watchChunk}>
              <img src={watch} alt="watch"></img>
              <div className="chunktitle">Watch</div>
            </div>
            <div className="chunkDesc">
              Watch the videos with subtitles. <br /> Solve quick quizzes about
              the video!
            </div>
          </div>
        </Chunk>
        <Chunk>
          <div className="innerChunk">
            <div className="chunkUpperWrapper" ref={learnChunk}>
              <img src={learn} alt="learn"></img>
              <div className="chunktitle">Learn</div>
            </div>
            <div className="chunkDesc">
              Fix your pronounciation with EdupopKorn TTS AI service.
            </div>
          </div>
        </Chunk>
        <Chunk>
          <div className="innerChunk">
            <div className="chunkUpperWrapper" ref={improveChunk}>
              <img src={improve} alt="improve"></img>
              <div className="chunktitle">Improve</div>
            </div>
            <div className="chunkDesc">
              Watch lectures provided by our selected educators.
            </div>
          </div>
        </Chunk>
      </Wrapper>
    </OuterWrapper>
  );
}

export default FourthBlock;
