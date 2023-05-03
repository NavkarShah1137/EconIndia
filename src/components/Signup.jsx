import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle signup logic here
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sign up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

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
          Sign up
        </Button>
      </Form>
      <div className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
