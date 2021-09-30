import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from './Toolbar.module.scss'
import { useSelector } from 'react-redux';

const primaryColor = "#ffa800";

const NavNew = styled(Nav)`
background-color: ${primaryColor};
@media (max-width: "767px") {
    margin-top: 20px;
    width: 100%;
    justify-content: center;
  }

`

const Toolbar = ({color} ) => {
    const user = useSelector(state => state.user.user)
    return <Navbar bg={"dark"} variant={"dark"} fluid={true}>
        <Container fluid={true}>
            <Navbar.Brand as={Link} to="/">Demo App {user?.name}</Navbar.Brand>
            <NavNew>
                <Nav.Link className={styles.linkHome} as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/user/1">User</Nav.Link>
                {!user && <Nav.Link as={Link} to="/Login">Login</Nav.Link>}
            </NavNew>
        </Container>
    </Navbar>
}

export default Toolbar