import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const from = location.state?.from?.pathName || '/categories/0';

    const handleLogin= event =>{
        const error = '';
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result=>{
            const loggedUser = result.user;
            form.reset('');
            navigate(from, {replace: true});
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div>
            <Form onSubmit={handleLogin} className='m-4 w-75'>
                <h4 className="fw-bolder text-center mt-4 mb-4">Login Your Account</h4>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control name='email' type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control name='password' type="password" placeholder="enter password" />
                </Form.Group>
                <Button type='submit' variant='danger' className='w-100 mb-4'>Login</Button>
                {
                    error && <p className='text-danger'>Invalid Email and Password</p>
                }
                <p>New User? <Link to='/register' className='btn btn-link'>Create your account</Link></p>
            </Form>
        </div>
    );
};

export default Login;