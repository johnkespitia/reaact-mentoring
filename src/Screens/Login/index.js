import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/UserSlice'
const Login = (props) => {
    let history = useHistory();
    const [name, setName] = useState("")

    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const SaveUser = (e) =>{
        e.preventDefault()
        dispatch(login({
            name,
            password
        }))
        history.push('/')

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