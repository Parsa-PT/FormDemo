import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./header.css";
import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  let [pannel, setPannel] = useState(false);
  const loggedin = window.localStorage.getItem("loggedIn");

  const accClick = () => {
    setPannel((pannel = !pannel));
  };

  if (loggedin === undefined) {
  }

  return (
    <header>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="mt-sm-2" href="#home">
              World
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            className="toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mt-sm-2">
              <LinkContainer to="/about">
                <Nav.Link className="navL" href="#features">
                  About
                </Nav.Link>
              </LinkContainer>
            </Nav>

            {loggedin === null ? (
              <>
                <Button variant="outline-warning">
                  <Link className="btn" to="/reg">
                    Sign up
                  </Link>
                </Button>
                <Button
                  style={{ marginLeft: "10px" }}
                  variant="outline-warning"
                >
                  <Link className="btn" to="/login">
                    Login
                  </Link>
                </Button>
              </>
            ) : (
              <LinkContainer to="/acc">
                <div className="pro">
                  <CgProfile
                    size={24}
                    onClick={accClick}
                    style={{ color: "black" }}
                  />
                </div>
              </LinkContainer>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
