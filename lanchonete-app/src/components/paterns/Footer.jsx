import React from "react";


function Footer() {
    return (
        <footer className=" h-[100px] bg-gradient-to-br from-amber-500 to-red-800 relative bottom-0">
            <div className="flex flex-col h-full items-center p-2">
                <div className="text-white h-full text-center">
                    <p className=" text-xs">Gostaria de falar com algum atendente?</p>
                    <p>(xx) xxxxx-xxxx </p>
                    <p>(xx) xxxx-xxxx </p>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;