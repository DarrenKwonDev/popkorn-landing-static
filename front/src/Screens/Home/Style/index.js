import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
`;

export const FirstBlockStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  width: 100%;

  overflow: hidden;

  .manImage {
    position: relative;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .imageAndTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .headTitleWrapper {
    position: absolute;
    z-index: 10;
    text-align: center;

    .title {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 12px;
      line-height: 1.2;

      @media all and (max-width: 1023px) {
        text-align: center;
        font-size: 2rem;
      }
      /* ipad에서 폰트가 너무 작에 되어서 max-width를 768에서 1px 뺌 */
      @media all and (max-width: 767px) {
        text-align: center;
        font-size: 1.5rem;
      }
    }

    .desc {
      font-size: 2rem;
      line-height: 1.2;
      padding: 0 4px;
      @media all and (max-width: 1023px) {
        display: none;
      }
    }
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
      width: 480px;
      margin-top: 36px;

      @media all and (max-width: 1023px) {
        width: 250px;
      }
    }

    .ButtonWrapper {
      order: 1;
      z-index: 100;

      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 80%;
      bottom: 0;

      background-color: white;

      @media all and (max-width: 1023px) {
        width: 100%;
      }
    }
  }
`;

export const DownloadButton = styled.div`
  width: 90%;
  padding: 1em 2em;
  border-radius: 12px;
  text-align: center;
  margin: 6px 0;

  cursor: pointer;
  i,
  img {
    margin-right: 10px;
  }
`;

export const SecondblockStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media all and (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
  }

  align-items: center;
  justify-items: center;
  background-color: #fffbfc;

  .left-pane {
    .phone {
      width: 450px;
    }

    @media all and (max-width: 1023px) {
      .phone {
        width: 40vw;
      }
    }
  }

  .right-pane {
    justify-self: start;

    @media all and (max-width: 1023px) {
      justify-self: center;
      text-align: center;
      margin-top: 2em;
    }

    .title {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 3em;
      @media all and (max-width: 1023px) {
        font-size: 1.5em;
      }
    }

    .desc {
      margin-bottom: 1.3em;
      font-size: 1.5em;
      @media all and (max-width: 1023px) {
        font-size: 1.2em;
      }
    }
  }
`;

export const ThirdblockStyle = styled.div`
  display: grid;
  margin: 100px 0;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  padding: 5em 0;

  @media all and (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 50px 0;
  }

  .videoWrapper {
    .video {
      justify-self: flex-end;

      @media all and (max-width: 1023px) {
        order: 2;
      }
    }
  }

  .textWrapper {
    /* justify-self: start; */
    justify-self: center;
    margin-left: 32px;

    @media all and (max-width: 1023px) {
      justify-self: center;
      text-align: center;
      margin-top: 2em;
      margin-left: 0;
      order: -1;
    }

    .title {
      font-size: 40px;
      line-height: 1.5;
      font-weight: bold;
      margin-bottom: 15px;
      @media all and (max-width: 1023px) {
        font-size: 32px;
        margin-bottom: 2em;
      }
    }

    .desc {
      font-size: 24px;
      line-height: 1.5;
      @media all and (max-width: 1023px) {
        font-size: 1.5em;
        margin-bottom: 2em;
      }
    }
  }
`;

export const FourthBlockStyle = styled.div``;
