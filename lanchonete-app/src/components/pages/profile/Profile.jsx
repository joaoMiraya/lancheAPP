import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';

function Profile() {
    const Navigate = useNavigate();

    function getUserInfo() {
        let userInfo = JSON.parse(localStorage.getItem('user'));

        if (!userInfo) {
            userInfo = JSON.parse(sessionStorage.getItem('user'));
        }

        return userInfo;
    }
    const user = getUserInfo();
    console.log(user);

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        Navigate("/")
    }

    return (
        <div className="container h-screen flex items-center flex-col">
            <div className=" relative w-full ">
                <FiLogOut onClick={logout} size={25} className="absolute top-4 right-0 bg-white rounded-full p-1 drop-shadow-4xl border-r-2 border-b-2 border-gray-400 " />
            </div>
            <h1 className="text-3xl mt-20">Olá, {user.nome + ' ' + user.sobrenome}</h1>
            <div className="bg-white flex w-4/5 h-32 mt-6 rounded-md drop-shadow-2xl">
                <h1 className="p-2 text-xl">Seu último pedido:</h1>
            </div>

            <div className="bg-white flex flex-col p-2 mt-6 rounded-md drop-shadow-2xl whitespace-nowrap ">
                <h1 className="my-2">Termine de preencher suas informações</h1>
                <form >
                    <div className="flex flex-col gap-2">
                        <input className="inputProfile" type="text" name="bairro" id="bairro" placeholder="Seu bairro" />

                        <input className="inputProfile" type="text" name="rua" id="rua" placeholder="Sua rua" />

                        <input className="inputProfile" type="text" name="nmrCasa" id="nmrCasa" placeholder="Numero da casa" />

                        <input className="inputProfile" type="text" name="tel" id="tel" placeholder="Seu telefone" />

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