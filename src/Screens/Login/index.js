import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
const Login = (props) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const SaveUser = (e) =>{
        e.preventDefault()
        useDispatch({ type: 'LOGIN_USER' , payload: { name, password}})
    }
    return <div>
        <h1>Login</h1>
        <Form onSubmit={SaveUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={(e)=>{ setName(e.target.value)}} type="text" placeholder="Username" name="username" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(e)=>{ setPassword(e.target.value)}} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
    </div>
}

export default Login