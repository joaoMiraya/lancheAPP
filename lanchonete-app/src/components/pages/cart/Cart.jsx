import React, { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";
import CartPlaceholder from "./CartPlaceholder";

import lancheImg from '../../../assets/images/hamburguer.png';

import { AiFillMinusCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

import { CartContext } from "../../../assets/utils/cartContext";



function Cart() {

    const { cartItems, setCartItems } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    /* CONSULTA API ACRESCIMOS */
    const [acrescimos, setAcrescimos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3550/acrescimos')
            .then((acrescimoReturn) => {
                setAcrescimos(acrescimoReturn.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    useEffect(() => {
        let newTotal = 0;
        cartItems.forEach((item) => {
            newTotal += Number.parseFloat(item.preco);
        });
        setTotal(newTotal);
    }, [cartItems]);


    const handleShowAcr = (ref) => {
        ref.current.classList.toggle('hidden')
    };

    function removeFromCart(item) {
        setCartItems(prevCartItems => prevCartItems.filter((cartItem) => cartItem !== item));
    };

    return (
        <>

            <div className="container w-screen h-screen flex flex-col items-center justify-center ">

                <div className="bg-white flex flex-col justify-between py-2 px-4 rounded-md  h-[350px] shadow-xl">
                    <h1 className="text-3xl font-semibold text-center text-gray-500">Seu Carrinho</h1>
                    <div className="overflow-y-scroll h-full">
                        {cartItems.length <= 0 ? <CartPlaceholder /> : ' '}
                        {cartItems.map((item, index) => {
                            const key = `${item.id}-${index}`
                            const itemRef = useRef();
                            return (
                                <div key={key}>
                                    <ul>
                                        <li>
                                            <div className="flex flex-col p-2 shadow-inner border-[1px] border-gray-300 mt-2 rounded-md">
                                                <div onClick={() => handleShowAcr(itemRef)} className="relative mx-2 whitespace-nowrap flex items-center justify-between gap-4">
                                                    <img src={lancheImg} alt={item.nome} className="w-12 h-12 " />
                                                    <h2 className="font-semibold w-26 overflow-hidden">{item.nome}</h2>
                                                    <p className="mr-4">R$ {item.preco}</p>
                                                    <AiFillMinusCircle
                                                        color="#Ff6347"
                                                        size={20}
                                                        className="absolute top-[-5px] right-0"
                                                        onClick={() => removeFromCart(item)}
                                                    />
                                                </div>
                                                <div ref={itemRef} className="hidden">
                                                    <div className="flex justify-center flex-wrap gap-2 relative">
                                                        {acrescimos.map((acrescimo) => {
                                                            return (
                                                                <div key={acrescimo.id}>
                                                                    <ul>
                                                                        <li className="flex items-center border-[1px] border-gray-300 px-2 shadow-inner rounded-md">+ {acrescimo.nome}</li>
                                                                    </ul>
                                                                </div>
                                                            )
                                                        })}
                                                        <FiEdit size={25} className="absolute top-1/2 right-0" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                    <div className={cartItems <= 0 ? 'hidden' : `flex py-4 justify-between`} >
                        <button className=" px-4 py-1 border-[1px] font-semibold shadow-inner border-gray-300">CONFIRMAR</button>
                        <h1 className="text-xl">Total: {total.toFixed(2)}</h1>
                    </div>
                </div>



            </div >
        </>

    )
};


export default Cart;