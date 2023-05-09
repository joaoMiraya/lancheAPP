import React from "react";

import imgPessoasBar from '../../../../assets/images/imgBarPessoa.jpg';

function TrioImagesHomeLogged() {
    return (
        <div className="flex gap-2 justify-center hover">
            <div className="w-28 h-28">
                <img src={imgPessoasBar} className=" rounded-xl shadowToHome" alt="..." />
            </div>
            <div className="w-28 h-28 relative top-8">
                <img src={imgPessoasBar} className=" rounded-xl shadowToHome" alt="..." />
            </div>
            <div className="w-28 h-28">
                <img src={imgPessoasBar} className=" rounded-xl shadowToHome" alt="..." />
            </div>
        </div>
    )
}

export default TrioImagesHomeLogged;