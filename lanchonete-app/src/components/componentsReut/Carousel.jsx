    import React, { useEffect, useState } from "react";

    import axios from "axios";

    import { GiHamburger } from 'react-icons/gi'
    import CarouselItem from "./CarouselItem";


    function Carousel() {
        const [categorias, setCategorias] = useState([]);

        useEffect(() => {
            const fetchCategorias = async () => {
                try {
                    const [lanchesFResponse, lanchesCResponse, lanchesHResponse] = await Promise.all([
                        axios.get("http://localhost:3550/lanches/category/frango"),
                        axios.get("http://localhost:3550/lanches/category/calabresa"),
                        axios.get("http://localhost:3550/lanches/category/hamburguer"),
                    ]);
                    const lanchesF = lanchesFResponse.data.map((lanche) => ({
                        ...lanche,
                        count: 0,
                    }));
                    const lanchesC = lanchesCResponse.data.map((lanche) => ({
                        ...lanche,
                        count: 0,
                    }));
                    const lanchesH = lanchesHResponse.data.map((lanche) => ({
                        ...lanche,
                        count: 0,
                    }));
                    setCategorias([
                        {
                            id: "lanchesF",
                            title: "Lanches de Frango",
                            items: lanchesF,
                        },
                        {
                            id: "lanchesC",
                            title: "Lanches de Calabresa",
                            items: lanchesC,
                        },
                        {
                            id: "lanchesH",
                            title: "Lanches de Hamburguer",
                            items: lanchesH,
                        },
                    ]);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchCategorias();
        }, []);

        

        
        return (

            <div className="container mt-20">
                <div className=" flex w-screen justify-center">
                    <form >
                        <div className="bg-white rounded-md flex h-8 my-2">
                            <input type="text" name="searchLanche" id="searchLanche" className="rounded-lg outline-none ml-2" placeholder="Você já sabe o que pedir?" />
                            <button className="rounded-md bg-gradient-to-br  from-amber-500 to-red-800 px-3 bg-color"> <GiHamburger size={20} className=" text-white" /> </button>
                        </div>
                    </form>
                </div>
                {categorias.map((categoria, index) => (
                    <div className=" " key={index}>
                        <h1 className="w-full bg-gradient-to-br  from-amber-500 to-red-800 text-xl font-large py-1 pl-6 text-white drop-shadow-md">{categoria.title}</h1>
                        <CarouselItem
                            key={categoria.id}
                            title={categoria.title}
                            items={categoria.items}
                        
                        />
                    </div>
                ))}
            </div>
        )
    };


    export default Carousel;



