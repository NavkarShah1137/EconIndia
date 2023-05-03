import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit} style={{ backgroundColor: '#2d2d2d', color: '#fff', padding: '20px', borderRadius: '5px' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100 mt-3">
          Login
        </Button>
      </Form>
      <div className="text-center mt-3">
        <span style={{ color: '#fff' }}>Don't have an account? </span>
        <Link to="/signup" style={{ color: '#dc3545', textDecoration: 'underline' }}>Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
