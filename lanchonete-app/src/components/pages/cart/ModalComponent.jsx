import React, { useRef, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';



function ModalComponent({ item, handleCloseModal, acrescimos }) {

    const { register, handleSubmit, watch } = useForm();

    const formIngredientesRef = useRef();
    const formAcrescimosRef = useRef();
    let ingredientes = item.ingredientes;
    let ingredienteSplit = ingredientes.split(", ")




    const acrescimosBox = useRef();
    function handleShowAcrescimos() {
        acrescimosBox.current.classList.toggle('hidden')
    }
    const [acrescimoCheked, setAcrescimoChecked] = useState([]);

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data)
        axios.get(`http://localhost:3550/acrescimos/${data}`)/* TROCAR POR SECRET_KEY */
            .then(acrescimoReturn => {
                setAcrescimoChecked(acrescimoReturn.data)
            })
        console.log(acrescimoCheked)
    }


    return (

        <div className="min-w-[150px] relative">
            <AiOutlineCloseCircle size={25} onClick={handleCloseModal} className="absolute top-[-15px] left-[90%]" />
            <h1 className="text-xl text-center font-bold">{item.nome}</h1>
            <form ref={formIngredientesRef}>
                {ingredienteSplit.map((ingrediente) => {
                    return (
                        <div key={ingrediente} className="flex flex-col">

                            <label htmlFor="ingredienteInput">
                                <input name="ingredienteInput"
                                    type="checkbox"
                                    value={ingrediente}
                                    className="mr-2"
                                    defaultChecked
                                />
                                {ingrediente}
                            </label>
                        </div>
                    )
                })}
            </form>
            <div className="flex flex-col">
                <div className="flex items-center my-4 justify-center gap-2 text-white py-1 rounded-md bg-gradient-to-tr from-amber-500 to-red-800" onClick={handleShowAcrescimos}>
                    <p className="font-semibold">Acrescimos</p><BsFillArrowDownCircleFill size={20} className="" />
                </div>
                <div ref={acrescimosBox} className="hidden">
                    <form onSubmit={handleSubmit(onSubmit)} ref={formAcrescimosRef} >
                        {acrescimos.map((acrescimo) => {
                            return (
                                <div key={acrescimo.id} >

                                    <label htmlFor={`acrescimosInput-${acrescimo.nome}`} className="flex items-center gap-2">
                                        <input
                                            id={`acrescimosInput-${acrescimo.nome}`}
                                            name={`acrescimosInput-${acrescimo.nome}`}
                                            value={acrescimo.id}
                                            type="checkbox"
                                            {...register(`acrescimosInput-${acrescimo.nome}`)}
                                        />
                                        {acrescimo.nome}
                                        <p className="text-red-700 text-end w-full">R$ {acrescimo.preco}</p>
                                    </label>
                                </div>
                            )
                        })}
                        <div className="w-full flex justify-center mt-2">
                            <button type="submit" className="bg-gradient-to-tr from-amber-500 to-red-800 text-white font-semibold py-1 rounded-md w-full ">Confirmar</button>
                        </div>
                    </form>
                </div>
            </div>

        </div >

    )
}

export default ModalComponent;