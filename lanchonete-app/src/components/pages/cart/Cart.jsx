import React, { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";
import CartPlaceholder from "./CartPlaceholder";
import ModalComponent from "./ModalComponent";

import lancheImg from '../../../assets/images/hamburguer.png';
import { AiFillMinusCircle } from 'react-icons/ai';
import { CartContext } from "../../../assets/utils/cartContext";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';



function Cart() {

    const [acrescimos, setAcrescimos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3550/acrescimos')
            .then((acrescimoReturn) => {
                setAcrescimos(acrescimoReturn.data)
            })
    }, [])

    Modal.setAppElement('#root');

    const { cartItems, setCartItems } = useContext(CartContext);
    const requestToCart = localStorage.getItem('requestToCart');
    const requestToCartParse = JSON.parse(requestToCart);

    const removeToCart = (item) => {
        // Encontrar o índice do item no estado cartItems
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (itemIndex !== -1) {
            // Criar uma nova cópia do estado cartItems
            const newCartItems = [...cartItems];

            // Remover o item do array de cartItems
            newCartItems.splice(itemIndex, 1);

            // Atualizar o estado cartItems com o novo array
            setCartItems(newCartItems);

            // Atualizar o localStorage removendo o item pelo ID
            const requestToCart = localStorage.getItem('requestToCart');
            const requestToString = JSON.parse(requestToCart);
            const updatedCartItems = requestToString.splice(itemIndex, 1);
            localStorage.setItem('requestToCart', JSON.stringify(updatedCartItems));
        }
    };


    /* MODAL FUNCTION */
    const [modalIsOpen, setIsOpen] = useState(false);
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    function handleCloseModal() {
        if (modalIsOpen === true) {
            setIsOpen(false);
        }
    }
    function handleOpenModal() {
        if (modalIsOpen === false) {
            setIsOpen(true);
        }
    }

    return (
        <>

            <div className="container w-screen h-screen flex flex-col items-center justify-center ">

                <div className="bg-white py-2 px-4 rounded-md overflow-x-scroll h-[350px]">
                    <h1 className="text-3xl font-semibold text-center text-gray-500">Seu Carrinho</h1>
                    {cartItems <= 0 ? <CartPlaceholder /> : ' '}
                    {cartItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className=" px-2 mt-2 h-10 min-w-[200px]  shadowItems  rounded-t-xl rounded-r-xl flex justify-evelyn items-center relative"

                            >
                                <div className=" flex items-center justify-evenly w-full" onClick={handleOpenModal}>
                                    <img src={lancheImg} width={30} height={30} alt={item.nome} />
                                    {item.nome}
                                    <div className="flex items-center ">
                                        {item.preco}
                                    </div>
                                </div>
                                < AiFillMinusCircle onClick={() => removeToCart(item)} className=" text-red-600 absolute bottom-7 right-[-6px]" />
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={handleOpenModal}
                                    contentLabel="Cart Modal"
                                    style={{
                                        overlay: {
                                            backgroundColor: "rgba(000, 000, 000, 0.5)"
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
                                    <div>
                                        <ModalComponent
                                            item={item}
                                            handleCloseModal={handleCloseModal}
                                            setAcrescimos={setAcrescimos}
                                            acrescimos={acrescimos}
                                        />
                                    </div>
                                </Modal>
                            </div>
                        )
                    })}
                </div>



            </div >
        </>

    )
};


export default Cart;