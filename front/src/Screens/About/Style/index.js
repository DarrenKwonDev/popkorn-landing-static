import styled from "styled-components";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

export const FirstBlockStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding-top: 75px;
  height: calc(var(--vh, 1vh) * 50);

  background-position: left left;
  background-size: cover;
  background-image: linear-gradient(
      56deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.8)
    ),
    url("about.jpg");

  .catchphrase {
    position: absolute;
    font-size: 40px;
    color: white;
    text-align: center;
    padding: 1em;

    line-height: 1.5;

    @media all and (max-width: 768px) {
      font-size: 24px;
    }
  }

  .imageWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    text-align: center;

    /* .mainImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left center;

      @media all and (max-width: 1023px) {
        width: 650px;
      }

      @media all and (max-width: 768px) {
        width: 450px;
      }
    } */
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
