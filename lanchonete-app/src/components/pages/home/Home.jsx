import React from "react";
import { Link } from "react-router-dom";

import chamabghome from '../../../assets/images/chamabghome.png';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';


Modal.setAppElement('#root');

function Home() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#6a6a6a';
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
            <div className="  flex items-center justify-center w-screen h-screen ">

                <img src={chamabghome} className="object-fill w-screen h-screen" alt="" />

                <div className="w-72 h-60 bg-gray-200 absolute top-1/3 rounded-md opacity-80  ">
                    <div className="opacity-100 text-2xl text-center p-2">
                        <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-red-800">Faça seu Login</h1>
                        <input type="email" className="w-full mt-2 outline-none rounded-md drop-shadow-xl" name="emailToLogin" placeholder="Seu Email" />
                        <input type="password" className="w-full mt-2 outline-none rounded-md drop-shadow-xl" name="passwordToLogin" placeholder="Sua senha" />
                        <div className="flex flex-col justify-around m-2 text-sm text-red-400">
                            <p>Esqueci minha senha!</p>
                        </div>
                        <button className="text-md text-white bg-black w-full rounded-md">ENTRAR</button>
                        <Link to={"/cadastro"}> <p className="mt-2 text-sm text-red-400">Ainda não fez cadastro? Crie sua conta!</p></Link>
                    </div>
                </div>

                <button onClick={openModal} className="absolute bottom-20 bg-black border-2 border-black opacity-90 px-16 py-2 rounded-md tracking-wide text-white font-bold	">
                    <h1>PEDIR SEM CADASTRO</h1>
                </button>



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
                            <Link className="bg-black py-2 px-4 rounded-sm mt-2 text-white" to={"/menu"}> Continuar sem conta</Link>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
};


export default Home;



