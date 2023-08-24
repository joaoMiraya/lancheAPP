import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../auth/firebase";

function Login({ ChangeComp }) {

    const auth = getAuth(app);

    const navigate = useNavigate();

    const manterAcessoRef = useRef();
    const [passErr, setPassErr] = useState(false);
    const [password, setPassword] = useState([]);
    const [email, setEmail] = useState([]);
    const [emailErr, setEmailErr] = useState(false);

    const validate = (e) => {
        e.preventDefault();
        // Caso todos os campos sejam válidos, realiza a autenticação
        signInWithEmailAndPassword(getAuth(), email, password)
            .then(() => {
                // Autenticação bem-sucedida, redireciona para a próxima página
                if (manterAcessoRef.current.checked) {
                    localStorage.setItem('user', JSON.stringify(data.userSession))
                } else {
                    sessionStorage.setItem('user', JSON.stringify(data.userSession))
                }
                navigate('/menu');
            })
            .catch((error) => {
                // Houve um erro na autenticação, pode exibir uma mensagem de erro, por exemplo
                console.error('Erro de autenticação:', error);
                setPassErr('Email ou senha inválidos!')
            });
    };


    return (
        <div className="w-72 px-2 min-h-60 bg-gray-200 absolute top-1/3 rounded-md opacity-80  ">
            <div className="opacity-100 text-2xl text-center p-2">
                <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-red-800">Faça seu Login</h1>
                <form onSubmit={validate} >
                    <input
                        type="email"
                        className={`w-full mt-2 outline-none rounded-md drop-shadow-xl ${emailErr ? 'border-red-500' : ''}`}
                        name="emailToLogin"
                        placeholder="Seu Email"
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailErr && <p className="text-red-500 text-sm">E-mail inválido</p>}

                    <input
                        type="password"
                        className={`w-full mt-2 outline-none rounded-md drop-shadow-xl ${passErr ? 'border-red-500' : ''}`}
                        name="passwordToLogin"
                        placeholder="Sua senha"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passErr && <p className="text-red-500 text-sm">Email ou senha inválidos</p>}

                    <div className="text-sm flex items-baseline mt-2 gap-2">
                        <input ref={manterAcessoRef} type="checkbox" name="manterAcesso" />
                        <label htmlFor="manterAcesso">Deseja manter o acesso?</label>
                    </div>
                    <div className="flex flex-col justify-around m-2 text-sm text-red-400">
                        <p>Esqueci minha senha!</p>
                    </div>
                    <button type="submit" className="text-md text-white bg-black w-full rounded-md ">
                        ENTRAR
                    </button>
                </form>
                <p onClick={ChangeComp} className="mt-2 text-sm text-red-400">Ainda não fez cadastro? Crie sua conta!</p>
            </div>
        </div>
    )
}

export default Login;