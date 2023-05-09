import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GrUserAdmin } from 'react-icons/gr';


const schema = object().shape({
    emailAdm: string().email("Email inválido").required("O campo é obrigatório!"),
    passwordAdm: string().min(8, "A senha precisa ter no mínimo 8 caracteres").required("O campo é obrigatório!"),
});;

function LoginAdmin() {
    const navigate = useNavigate();
    const [admPassErr, setadmPassErr] = useState(false);
    const [admEmailErr, setadmEmailErr] = useState(false);


    const loginAdm = async (data) => {
        const response = await axios.post("http://localhost:3550/auth/admin", data);
        return response.data;
    };

    const { mutate, isLoading } = useMutation(loginAdm);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                navigate("/admin/dashboard")
                localStorage.setItem('admin', JSON.stringify(data.adminSession))
            },
            onError: (error) => {
                console.log('derrota')
                if (error.response.status === 401) {
                    setadmPassErr(true)
                } else if (error.response.status === 403) {
                    setadmEmailErr(true)
                }
            },
        });
    };

    return (
        <div className=" h-screen flex justify-center items-center">
            <div className="bg-white shadow-2xl px-6 py-6 rounded-md ">
                <div className="flex justify-center mb-10">
                    <GrUserAdmin size={35} />
                    <h1 className="text-3xl font-semibold text-center text-black">DASHBOARD</h1>
                </div>

                <div className=" mb-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                        <input className=" border-[1px] border-gray-300 py-1 text-center rounded-md "
                            type="email"
                            name="emailAdm"
                            id="emailAdm"
                            placeholder="Email de Administrador"
                            required
                            {...register("emailAdm")}
                        />
                        <p className="text-sm text-red-500 text-center">{admEmailErr ? 'Você não tem permissão!' : ' '}</p>

                        <input className=" border-[1px] border-gray-300 py-1 text-center rounded-md "
                            type="password"
                            name="passwordAdm"
                            id="passwordAdm"
                            placeholder="Sua senha"
                            required
                            {...register("passwordAdm")}
                        />
                        <p className="text-sm text-red-500 text-center">{admPassErr ? 'Senha incorreta' : ' '}</p>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-black opacity-90 hover:opacity-100 duration-300 text-white font-semibold py-1 flex justify-center w-full">
                            {isLoading ? 'CARREGANDO...' : 'ENTRAR'}
                        </button>
                    </form>
                </div>

            </div>
        </div >
    )
}

export default LoginAdmin;