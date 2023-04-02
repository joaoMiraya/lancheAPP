import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, ref } from 'yup';
import axios from 'axios';
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";


const validationForm = object().shape({
    nameRegister: string().required("O campo é obrigatório"),
    lastnameRegister: string().required("O campo é obrigatório"),
    emailRegister: string().required("O campo é obrigatório"),
    confirmEmailRegister: string().required("O campo é obrigatório").oneOf([ref('emailRegister'), null], 'O email está diferente'),
    passwordRegister: string().required("O campo é obrigatório").matches(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Senha deve ter pelo menos 8 caracteres, uma letra maiúscula e uma letra minúscula'),
    confirmPasswordRegister: string().required("O campo é obrigatório").oneOf([ref('passwordRegister'), null], 'Senhas devem ser iguais')
});



function Cadastro({ ChangeComp }) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationForm)
    });

  
    const date = new Date().toLocaleString();
    const formatedDate = date.slice(0, 10);

    const createUserMutation = useMutation((data) => {
        const values = {
            nome: data.nameRegister,
            sobrenome: data.lastnameRegister,
            email: data.emailRegister,
            senha: data.passwordRegister,
            data_cadastro: formatedDate
        }
        return axios.post('http://localhost:3550/clientes', values);
    }, {
        onSuccess: () => {
            alert('Cadastro efetuado com sucesso!')
            navigate('/menu')
            queryClient.invalidateQueries('clientes')
        },
        onError: () => {
            alert('Houve algum problema com seu cadastro!')
        }
    });


    const createUser = useCallback(async (data) => {
        await createUserMutation.mutateAsync(data);
        console.log(data)
    }, []);

    return (

        <div className=" w-80 z-0 bg-gray-200 flex opacity-70 flex-col absolute py-4 top-1/3 rounded-md text-center">
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-red-800 font-bold">Faça seu cadastro!</h1>

            <form className="w-full" onSubmit={handleSubmit(createUser)}>

                <input type="text"
                    className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl"
                    name="nameRegister"
                    id="nameRegister"
                    placeholder="Seu nome"
                    {...register("nameRegister")}
                />
                <p className="text-sm text-red-500">{errors.nameRegister?.message}</p>

                <input type="text"
                    className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl"
                    name="lastnameRegister"
                    id="lastnameRegister"
                    placeholder="Seu sobrenome"
                    {...register("lastnameRegister")}
                />
                <p className="text-sm text-red-500">{errors.lastnameRegister?.message}</p>

                <input type="email"
                    className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl"
                    name="emailRegister"
                    id="emailRegister"
                    placeholder="Seu Email"
                    {...register("emailRegister")}
                />
                <p className="text-sm text-red-500">{errors.emailRegister?.message}</p>

                <input type="email"
                    className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl"
                    name="confirmEmailRegister"
                    id="confirmEmailRegister"
                    placeholder="Confirme seu Email"
                    {...register("confirmEmailRegister")}
                />
                <p className="text-sm text-red-500">{errors.confirmEmailRegister?.message}</p>

                <input type="password"
                    className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl"
                    name="passwordRegister"
                    id="passwordRegister"
                    placeholder="Sua senha"
                    {...register("passwordRegister")}
                />
                <p className="text-sm text-red-500">{errors.passwordRegister?.message}</p>

                <input type="password"
                    className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl"
                    name="confirmPasswordRegister"
                    id="confirmPasswordRegister"
                    placeholder="Confirme sua senha"
                    {...register("confirmPasswordRegister")}
                />
                <p className="text-sm text-red-500">{errors.confirmPasswordRegister?.message}</p>


                <button type="submit"
                    className="py-1 mt-4 bg-black rounded-sm font-bold w-4/5 tracking-wide text-white"
                    disabled={createUserMutation.isLoading}
                >
                    {createUserMutation.isLoading ? 'CADASTRANDO...' : 'CADASTRAR'}
                </button>

            </form>
            <p className="mt-2 text-red-400" onClick={ChangeComp}>Já possui conta? Faça seu Login</p>
        </div>


    )
}

export default Cadastro;