import React, { useEffect, useState } from "react";
import axios from "axios";

function Bebidas() {
    const [bebidas, setBebidas] = useState([]);

 /*    useEffect(() => {
        axios.get('http://localhost:3550/bebidas')
            .then(bebidasReturn => {
                setBebidas(bebidasReturn.data)
            })
    }, []); */
    
    return (
        <>
            <div className="flex">
                <select name="bebidas" id="bebidas" className="bg-transparent py-2 text-xl w-full outline-none">
                    <option value="0" defaultChecked>Bebidas</option>
                    {bebidas.map((bebida) => {
                        return (
                            <option value={bebida.nome} key={bebida.id}>{bebida.nome + ' ' + bebida.preco + ',00'}</option>
                          
                        )
                    })}
                </select>
            </div>
        </>
    )
}
export default Bebidas;