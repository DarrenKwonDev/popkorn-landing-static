import styled from "styled-components";

export const DownloadButton = styled.button`
  padding: 1rem;
  background-color: rgb(231, 40, 106);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  min-height: 80vh;
  padding: 2em 5em;
  padding-top: 75px;
  background-color: rgb(246, 249, 252);
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin: 2rem 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.5rem 0;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.25rem 0;
  }
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1.1rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.85rem 0;
  }

  ul {
    list-style: disc inside;
    li {
      margin: 1rem 0;
    }
    ul {
      list-style: circle inside;
      text-indent: 1rem;
      ul {
        list-style: decimal inside;
        text-indent: 2rem;
      }
    }
  }

  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 1rem;
  }

  table {
    width: 80%;
  }
`;
