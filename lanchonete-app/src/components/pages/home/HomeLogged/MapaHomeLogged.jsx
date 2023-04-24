import React from "react";

function MapaHomeLogged() {
    return (
        <div>
            <h1 className="text-center text-2xl font-semibold my-6">Onde nos encontrar?</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.1418944707707!2d-51.47688439042084!3d-22.08239737975973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f1aa934203e5%3A0x1eef6240301509f3!2s%C3%81lvares%20Machado%20T%C3%AAnis%20Clube!5e0!3m2!1spt-BR!2sbr!4v1682262363724!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className=" w-screen"
            >
            </iframe>
        </div>

    )
}

export default MapaHomeLogged;
