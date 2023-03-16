import React from "react";
import lancheImg from '../../../assets/images/hamburguer.png';

import { AiFillMinusCircle } from 'react-icons/ai';

function Cart() {

    return (
        <>
            <div className="container w-screen h-screen flex flex-col items-center justify-center ">

                <div className="flex items-center justify-around gap-4">

                    <div className="flex flex-col items-center p-2 w-3/6 compCartStyle min-w-[200px] h-[300px] rounded-sm">
                        <div className="w-4/5 h-8 compCartStyle flex justify-evelyn items-center relative">
                            <img src={lancheImg} width={30} height={30} alt="" />
                            <p>2x Xfrango</p>
                            < AiFillMinusCircle className=" text-red-600 absolute bottom-5 right-[-6px]" />
                        </div>
                    </div>

                    <div className="flex w-2/5 compCartStyle min-w-[150px] h-[300px] rounded-sm">
                        <h1>as</h1>
                    </div>
                </div>

                <div className="w-4/5 max-w-4/5 min-h-[100px] compCartStyle bg-white  rounded-sm my-2">
                    <h1>    asfa</h1>
                    
                </div>

            </div>
        </>

    )
};


export default Cart;