import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";
import { Fragment, useState,useEffect } from "react";
import Apt from "../../category/apt.js";

function Main () {
  const navigate = useNavigate();
  
  return (
    <div>
      
      <Container>
          <Nav className="me-auto">
          <Nav.Link onClick={()=>{
            navigate("/apt")
          }}>
              Apartment
            </Nav.Link>
            <Nav.Link onClick={()=>{
              navigate("/browse")
            }}>
              One Room
          </Nav.Link>
          <Nav.Link onClick={()=>{
              navigate("/browse")
            }}>
              Villa
          </Nav.Link>
          </Nav>
      </Container>
    </div>
  )
}


export default Main;