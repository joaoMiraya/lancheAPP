import React from "react";

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
        </>

    )
}

export default CartPlaceholder;