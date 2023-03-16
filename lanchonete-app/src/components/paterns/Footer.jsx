import React from "react";


function Footer() {
    return (
        <footer className=" h-[100px] bg-gradient-to-br from-amber-500 to-red-800 relative bottom-0">
            <div className="flex h-full items-center p-2">
                <div className="text-white h-full text-center">
                    <p className=" text-xs">Gostaria de falar com algum atendente?</p>
                    <p>(xx) xxxxx-xxxx </p>
                    <p>(xx) xxxx-xxxx </p>
                </div>
                <div className="w-[150px] h-[90px] ">
                    <iframe className="w-full h-full object-none rounded-xl z-40" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.1305659207346!2d-51.47671235002216!3d-22.08283011446709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f1aa934203e5%3A0x1eef6240301509f3!2s%C3%81lvares%20Machado%20T%C3%AAnis%20Clube!5e0!3m2!1spt-BR!2sbr!4v1678890865162!5m2!1spt-BR!2sbr"
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    )
}

export default Footer;