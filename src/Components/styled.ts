import styled from "styled-components";

interface Props {
    step: number
}

export const Top = styled.div<Props> `
display:flex;
justify-content:space-around;
p.etapeOne{
  background-color: ${
    (props) => props.step === 0 ? 'yellow' : 'white'
};
}
p.etapeTwo{
  background-color: ${
    (props) => props.step === 1 ? 'yellow' : 'white'
};
}
p.etapeThree{
  background-color: ${
    (props) => props.step === 2 ? 'yellow' : 'white'
};
}
  
`;
console.log('step',)
