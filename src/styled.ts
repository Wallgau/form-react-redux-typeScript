import styled from "styled-components";
import { Card as _Card } from "@material-ui/core";

export const Card = styled(_Card)`
  @media (min-width: 600px) {
    width: 60%;
    margin: 2rem auto;
  }
  padding-bottom: 2rem;
`;
