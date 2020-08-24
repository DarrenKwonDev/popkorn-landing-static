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

  .title {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    margin-top: 24px;
    margin-bottom: 12px;
    line-height: 1.2;
  }

  .desc {
    font-size: 1rem;
    text-align: center;
    line-height: 1.2;
    padding: 0 4px;
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
      width: 560px;
      margin-top: 24px;

      @media all and (max-width: 1023px) {
        width: 250px;
      }
    }

    .ButtonWrapper {
      order: -1;

      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      bottom: 0px;

      background-color: white;
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
  background-color: #fffbfc;

  @media all and (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 50px 0;
  }

  .videoWrapper {
    .video {
      @media all and (max-width: 1023px) {
        order: 2;
      }
    }
  }

  .textWrapper {
    justify-self: start;

    @media all and (max-width: 1023px) {
      justify-self: center;
      text-align: center;
      margin-top: 2em;
      order: -1;
    }

    .title {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 3em;
      @media all and (max-width: 1023px) {
        font-size: 1.8em;
        margin-bottom: 1em;
      }
    }

    .desc {
    }
  }
`;

export const FourthBlockStyle = styled.div``;
