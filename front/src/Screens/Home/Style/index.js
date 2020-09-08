import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  background-color: #f6f9fc;
`;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

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
    height: calc(var(--vh, 1vh) * 100);

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
    margin-left: 256px;

    @media all and (max-width: 1023px) {
      margin-left: 0;
      /* 헤더 높이 (50) 반영 */
      margin-top: 150px;
      text-align: center;
    }

    .title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 12px;
      line-height: 1.2;
      color: white;

      @media all and (max-width: 1023px) {
        font-size: 40px;
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
          background-image: linear-gradient(56deg, #0a0709, #171921);
          box-shadow: 0 2px 2px 0 rgba(32, 35, 44, 0.15);
        }

        .web {
          background-color: rgb(231, 40, 106);
          background-image: linear-gradient(56deg, #e8276b, #d837dd);

          box-shadow: 0 2px 2px 0 rgba(32, 35, 44, 0.15);
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

  cursor: pointer;
  i,
  img {
    margin-right: 10px;
    width: 24px;
  }

  @media all and (max-width: 1023px) {
    padding: 1em 2em;
    font-size: 14px;
    border: none;
    img {
      width: 14px;
    }
  }
`;

export const SecondblockStyle = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  color: white;

  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  padding: 0 12rem;

  overflow: hidden;

  background-image: linear-gradient(
      rgba(231, 40, 106, 0.75),
      rgba(231, 40, 106, 0.75)
    ),
    url("team.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* 태블릿을 위해 1025로 */
  @media all and (max-width: 1025px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }

  .ImageAndButtons {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* 태블릿을 위해 1025로 */
    @media all and (max-width: 1025px) {
      flex-direction: column;
      align-items: center;
    }

    .mainImg {
      position: relative;
      width: calc(100vw / 2.3);

      @media all and (max-width: 1025px) {
        width: 80vw;
      }
    }
  }

  .descWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;

    /* 태블릿을 위해 1025로 */
    @media all and (max-width: 1025px) {
      align-items: center;
      height: 50%;
    }

    .desc1 {
      text-align: right;
      /* font-size: 32px; */
      font-size: 2em;
      line-height: 1.5;
      margin-bottom: 16px;

      /* 태블릿을 위해 1025로 */
      @media all and (max-width: 1025px) {
        font-size: 1.25rem;
        text-align: center;
      }
    }

    .desc2 {
      text-align: right;
      font-size: 20px;
      line-height: 1.5;
      margin-bottom: 36px;

      /* 태블릿을 위해 1025로 */
      @media all and (max-width: 1025px) {
        font-size: 1rem;
        text-align: center;
      }
    }

    .discover {
      background-color: white;
      border-radius: 6px;
      color: #e7286a;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
        transition: box-shadow 0.2s ease;
      }

      width: 200px;

      padding: 1.2em 2.4em;
      margin: 6px 0;
      text-align: center;

      font-size: 18px;
      font-weight: bold;

      cursor: pointer;

      @media all and (max-width: 1023px) {
        padding: 1em 2em;
        font-size: 14px;
        border: none;
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
  background-color: rgb(246, 249, 252);

  .embed-container {
    margin-top: 16px;
    position: relative;
    overflow: hidden;
    width: 55%;
    border-radius: 12px;
    height: calc(100vh - 400px);

    display: flex;
    justify-content: center;
    align-items: center;
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
