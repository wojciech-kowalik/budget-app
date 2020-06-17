import React from 'react'
import { Container, List } from './Navigation.css'
import { Link } from 'react-router-dom'
import { Wrapper } from 'components'

const Navigation = ({ items }) => {
    return (
        <Container>
            <Wrapper>
                <List>
                    {items.map(item => (
                        <li key={item.to}>
                            <Link to={item.to}>{item.content}</Link>
                        </li>
                    ))}
                </List>
            </Wrapper>
        </Container>
    )
}

export default Navigation