import styled from "styled-components";
import {Box as _Box} from "@material-ui/core";

interface Props {
    isActive: boolean;
}

export const Box = styled(_Box) < Props > ` background-color:
${
    (props) => (props.isActive ? "#0dbf73" : "#FFFFFF")

};

border: transparent;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-size: 14px;
color:
${
    (props) => (props.isActive ? "#FFFFFF" : "#A9A9A9")
};
width: 33%;
font-weight: ${
    (props) => (props.isActive ? 600 : 200)
};
text-align: center;
padding: 0.7rem;
border-radius: 0.15rem;
text-transform: uppercase;
`;
export const Top = styled.div ` display: flex;
justify-content: space-around;
margin: 0 auto;
width: 100 %;
border: 1px solid transparent;
border-radius: 0.15rem;
`;
