import React from "react";

import Carousel from 'react-bootstrap/Carousel';

import styled from "styled-components"


export const Content = () => {
  
  function CarouselFadeExample() {
    // Definir las URL de las imágenes
    const imageUrl1 = "https://cdn.terapi-app.com/blog/wp-content/uploads/2021/04/Copia-de-Sin-ti%CC%81tulo-22-800x400.jpg.webp";
    const imageUrl2 = "https://dam.ngenespanol.com/wp-content/uploads/2020/05/sueno-insomnio.jpg"; 
    const imageUrl3 = "https://www.doctorantonioburgos.com/wp-content/uploads/2017/08/injerto-capilar-cejas-trasplante-pelo-madrid.jpg"
    

  return (
    <div className="carousel-container">
     <Carousel fade interval={2800} prevIcon={null} nextIcon={null} style={{ maxWidth: "100vw" }}>
        <Carousel.Item>
          <img
            className="d-block "
            src={imageUrl1}
            alt="First slide"
            style={{ maxHeight: "400px", width: "auto", margin: "0 auto" }} // Establecer altura máxima y centrado horizontal
          />
          <Carousel.Caption>
            <h3>Depresión</h3>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block "
            src={imageUrl2}
            alt="Second slide"
            style={{ maxHeight: "400px", width: "auto", margin: "0 auto" }} // Establecer altura máxima y centrado horizontal
          />
          <Carousel.Caption>
            <h3>Problemas de sueño</h3>            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={imageUrl3}
            alt="Second slide"
            style={{ maxHeight: "400px", width: "auto", margin: "0 auto" }} // Establecer altura máxima y centrado horizontal
          />
          <Carousel.Caption>
            <h3>Caida de pelo</h3>            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}



return (
  <div className="d-flex justify-content-center align-items-center flex-column mb-4">
    <h1 className="mb-4">Proyectos y Experiencias de 6to</h1>
    <CarouselFadeExample/>
    
    
  </div>
);
};