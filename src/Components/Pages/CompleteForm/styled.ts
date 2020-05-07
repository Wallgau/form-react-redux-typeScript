import styled from "styled-components";

export const Paragraph = styled.div`
  p {
    font-size: 1.5rem;
    text-align: center;
  }
  padding-bottom: 2rem;
`;

export const Complete = styled.div`
  position: relative;
  padding-bottom: 2.5rem;
  .back {
    position: absolute;
    right: 3.5rem;
  }
  .complete svg {
    font-size: 3.5rem;
    color: red;
    margin: 0 43%;
  }
`;
