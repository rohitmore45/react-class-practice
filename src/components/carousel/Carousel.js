import React from "react";
import nature1 from './images/nature.jpg'
import nature2 from './images/nature2.jpg'
import nature3 from './images/nature3.jpg'
import './carousel.css'
export default function Carousel() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                    <img src={nature1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={nature2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={nature3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
