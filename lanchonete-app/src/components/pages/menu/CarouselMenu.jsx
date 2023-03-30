import React from "react";

import img1 from '../../../assets/images/lancheCarousel.jpg';
import img2 from '../../../assets/images/batataCarousel.jpg';
import img3 from '../../../assets/images/pizzaCarousel.jpg';

function CarouselMenu() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide w-screen" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={img1} loading="lazy" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} loading="lazy" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} loading="lazy" className="d-block w-full object-cover h-60 " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default CarouselMenu;