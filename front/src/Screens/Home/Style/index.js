import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
`;

export const FirstBlockStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  width: 100%;
  overflow: hidden;

  .manImage {
    position: relative;

    width: 100%;
    height: 100vh;

    object-fit: cover;
    object-position: center center;

    @media all and (max-width: 1023px) {
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0.5;
    }
  }

  .imageAndTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    @media all and (max-width: 1023px) {
      justify-content: flex-start;
      align-items: center;
      color: black;
    }
  }

  .headTitleWrapper {
    position: absolute;
    z-index: 10;
    text-align: left;
    margin-left: 128px;

    @media all and (max-width: 1023px) {
      margin-left: 0;
      /* 헤더 높이 (50) 반영 */
      margin-top: 150px;
      text-align: center;
    }

    .title {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 12px;
      line-height: 1.2;
      color: white;

      @media all and (max-width: 1023px) {
        font-size: 2rem;
        color: black;
      }
      /* ipad에서 폰트가 너무 작에 되어서 max-width를 768에서 1px 뺌 */
      @media all and (max-width: 767px) {
        font-size: 2rem;
      }
    }

    .ButtonWrapper {
      width: 100%;
      @media all and (max-width: 1023px) {
        position: absolute;
        margin-top: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .android,
        .apple {
          background-color: black;
          border: 1px solid rgb(166, 166, 166);
        }

        .web {
          background-color: rgb(255, 185, 195);
          border: 1px solid transparent;
        }
      }
    }
  }
`;

export const DownloadButton = styled.div`
  width: 90%;
  padding: 1.2em 2.4em;
  border-radius: 6px;
  text-align: center;
  margin: 6px 0;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid white;
  color: white;
  /* 
  &:hover {
    background-color: rgba(256, 256, 256, 0.2) !important;
    transition: all 0.3s ease-in-out;
  } */

  cursor: pointer;
  i,
  img {
    margin-right: 10px;
    width: 24px;
  }

  @media all and (max-width: 1023px) {
    padding: 1em 2em;
    font-size: 14px;
    img {
      width: 14px;
    }
  }
`;

export const SecondblockStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  width: 100%;
  padding: 5em 0;

  overflow: hidden;

  .canvas {
    position: absolute;
    z-index: -1;
  }

  .ImageAndButtons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media all and (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
    }

    .mainImg {
      position: relative;
      width: 700px;
      margin-top: 36px;

      @media all and (max-width: 1023px) {
        width: 500px;
      }

      @media all and (max-width: 768px) {
        width: 300px;
      }
    }
  }
`;

export const ThirdblockStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-end;

  height: 100vh;
  background-color: #f2f3f3;

  .embed-container {
    margin-top: 16px;
    position: relative;
    overflow: hidden;
    width: 90%;
    height: calc(100vh - 350px);
  }

  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .textWrapper {
    justify-self: center;
    text-align: center;

    @media all and (max-width: 1023px) {
      justify-self: center;
      text-align: center;
      margin-top: 1em;
      margin-left: 0;
    }

    .title {
      margin-top: 128px;
      font-size: 40px;
      line-height: 1.5;
      font-weight: bold;
      margin-bottom: 15px;
      @media all and (max-width: 1023px) {
        font-size: 1.5em;
        margin-bottom: 1em;
      }
    }
  }
`;

export const FourthBlockStyle = styled.div``;
