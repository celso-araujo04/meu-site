import React from 'react';
import './Carousel.css';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';

function Carousel() {
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img src={slide1} className="d-block w-100 c-img" alt="Slide 1" />
          <div className="carousel-caption top-0 mt-4">
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src={slide2} className="d-block w-100 c-img" alt="Slide 2" />
        </div>
        <div className="carousel-item c-item">
          <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" className="d-block w-100 c-img" alt="Slide 3" />
          <div className="carousel-caption top-0 mt-4">
            <p className="text-uppercase fs-3 mt-5">Contrato Digital</p>
            <p className="display-1 fw-bolder text-capitalize">Conheça mais sobre</p>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal" data-bs-target="#booking-modal">Sobre o Projeto</button>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
