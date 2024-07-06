import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleCreateUser = event =>{
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            form.reset('');
            navigate('/');
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <Form onSubmit={handleCreateUser} className='m-4 w-75'>
                <h4 className="fw-bolder text-center mt-4 mb-4">Create Your Account</h4>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control name='name' type="text" placeholder="enter name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control name='email' type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control name='password' type="password" placeholder="enter password" />
                </Form.Group>
                <Button type='submit' variant='danger' className='w-100'>Register</Button>
            </Form>
        </div>
    );
};

export default Register;