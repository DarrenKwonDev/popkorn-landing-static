import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import search from "../../../assets/search.svg";
import watch from "../../../assets/watch.svg";
import learn from "../../../assets/learn.svg";
import improve from "../../../assets/improve.svg";
import gsap from "gsap";

const OuterWrapper = styled.div`
  padding: 5em 0;
  background-color: rgb(243, 243, 243);

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .features {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    .desc {
      font-size: 24px;
      margin-bottom: 4rem;
      text-align: center;
      @media all and (max-width: 1023px) {
        font-size: 2em;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media all and (max-width: 1023px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Chunk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  padding: 1em;

  @media all and (max-width: 1023px) {
    flex-direction: row;
    width: 300px;
  }

  .chunkUpperWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;

    @media all and (max-width: 1023px) {
      width: 3rem;
      justify-items: center;
    }
  }

  img {
    width: 75%;
  }

  .chunktitle {
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 1.25rem;
  }

  .chunkDesc {
    text-align: center;
    align-self: center;
    line-height: 1.5;
    @media all and (max-width: 1023px) {
      margin-left: 25px;
      text-align: left;
    }
  }

  @media all and (max-width: 1023px) {
    .chunkDesc {
      margin-bottom: 16px;
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
          EduPopKorn’s Mission expands beyong education.
        </div>
      </div>

      <Wrapper>
        <Chunk
          ref={searchChunk}
          className="animate__animated animate__slideInUp"
        >
          <div className="chunkUpperWrapper">
            <img src={search} alt="search"></img>
            <div className="chunktitle">Search</div>
          </div>
          <div className="chunkDesc">
            Find your K-Pop Stars, <br /> favorite dramas and movies. <br />
            1000+ videos to watch!
          </div>
        </Chunk>
        <Chunk>
          <div className="chunkUpperWrapper" ref={watchChunk}>
            <img src={watch} alt="watch"></img>
            <div className="chunktitle">Watch</div>
          </div>
          <div className="chunkDesc">
            Watch the videos with subtitles. <br /> Solve quick quizzes about
            the video and keep watching!
          </div>
        </Chunk>
        <Chunk>
          <div className="chunkUpperWrapper" ref={learnChunk}>
            <img src={learn} alt="learn"></img>
            <div className="chunktitle">Learn</div>
          </div>
          <div className="chunkDesc">
            Fix your pronounciation with EdupopKorn TTS AI service. <br />
            Repeat after us! Solve ToPik tests and watch lectures.
          </div>
        </Chunk>
        <Chunk>
          <div className="chunkUpperWrapper" ref={improveChunk}>
            <img src={improve} alt="improve"></img>
            <div className="chunktitle">Improve</div>
          </div>
          <div className="chunkDesc">
            Watch lectures provided by our selected educators. <br /> Study with
            your idols and teachers.
          </div>
        </Chunk>
      </Wrapper>
    </OuterWrapper>
  );
}

export default FourthBlock;
