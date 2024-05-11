import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';

//imagenes de cards o acts
import taller1 from "../../img/ToDo.png"
import adopcion from "../../img/ControlAcade.png"
import empresas from "../../img/Opi.png"
import final1 from "../../img/Practi.png"
import final from "../../img/Ionic.png"
import hacker from "../../img/Almacenadora.png"



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

export const Supervisada = () => {
    
    const talleract1 = taller1;
    const tallerAdo = adopcion;
    const empresas2 = empresas;
    const final1taller = final1;
    const finaltaller = final
    const hackerank = hacker
    

    return (
        <StyledTaller>
            <h1>TALLER DE <span>PRÁCTICA SUPERVISADA</span></h1>
            
            <Container fluid style={{ width: "70%" }}>
                <Row className="justify-content-center">
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Laboratorio PS #1 (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Debíamos elaborar una agenda web con To-Do List, funcionalidad de contactos y perfil de usuarios (esperaba más punteo...)</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Diseño responsive, Estructura de página web con JavaScript</p>
                                <center><Card.Img variant="top" src={talleract1} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Laboratorio PS #2 (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Creación de control academico por medio de validaciones de roles en Modelo MERN</p>
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
                                <h1 className="titulo-act">Laboratorio PS #3 (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Hicimos un gestor de opiniones tipo Facebook con métodos y validaciones con Token </p>
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
                                <h1 className="titulo-act">Examen Final (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Aqui se hizo una exposición e investigación de un libreria llamada Ionic para desarrollo de apps</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">---</p>
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
                                <h1 className="titulo-act">Frameworks de desarrollo (2do Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Aqui se hizo una exposición e investigación de un libreria llamada Ionic para desarrollo de apps moviles </p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Aprendizaje de desarrollo Mobil y habilidades sociales</p>
                                <center><Card.Img variant="top" src={finaltaller} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Proyecto Almacenadora (2do Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Elaboración de una app web de una almacenadora con modelo MERN STACK (grupal)</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Pensamiento analítico y Capacidad de resolución de problemas </p>
                                <center><Card.Img variant="top" src={hackerank} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </StyledTaller>
    );
}; 