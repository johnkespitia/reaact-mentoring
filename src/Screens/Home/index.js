import React from 'react'
import {Button} from 'react-bootstrap'

const Home = (props) => {
    return <div>
        <h1>Home</h1>
        <button className="btn btn-success">Go!</button>
        <Button variant={"info"}>Go 2</Button>
    </div>
}

export default Home