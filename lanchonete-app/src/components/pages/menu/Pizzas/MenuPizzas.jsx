import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import SizePizzas from "./SizePizzas";
import pizzaImg from '../../../../assets/images/pizzaCarousel.jpg';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsOctagonHalf } from 'react-icons/bs';

function MenuPizzas() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3550/pizzas')
            .then(pizzasReturn => {
                setPizzas(pizzasReturn.data)
            })
    }, [])

    const [howFlavor, setHowFlavor] = useState(false);
    const [pizzaSize, setPizzaSize] = useState(false);

    function HowFlavorFunction() {
        if (howFlavor === false) {
            setHowFlavor(true)
        } else {
            setHowFlavor(false)
        }
    }

    function PizzaSizeFunction() {
        if (pizzaSize === false) {
            setPizzaSize(true)
        } else {
            setPizzaSize(false)
        }
    }

    const [selectFlavor, setSelectFlavor] = useState(0);


    function SelectFlavor() {
        console.log('click')
        if (selectFlavor === 0) {
            setSelectFlavor(selectFlavor + 1)
        } else if (selectFlavor === 1) {
            setSelectFlavor(selectFlavor - 1)
            alert('Pedido no carrinho')
        } 
    }

    return (

        <div className="container flex flex-col items-center h-screen">

            <SizePizzas
                HowFlavorFunction={HowFlavorFunction}
                howFlavor={howFlavor}
                PizzaSizeFunction={PizzaSizeFunction}
                pizzaSize={pizzaSize}
            />

            <div className="flex flex-col mt-6 w-full ">
               { !howFlavor ? <h1 className="text-3xl text-center">Selecione o sabor</h1> : <h1 className="text-3xl text-center">Selecione o {selectFlavor != 0 ? '2°' : '1°'} sabor</h1> }
           
                <div className="flex justify-end whitespace-nowrap pr-2 text-red-500">
                    <p>A partir de {pizzaSize ? 'R$15,00' : 'R$45,00'}</p>
                </div>
                {pizzas.map((pizza) => {
                    return (
                        <div key={pizza.id} className="p-2 mt-2 bg-white">
                            <div className="flex items-center justify-evenly gap-2 ">
                                <img className="w-10 h-10" src={pizzaImg} alt={pizza.nome} />
                                <div className="w-3/5">
                                    <h1 className="font-semibold">{pizza.nome}</h1>
                                    <p className="text-sm">{pizza.ingredientes}</p>
                                </div>
                                <div className="flex flex-col h-full items-end ">
                                    <p className="font-semibold">R${pizzaSize ? pizza.preco_p : pizza.preco}</p>
                                    {howFlavor ? <button className={`${selectFlavor === 1 ? 'rotate-180 text-red-500' : ''}`} onClick={SelectFlavor}><BsOctagonHalf size={25} /></button> : < AiOutlineShoppingCart size={25} />}
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default MenuPizzas;