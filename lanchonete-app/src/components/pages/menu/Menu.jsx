import React from "react";
import { useRef } from "react";

let lanches = [

    {
        id: 1,
        nome: 'xfrango',
        preco: 15,
        ingredientes: 'pão, queijo, frango, batata-palha'
    },

    {
        id: 2,
        nome: ' xburguer',
        preco: 15,
        ingredientes: 'pão, queijo, hamburguer, batata-palha'
    },

    {
        id: 3,
        nome: 'xbacon',
        preco: 15,
        ingredientes: 'pão, queijo, bacon, batata-palha'
    },
]



function Menu() {

    const LanchesRef = useRef();
    const LancheContainerRef = useRef();

    const PizzasRef = useRef();
    const PizzaContainerRef = useRef();

    const PorcoesRef = useRef();
    const PorcaoContainerRef = useRef();

    function handleOpenLanches() {
        LancheContainerRef.current.classList.toggle('hidden');
        PorcaoContainerRef.current.classList.add('hidden');
        PizzaContainerRef.current.classList.add('hidden');

    }
    function handleOpenPizzas() {
        PizzaContainerRef.current.classList.toggle('hidden');
        LancheContainerRef.current.classList.add('hidden');
        PorcaoContainerRef.current.classList.add('hidden');
    }
    function handleOpenPorcoes() {
        PorcaoContainerRef.current.classList.toggle('hidden');
        PizzaContainerRef.current.classList.add('hidden');
    }

    return (
        <body className=" bg-gradient-to-br  from-amber-500 to-red-800 pb-14">
            <div className="container flex  w-full h-screen">

                <div className="container mt-20 flex flex-col items-center">
                    <div onClick={handleOpenLanches}
                        ref={LanchesRef}
                        className="w-4/5 h-16 bg-white mt-6 rounded-xl border-solid border-2 border-gray-200 "
                    >
                    </div>
                    <div ref={LancheContainerRef} className="hidden">
                        {lanches.map((lanche, id) =>
                            <div key={id}

                                className="w-4/5 h-16 bg-white mt-2 rounded-xl border-solid border-2 border-gray-200 "
                            >
                                <h2 className="text-black">{lanche.preco}</h2>
                                <h2 className="text-black">{lanche.ingredientes}</h2>
                            </div>
                        )}
                    </div>

                    <div onClick={handleOpenPizzas}
                        ref={PizzasRef}
                        className="w-4/5 h-16 bg-white mt-6 rounded-xl border-solid border-2 border-gray-200 "
                    >
                    </div>
                    <div ref={PizzaContainerRef} className="hidden">
                        {lanches.map((lanche, id) =>
                            <div key={id}

                                className="w-4/5 h-16 bg-white mt-2 rounded-xl border-solid border-2 border-gray-200 "
                            >
                                <h2 className="text-black">{lanche.preco}</h2>
                                <h2 className="text-black">{lanche.ingredientes}</h2>
                            </div>
                        )}
                    </div>

                    <div onClick={handleOpenPorcoes}
                        ref={PorcoesRef}
                        className="w-4/5 h-16 bg-white mt-6 rounded-xl border-solid border-2 border-gray-200 "
                    >
                    </div>

                    <div ref={PorcaoContainerRef} className="hidden">
                        {lanches.map((lanche, id) =>
                            <div key={id}

                                className="w-4/5 h-16 bg-white mt-2 rounded-xl border-solid border-2 border-gray-200 "
                            >
                                <h2 className="text-black">{lanche.preco}</h2>
                                <h2 className="text-black">{lanche.ingredientes}</h2>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </body>
    )
};


export default Menu;