import React, { useState, useEffect } from 'react'

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
    const [clicked, setclicked] = useState(0) //flux 
    const setNameReal = (e) => {
        setName(e.target.value)
    }
    useEffect(() => {
        console.log("state Changed first time")
    },[])

    useEffect(() => {
        console.log("state Changed clicked var")
    },[clicked])

    useEffect(() => {
        console.log("state Changed perpetual")
    })
    return <div style={{
        backgroundColor: color
    }}>
            <h1>Hello World  {name} {date.toDateString()} 
            <input type="text" onChange={setNameReal} /> 
            </h1>
            <button onClick={()=>{
                setclicked(clicked+1)
            }}>Click me!</button>
        </div>
}

export default Toolbar