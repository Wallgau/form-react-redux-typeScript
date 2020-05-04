import styled from "styled-components";
import { Box as _Box } from "@material-ui/core";

interface Props {
  isActive: boolean;
}

export const Box = styled(_Box)<Props>`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => (props.isActive ? "red" : "white")};
`;
