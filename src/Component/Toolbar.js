import React, { useState, useEffect } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from './Toolbar.module.scss'
//0 - CSS 
//1 - Styled Components
//2 - UI Library (Material, Bootstrap)
//3 - Sass (scss)
const defaultColor = "#141925";
const primaryColor = "#ffa800";

const NavNew = styled(Nav)`
background-color: ${primaryColor};
@media (max-width: "767px") {
    margin-top: 20px;
    width: 100%;
    justify-content: center;
  }

`

const Toolbar = ({color}) => {
    const [date,] = useState(new Date())
    const [name, setName] = useState("Johnk") //flux 
    //const [clicked, setclicked] = useState(0) //flux 
    const setNameReal = (e) => {
        setName(e.target.value)
    }
    return <Navbar bg={"dark"} variant={"dark"} fluid={true}>
        <Container fluid={true}>
            <Navbar.Brand as={Link} to="/">Demo App</Navbar.Brand>
            <NavNew>
                <Nav.Link className={styles.linkHome} as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/user/1">User</Nav.Link>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            </NavNew>
        </Container>
    </Navbar>
}

export default Toolbar