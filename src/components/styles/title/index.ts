import styled, {css} from "styled-components";

const Title = styled.h1`
    ${(props) => css`
      color: ${props.theme.colors.red};
      text-align: center;
      marin-top: 0;
    `}
`
export {Title}