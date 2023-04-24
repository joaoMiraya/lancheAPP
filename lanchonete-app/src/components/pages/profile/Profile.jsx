import React, { useCallback } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import axios from 'axios';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";

import { FiLogOut } from 'react-icons/fi';



const validationForm = object().shape({
    bairro: string().required("O campo é obrigatório"),
    rua: string().required("O campo é obrigatório"),
    nmrCasa: string().required("O campo é obrigatório"),
    tel: string().required("O campo é obrigatório").matches(/^(\d{2})(\d{5})(\d{4})$/, 'Não é um telefone válido'),
});

function Profile() {

    const queryClient = useQueryClient();
    const Navigate = useNavigate();

    function getUserInfo() {
        let userInfo = JSON.parse(localStorage.getItem('user'));
        if (!userInfo) {
            userInfo = JSON.parse(sessionStorage.getItem('user'));
        }
        return userInfo;
    }
    const user = getUserInfo();
    const id = user.id;

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        Navigate("/")
    }


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationForm)
    });
    const createEditUserMutation = useMutation((data) => {
        const userToEdit = {
            bairro: data.bairro,
            rua: data.rua,
            numero_casa: data.nmrCasa,
            telefone: data.tel,
        }
        return axios.put(`http://localhost:3550/clientes/${id}`, userToEdit);
    }, {
        onSuccess: () => {
            alert('Endereço adicionado com sucesso!')
        },
        onError: () => {
            alert('Houve algum problema com seu cadastro!')
        }
    });

    const editUser = useCallback(async (data) => {
        await createEditUserMutation.mutateAsync(data);
    }, []);


    return (
        <div className="container h-screen flex items-center flex-col">
            <div className=" relative w-full ">
                <FiLogOut onClick={handleLogout} size={30} className="absolute top-4 right-0 bg-white rounded-full p-1 drop-shadow-4xl border-r-2 border-b-2 border-gray-400 " />
            </div>
            <h1 className="text-3xl mt-20">Olá, {user.nome + ' ' } {user.sobrenome ? user.sobrenome : ' '}</h1>
            <div className="bg-white flex w-4/5 h-32 mt-6 rounded-md drop-shadow-2xl">
                <h1 className="p-2 text-xl">Seu último pedido:</h1>
            </div>

            <div className="bg-white flex flex-col p-2 mt-6 rounded-md drop-shadow-2xl whitespace-nowrap ">
                <h1 className="my-2">Termine de preencher suas informações</h1>
                <form onSubmit={handleSubmit(editUser)} >
                    <div className="flex flex-col gap-2">

                        <input
                            className="inputProfile"
                            type="text"
                            name="bairro"
                            id="bairro"
                            placeholder="Seu bairro"
                            {...register("bairro")}
                        />
                        <p className="text-sm text-red-500">{errors.bairro?.message}</p>

                        <input
                            className="inputProfile"
                            type="text"
                            name="rua"
                            id="rua"
                            placeholder="Sua rua"
                            {...register("rua")}
                        />
                        <p className="text-sm text-red-500">{errors.rua?.message}</p>

                        <input
                            className="inputProfile"
                            type="text"
                            name="nmrCasa"
                            id="nmrCasa"
                            placeholder="Numero da casa"
                            {...register("nmrCasa")}
                        />
                        <p className="text-sm text-red-500">{errors.nmrCasa?.message}</p>

                        <input
                            className="inputProfile"
                            type="text"
                            name="tel"
                            id="tel"
                            placeholder="Seu telefone"
                            {...register("tel")}
                        />
                        <p className="text-sm text-red-500">{errors.tel?.message}</p>

                        <div className="flex gap-2">
                            <input type="checkbox" name="saveEnd" />
                            <label htmlFor="saveEnd">Usar esse endereço como padrão?</label>
                        </div>
                    </div>
                    <div className="w-full flex justify-center my-2">
                        <button type="submit" className=" bg-black font-semibold text-white px-[100px] py-1 rounded-sm ">SALVAR</button>
                    </div>
                </form>
            </div>

            <Outlet></Outlet>




        </div>
    )
};


export default Profile;