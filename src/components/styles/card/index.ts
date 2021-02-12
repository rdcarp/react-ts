import styled, {css} from "styled-components";


const Card = styled.div`
    ${(props) => css`
      color: black;
      background-color: ${props.theme.colors.white};
      border-radius: 15px;
      display: flex;
      //flex: 1;
      //flex-direction: column;
      max-height: fit-content;
      padding: 15px;
    `}
`

export {Card}