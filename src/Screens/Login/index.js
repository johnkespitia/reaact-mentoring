import React, { useState } from 'react'
import { Form as BForm, Button } from 'react-bootstrap'
import { Formik , Form} from 'formik'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/UserSlice'
const Login = (props) => {
    let history = useHistory();
    const [name, setName] = useState("")

    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const SaveUser = (e) => {
        e.preventDefault()
        dispatch(login({
            name,
            password
        }))
        history.push('/')

    }
    return <div>
        <h1>Login</h1>
        <Formik
            initialValues={{}}
            onSubmit={(values) => {
                console.log(values)
            }}
            onReset={() => {
                console.log("reseted")
            }}
            
        >
            <Form>
                <BForm.Group className="mb-3" controlId="formBasicEmail">
                    <BForm.Label>Username</BForm.Label>
                    <BForm.Control type="text" placeholder="Username" name="username" />
                    <BForm.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </BForm.Text>
                </BForm.Group>

                <BForm.Group className="mb-3" controlId="formBasicPassword">
                    <BForm.Label>Password</BForm.Label>
                    <BForm.Control type="password" placeholder="Password" />
                </BForm.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

        </Formik>
    </div>
}

export default Login