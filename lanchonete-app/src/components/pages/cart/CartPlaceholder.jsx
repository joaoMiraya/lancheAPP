import React from "react";
import { Link } from "react-router-dom";

function CartPlaceholder() {
    return (
        <>
            <h1 className="text-center text-red-400">Seu carrinho está vazio!</h1>
            <div className="bg-gray-300 h-10 px-2 mt-2 min-w-[200px] animate-pulse rounded-sm ">
            </div>
            <div className="bg-gray-300 h-10 px-2 mt-2 min-w-[200px] animate-pulse rounded-sm ">
            </div>
            <div className="bg-gray-300 h-10 px-2 mt-2 min-w-[200px] animate-pulse rounded-sm ">
            </div>
            <div className="flex justify-center mt-8">
                <Link className=" border-[1px] border-gray-300 px-4 py-1 shadow-inner" to={"/menu"}>Faça seu pedido agora!</Link>
            </div>
        </>

    )
}

export default CartPlaceholder;

/* const removeToCart = (item) => {
    // Encontrar o índice do item no estado cartItems
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
        // Criar uma nova cópia do estado cartItems
        const newCartItems = [...cartItems];

        // Remover o item do array de cartItems
        newCartItems.splice(itemIndex, 1);

        // Atualizar o estado cartItems com o novo array
        setCartItems(newCartItems);

    }
}; */