import React from "react";


function Cadastro({ ChangeComp }) {
    return (

        <div className=" w-80 z-0 bg-gray-200 flex opacity-70 flex-col absolute py-4 top-1/3 rounded-md text-center">
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-red-800 font-bold">Faça seu cadastro!</h1>

            <form className="w-full" action="#">
                <input type="text" className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl" name="emailToLogin" placeholder="Seu nome" />
                <input type="text" className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl" name="passwordToLogin" placeholder="Seu sobrenome" />

                <input type="email" className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl" name="emailToLogin" placeholder="Seu Email" />
                <input type="email" className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl" name="passwordToLogin" placeholder="Confirme seu Email" />
              
                <input type="password" className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl" name="emailToLogin" placeholder="Sua senha" />
                <input type="password" className="w-4/5 h-8 pl-2 mt-2 outline-none rounded-md drop-shadow-xl" name="passwordToLogin" placeholder="Confirme sua senha" />

                <button type="submit" className="py-1 mt-4 bg-black rounded-sm font-bold w-4/5 tracking-wide text-white">CADASTRAR</button>
            </form>
            <p className="mt-2 text-red-400" onClick={ChangeComp}>Já possui conta? Faça seu Login</p>
        </div>


    )
}

export default Cadastro;