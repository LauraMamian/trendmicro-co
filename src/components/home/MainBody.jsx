import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import logo from "../../assets/img/logo-desktop.png";

const MainBody = React.forwardRef(
  ({ gradient, title, message }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <img src={logo} alt="" className="mb-5"/>
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>

          <div className="p-5"></div>

          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutus"
            role="button"
            aria-label="Learn more about us"
          >
            Integrantes del equipo
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
