import React, { useState, useEffect } from 'react'
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

const Toolbar = ({color}) => {
    const [date,] = useState(new Date())
    const [name, setName] = useState("Johnk") //flux 
    //const [clicked, setclicked] = useState(0) //flux 
    const setNameReal = (e) => {
        setName(e.target.value)
    }
    return <div style={{
        backgroundColor: color
    }}>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav> 
    </div>
}

export default Toolbar