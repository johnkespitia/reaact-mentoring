import React, { useState, useEffect } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
/*
class Toolbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), 
            name:""
        };

    }
    componentDidMount() {
        console.log("Mounted")
    }
    
      componentWillUnmount() {
        console.log("will Unmount")
      }
      componentDidUpdate() {
          console.log("Component updated!")
      }
    render(){
        return <h1 style={{
            color: this.props.color
        }}>Hello World {this.state.date.toDateString()} <input type="text" onChange={(e)=>{
            this.setState({
                ...this.state,
                name: e.target.value
            })
        }} /></h1>
        
    }
}
*/

//1 - Styled Components
//2 - UI Library (Material, Bootstrap)
//3 - Sass (scss)
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
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/user/1">User</Nav.Link>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default Toolbar