import React from "react";

import IconesHomeLogged from "./IconesHomeLogged";
import TrioImagesHomeLogged from "./TrioImagesHomeLogged";
import CarouselHomeLogged from "./CarouselHomeLogged";
import MapaHomeLogged from "./MapaHomeLogged";
import MensagemHomeLogged from "./MensagemHomeLogged";




function HomeLogged() {
    return (
        <div>
            <CarouselHomeLogged />

            <h1 className="text-2xl font-semibold text-center my-4">
                Venha Conhecer <br /> nosso ambiente
            </h1>

            {/*   TRIO DE IMAGENS COM TEXTO */}
            <TrioImagesHomeLogged />
            {/*  TRIO DE ICONES COM ANIMAÇÃO */}
            <IconesHomeLogged />
            {/*  LOCALIZAÇÃO */}
            <MapaHomeLogged />
            {/*  CAMPO DE MENSAGEM */}
            <MensagemHomeLogged />
        </div>
    )
}

export default HomeLogged;