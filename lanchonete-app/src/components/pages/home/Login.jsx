import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useMutation, useQueryClient } from "@tanstack/react-query";

const schema = object().shape({
    emailToLogin: string().email("Email inválido").required("O campo é obrigatório!"),
    passwordToLogin: string().min(8, "A senha precisa ter no minímo 8 caracteres").required("O campo é obrigatório!"),
});

function Login({ ChangeComp }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const manterAcessoRef = useRef();
    const [passErr, setPassErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);



    const login = async (data) => {
        const response = await axios.post("http://localhost:3550/auth/login", data);
        return response.data;
    };

    const { mutate, isLoading } = useMutation(login);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                navigate("/menu")
                console.log(data)
                if (manterAcessoRef.current.checked) {
                    localStorage.setItem('user', JSON.stringify(data.userSession))
                } else {
                    sessionStorage.setItem('user', JSON.stringify(data.userSession))
                }
            },
            onError: (error) => {
                if (error.response.status === 401) {
                    setPassErr(true)
                } else if (error.response.status === 403) {
                    setEmailErr(true)
                }
            },
        });
    };


    return (
        <div className="w-72 px-2 min-h-60 bg-gray-200 absolute top-1/3 rounded-md opacity-80  ">
            <div className="opacity-100 text-2xl text-center p-2">
                <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-red-800">Faça seu Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        className="w-full mt-2 outline-none rounded-md drop-shadow-xl"
                        name="emailToLogin"
                        placeholder="Seu Email"
                        {...register("emailToLogin")}
                    />
                    <p className="text-sm text-red-500">{errors.emailToLogin?.message}</p>
                    <p className="text-sm text-red-500">{emailErr ? 'Seu email não existe, faça o cadastro!' : ' '}</p>
                    <input
                        type="password"
                        className="w-full mt-2 outline-none rounded-md drop-shadow-xl"
                        name="passwordToLogin"
                        placeholder="Sua senha"
                        {...register("passwordToLogin")}
                    />
                    <p className="text-sm text-red-500">{errors.passwordToLogin?.message}</p>
                    <p className="text-sm text-red-500">{passErr ? 'Senha incorreta' : ' '}</p>
                    <div className="text-sm flex items-baseline mt-2 gap-2">
                        <input ref={manterAcessoRef} type="checkbox" name="manterAcesso" />
                        <label htmlFor="manterAcesso">Deseja manter o acesso?</label>
                    </div>
                    <div className="flex flex-col justify-around m-2 text-sm text-red-400">
                        <p>Esqueci minha senha!</p>
                    </div>
                    <button type="submit" disabled={isLoading} className="text-md text-white bg-black w-full rounded-md ">
                        {isLoading ? 'CARREGANDO...' : 'ENTRAR'}
                    </button>
                </form>
                <p onClick={ChangeComp} className="mt-2 text-sm text-red-400">Ainda não fez cadastro? Crie sua conta!</p>
            </div>
        </div>
    )
}

export default Login;