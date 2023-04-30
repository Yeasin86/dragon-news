import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const MenuBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(result =>{
    })
    .catch(error => {
    })
  }

  return (
    <div>
      <Navbar className="bg-secondary bg-opacity-10">
        <Container>
          <Nav className="ms-auto align-items-center">
            <Link className="ms-3 text-decoration-none text-secondary" to="/">
              Home
            </Link>

            <Link className="ms-3 text-decoration-none text-secondary" to="">
              About
            </Link>

            <Link className="ms-3 text-decoration-none text-secondary" to="">
              Career
            </Link>
            
          <div className="ms-5 ps-5">
            {user ? (
              <div className="ms-5 ps-5">
                <img
                  className="img-fluid mx-2"
                  style={{ width: "3rem" }}
                  src="https://i.ibb.co/HBbr8DM/User.png"
                  alt=""
                />
                <Button onClick={handleLogOut} variant="dark">Logout</Button>{" "}
              </div>
            ) : (
              <Link to="/login">
                {" "}
                <Button variant="dark">Login</Button>{" "}
              </Link>
            )}
          </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
