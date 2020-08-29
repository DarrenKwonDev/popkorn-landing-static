import styled from "styled-components";

export const FirstBlockStyled = styled.div`
  position: relative;
  width: auto;
  padding-top: 75px;

  .imageWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    .mainImg {
      width: 800px;
      object-fit: cover;
      object-position: center;

      @media all and (max-width: 1023px) {
        width: 650px;
      }

      @media all and (max-width: 768px) {
        width: 450px;
      }
    }

    .catchphrase {
      position: absolute;
      font-size: 40px;
      color: black;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      line-height: 1.5;

      @media all and (max-width: 768px) {
        font-size: 24px;
      }
    }
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3em;
  width: 100%;
  /* @media all and (max-width: 1023px) {
    font-size: 1.25em;
  } */
`;
