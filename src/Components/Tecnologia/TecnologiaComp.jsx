import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';

//imagenes de cards o acts
import taller1 from "../../img/Infogra.png"
import adopcion from "../../img/Mapa.png"
import empresas from "../../img/Test.png"
import final1 from "../../img/Servi.png"
import final from "../../img/Practi.png"

import hoteleria from "../../img/react.png"

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

export const TecnologiaComp = () => {
    
    const talleract1 = taller1;
    const tallerAdo = adopcion;
    const empresas2 = empresas;
    const final1taller = final1;
    const finaltaller = final
    
    const hotel = hoteleria

    return (
        <StyledTaller>
            <h1>TALLER DE <span>TECNOLOGIA</span></h1>
            
            <Container fluid style={{ width: "70%" }}>
                <Row className="justify-content-center">
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Infografia de desarrollo web (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Debiamos que hacer una infografia sobre varias tecnologias web y algunas librerias de Js</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Aprendizaje Web</p>
                                <center><Card.Img variant="top" src={talleract1} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Mapa conceptual (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Creación de un mapa conceptual completando con el contenido relacionado a la infografia </p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Aprendizaje Web</p>
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
                                <h1 className="titulo-act">Prueba Objetiva (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Prueba o parcial donde evaluan nuestros conocimientos en la parte de teoria y aprendizajes tecnologicos</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Teoria y aprendizajes de clases de taller</p>
                                <center><Card.Img variant="top" src={empresas2} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Mapa Mental (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Mapa mental sobre desarrollo web en la parte de funcionamiento o estructura de un servidor Web.</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Teoria y aprendizajes de clases de taller</p>
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
                                <h1 className="titulo-act">Prueba Objetiva 2 (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Prueba o parcial donde evaluan nuestros conocimientos en la parte de teoria y aprendizajes tecnologicos </p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Teoria y aprendizajes de clases de taller</p>
                                <center><Card.Img variant="top" src={tallerAdo} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={6} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <h1 className="titulo-act">Examen Final (1er Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Elaboración de ejercicios fáciles, medio y difíciles de codigo en una plataforma llamada HackeRank</p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Pensamiento analítico y Capacidad de resolución de problemas </p>
                                <center><Card.Img variant="top" src={final} alt="Santiago" className="imagen" /></center>
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
                                <h1 className="titulo-act">Beneficios de usar React (2do Bim)</h1>
                                <h3>Descripción de la actividad</h3>
                                <p className="contenido">Elaboración de una presentación explicando los beneficios de usar REACT </p>
                                <br />
                                <h3>Habilidades:</h3>
                                <p className="contenido">Conocimientos en el FrontEnd</p>
                                <center><Card.Img variant="top" src={hotel} alt="Santiago" className="imagen" /></center>
                            </Card.Body>
                        </Card>
                    </Col>                                        
                </Row>
            </Container>
        </StyledTaller>
    );
}; 