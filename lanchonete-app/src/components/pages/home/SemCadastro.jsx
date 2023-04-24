import React, { useCallback } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import axios from 'axios';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";

import { AiOutlineCloseCircle } from 'react-icons/ai';


import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const validationForm = object().shape({
    NomeUserSemCadastro: string().required("O campo é obrigatório"),
    TelUserSemCadastro: string().required("O campo é obrigatório").matches(/^(\d{2})(\d{5})(\d{4})$/, 'Não é um telefone válido'),
});

function SemCadastro({ modalIsOpen, afterOpenModal, closeModal, openContinueSemCadastro, continueSemCadastroRef, ChangeComp }) {
    const Navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationForm)
    });
    const createClientExpMutation = useMutation((data) => {
        const userToEdit = {
            nome: data.NomeUserSemCadastro,
            telefone: data.TelUserSemCadastro,
        }
        return localStorage.setItem('user', JSON.stringify(userToEdit));
    }, {
        onSuccess: () => {
            alert('Perfil de visitante criado com sucesso!')
            Navigate("/menu")
        },
        onError: () => {
            alert('Houve algum problema com seu cadastro!')
        }
    });

    const clientExp = useCallback(async (data) => {
        await createClientExpMutation.mutateAsync(data);
    }, []);


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
            <div className="text-center flex flex-col gap-4 max-w-[270px]">
                <button className=" absolute top-0 right-0 p-2" onClick={closeModal}><AiOutlineCloseCircle size={25} color={'black'} /></button>
                <h2>Ao criar uma conta você estará elegível à participar de promoções!</h2>
                <div className="flex flex-col">
                    <button onClick={() => { closeModal(); ChangeComp() }} className="bg-black py-2 px-4 rounded-sm text-white " >Criar conta</button>
                    <button onClick={openContinueSemCadastro} className="bg-black py-2 px-4 rounded-sm mt-2 text-white">Pedido Rápido</button>
                    <div ref={continueSemCadastroRef} className=" hidden  flex-col mt-10">

                        <form onSubmit={handleSubmit(clientExp)}>
                            <input className=" rounded-sm border-2 border-solid border-gray-600 p-2 w-full"
                                type="text"
                                name="NomeUserSemCadastro"
                                id="NomeUserSemCadastro"
                                placeholder="Digite seu nome"
                                {...register("NomeUserSemCadastro")}
                            />
                            <p className="text-sm text-red-500">{errors.NomeUserSemCadastro?.message}</p>
                            <input className="rounded-sm border-2 mt-2 border-solid border-gray-600 p-2 w-full"
                                type="text"
                                name="TelUserSemCadastro"
                                id="TelUserSemCadastro"
                                placeholder="Digite seu número de telefone"
                                {...register("TelUserSemCadastro")}
                            />
                            <p className="text-sm text-red-500">{errors.TelUserSemCadastro?.message}</p>
                            <button type="submit" className="bg-black w-full py-2 px-4 rounded-sm mt-2 text-white">Continuar</button>
                        </form>

                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default SemCadastro;