import React, { useState } from 'react'
import { Form as BForm, Button, Alert } from 'react-bootstrap'
import { Formik , Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
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
            initialValues={{
                password: "1234567890",
                username: "",
            }}
            onSubmit={(values, actions) => {
                console.log(values)
                setTimeout(()=>{
                    actions.setSubmitting(false);
                    actions.resetForm({
                        values: {
                            username:"empty"
                        }
                    }
                    )
                }, 4000)
                
            }}
            onReset={() => {
                console.log("reseted")
            }}
            validationSchema={Yup.object().shape({
                password: Yup.string().required("This filed is empty, please complete it"),
                username: Yup.string().email("No, This is not an email").required("This filed is empty, please complete it"),
            })}
            
        >
            {({errors, touched, isSubmitting, isValid})=>(
                <Form>
                    {isValid && isSubmitting && <Alert variant="success">We are sending your information!</Alert>}
                <BForm.Group className="mb-3" controlId="formBasicEmail">
                    <BForm.Label>Username</BForm.Label>
                    <Field style={{
                        borderColor: (errors.username && touched.username)?"red":"green"
                    }} type="text" placeholder="Username" name="username" />
                    <BForm.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </BForm.Text>
                    <ErrorMessage name="username" />
                </BForm.Group>

                <BForm.Group className="mb-3" controlId="formBasicPassword">
                    <BForm.Label>Password</BForm.Label>
                    <Field type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" />

                </BForm.Group>
                <Button disabled={isSubmitting} variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
            )}

        </Formik>
    </div>
}

export default Login