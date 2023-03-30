import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import chamabghome from '../../../assets/images/chamabghome.png';

import Login from "./Login";
import SemCadastro from "./SemCadastro";
import Cadastro from "./Cadastro";

function Home() {

    /* MODAL FUNCTIONS */
    let subtitle;
    const continueSemCadastroRef = useRef();
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }
    function closeModal() {
        setIsOpen(false);
    }
    function openContinueSemCadastro() {
        continueSemCadastroRef.current.classList.toggle('hidden')
    }
    /*FIM MODAL FUNCTIONS */
    const [comp, setComp] = useState(0);

    useEffect(() => {
        if (comp === 0) {
            console.log(comp)
        } else {
            console.log(comp)
        }
    }, [comp]);

    function ChangeComp() {
        if (comp === 0) {
            setComp(comp + 1)
        } else {
            setComp(comp - 1)
        }


    }

    return (

        <div className="  flex items-center justify-center w-screen h-screen ">
            <img src={chamabghome} className="object-fill w-screen h-screen" loading="lazy" alt="background" />

            {comp === 0 && <Login ChangeComp={ChangeComp} />}

            {comp === 1 && <Cadastro ChangeComp={ChangeComp} />}

            <button onClick={openModal} className={`${comp === 1 ? 'hidden' : 'absolute bottom-20 bg-black border-2 border-black opacity-90 px-16 py-2 rounded-md tracking-wide text-white font-bold'}`}>
                <h1>PEDIR SEM CADASTRO</h1>
            </button>


            <SemCadastro
                openModal={openModal}
                modalIsOpen={modalIsOpen}
                afterOpenModal={afterOpenModal}
                closeModal={closeModal}
                openContinueSemCadastro={openContinueSemCadastro}
                continueSemCadastroRef={continueSemCadastroRef}
                subtitle={subtitle}
            />

        </div>

    )
};


export default Home;



