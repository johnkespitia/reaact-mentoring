import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from './Toolbar.module.scss'
import { useSelector } from 'react-redux';


import { useDispatch } from 'react-redux'
import { logout } from '../Redux/UserSlice'

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

    const dispatch = useDispatch();
    const doLogout = () =>{        
        dispatch(logout())
    }

    return <Navbar bg={"dark"} variant={"dark"} fluid>
        <Container fluid={true}>
            <Navbar.Brand as={Link} to="/">Demo App {user?.name}</Navbar.Brand>
            <NavNew>
                <Nav.Link className={styles.linkHome} as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/user/1">User</Nav.Link>
                {!user && <Nav.Link as={Link} to="/Login">Login</Nav.Link>}
                {user && <React.Fragment>
                    <Nav.Link as={Link} to='/pokedex'>Pokedex</Nav.Link>
                    <Nav.Link onClick={doLogout}>Log Out</Nav.Link>
                </React.Fragment>}
            </NavNew>
        </Container>
    </Navbar>
}

export default Toolbar