import styled from "styled-components";
import { TextField as _TextField } from "@material-ui/core";

export const Body = styled.div`
  margin: 2rem auto;
  width: 80%;
`;

export const TextField = styled(_TextField)`
  width: 100%;
  input {
    width: 100%;
  }
`;
