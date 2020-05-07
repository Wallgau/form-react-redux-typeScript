import styled from "styled-components";
import { TextField as _TextField } from "@material-ui/core";

export const Body = styled.div`
  margin: 2rem auto;
  width: 80%;
  position: relative;
  form {
    padding-bottom: 2rem;
  }
  form div {
    width: 100%;
  }
  .back {
    position: absolute;
    right: 7rem;
  }
`;

export const TextField = styled(_TextField)`
  width: 100%;
`;
