import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
`;

export const FirstBlockStyled = styled.div`
  position: relative;
  .mainImg {
    width: 100%;
  }
  .Desc {
    position: absolute;
    top: 5em;
    left: 8em;
    line-height: 1.3;

    .titleHead {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .titlebelow {
      font-size: 1.3em;
      line-height: 1.5;
    }
    .startButton {
      cursor: pointer;
      margin: 2em 0 1em 0;
    }

    .playButton {
      .button-item {
        cursor: pointer;
      }
      .button-item:not(:first-child) {
        margin-left: 20px;
      }
      margin-bottom: 2em;
    }
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

  .right-pane {
    justify-self: start;
    .title {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 3em;
    }

    .desc {
      margin-bottom: 1.3em;
      font-size: 1.5em;
    }
  }
`;

export const ThirdblockStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media all and (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
  }
  align-items: center;
  justify-items: center;
  background-color: #fffbfc;

  .right-pane {
    justify-self: start;
    .title {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 3em;
    }

    .desc {
      margin-bottom: 1.3em;
      font-size: 1.5em;
    }
  }
`;

export const FourthBlockStyle = styled.div``;
