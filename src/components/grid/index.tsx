import React, {FC} from 'react'
import {Container, Row} from './styles'
import Block from "./block";
const Grid: FC = () => {
    // todo

    return (
        <Container data-cy={"grid-container"}>
            {React.Children.toArray([...Array(9)].map((_, rowIndex) => (
            <Row data-cy={"grid-row-container"}>
                {React.Children.toArray([...Array(9)].map((_, blockIndex) => (
<Block />
)))}
            </Row>
            ))
            )}
        </Container>
    )
}

export default Grid