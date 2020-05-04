import styled from "styled-components";
import { Box as _Box } from "@material-ui/core";

interface Props {
  isActive: boolean;
}

export const Box = styled(_Box)<Props>`
  background-color: ${(props) => (props.isActive ? "#0dbf73" : "white")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  width: 33%;
  font-weight: ${(props) => (props.isActive ? 800 : 200)};
  width: 33%;
  text-align: center;
  padding: 0.7rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 2rem auto;
  border: 1px solid #0dbf73;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem;
`;
