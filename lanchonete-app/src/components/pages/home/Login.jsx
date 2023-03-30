import React from "react";
import { Link } from "react-router-dom";

function Login({ ChangeComp }) {
    return (
        <div className="w-72 px-2 h-60 bg-gray-200 absolute top-1/3 rounded-md opacity-80  ">
            <div className="opacity-100 text-2xl text-center p-2">
                <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-red-800">Faça seu Login</h1>
                <form action="">
                    <input type="email" className="w-full mt-2 outline-none rounded-md drop-shadow-xl" name="emailToLogin" placeholder="Seu Email" />
                    <input type="password" className="w-full mt-2 outline-none rounded-md drop-shadow-xl" name="passwordToLogin" placeholder="Sua senha" />
                    <div className="flex flex-col justify-around m-2 text-sm text-red-400">
                        <p>Esqueci minha senha!</p>
                    </div>
                    <button className="text-md text-white bg-black w-full rounded-md">ENTRAR</button>
                </form>
                <Link onClick={ChangeComp}> <p className="mt-2 text-sm text-red-400">Ainda não fez cadastro? Crie sua conta!</p></Link>
            </div>
        </div>
    )
}

export default Login;