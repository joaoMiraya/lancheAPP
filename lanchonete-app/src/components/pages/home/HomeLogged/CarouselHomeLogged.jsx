import React from "react";

import imgPessoasBar from '../../../../assets/images/imgBarPessoa.jpg';

function CarouselHomeLogged() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide w-screen" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" >
                <div className="carousel-item active">
                    <img src={imgPessoasBar} loading="lazy" className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imgPessoasBar} loading="lazy" className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imgPessoasBar} loading="lazy" className="d-block w-full object-cover h-60 " alt="..." />
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
    )
}

export default CarouselHomeLogged;