import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './core/reportWebVitals';
import {ThemeProvider} from "styled-components";
import {Content, Title, Card, Grid} from "./components";

import {GlobalStyles, theme} from './styles'
ReactDOM.render(
    <Fragment>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Content>
                <Title>Sudoku</Title>
                <Card>
                    <Grid />
                </Card>
            </Content>
        </ThemeProvider>
    </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
