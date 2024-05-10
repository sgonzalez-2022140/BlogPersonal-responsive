import styled from "styled-components"
import { Container, Row, Card } from 'react-bootstrap';
import labo1 from "../../img/images.jpg"

const StyledTaller = styled.div`
    text-align: center;
    
    h1{
        font-family: Helvetica;
        font-weight: 600;
        color: #07326b
    } 
    span{
            color: #17252a;
        }
    .titulo-act{
        font-size: 24px;
        font-weight: 900;
    }
    h3{
        font-size: 18px;
        font-weight: 700;
    }

    
`
export const ContenidoTaller = () => {
//variables de fotos o cualquier cosa relacionada  
const Lab1 =  labo1 

return (
    <>
        <StyledTaller>
            <h1>TALLER DE <span>INFORMÁTICA</span></h1>

            <Container className="d-flex justify-content-center align-items-center mr-8 "style={{ maxWidth: "37vw" }}>
            <Card  className="shadow p-3 mb-5 bg-body rounded">
              <Card.Body>
                <Row className="mt-0">
                  {/* left side */}
                 
                    
                      <h1 className="titulo-act">Laboratorio #1</h1>
                      <h3>Descripción de la actividad</h3>
                      <p className="contenido"> Creación de una pagina web sobre nuestra vida y luego debiamos realizar un nuevo diseño de la página del colegio </p>
                      <br />
                      <h3>Habilidades:</h3>
                      <p className="contenido"> Diseño responsive, Estrctura de Html y aprendizajes en css</p>
                  
                  <center><Card.Img variant="top" src={Lab1} alt="Santiago" className="rounded-4xl" style={{ maxWidth: "500px" }}/></center>
                  
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </StyledTaller>
    </>
  )
}
