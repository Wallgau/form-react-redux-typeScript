import styled from "styled-components";
import { Box as _Box } from "@material-ui/core";

interface Props {
  isactive: boolean;
}

export const Box = styled(_Box)<Props>`
  background-color: ${(props) => (props.isactive ? "#0dbf73" : "#FFFFFF")};
  color: ${(props) => (props.isactive ? "#FFFFFF" : "#A9A9A9")};
  font-weight: ${(props) => (props.isactive ? 600 : 200)};

  border: transparent;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 14px;
  width: 33%;
  text-align: center;
  padding: 0.7rem;
  border-radius: 0.15rem;
  text-transform: uppercase;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 100 %;
  border: 1px solid transparent;
  border-radius: 0.15rem;
`;
