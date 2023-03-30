import React from "react";

import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function SemCadastro({subtitle, modalIsOpen, afterOpenModal, closeModal, openContinueSemCadastro, continueSemCadastroRef }) {


    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={{
                overlay: {
                    backgroundColor: "rgba(000, 000, 000, 0.75)"
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',

                },
            }}

        >
            <div className="text-center flex flex-col gap-4">
                <button className=" absolute top-0 right-0 p-2" onClick={closeModal}><AiOutlineCloseCircle size={25} color={'black'} /></button>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Ao criar uma conta você estará elegível à participar de promoções!</h2>
                <div className="flex flex-col">
                    <Link className="bg-black py-2 px-4 rounded-sm text-white " to={"/cadastro"}>Criar conta</Link>
                    <button onClick={openContinueSemCadastro} className="bg-black py-2 px-4 rounded-sm mt-2 text-white">Pedido Rápido</button>
                    <div ref={continueSemCadastroRef} className=" hidden  flex-col mt-10">
                        <form action="">
                            <input className=" rounded-sm border-2 border-solid border-gray-600 p-2 w-full" type="text" name="NomeUserSemCadastro" id="NomeUserSemCadastro" placeholder="Digite seu nome" />
                            <input className="rounded-sm border-2 mt-2 border-solid border-gray-600 p-2 w-full" type="text" name="TelUserSemCadastro" id="TelUserSemCadastro" placeholder="Digite seu número de telefone" />
                            <button type="submit" className="bg-black w-full py-2 px-4 rounded-sm mt-2 text-white">Continuar</button>
                        </form>
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default SemCadastro;