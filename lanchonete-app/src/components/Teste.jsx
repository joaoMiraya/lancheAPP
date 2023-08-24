import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from "../auth/firebase";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import imgLanche from '../assets/images/hamburguer.png';

function Teste() {

    /* METODO GET/EXIBIÇÃO DE DADOS SALVOS NO FIRESTORE */
    const db = getFirestore(app);
    const userCollectionRef = collection(db, "usuarios")

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getUsers();
    }, []);

    return (
        <>
            <div className="flex h-screen items-center justify-center flex-wrap">
                <div className="rounded-xl bg-white border-gray-400 border-b-[1px] border-r-[1px] shadow-2xl p-2 text-center flex flex-col justify-center items-center flex-wrap max-w-[250px]">
                    <h2 className="font-bold text-xl">X-calabresa</h2>
                    <img width={120} height={120} src={imgLanche} alt="lanche" />
                    <p className="text-sm ">Pão, hamburguer, calabresa, queijo e batata-palha</p>
                    <div className="flex w-full justify-between ">
                        <div className="flex flex-col gap-2 p-2 text-white ">
                            <button className="bg-green-600 px-4 py-1 rounded-md"><AiOutlinePlusCircle size={25} /></button>
                            <button className="bg-red-600 px-4 py-1 rounded-md"><AiOutlineMinusCircle size={25} /></button>
                        </div>

                        <div className="flex flex-col justify-evenly items-baseline">
                        <p >QTD: 1</p>
                        <p>TOTAL: 15,00</p>
                        </div>
                    </div>
                </div>


            </div >
        </>
    )

}
export default Teste;