import React, { useState, useCallback, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useMutation } from "@tanstack/react-query";
import { Buffer } from 'buffer';

import NavAdmin from "../NavAdmin";

function AddLanche() {

    const [base64Image, setBase64Image] = useState('');

    const handleImageUpload = (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setBase64Image(reader.result);
        };
    };

    const { register, handleSubmit, reset } = useForm();

    const createLancheMutation = useMutation((data) => {
        const values = {
            imagem: base64Image,
            nome: data.nomeLanche,
            ingredientes: data.ingredientesLanche,
            preco: data.precoLanche,
            categoria: data.categoriaLanche
        }
        return axios.post('http://localhost:3550/lanches', values);
    }, {
        onSuccess: () => {
            alert('Lanche adicionado com sucesso!')
            reset()
        },
        onError: () => {
            alert('Houve algum problema com seu cadastro!')
        },

    });

    const createLanche = useCallback(async (data) => {
        await createLancheMutation.mutateAsync(data);
        setBase64Image(''); // limpa a imagem em base64 após a criação do lanche
    }, [createLancheMutation]);


    return (
        <>
            <NavAdmin />
            <div className="flex justify-center items-center h-screen">
                <div className="w-[300px] bg-white p-4 rounded-md shadow-2xl">
                    <h1 className="text-2xl font-semibold text-center mb-4">Adicione um novo Lanche</h1>
                    <form onSubmit={handleSubmit(createLanche)} className="flex flex-col gap-2">

                        <input type="file"

                            onChange={handleImageUpload}
                            name="imgLanche"
                            id="imgLanche"
                            accept="image/*"
                            {...register("imgLanche")}
                        />

                        <input className=" border-[1px] border-gay-300 rounded-md py-1 text-center"
                            type="text"
                            name="nomeLanche"
                            id="nomeLanche"
                            required
                            placeholder="Nome do Lanche"
                            {...register("nomeLanche")}
                        />
                        <input className=" border-[1px] border-gay-300 rounded-md py-1 text-center"
                            type="text"
                            name="ingredientesLanche"
                            id="ingredientesLanche"
                            required
                            placeholder="Ingredientes do Lanche"
                            {...register("ingredientesLanche")}
                        />
                        <input className=" border-[1px] border-gay-300 rounded-md py-1 text-center"
                            type="text"
                            name="precoLanche"
                            id="precoLanche"
                            required
                            placeholder="Preço do Lanche"
                            {...register("precoLanche")}
                        />
                        <input className=" border-[1px] border-gay-300 rounded-md py-1 text-center"
                            type="text"
                            name="categoriaLanche"
                            id="categoriaLanche"
                            required
                            placeholder="Categoria do Lanche"
                            {...register("categoriaLanche")}
                        />
                        <button type="submit"
                            className="bg-black text-white py-1 rounded-sm"
                            disabled={createLancheMutation.isLoading}>
                            {createLancheMutation.isLoading ? 'AGUARDE...' : 'Adicionar'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddLanche;