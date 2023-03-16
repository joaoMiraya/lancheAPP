import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Carousel from "../../componentsReut/Carousel";


function MenuLanches(props) {

    const [lanchesF, setLanchesF] = useState([]);
    const [lanchesC, setLanchesC] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3550/lanches/category/frango')
            .then(LancheFReturn => {
                setLanchesF(LancheFReturn.data.map(lancheF => ({
                    ...lancheF,
                    count: 0,
                })));
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3550/lanches/category/calabresa')
            .then(LancheCReturn => {
                setLanchesC(LancheCReturn.data.map(lancheC => ({
                    ...lancheC,
                    count: 0,
                })));
            })
            .catch(err => console.log(err))
    }, []);




    return (
        <>
            <div className="container ">
                <Carousel title="LanchesF" items={lanchesF} />
                <Carousel title="LanchesC" items={lanchesC} />

            </div>
        </>
    )
};


export default MenuLanches;