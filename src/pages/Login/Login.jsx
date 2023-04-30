import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate()
  const { logIn } = useContext(AuthContext);
  const location = useLocation()
  const from = location.state?.from?.pathname || "/category/0"
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
    .then(result => {
      const loggedUser = result.user; 
      navigate(from, {replace: true })
    })
    .catch(error =>{})
  };
  return (
    <div className="bg-secondary bg-opacity-10" style={{ height: "100vh" }}>
      <Container className="bg-white p-5" style={{ width: "32rem" }}>
        <Form onSubmit={handleLogin}>
          <h4 className="text-center text-secondary">Login your account</h4>
          <hr /> <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Email address</Form.Label>
            <Form.Control
              className="bg-secondary bg-opacity-10"
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              className="bg-secondary bg-opacity-10"
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button className="w-100" variant="danger" type="submit">
            Submit
          </Button>
          <div className="mt-3">
            <Form.Text className="text-black fs-6">
              Don't have an account? <Link to="/register">Register</Link>
            </Form.Text>{" "}
            <br />
            <Form.Text className="text-danger"></Form.Text> <br />
            <Form.Text className="text-success"></Form.Text>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
