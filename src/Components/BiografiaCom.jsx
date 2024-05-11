import styled from "styled-components";
import foto from "../img/yo.jpeg";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from "react"

export const BiografiaCom = ({ handleMaterias }) => {
  return (
    <StyledMe>
      <Container className="d-flex justify-content-center align-items-center mr-8" style={{ maxWidth: "70vw" }}>
        <Card >
          <Card.Body>
            <Row className="mt-0">
              {/* left side */}
              <Col ml={6} >
                <h1 className="yo">Santiago González</h1>
                <p className="informatica">Estudiante de Informatica</p>
                <p className="contenido">Bienvenidos a mi blog, un espacio dedicado a compartir mi viaje de aprendizaje en el mundo de la programación en kinal.
                  <br />
                  <br />
                  Lo más impresionante de cada tarea ha sido una oportunidad para poner en práctica mis habilidades y expandir mi conocimiento en diversas áreas técnicas.
                  <br />
                  <br />
                  Las materias a las cuales les daré énfasis en mi Blog serán:
                  <span> Taller, Tecnología y Práctica supervisada</span>
                  <br />
                  <br />
                  (DAR CLICK EN LOS BOTONES PARA CAMBIAR EL ELEMENTO)
                  <br />
                </p>
                <div className="button-container">
                  <Button onClick={() => handleMaterias("Taller")}>Taller</Button>
                  <Button onClick={() => handleMaterias("Tecnología")}>Tecnología</Button>
                  <Button onClick={() => handleMaterias("Practica")}>Practica</Button>
                </div>
              </Col>
              {/* right side */}
              <Col lg={5}>
                <Card.Img variant="top" src={foto} alt="Santiago" className="rounded-2xl" style={{ maxWidth: "800px" }} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </StyledMe>
  );
};

const StyledMe = styled.div`

  padding-top: 20px;
  width: 100ws;
  padding: 0;
  margin: 0 auto; /* Para centrar el componente horizontalmente */
  display: flex;
  padding-bottom: 20px;

  .yo {
    font-family: 'georgia';
    font-weight: bold;
  }

  span {
    font-weight: 600;
    color: #07326b;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;     
  }

  .informatica {
    font-family: 'georgia';
    color: #416640;
    font-size: 20px;
  }

  .contenido {
    text-align: center;
    font-weight: 500;
  }
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #07326b;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 188px;

  &:hover {
    background-color: #17252a;
  }
`;