import styled from "styled-components"
import foto  from "../img/yo.jpeg"
import { Container, Row, Col, Card } from 'react-bootstrap';


export const BiografiaCom = () => {
    return (
        <StyledMe>
          <Container className="d-flex justify-content-center align-items-center mr-8"style={{ maxWidth: "70vw" }}>
            <Card >
              <Card.Body>
                <Row className="mt-0">
                  {/* left side */}
                  <Col ml={6} >
                    
                      <h1 className="yo">Santiago González</h1>
                      <p className="informatica">Estudiante de Informatica</p>
                      <p className="contenido">Bienvenidos a mi blog, un espacio dedicado a compartir mi  viaje de aprendizaje en el mundo de la programación en kinal. 
                        <br />
                        <br />
                        Lo más impresionante de 
                        cada tarea ha sido una oportunidad para poner en práctica mis habilidades y expandir mi conocimiento en diversas áreas técnicas.
                        <br />
                        <br />
                        Las materias a las cuales les dare énfasis en mi Blog seran: 
                        <span> Taller, Tecnología y Practica supervisada</span>
                      
                      <br />
                      <br />
                        (DAR CLICK EN LOS BOTONES PARA CAMBIAR EL ELEMENTO)
                      </p>
                      
                    
                  </Col>
                  {/* right side */}
                  <Col lg={5}>
                    <Card.Img variant="top" src={foto} alt="Santiago" className="rounded-2xl" style={{ maxWidth: "800px" }}/>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </StyledMe>
      );
    }
    
    const StyledMe = styled.div`
      
      padding-top: 20px;   
      width: 100ws;
      padding: 0;
      margin: 0 auto; /* Para centrar el componente horizontalmente */
      display: flex;
      padding-bottom: 20px;

      .yo{
        font-family: 'georgia';
        font-weight: bold; 
      }

      span{
            font-weight: 600;
            color: #07326b;        
      }

      .informatica{
        font-family: 'georgia';
        color: #416640;
        font-size: 20px;
      }
      .contenido{
        text-align: center;
        font-weight: 500;
      }

      
    `;