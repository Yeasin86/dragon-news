import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext); 
    const [termsAccepted, setTermsAccepted] = useState(false) 

    const handleCreateUser = (event) =>{
        event.preventDefault()
        const form = event.target; 
        const name = form.name.value; 
        const photo = form.photo.value; 
        const email = form.email.value; 
        const password = form.password.value; 

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user; 
        })
        .catch(error =>{
        })
    }

    const handleTerms = (event) =>{
      setTermsAccepted(event.target.checked) 
    }
  return (
    <div>
      <div className="bg-secondary bg-opacity-10" style={{ height: "15  0vh" }}>
        <Container className="bg-white p-5" style={{ width: "32rem" }}>
          <Form onSubmit={handleCreateUser}>
            <h4 className="text-center text-secondary">Register your account</h4>
            <hr /> <br />

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Your Name</Form.Label>
              <Form.Control
                className="bg-secondary bg-opacity-10"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Photo Url</Form.Label>
              <Form.Control
                className="bg-secondary bg-opacity-10"
                type="text"
                name="photo"
                placeholder="Your Profile Photo Url"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                className="bg-secondary bg-opacity-10"
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                className="bg-secondary bg-opacity-10"
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
              onClick={handleTerms}
              className="text-secondary" 
              type="checkbox" 
              label={<>Accept <Link to="/terms">Term & Conditions</Link></>} />
            </Form.Group>
            <Button className="w-100" disabled={!termsAccepted} variant="danger" type="submit">
              Submit
            </Button>
            <div className="mt-3">
              <Form.Text className="text-black fs-6">
                Already have an account? <Link to="/login">Login</Link>
              </Form.Text>{" "}
              <br />
              <Form.Text className="text-danger"></Form.Text> <br />
              <Form.Text className="text-success"></Form.Text>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Register;
