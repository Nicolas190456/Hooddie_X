import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Telas from '../assets/img/telas.jpg';
import SacoNegro from '../assets/img/saconegro.png';
import Sacos from '../assets/img/sacos.jpg';


export const Inicio = () => {
  return (
    <div>

<Carousel variant="dark" className='carrusel'>
      <Carousel.Item>
        <img src={ Telas } className='imagenCarrusel'/>
        <Carousel.Caption>
          <h2 className='tituloCarrusel'>Hechos con las mejores telas</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= { Sacos } className='imagenCarrusel' />
        <Carousel.Caption>
          <h2 className='tituloCarrusel'>Hechos con las mejores telas</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
