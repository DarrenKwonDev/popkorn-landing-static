import styled from "styled-components";

export const FirstBlockStyled = styled.div`
  position: relative;
  width: auto;

  .imageWrapper {
    display: flex;
    justify-content: center;
    width: 100%;

    .mainImg {
      width: 850px;

      @media all and (max-width: 1023px) {
        width: 280px;
      }
    }
  }
`;

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3em;
`;
