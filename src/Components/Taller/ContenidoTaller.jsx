import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';

//imagenes de cards o acts
import taller1 from "../../img/taller1.png"
import adopcion from "../../img/mascotas.png"
import empresas from "../../img/empresastaller.png"
import final1 from "../../img/final1.png"
import final from "../../img/proyectoFinal.png"
import hacker from "../../img/hackerrank.png"
import hoteleria from "../../img/hoteleria.png"

const StyledTaller = styled.div`
    text-align: center;

    h1 {
        font-family: Helvetica;
        font-weight: 600;
        color: #07326b;
    } 

    span {
        color: #17252a;
    }

    .titulo-act {
        font-size: 24px;
        font-weight: 900;
    }

    h3 {
        font-size: 18px;
        font-weight: 700;
    }

    .contenido {
        font-size: 16px;
    }

    .imagen {
        max-width: 100%;
        height: auto;
    }

    
`;

export const ContenidoTaller = () => {
    
    const talleract1 = taller1;
    const tallerAdo = adopcion;
    const empresas2 = empresas;
    const final1taller = final1;
    const finaltaller = final
    const hackerank = hacker
    const hotel = hoteleria

    return (
        <StyledTaller>
            <h1>TALLER DE <span>INFORMÁTICA</span></h1>
            
            <Container fluid style={{ width: "70%" }}>
                <Row className="justify-content-center">
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Laboratorio #1 (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Creación de una página web sobre nuestra vida y luego debíamos realizar un nuevo diseño de la página del colegio.</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Diseño responsive, Estructura de HTML y aprendizajes en CSS.</p>
                                <center><Card.Img variant="top" src={talleract1} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Laboratorio #2 (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Creación de backend de adopción de mascotas con validaciones y métodos especificos hechos en express</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Manejo de datos no relacionales, Paquetes de Node.js y Express</p>
                                <center><Card.Img variant="top" src={tallerAdo} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ width: "70%" }}>
                <Row className="justify-content-center">
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Laboratorio #3 (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Creación de un gestor de empresas con métodos get, post, update y delete en Express (junto a sus validaciones) </p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Manejo de datos no relacionales, Paquetes de Node.js y Express</p>
                                <center><Card.Img variant="top" src={empresas2} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Avances de proyecto final (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Revisión del 30% backend del proyecto final de bimestre con valor total de 50pts</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Manejo de datos no relacionales, uso de tokens, Paquetes de Node.js y Express</p>
                                <center><Card.Img variant="top" src={final1taller} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ width: "70%" }}>
                <Row className="justify-content-center">
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Proyecto Final (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Elaboración del backend de una empresa con todos los conocimientos obtenidos en clases. </p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Manejo de datos no relacionales, uso de tokens, Paquetes de Node.js y Express</p>
                                <center><Card.Img variant="top" src={finaltaller} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Ejercicios de HackerRank (2do Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Elaboración de ejercicios fáciles, medio y difíciles de codigo en una plataforma llamada HackeRank</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Pensamiento analítico y Capacidad de resolución de problemas </p>
                                <center><Card.Img variant="top" src={hackerank} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ width: "70%" }}>
                <Row className="justify-content-center">
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Avances (2do Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Elaboración del proyecto de hoteleria en un 30% con Frontend y backend </p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Aplicación del modelo MERN Stack</p>
                                <center><Card.Img variant="top" src={hotel} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>                                        
                </Row>
            </Container>
        </StyledTaller>
    );
}; 