import React from "react";

function MensagemHomeLogged() {
    return (
        <div className="flex flex-col items-center mb-6">
            <h1 className="text-xl font-semibold text-center  my-6">
                Gostaria de nos enviar uma <br />
                mensagem ou sugestão?
            </h1>
            <form>
                <div className="flex flex-col gap-2">
                    <input className="rounded-md pl-2 drop-shadow-3xl outline-none" type="text" name="nomeMensagem" id="nomeMensagem" placeholder="Digite seu nome" />
                    <input className="rounded-md pl-2 drop-shadow-3xl outline-none" type="text" name="emailMensagem" id="emailMensagem" placeholder="Digite seu email" />
                    <textarea className="rounded-md pl-2 drop-shadow-3xl outline-none" name="mensagem" id="mensagem" cols="10" rows="3" placeholder="Digite sua mensagem"></textarea>
                </div>
            </form>
        </div>
    )
}

export default MensagemHomeLogged;