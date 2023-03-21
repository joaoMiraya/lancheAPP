import React from "react";


function Cadastro() {
    return (

        <>
            <div className="container bg-[#1C1C1C] flex h-screen items-center justify-center">
                <form action="#">
                    <div className=" w-80 z-40 bg-gray-200 flex flex-col  p-6 gap-2 rounded-md text-center">
                        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-red-800 font-bold">Faça seu cadastro!</h1>

                        <input type="text" name="nomeCadastro" className="bg-transparent border-b-2 border-amber-500 " placeholder="Seu nome" />
                        <input type="text" name="sobrenomeCadastro" className="bg-transparent border-b-2 border-amber-500 " placeholder="Seu sobrenome" />

                        <input type="email" name="emailCadastro" className="bg-transparent border-b-2 border-amber-700 " placeholder="Seu email" />
                        <input type="email" name="confirmEmailCadastro" className="bg-transparent border-b-2 border-amber-700 " placeholder="Confirme seu email" />

                        <input type="password" name="passwordCadastro" placeholder="Sua senha" className="bg-transparent border-b-2 border-red-800  " />
                        <input type="password" name="confirmPassword" placeholder="Confirme sua senha" className="bg-transparent border-b-2 border-red-800  " />
                      
                        <button type="submit" className="py-1 mt-4 bg-black rounded-sm font-bold tracking-wide text-white">CADASTRAR</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro;