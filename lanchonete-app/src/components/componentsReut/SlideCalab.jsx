import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';



function SlideCalab(props) {
/* 
    const [lanches, setLanches] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3550/lanches/')
            .then(LancheReturn => {
                setLanches(LancheReturn.data)
            })
            .catch(err => console.log(err))
    }, []);


    const [lancheCount, setLancheCount] = useState(0);


    function handlePlusLanche() {
        setLancheCount(prevCount => prevCount + 1);
    }
    function handleMinusLanche() {
        setLancheCount(prevCount => Math.max(prevCount - 1, 0));
    } */


    return (
        <>

          {/*   <div className="container flex justify-center mt-20">

                {lanches.map((lanche) => {
                    return (
                        <div key={lanche.id} className=" p-2 flex  flex-col  justify-center items-center h-56 max-w-[150px]
                         min-w-[150px] perspective bg-white rounded-md drop-shadow-md group"
                        >

                            <div className="text-center   preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-500">
                                <div className=" absolute backface-hidden w-full h-full ">
                                    <h1 className="text-gray-600">{lanche.nome}</h1>
                                    <img className="w-full h-full" src={lancheImg} width={150} height={150} alt="Lanche" />
                                </div>
                                <div className="  my-rotate-y-180 backface-hidden w-full h-full bg-white">
                                    <div className="text-center flex flex-col items-center h-full justify-center">
                                        <p className="text-xs ">{lanche.ingredientes}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <input type="text" className="w-8 h-4 bg-black" />
                            </div>
                            <div className="flex items-center gap-4 mt-6 ">
                                <AiOutlineMinusCircle onClick={handleMinusLanche} size={22} className="text-red-600" />
                                <input className="w-12 border-b-4 text-center outline-none"
                                    type="text"
                                    value={lancheCount}
                                    readOnly
                                />
                                <AiOutlinePlusCircle onClick={handlePlusLanche} size={22} className="text-green-600" />
                            </div>

                        </div>
                    )
                })}

            </div> */}

        </>
    )
};


export default SlideCalab;