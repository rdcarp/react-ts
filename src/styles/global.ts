import {createGlobalStyle, css} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${props => css`
    html {
      height: 100%;
  
      body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
  
        #root {
          background: ${props.theme.colors.background};
          color: ${props.theme.colors.white};
          display: flex;
          font-family: sans-serif;
          height: 100%;
          justify-content: center;
          padding: 15px;
        }
      }
    }
  `}
`

export default GlobalStyle
